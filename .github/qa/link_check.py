#!/usr/bin/env python3
"""Static internal link/anchor and asset-reference check for the TERCIO staging site.

Exits non-zero if any internal href/anchor target or referenced asset file is missing.
"""
import re
import os
import sys

ROOT = sys.argv[1] if len(sys.argv) > 1 else "."
PAGES = ["index.html", "urce.html", "gadir.html", "atala.html", "alano.html", "ardid.html", "cid.html", "adarga.html"]

broken = []
missing_assets = []
checked_links = 0
checked_assets = 0

for page in PAGES:
    path = os.path.join(ROOT, page)
    html = open(path, encoding="utf-8").read()

    for m in re.finditer(r'href="([^"]+)"', html):
        href = m.group(1)
        if href.startswith(("http://", "https://", "mailto:", "tel:")):
            continue
        if href.startswith("#"):
            frag = href[1:]
            if frag and f'id="{frag}"' not in html:
                broken.append((page, href, "same-page anchor not found"))
            checked_links += 1
            continue
        target, _, frag = href.partition("#")
        checked_links += 1
        target_path = os.path.join(ROOT, target.split("?")[0])
        if not os.path.isfile(target_path):
            broken.append((page, href, "target file missing"))
        elif frag:
            target_html = open(target_path, encoding="utf-8").read()
            if f'id="{frag}"' not in target_html and f'name="{frag}"' not in target_html:
                broken.append((page, href, f"anchor #{frag} not found in {target}"))

    for m in re.finditer(r'(?:src|href)="(assets/[^"?]+)', html):
        checked_assets += 1
        asset_path = os.path.join(ROOT, m.group(1))
        if not os.path.isfile(asset_path):
            missing_assets.append((page, m.group(1)))

print(f"Pages checked: {len(PAGES)}")
print(f"Internal links/anchors checked: {checked_links}")
print(f"Asset references checked: {checked_assets}")
print(f"Broken links/anchors: {len(broken)}")
for b in broken:
    print("  BROKEN:", b)
print(f"Missing assets: {len(missing_assets)}")
for m in missing_assets:
    print("  MISSING:", m)

if broken or missing_assets:
    sys.exit(1)
