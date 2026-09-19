# Deploying elitze.ca on IONOS

You do **not** need Vercel. This site exports to plain HTML/CSS/JS and runs on
IONOS shared hosting (or any web host).

---

## First, two things that confused the picture

**1. `localhost:3000` will never work in your browser.**
That address means "a server running on the computer I'm typing on." The
preview runs in the Arena sandbox, not on your PC. Use the Arena preview
panel to view it. This is not a bug.

**2. `elitze.ca` shows something else because the site was never uploaded.**
Writing the domain into the code only tells the site what its address *will
be*. It does not move any files there. Uploading is the step below.

Your DNS currently resolves `elitze.ca` and `www.elitze.ca` to
`216.198.79.1`. If you want IONOS to serve the site, DNS must point at your
**IONOS hosting**, not at that address — see step 4.

---

## Step 1 — Build the site

```bash
./scripts/build-static.sh
```

This creates an `out/` folder: ~203 files, about 6 MB. It contains every page
as real HTML, plus:

- `.htaccess` — HTTPS redirect, www → apex, pretty URLs, security headers, caching
- `.well-known/security.txt` — your vulnerability disclosure contact
- `sitemap.xml` and `robots.txt`

To build for a different address:

```bash
NEXT_PUBLIC_SITE_URL=https://staging.elitze.ca ./scripts/build-static.sh
```

## Step 2 — Confirm your IONOS plan

You need a **web hosting** plan, not just the domain registration. In the
IONOS control panel look for **Hosting** / **Webspace**. If you only have a
domain, add the cheapest Linux web hosting plan — this site needs no
database, no PHP, no Node.

## Step 3 — Upload

**Option A: IONOS File Manager** (no software needed)
Control panel → **Hosting** → **File Manager** (or Webspace Explorer).
Navigate to your web root, usually `/` or `htdocs` or `public_html`.
Upload the **contents** of `out/` — not the folder itself.

> Zip the contents first and use the File Manager's extract option; uploading
> 200 files individually through a browser is slow.

**Option B: SFTP** (faster, recommended)
Get your SFTP credentials from IONOS (Hosting → SFTP/SSH access), then:

```bash
cd out
sftp yourusername@yourserver.ionos.com
# then, at the sftp> prompt:
cd htdocs
put -r *
put .htaccess
mkdir .well-known
put .well-known/security.txt .well-known/
```

Or with a GUI client like FileZilla / Cyberduck, drag everything from `out/`
into the web root.

### ⚠️ The most common mistake

`.htaccess` and `.well-known/` start with a dot, so they are **hidden** and
most upload tools skip them by default.

- FileZilla: Server → *Force showing hidden files*
- Cyberduck: View → *Show Hidden Files*
- IONOS File Manager: enable "show hidden files" in settings

Without `.htaccess` you lose HTTPS redirect, security headers and clean URLs.

## Step 4 — Point the domain at IONOS hosting

In the IONOS panel: **Domains** → `elitze.ca` → **Destination** (or "Assign to
hosting") → point it at your webspace. IONOS wires the DNS itself, so you
usually don't touch A records manually.

If you do set records by hand, use the IP IONOS gives you for your webspace —
**not** `216.198.79.1`, which is where the domain points today.

DNS changes take 15 minutes to a few hours to propagate.

## Step 5 — Turn on HTTPS

IONOS panel → **SSL Certificates** → activate the free Let's Encrypt
certificate for `elitze.ca` and `www.elitze.ca`. Wait for it to issue before
testing, or the HTTPS redirect in `.htaccess` will fail.

## Step 6 — Verify

```bash
./scripts/verify-domain.sh https://elitze.ca
```

Expected:

```
[OK]   canonical matches: https://elitze.ca
[INFO] first sitemap entry: https://elitze.ca
Sitemap: https://elitze.ca/sitemap.xml
```

Also check by hand:

- `https://elitze.ca` loads the dark Elitze homepage
- `https://www.elitze.ca` redirects to the apex
- `http://elitze.ca` redirects to `https://`
- `https://elitze.ca/trust/` loads
- `https://elitze.ca/.well-known/security.txt` returns text

Then submit `https://elitze.ca/sitemap.xml` in Google Search Console.

---

## Updating the site later

```bash
./scripts/build-static.sh      # rebuild
# re-upload the contents of out/, overwriting
```

Because asset filenames are content-hashed, returning visitors get the new
version immediately — no cache-clearing needed.

---

## Troubleshooting

| Symptom | Cause | Fix |
| --- | --- | --- |
| Still the old/parked page | DNS not repointed, or cached | Check step 4; try a different network or incognito |
| Homepage works, `/trust/` is 404 | `.htaccess` missing | Re-upload it with hidden files shown |
| No padlock / HTTPS error | Certificate not issued | Step 5, then wait |
| Site loads unstyled | `_next/` folder not uploaded | Re-upload it; it holds all CSS/JS |
| Redirect loop | IONOS already forces HTTPS | Remove the HTTPS RewriteCond block from `.htaccess` |
| Blank page | Uploaded the `out` folder instead of its contents | Files must sit at the web root, `index.html` at top level |

---

## Does anything break as a static site?

No. Everything on the site is client-side:

- Console demo — scripted in the browser
- Contact form — client-side, shows a confirmation (wire to Formspree or
  IONOS mail later if you want real submissions)
- Nav, menus, animations — all client-side

The only difference is that security headers come from `.htaccess` instead of
Next.js. That's already handled.
