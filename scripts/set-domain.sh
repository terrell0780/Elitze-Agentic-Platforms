#!/usr/bin/env bash
# Set your public domain in one step.
#   ./scripts/set-domain.sh https://yourdomain.com
set -euo pipefail

cd "$(dirname "$0")/.."

if [ $# -ne 1 ]; then
  echo "Usage: ./scripts/set-domain.sh https://yourdomain.com"
  echo ""
  echo "Current setting:"
  grep NEXT_PUBLIC_SITE_URL .env.local 2>/dev/null \
    || echo "  (not set - falling back to https://elitze.ca)"
  exit 1
fi

URL="${1%/}"   # strip any trailing slash

if [[ ! "$URL" =~ ^https?:// ]]; then
  echo "ERROR: must start with https://  (you gave: $URL)"
  echo "Try:   ./scripts/set-domain.sh https://$URL"
  exit 1
fi

if [[ "$URL" =~ ^http:// ]]; then
  echo "WARNING: http:// is insecure. Use https:// unless testing locally."
fi

touch .env.local
grep -v '^NEXT_PUBLIC_SITE_URL=' .env.local > .env.local.tmp 2>/dev/null || true
echo "NEXT_PUBLIC_SITE_URL=$URL" >> .env.local.tmp
mv .env.local.tmp .env.local

echo "Domain set to: $URL"
echo ""
echo "Next steps:"
echo "  1. npm run build"
echo "  2. ./scripts/verify-domain.sh $URL    (after deploying)"
echo ""
echo "IMPORTANT: .env.local only affects LOCAL builds."
echo "On Vercel/Netlify you must ALSO set NEXT_PUBLIC_SITE_URL"
echo "in the hosting dashboard, then redeploy."
