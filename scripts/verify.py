"""Check the local resource manifest and entry points without third-party packages."""
from pathlib import Path
from urllib.parse import urlsplit, quote
from urllib.request import urlopen
from concurrent.futures import ThreadPoolExecutor
import argparse, json

R=Path(__file__).resolve().parents[1]
p=argparse.ArgumentParser();p.add_argument('--port',type=int,default=8772);args=p.parse_args()
base=f'http://127.0.0.1:{args.port}'
assets=json.loads((R/'source/asset-map.json').read_text())
entries=['/','/report.html','/gallery.html','/readme.html','/source-view.html','/code/','/code/reveal.js','/code/motion-tokens.js','/code/design-tokens.css','/analysis.css','/favicon.ico']
checks=[]
for url,a in assets.items():
    path=R/'dist'/a['file'].lstrip('/')
    if not path.is_file():raise SystemExit(f'Missing file: {path}')
    u=urlsplit(url)
    req=u.path+('?' + u.query if u.query else '') if u.hostname=='attio.com' else a['file']
    checks.append((req,a['type'].split(';')[0]))
checks += [(x,None) for x in entries]
def verify(item):
    path,mime=item
    try:
        with urlopen(base+quote(path,safe='/%?=&:+,'),timeout=10) as response:
            size=len(response.read());typ=response.headers.get_content_type()
            if response.status!=200 or not size:return f'{path}: status {response.status}, {size} bytes'
            if mime and typ!=mime:return f'{path}: MIME {typ}, expected {mime}'
            if not response.headers.get('Content-Security-Policy'):return f'{path}: no CSP'
    except Exception as e:return f'{path}: {e}'
with ThreadPoolExecutor(max_workers=8) as pool:errors=[e for e in pool.map(verify,checks) if e]
result={'checks':len(checks),'errors':errors,'localOnly':True}
(R/'source/resource-verification.json').write_text(json.dumps(result,indent=2))
print(json.dumps(result,indent=2))
raise SystemExit(bool(errors))
