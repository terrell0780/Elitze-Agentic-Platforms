# Elitze Agentic Platforms

Marketing + product site for **Elitze Agentic Platform** — a full-stack agentic AI company, structured like AppLovin's site (hero → audience cards → decisioning brain → product suite → developer surface → pricing) but with the ad-tech product line replaced by ten agentic AI platforms.

Built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4.

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

Where AppLovin has AXON as the decisioning brain over AppDiscovery / MAX / Adjust, Elitze has **Elitze Core** over all ten platforms.

## Technology modules

Three named modules, each mapped to a real open-source project:

- **Graph Studio** (`/graph`) — stateful agent orchestration built on [LangGraph](https://github.com/langchain-ai/langgraph): nodes/edges/cycles, durable checkpointers, human-in-the-loop interrupts, time-travel replay, supervisor + specialist subgraphs.
- **Agent Reach** (`/reach`) — live internet access for agents based on [Agent Reach](https://github.com/Panniantong/Agent-Reach): 13+ channels (web reader, semantic search, GitHub, Reddit, YouTube transcripts, RSS, X, LinkedIn, arXiv, SEC EDGAR…) behind one tool contract, with a `reach doctor` health check and MCP exposure.
- **Knowledge Vault** (`/vault`) — [Obsidian](https://github.com/obsidianmd/obsidian-releases)-compatible Markdown memory: wikilinks, frontmatter, canvas, git-backed history, hybrid vector + BM25 + graph retrieval. Agent memory a human can open and correct.

Additional upstream projects credited on `/open-source`: MCP, LiteLLM, Temporal, Qdrant, Ragas, Guardrails, OpenTelemetry, vLLM, DSPy.

## What makes it better than the AppLovin original

- **Interactive Core diagram** — a live orbital graph of all ten platforms cycling through the eight-stage decision loop (`src/components/CoreDiagram.tsx`).
- **Working console demo** (`/console`) — three scripted agent workloads that stream node-by-node execution with run economics, engaged platforms and guardrail state.
- **Published unit pricing** (`/pricing`) — every metered unit listed, not hidden behind "contact sales".
- **Docs surface** (`/docs`) with real quickstart code for the SDK, CLI and graph API.
- **Per-platform code samples** in TypeScript, Python and bash on every platform page.
- **Open-source transparency page** crediting each upstream repository and its role.
- Fully static-generatable: 25 prerendered routes, no runtime backend required.

## Routes

`/` · `/platforms` · `/platforms/[slug]` (×10) · `/technology` · `/graph` · `/reach` · `/vault` · `/console` · `/docs` · `/pricing` · `/company` · `/contact` · `/open-source`

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (25 static routes)
npm start
```

## Project structure

```
src/
  app/                 App Router pages
    platforms/[slug]/  Dynamic platform pages (generateStaticParams)
  components/
    Nav.tsx            Sticky nav with mega-menu + mobile drawer
    Footer.tsx
    CoreDiagram.tsx    Animated Elitze Core orbital diagram
    PlatformGrid.tsx   Accent-themed platform cards
    Console.tsx        Scripted live-run console demo
    ContactForm.tsx    Client-side contact form
    TechPage.tsx       Shared layout for Graph/Reach/Vault
    ui.tsx             Section, Eyebrow, Cta, Code, StatRow, PageHero
  lib/
    site.ts            Brand config (name, nav, stats)
    platforms.ts       All ten platform definitions
    tech.ts            Tech modules, OSS credits, differentiators
```

All brand copy is centralized in `src/lib/`, so renaming or re-scoping the product line is a data edit rather than a template rewrite.

> Note: content is illustrative marketing copy for a fictional company. Metrics, customer names and compliance claims are placeholders.
