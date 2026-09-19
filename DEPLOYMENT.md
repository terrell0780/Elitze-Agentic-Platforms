# Deployment & Launch Checklist

Owner: Terrell Hall — Founder & CEO, Elitze Agentic Platforms.

Two things must be handled deliberately before this site goes public: the
**canonical domain** and the **compliance claims**. Both are explained below.

---

## 1. Your domain: elitze.ca

**Status: owned and configured.** `NEXT_PUBLIC_SITE_URL=https://elitze.ca` is
set in `.env.local`, and the code fallback in `src/lib/site.ts` also points to
`elitze.ca`. Canonicals, sitemap, Open Graph tags, JSON-LD and `security.txt`
all resolve to it.

### Still to do on the hosting side

`.env.local` only affects builds on this machine. When you deploy:

1. In your host's dashboard (Vercel/Netlify/Cloudflare Pages), add an
   environment variable `NEXT_PUBLIC_SITE_URL` = `https://elitze.ca`,
   Production scope.
2. Add `elitze.ca` as a custom domain in the host, and follow its DNS
   instructions at your registrar — usually an `A` record for the apex plus a
   `CNAME` for `www`.
3. Pick **one** canonical host and redirect the other. Recommended: redirect
   `www.elitze.ca` to `elitze.ca` (most hosts do this with one toggle).
   Serving both without a redirect splits your search ranking.
4. Wait for the TLS certificate to issue (usually minutes), then run:

   ```bash
   ./scripts/verify-domain.sh https://elitze.ca
   ```

### A note on .ca domains

CIRA requires registrants to meet Canadian Presence Requirements — as a
Canadian citizen or permanent resident you qualify personally. If you later
move the domain into a corporation, transfer the registration to the
incorporated entity so the registrant on record matches the business that
owns the site.

### Email addresses

Every contact address on the site is now `@elitze.ca`: `hello@`, `security@`,
`privacy@` and `legal@`. **These must actually receive mail before launch** —
`security@` and `privacy@` are published in `security.txt` and in the privacy
policy as formal contact channels, and a bounced vulnerability report is a
genuine problem. Google Workspace, Fastmail, or free forwarding through
Cloudflare Email Routing all work.

---

## 1b. How the domain variable works (reference)

Every public URL the site emits is derived from one environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### What it controls

| Surface | Effect |
| --- | --- |
| `<link rel="canonical">` | Declares the official address of all 34 pages |
| `sitemap.xml` | Every `<loc>` entry submitted to Search Console |
| Open Graph / Twitter tags | Link previews in Slack, iMessage, LinkedIn, X |
| JSON-LD `@id` values | Entity identity for Organization, WebSite, platform pages |
| `robots.txt` | The `Sitemap:` and `Host:` directives |

### Why it must be correct before launch

A canonical tag tells Google *"the authoritative URL for this page is X."*
If you deploy to `something.vercel.app` while the canonical claims
`https://elitze.ca`, you are pointing Google at a domain the deployment does
not serve. Typical outcome: your live pages get dropped from the index in
favour of the declared URL, and Open Graph images 404 because they resolve
against the wrong host.

### How to set it

**Vercel / Netlify / Cloudflare Pages** — add it in the dashboard under
Environment Variables (Production scope), then redeploy. No code change.

**Self-hosted / Docker / CI:**

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com npm run build
npm start
```

**Local `.env.local`** (not committed):

```bash
echo 'NEXT_PUBLIC_SITE_URL=https://yourdomain.com' >> .env.local
```

The `NEXT_PUBLIC_` prefix is required — it is what exposes the value to the
browser bundle. The variable is read once in `src/lib/site.ts` and defaults to
`https://elitze.ca` if unset.

### Verify after deploying

```bash
curl -s https://yourdomain.com | grep -o '<link rel="canonical"[^>]*>'
curl -s https://yourdomain.com/sitemap.xml | head -20
curl -s https://yourdomain.com/robots.txt
```

Then submit `https://yourdomain.com/sitemap.xml` in Google Search Console and
request indexing on the homepage.

---

## 2. Compliance claims — the rules

**Never display a certification you do not hold.** This is not stylistic
caution; it carries concrete legal and commercial exposure.

### Why it matters

- **FTC Section 5.** Misrepresenting a security certification is a deceptive
  practice. The FTC has brought enforcement actions specifically over false
  certification claims.
- **Fraud in the inducement.** If an enterprise customer buys partly in
  reliance on a badge and later finds no report exists, they may void the
  contract and seek refunds.
- **Commercial reality.** The first serious enterprise deal triggers a
  security questionnaire requesting the report. If you cannot produce it, the
  deal dies and the relationship is damaged.

