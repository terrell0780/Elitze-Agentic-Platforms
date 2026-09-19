#!/usr/bin/env bash
# Check a DEPLOYED site is emitting the right canonical URLs.
#   ./scripts/verify-domain.sh https://yourdomain.com
set -uo pipefail

URL="${1:-}"
if [ -z "$URL" ]; then
  echo "Usage: ./scripts/verify-domain.sh https://yourdomain.com"
  exit 1
fi
URL="${URL%/}"

echo "Checking $URL"
echo ""

CANON=$(curl -sL --max-time 20 "$URL" \
  | grep -o '<link rel="canonical" href="[^"]*"' | head -1 \
  | sed 's/.*href="//;s/"//')

if [ -z "$CANON" ]; then
  echo "[FAIL] no canonical tag found - is the site up?"
elif [ "$CANON" = "$URL" ]; then
  echo "[OK]   canonical matches: $CANON"
else
  echo "[FAIL] canonical is  : $CANON"
  echo "       but should be : $URL"
  echo "       -> NEXT_PUBLIC_SITE_URL is wrong in your hosting dashboard."
fi

SM=$(curl -sL --max-time 20 "$URL/sitemap.xml" \
  | grep -o '<loc>[^<]*</loc>' | head -1 | sed 's/<[^>]*>//g')
if [ -n "$SM" ]; then
  echo "[INFO] first sitemap entry: $SM"
else
  echo "[FAIL] sitemap.xml not reachable"
fi

curl -sL --max-time 20 "$URL/robots.txt" | grep -i "^sitemap:" \
  || echo "[WARN] no Sitemap: line in robots.txt"

echo ""
echo "If all OK, submit $URL/sitemap.xml in Google Search Console."
