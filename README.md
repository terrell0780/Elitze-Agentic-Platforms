# Elitze Agentic Platform

**Owner: Terrell Hall — Founder & CEO, Elitze Agentic Platforms.**

The marketing, product and trust site for Elitze — a full-stack agentic AI company. Ten platforms, one decisioning brain, one governance layer.

Built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4. 34 statically generated routes, no runtime backend required.

---

## The ten platforms

| Platform | Code | Route |
| --- | --- | --- |
| AI SaaS | `ELZ-SAAS` | `/platforms/ai-saas` |
| Embedded AI | `ELZ-EMBED` | `/platforms/embedded-ai` |
| AI PaaS | `ELZ-PAAS` | `/platforms/ai-paas` |
| AI APIs | `ELZ-API` | `/platforms/ai-apis` |
| B2B AI | `ELZ-B2B` | `/platforms/b2b-ai` |
| B2C AI | `ELZ-B2C` | `/platforms/b2c-ai` |
| B2B2C AI | `ELZ-B2B2C` | `/platforms/b2b2c-ai` |
| Generative AI | `ELZ-GEN` | `/platforms/generative-ai` |
| Predictive AI | `ELZ-PRED` | `/platforms/predictive-ai` |
| Agentic AI | `ELZ-AGENT` | `/platforms/agentic-ai` |

**Elitze Core** is the decisioning brain sitting above all ten: it classifies each task, routes to the model and tool path with the best expected value, enforces budget and policy, and feeds the outcome back so the next decision is better.

## Technology modules

- **Graph Studio** (`/graph`) — stateful agent orchestration built on [LangGraph](https://github.com/langchain-ai/langgraph): nodes, conditional edges, cycles, durable checkpointers, human-in-the-loop interrupts, time-travel replay, supervisor + specialist subgraphs.
- **Agent Reach** (`/reach`) — live internet access for agents based on [Agent Reach](https://github.com/Panniantong/Agent-Reach): 13+ channels behind one tool contract, with `reach doctor` health checks, rate governors, caching and MCP exposure.
- **Knowledge Vault** (`/vault`) — [Obsidian](https://github.com/obsidianmd/obsidian-releases)-compatible Markdown memory: wikilinks, frontmatter, canvas, git-backed history, hybrid vector + BM25 + graph retrieval. Memory a human can open and correct.

Full upstream credits on `/open-source` (MCP, LiteLLM, Temporal, Qdrant, Ragas, Guardrails, OpenTelemetry, vLLM, DSPy).

## Trust, security & governance

| Surface | Route | Contents |
| --- | --- | --- |
| Trust Center | `/trust` | Certifications, data handling, sub-processors, accountability |
| Guardrails | `/guardrails` | Six enforcement layers + policy-as-code |
| Security | `/security` | Practices, disclosure SLAs, safe harbor, header hardening |
| Responsible AI | `/responsible-ai` | Principles, prohibited uses, governance process |
| Privacy Policy | `/privacy` | 13 sections — GDPR/CCPA rights, retention, transfers |
| Terms of Service | `/terms` | 16 sections — ownership, AI output, liability, exit rights |

**The six guardrail layers:** identity & access → input/prompt defense → execution limits → human authority → output validation → evidence & audit. They fail closed.

**Security headers** (set in `next.config.ts`, applied to every response): Content-Security-Policy, Strict-Transport-Security (2yr, preload), X-Content-Type-Options, Referrer-Policy, Permissions-Policy, Cross-Origin-Opener-Policy, Cross-Origin-Resource-Policy, X-Permitted-Cross-Domain-Policies. `X-Powered-By` is disabled.

Also shipped: [`SECURITY.md`](SECURITY.md), [`/.well-known/security.txt`](public/.well-known/security.txt) with coordinated-disclosure contact and expiry, and an MIT [`LICENSE`](LICENSE) in Terrell Hall's name.

## SEO (current Google guidance)

- Per-page `pageMeta()` helper producing **self-referencing canonicals**, absolute OG/Twitter images, and explicit `googleBot` directives (`max-image-preview:large`, `max-snippet:-1`).
- **Structured data:** `Organization` + `WebSite` graph naming Terrell Hall as `founder` (E-E-A-T ownership signal), plus `SoftwareApplication` per platform, `BreadcrumbList` on nested pages, and `FAQPage` on `/pricing` and `/trust`.
- `sitemap.xml` and `robots.txt` generated from the route table with real priorities and change frequencies.
- `robots.txt` explicitly **allows** `Googlebot` and `Google-Extended` (AI surfaces are opt-in), and blocks licence-ignoring scrapers.
- Dynamic `opengraph-image` rendered at the edge, branded and crediting the owner.
- Accessibility: skip-to-content link, semantic landmarks, focus-visible states.
- Permanent redirects for common alternates (`/tos`, `/privacy-policy`, `/trust-center`, `/security.txt`).

### Setting your domain

Canonical URLs, sitemap, OG tags and JSON-LD all read one variable. Set it at
build time (or in your host's dashboard):

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com npm run build
```

It defaults to `https://elitze.ca`. **Set this before going public** — a
canonical pointing at a domain you do not serve will de-index the live site.
See [DEPLOYMENT.md](DEPLOYMENT.md).

## Compliance claims — read before editing

Certification claims live in `certifications` in `src/lib/trust.ts`, each with a
`state`: `certified`, `in-progress`, `planned` or `practice`.

**Nothing is currently marked `certified`, and nothing should be until a signed
auditor report or certificate is in hand.** SOC 2 Type II and EU AI Act are
`in-progress`; ISO 27001 and 42001 are `planned`; GDPR, CCPA, HIPAA (BAA) and
NIST AI RMF are `practice` — obligations met or frameworks aligned to, never
shown as certifications.

Displaying an unearned certification is an FTC Section 5 deceptive practice and
can void enterprise contracts for fraud in the inducement. Rationale, the
requirement for each standard, and how to flip a claim on when earned are in
[DEPLOYMENT.md](DEPLOYMENT.md).

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 34 static routes
npm start
```

## Project structure

```
src/
  app/                    App Router pages
    platforms/[slug]/     Ten platform pages (generateStaticParams)
    trust/ guardrails/ security/ responsible-ai/   Governance surfaces
    privacy/ terms/       Legal documents
    sitemap.ts robots.ts opengraph-image.tsx       SEO endpoints
  components/
    Nav.tsx Footer.tsx    Shell with mega-menu + trust links
    CoreDiagram.tsx       Animated Elitze Core orbital diagram
    Console.tsx           Scripted live-run console demo
    PlatformGrid.tsx TechPage.tsx LegalDoc.tsx ContactForm.tsx
    ui.tsx                Section, Eyebrow, Cta, Code, StatRow, PageHero
  lib/
    site.ts               Brand + owner config, canonical URL
    platforms.ts          Ten platform definitions
    tech.ts               Tech modules, OSS credits, differentiators
    trust.ts              Guardrail layers, security practices, certifications
    legal.ts              Terms + privacy source text
    seo.tsx               Metadata builder + JSON-LD helpers
```

All brand, owner and policy copy is centralized in `src/lib/`, so rebranding or re-scoping is a data edit rather than a template rewrite.

---

### Disclaimer

Content is illustrative copy for the Elitze brand. Metrics, customer names, certifications and compliance claims are placeholders pending real audits. The legal documents are drafting starting points, not legal advice — have counsel review them before production use.

© 2026 Terrell Hall / Elitze Agentic Platforms. Released under the MIT License.