### What each claim actually requires

| Claim | Requirement | Notes |
| --- | --- | --- |
| SOC 2 Type I / II | Signed opinion letter from a licensed CPA firm | Type II requires a 3–12 month observation window. Not self-assessable. |
| ISO/IEC 27001 | Certificate from an accredited certification body | Has a verifiable certificate number. Stage 1 + Stage 2 audits. |
| ISO/IEC 42001 | Accredited body audit of an AI management system | Same structure as 27001. |
| HIPAA | **No certification exists** | The only correct claim is that you will sign a BAA. "HIPAA certified" signals inexperience to healthcare buyers. |
| PCI DSS | AOC from a QSA, or a completed SAQ | Scope depends on how you handle card data. |
| GDPR / CCPA | A legal obligation you meet | Not a certification. Describe the practice. |
| NIST AI RMF | Voluntary framework | Say "controls mapped to" or "aligned with" — never "certified". |
| EU AI Act | Regulatory obligation phasing in | "Readiness program" is the honest framing pre-compliance. |

### How this repo models it

All claims live in `certifications` in [`src/lib/trust.ts`](src/lib/trust.ts),
each with a `state`:

| State | Renders as | Use when |
| --- | --- | --- |
| `certified` | Green check | **Only** with a signed report or certificate on file |
| `in-progress` | Amber clock | An audit or readiness engagement is genuinely underway |
| `planned` | Grey dot | On the roadmap, not yet started |
| `practice` | Cyan shield | A legal obligation met or framework aligned to — not a certification |

Current state: **nothing is marked `certified`.** SOC 2 Type II and EU AI Act
are `in-progress`, the two ISO standards are `planned`, and GDPR / CCPA /
HIPAA / NIST AI RMF are `practice` with accurate descriptions.

### Flipping a claim on when you earn it

When the report lands, edit one entry:

```ts
{
  name: "SOC 2 Type II",
  state: "certified",
  status: "Report issued by <CPA firm>, covering <period>. Available under NDA.",
},
```

Every surface — homepage, `/trust`, `/security` — updates from that single
edit. Do this **only** when the signed report is in your possession.

### What you can legitimately market today

Your actual technical controls are strong and sellable without any badge:

- Encryption in transit (TLS 1.3) and at rest (AES-256)
- Tenant isolation across storage, memory namespaces and routing
- Brokered short-lived credentials, never exposed to prompts or logs
- Six-layer runtime guardrails that fail closed
- Append-only audit ledger with full run replay
- Configurable data residency and retention
- Coordinated vulnerability disclosure with published SLAs
- No training on customer content; zero-retention provider terms

Sell the controls, not the logos. The controls are verifiable today.

---

## 3. Legal documents

`/terms` and `/privacy` are **drafting starting points, not legal advice.**
They were written to reflect current expectations for AI platforms — customer
content ownership, an explicit "nature of AI output" clause, no training on
customer data, and real exit rights — but they have not been reviewed by
counsel.

Before launch, have a lawyer review at minimum:

- [ ] **Governing law and venue** — currently Delaware; must match where you
      are actually incorporated
- [ ] **Limitation of liability caps** — the 12-month fee cap needs to match
      your insurance coverage and risk tolerance
- [ ] **Indemnification scope** — particularly the IP indemnity you offer
      customers
- [ ] **The AI output clause** — allocation of responsibility for agent
      actions is the highest-risk provision in the document
- [ ] **Entity name and registration** — "Elitze Agentic Platforms" must match
      your registered entity exactly, with the correct suffix (LLC, Inc.)
- [ ] **DPA and SCCs** — required before any EU customer data is processed
- [ ] **Any certification referenced in the Terms** — Section 9 now explicitly
      disclaims reliance on in-progress audits; keep it that way until audits
      complete

Also confirm before launch:

- [ ] Email addresses (`hello@`, `security@`, `privacy@`, `legal@`) actually
      route to a monitored inbox
- [ ] `security.txt` `Expires` date is under 12 months out and diarised
- [ ] Placeholder metrics and customer logos are replaced or removed
- [ ] Registered entity name and address appear where required

---

## Pre-launch checklist

```
[ ] NEXT_PUBLIC_SITE_URL set to the real production domain
[ ] Canonical, sitemap and robots verified against the live domain
[ ] Sitemap submitted to Google Search Console
[ ] No certification marked `certified` without a report on file
[ ] Placeholder stats, logos and customer names removed or made real
[ ] Legal documents reviewed by counsel
[ ] Contact inboxes live and monitored
[ ] security.txt expiry diarised for renewal
```
