"""Local Attio homepage. Python 3.10+, no packages or network proxy required."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit, unquote, parse_qs
import argparse, json, mimetypes

ROOT = Path(__file__).resolve().parent
DIST = ROOT / 'dist'
mimetypes.add_type('text/javascript', '.js')
mimetypes.add_type('font/woff2', '.woff2')

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIST), **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        self.send_header('Content-Security-Policy', "default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self' blob:; media-src 'self' blob:; frame-src 'self'; form-action 'none'")
        super().end_headers()

    def respond(self, data, typ, status=200):
        self.send_response(status)
        self.send_header('Content-Type', typ)
        self.send_header('Content-Length', str(len(data)))
        self.end_headers()
        if self.command != 'HEAD':
            try: self.wfile.write(data)
            except (BrokenPipeError, ConnectionResetError): pass

    def do_GET(self):
        u = urlsplit(self.path)
        if u.path == '/download.zip':
            archive = ROOT.parent / 'attio-landing-analysis.zip'
            if archive.is_file():
                return self.respond(archive.read_bytes(), 'application/zip')
        if u.path.startswith(('/monitoring', '/6fc02418cd5ea04e/', '/__services/')):
            return self.respond(b'/* Local snapshot: telemetry disabled. */' if u.path.endswith('.js') else b'{}', 'text/javascript' if u.path.endswith('.js') else 'application/json')
        if u.path == '/api/consent':
            return self.respond(b'{"consent":false}', 'application/json')
        maps = json.loads((ROOT / 'source/asset-map.json').read_text())
        key = 'https://attio.com' + self.path
        asset = maps.get(key)
        if asset:
            return self.respond((DIST / asset['file'].lstrip('/')).read_bytes(), asset['type'])
        if u.path == '/_next/image':
            src = parse_qs(u.query).get('url', [''])[0]
            # Original unoptimized file is the fallback for uncaptured DPR/width variants.
            p = (DIST / unquote(src).lstrip('/')).resolve()
            if p.is_relative_to(DIST) and p.is_file():
                return self.respond(p.read_bytes(), mimetypes.guess_type(str(p))[0] or 'application/octet-stream')
        if '_rsc=' in u.query:
            return self.respond(b'', 'text/x-component', 204)
        if u.path.startswith('/source/'):
            p = (ROOT / unquote(u.path).lstrip('/')).resolve()
            if p.is_relative_to(ROOT / 'source') and p.is_file():
                return self.respond(p.read_bytes(), 'text/plain; charset=utf-8')
        return super().do_GET()

    def do_POST(self):
        u = urlsplit(self.path)
        if u.path == '/monitoring':
            return self.respond(b'', 'application/json', 204)
        if u.path == '/api/consent':
            return self.respond(b'{"localPreview":true,"consent":false}', 'application/json')
        # No lead, login, or other production request is relayed.
        self.respond(b'{"localPreview":true,"submitted":false}', 'application/json', 403)

    do_HEAD = do_GET

    def log_message(self, fmt, *args):
        if len(args) > 1 and str(args[1]) not in ('200', '204', '304'):
            super().log_message(fmt, *args)

if __name__ == '__main__':
    p = argparse.ArgumentParser()
    p.add_argument('--port', type=int, default=8772)
    a = p.parse_args()
    print(f'Attio local: http://127.0.0.1:{a.port}/', flush=True)
    ThreadingHTTPServer(('127.0.0.1', a.port), Handler).serve_forever()
