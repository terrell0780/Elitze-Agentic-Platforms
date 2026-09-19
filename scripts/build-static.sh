#!/usr/bin/env bash
# Build a plain HTML/CSS/JS site you can upload to IONOS (or any web host).
#
#   ./scripts/build-static.sh
#
# Output: ./out  -> upload its CONTENTS to your web root.
set -euo pipefail
cd "$(dirname "$0")/.."

SITE_URL="${NEXT_PUBLIC_SITE_URL:-https://elitze.ca}"
echo "Building static site for: $SITE_URL"
echo ""

rm -rf out
STATIC_EXPORT=1 NEXT_PUBLIC_SITE_URL="$SITE_URL" npx next build

# ---------------------------------------------------------------------------
# Apache config for IONOS shared hosting.
# Static export can't send headers from Next, so Apache sends them instead.
# ---------------------------------------------------------------------------
cat > out/.htaccess <<'HTACCESS'
# ---- Elitze Agentic Platform ----------------------------------------------
# IONOS / Apache configuration. Uploaded with the site.

Options -Indexes
DirectoryIndex index.html

# Force HTTPS and strip www -> canonical apex domain
<IfModule mod_rewrite.c>
  RewriteEngine On

  RewriteCond %{HTTPS} !=on
  RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]

  RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
  RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

  # Legacy / alternate paths
  RewriteRule ^security\.txt$ /.well-known/security.txt [R=301,L]
  RewriteRule ^privacy-policy/?$ /privacy/ [R=301,L]
  RewriteRule ^terms-of-service/?$ /terms/ [R=301,L]
  RewriteRule ^tos/?$ /terms/ [R=301,L]
  RewriteRule ^trust-center/?$ /trust/ [R=301,L]

  # Pretty URLs -> exported folders
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME}/index.html -f
  RewriteRule ^(.*)$ /$1/index.html [L]
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header always set Content-Security-Policy "default-src 'self'; base-uri 'self'; form-action 'self'; object-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https:; manifest-src 'self'; worker-src 'self' blob:; upgrade-insecure-requests"
  Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
  Header always set X-Content-Type-Options "nosniff"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=(), payment=(), usb=()"
  Header always set Cross-Origin-Opener-Policy "same-origin"
  Header always set X-Permitted-Cross-Domain-Policies "none"
  Header unset X-Powered-By
</IfModule>

# Caching: hashed assets forever, HTML never
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 month"
  ExpiresByType image/png "access plus 1 month"
</IfModule>
<IfModule mod_headers.c>
  <FilesMatch "\.(css|js|woff2)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\.html$">
    Header set Cache-Control "public, max-age=0, must-revalidate"
  </FilesMatch>
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/plain text/xml application/javascript application/json image/svg+xml
</IfModule>

ErrorDocument 404 /404.html
HTACCESS

# security.txt must live under /.well-known/
mkdir -p out/.well-known
cp public/.well-known/security.txt out/.well-known/security.txt

echo ""
echo "Done. Output: ./out  ($(find out -type f | wc -l | tr -d ' ') files, $(du -sh out | cut -f1))"
echo ""
echo "Upload the CONTENTS of ./out to your IONOS web root."
echo "Include the hidden files .htaccess and .well-known/ !"
