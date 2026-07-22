#!/usr/bin/env python3
import hashlib
import json
import os
import re
import subprocess
import sys
import tempfile
import time
import unicodedata
import zipfile
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List

import requests


@dataclass
class UploadGroup:
    key: str
    zip_path: Path
    folder: str
    renames: Dict[str, str]
    purpose: str


def slugify(value: str) -> str:
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    value = value.lower().replace('&', ' and ')
    value = re.sub(r'[^a-z0-9]+', '-', value)
    value = re.sub(r'-+', '-', value).strip('-')
    return value


def sign_params(params: Dict[str, str], api_secret: str) -> str:
    base = '&'.join(f'{key}={params[key]}' for key in sorted(params))
    return hashlib.sha1(f'{base}{api_secret}'.encode('utf-8')).hexdigest()


def normalize_upload_file(file_path: Path) -> Path:
    if file_path.suffix.lower() not in {'.heic', '.heif'}:
        return file_path

    converted = file_path.with_suffix('.jpg')
    subprocess.run(['sips', '-s', 'format', 'jpeg', str(file_path), '--out', str(converted)], check=True, capture_output=True)
    return converted


def upload_file(cloud_name: str, api_key: str, api_secret: str, file_path: Path, folder: str, public_name: str) -> Dict:
    normalized_file = normalize_upload_file(file_path)
    url = f'https://api.cloudinary.com/v1_1/{cloud_name}/image/upload'
    last_error = None

    for attempt in range(1, 4):
        timestamp = str(int(time.time()))
        params = {
            'folder': folder,
            'overwrite': 'true',
            'public_id': public_name,
            'timestamp': timestamp,
        }
        signature = sign_params(params, api_secret)

        with normalized_file.open('rb') as fh:
            response = requests.post(
                url,
                data={**params, 'api_key': api_key, 'signature': signature},
                files={'file': (normalized_file.name, fh)},
                timeout=120,
            )

        if response.status_code < 300:
            payload = response.json()
            return {
                'source_file': file_path.name,
                'uploaded_file': normalized_file.name,
                'folder': folder,
                'public_id': payload.get('public_id'),
                'version': payload.get('version'),
                'format': payload.get('format'),
                'width': payload.get('width'),
                'height': payload.get('height'),
                'bytes': payload.get('bytes'),
                'secure_url': payload.get('secure_url'),
            }

        last_error = f"Upload failed for {file_path.name}: {response.status_code} {response.text}"
        if response.status_code in {429, 500, 502, 503, 504} and attempt < 3:
            time.sleep(2 * attempt)
            continue
        raise RuntimeError(last_error)

    raise RuntimeError(last_error or f'Upload failed for {file_path.name}')


