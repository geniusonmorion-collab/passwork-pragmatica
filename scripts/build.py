"""Make the local entry point from the untouched public HTML snapshot."""
from pathlib import Path
import re, json, shutil, runpy
R = Path(__file__).resolve().parents[1]
html = (R / 'source/index.html').read_text()
html = re.sub(r'<link\b[^>]*rel="(?:dns-prefetch|preconnect)"[^>]*>', '', html)
html = html.replace('<head>', '<head><script src="/local-preview.js"></script>', 1)
html = html.replace('https://a.storyblok.com', '/mirror/a.storyblok.com')
(R / 'dist/index.html').write_text(html)
for p in (R / 'source/raw').rglob('*'):
    if p.suffix in ('.js', '.css'):
        target = R / 'dist' / p.relative_to(R / 'source/raw')
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(p.read_text().replace('https://a.storyblok.com', '/mirror/a.storyblok.com'))
print('Built original Attio snapshot')
assets=json.loads((R/'source/asset-map.json').read_text())
for url,asset in assets.items():
    if url.startswith('https://attio.com/favicon.ico'):
        shutil.copyfile(R/'dist'/asset['file'].lstrip('/'),R/'dist/favicon.ico')
        break
if (R / 'source/passwork-assets.json').exists():
    shutil.copyfile(R / 'dist/index.html', R / 'dist/attio-original.html')
    runpy.run_path(str(R / 'scripts/build-passwork.py'), run_name='__main__')
