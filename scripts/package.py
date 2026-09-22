from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
R=Path(__file__).resolve().parents[1]
archive=R.parent/'attio-landing-analysis.zip'
with ZipFile(archive,'w',ZIP_DEFLATED,compresslevel=6) as z:
    for p in sorted(R.rglob('*')):
        if p.is_file() and not any(x in p.parts for x in ['__pycache__','.DS_Store','.git','node_modules']) and p.name!='contact-sheet.jpg':
            z.write(p,Path(R.name)/p.relative_to(R))
print(f'{archive}: {archive.stat().st_size / 1000000:.1f} MB')