def main() -> int:
    cloud_name = os.environ.get('CLOUDINARY_CLOUD_NAME')
    api_key = os.environ.get('CLOUDINARY_API_KEY')
    api_secret = os.environ.get('CLOUDINARY_API_SECRET')

    if not all([cloud_name, api_key, api_secret]):
        print('Missing CLOUDINARY_CLOUD_NAME / CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET', file=sys.stderr)
        return 1

    downloads = Path('/Users/juanarias/Downloads')
    groups: List[UploadGroup] = [
        UploadGroup(
            key='cupcakes',
            zip_path=downloads / 'cupcakes.zip',
            folder='deliciasbakery/web/productos/cupcakes-personalizados',
            purpose='Carrusel e imágenes extra para el producto Cupcakes personalizados',
            renames={
                'cupcakes_01.heic': 'cupcakes-01',
                'cupcakes_02.HEIC': 'cupcakes-02',
                'cupcakes_03.heic': 'cupcakes-03',
                'cupcakes_04.JPG': 'cupcakes-04',
                'cupcakes_05.heic': 'cupcakes-05',
                'cupcakes_06.heic': 'cupcakes-06',
            },
        ),
        UploadGroup(
            key='trufas',
            zip_path=downloads / 'Carrusel para trufas.zip',
            folder='deliciasbakery/web/productos/trufas',
            purpose='Carrusel adicional para el producto Trufas',
            renames={
                'Trufas_01.heic': 'trufas-01',
                'Trufas_02.heic': 'trufas-02',
            },
        ),
        UploadGroup(
            key='galletas',
            zip_path=downloads / 'galletas.zip',
            folder='deliciasbakery/web/productos/galletas',
            purpose='Carrusel y recursos para la familia de galletas',
            renames={
                'galletas.heic': 'galletas-portada',
                'galletas_01.heic': 'galletas-01',
                'galletas_02.HEIC': 'galletas-02',
                'galletas_03.heic': 'galletas-03',
                'galletas_04.HEIC': 'galletas-04',
                'galletas_05.heic': 'galletas-05',
                'galletas_06.heic': 'galletas-06',
            },
        ),
        UploadGroup(
            key='desayunos',
            zip_path=downloads / 'Desayunos.zip',
            folder='deliciasbakery/web/categorias/desayunos',
            purpose='Portada y carrusel para categoría/sección Desayunos',
            renames={
                'Desayunos.PNG': 'desayunos-portada',
                'desayunos_01.JPG': 'desayunos-01',
                'desayunos_02.JPG': 'desayunos-02',
            },
        ),
        UploadGroup(
            key='eventos-catering',
            zip_path=downloads / 'Eventos & catering.zip',
            folder='deliciasbakery/web/categorias/celebraciones/eventos-catering',
            purpose='Carrusel para subcategoría Eventos & catering',
            renames={},
        ),
        UploadGroup(
            key='fechas-especiales',
            zip_path=downloads / 'fechas especiales.zip',
            folder='deliciasbakery/web/categorias/celebraciones/fechas-especiales',
            purpose='Portada y carrusel para subcategoría Fechas especiales',
            renames={
                'fechas especiales.JPG': 'fechas-especiales-portada',
            },
        ),
        UploadGroup(
            key='navidad',
            zip_path=downloads / 'navidad.zip',
            folder='deliciasbakery/web/categorias/celebraciones/navidad',
            purpose='Carrusel para subcategoría Navidad',
            renames={
                'navidad_03.HEIC': 'navidad-03-heic',
                'navidad_03.jpg': 'navidad-03-jpg',
                'navidad_04.heic': 'navidad-04-heic',
                'navidad_04.jpg': 'navidad-04-jpg',
            },
        ),
    ]

    manifest = {
        'cloud_name': cloud_name,
        'generated_at': __import__('datetime').datetime.utcnow().isoformat() + 'Z',
        'groups': {},
    }

    with tempfile.TemporaryDirectory(prefix='cld-upload-') as tmp_dir:
        tmp_root = Path(tmp_dir)
        for group in groups:
            if not group.zip_path.exists():
                raise FileNotFoundError(f'Missing zip: {group.zip_path}')

            results = []
            with zipfile.ZipFile(group.zip_path) as zf:
                members = [m for m in zf.namelist() if not m.endswith('/') and '__MACOSX/' not in m]
                for member in sorted(members):
                    raw_name = Path(member).name
                    stem = Path(raw_name).stem
                    public_name = group.renames.get(raw_name, slugify(stem))
                    extracted_path = tmp_root / raw_name
                    with zf.open(member) as src, extracted_path.open('wb') as dst:
                        dst.write(src.read())
                    upload_info = upload_file(cloud_name, api_key, api_secret, extracted_path, group.folder, public_name)
                    results.append(upload_info)
                    print(f"uploaded {raw_name} -> {upload_info['public_id']}")

            manifest['groups'][group.key] = {
                'zip_path': str(group.zip_path),
                'folder': group.folder,
                'purpose': group.purpose,
                'assets': results,
            }

    out_path = Path('docs/cloudinary-assets-2026-07.json')
    out_path.write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding='utf-8')
    print(f'Wrote manifest to {out_path}')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
