export type Platform = {
  slug: string;
  name: string;
  short: string;
  code: string;
  audience: string;
  tagline: string;
  summary: string;
  accent: string;
  glyph: string;
  highlights: { title: string; body: string }[];
  capabilities: string[];
  metrics: { value: string; label: string }[];
  stack: string[];
  snippet: { lang: string; code: string };
};

export const platforms: Platform[] = [
  {
    slug: "ai-saas",
    name: "AI SaaS",
    short: "Software as a Service",
    code: "ELZ-SAAS",
    audience: "Product teams shipping AI-native applications",
    tagline: "Ship an AI product, not an AI project.",
    summary:
      "Multi-tenant, metered, and audited from day one. Elitze AI SaaS gives you the boring parts of an AI business — tenancy, entitlements, usage billing, seat management, evals — so your team only writes the intelligent part.",
    accent: "#6366f1",
    glyph: "◇",
    highlights: [
      {
        title: "Tenant-isolated agents",
        body: "Every workspace gets its own memory namespace, policy set, and model routing profile. No cross-tenant bleed, enforced at the Core router.",
      },
      {
        title: "Usage-based metering",
        body: "Token, step, tool-call, and outcome-based meters emit to your billing provider in real time with idempotent replay.",
      },
      {
        title: "Evals in the release path",
        body: "Golden datasets run on every deploy. Regressions block the rollout before a customer ever sees them.",
      },
    ],
    capabilities: [
      "Multi-tenant workspaces & RBAC",
      "Metered billing hooks (Stripe, Orb, Metronome)",
      "Per-tenant model routing & budgets",
      "Prompt + graph versioning with rollback",
      "Audit evidence export for security reviews",
      "White-label console theming",
    ],
    metrics: [
      { value: "11 days", label: "Median time to first paying tenant" },
      { value: "0", label: "Cross-tenant memory incidents" },
      { value: "92%", label: "Gross margin at scale" },
    ],
    stack: ["Core Router", "Knowledge Vault", "Graph Studio", "Meter Bus"],
    snippet: {
      lang: "typescript",
      code: `import { Elitze } from "@elitze/sdk";

const elitze = new Elitze({ apiKey: process.env.ELITZE_API_KEY });

const workspace = await elitze.saas.workspaces.create({
  name: "Acme Corp",
  plan: "growth",
  budget: { monthlyUsd: 2_500, hardStop: true },
  routing: { tier: "balanced", residency: "us" },
});

const run = await elitze.agents.run({
  workspace: workspace.id,
  agent: "support-triage",
  input: { ticket: "Refund for duplicate charge" },
});`,
    },
  },
  {
    slug: "embedded-ai",
    name: "Embedded AI",
    short: "Intelligence inside your product",
    code: "ELZ-EMBED",
    audience: "Teams putting agents inside an existing surface",
    tagline: "Your product, suddenly agentic.",
    summary:
      "Drop a copilot, a smart field, or a whole autonomous workflow into software you already shipped. Embedded AI runs at the edge, degrades gracefully offline, and never ships raw customer data to a model you didn't approve.",
    accent: "#06b6d4",
    glyph: "◈",
    highlights: [
      {
        title: "Edge + on-device inference",
        body: "Quantized small models handle classification and extraction locally; only escalations hit the network.",
      },
      {
        title: "Headless or batteries-included",
        body: "Use the React/Swift/Kotlin components, or take the pure runtime and render it yourself.",
      },
      {
        title: "Redaction at the boundary",
        body: "PII detection and tokenized replacement happen before a payload ever leaves your process.",
      },
    ],
    capabilities: [
      "React, Vue, Swift, Kotlin & Web Component SDKs",
      "Offline-first queue with durable replay",
      "On-device small-model inference",
      "Streaming UI primitives (tokens, tool cards, citations)",
      "Deterministic fallbacks when models are unavailable",
      "Sub-120ms p50 in-app latency",
    ],
    metrics: [
      { value: "118ms", label: "p50 first token, embedded" },
      { value: "41KB", label: "Gzipped web runtime" },
      { value: "100%", label: "Offline capture retention" },
    ],
    stack: ["Edge Runtime", "Core Router", "Redaction Gateway"],
    snippet: {
      lang: "tsx",
      code: `import { Copilot, useAgent } from "@elitze/embed-react";

export function InboxPane() {
  const { send, messages, streaming } = useAgent("inbox-assistant", {
    redact: ["email", "phone", "card"],
    fallback: "rules:triage-v3",
  });

  return <Copilot messages={messages} onSend={send} busy={streaming} />;
}`,
    },
  },
  {
    slug: "ai-paas",
    name: "AI PaaS",
    short: "Platform as a Service",
    code: "ELZ-PAAS",
    audience: "Platform engineers running agents in production",
    tagline: "The runtime your agents deserve.",
    summary:
      "Durable execution, checkpointed state, human-in-the-loop interrupts, and time-travel debugging. Push a graph, get a versioned, autoscaling, observable agent service with a URL.",
    accent: "#8b5cf6",
    glyph: "▣",
    highlights: [
      {
        title: "Durable execution",
        body: "Every node transition is checkpointed. Crash mid-run and the graph resumes from the last committed state — not from the top.",
      },
      {
        title: "Human-in-the-loop interrupts",
        body: "Pause a graph at any edge, surface state to a reviewer, accept an edit, and resume with full lineage.",
      },
      {
        title: "Time-travel debugging",
        body: "Replay any production run from any checkpoint with a different model or prompt and diff the outcome.",
      },
    ],
    capabilities: [
      "Checkpointers on Postgres, Redis & SQLite",
      "Autoscaling workers with per-graph concurrency",
      "Cron, webhook, queue & event triggers",
      "Blue/green graph deploys with instant rollback",
      "OpenTelemetry traces on every node",
      "Sandboxed code execution for tool calls",
    ],
    metrics: [
      { value: "4.2B", label: "Node executions / month" },
      { value: "99.99%", label: "Runtime availability" },
      { value: "<800ms", label: "Cold start, warm pool" },
    ],
    stack: ["Graph Runtime", "Checkpoint Store", "Observability Plane"],
    snippet: {
      lang: "python",
      code: `from elitze.graph import StateGraph, interrupt
from elitze.checkpoint import PostgresSaver

g = StateGraph(RefundState)
g.add_node("classify", classify)
g.add_node("policy_check", policy_check)
g.add_node("human_review", interrupt(on="risk_score > 0.7"))
g.add_node("execute", execute_refund)

g.add_edge("classify", "policy_check")
g.add_conditional_edges("policy_check", route, ["human_review", "execute"])

app = g.compile(checkpointer=PostgresSaver.from_env())`,
    },
  },
  {
    slug: "ai-apis",
    name: "AI APIs",
    short: "One endpoint, every model",
    code: "ELZ-API",
    audience: "Developers who want a single, stable contract",
    tagline: "Every frontier model behind one stable contract.",
    summary:
      "A unified, OpenAI-compatible gateway with intelligent routing, semantic caching, structured output guarantees, and automatic failover across providers. Change models without changing code.",
    accent: "#10b981",
    glyph: "⬡",
    highlights: [
      {
        title: "Cost/quality routing",
        body: "Core scores each request and routes to the cheapest model that historically clears your quality bar for that task class.",
      },
      {
        title: "Semantic caching",
        body: "Near-duplicate prompts return cached completions in single-digit milliseconds at a fraction of the cost.",
      },
      {
        title: "Guaranteed structure",
        body: "JSON Schema and typed outputs are validated and repaired before they reach your code. Malformed responses never surface.",
      },
    ],
    capabilities: [
      "OpenAI-compatible /v1 surface",
      "Automatic provider failover in <300ms",
      "Semantic + exact response caching",
      "Per-key rate limits, budgets and audit logs",
      "Streaming, batching and async jobs",
      "MCP tool exposure for any endpoint",
    ],
    metrics: [
      { value: "68%", label: "Average spend reduction" },
      { value: "31%", label: "Requests served from cache" },
      { value: "9ms", label: "Gateway overhead, p99" },
    ],
    stack: ["Core Router", "Cache Plane", "Policy Engine"],
    snippet: {
      lang: "bash",
      code: `curl https://api.elitze.ca/v1/chat/completions \\
  -H "Authorization: Bearer $ELITZE_API_KEY" \\
  -H "X-Elitze-Route: quality:high,budget:0.02" \\
  -d '{
    "model": "elitze-auto",
    "messages": [{"role":"user","content":"Summarize Q3 churn drivers"}],
    "response_format": {"type":"json_schema","json_schema": {"name":"churn"}}
  }'`,
    },
  },
  {
    slug: "b2b-ai",
    name: "B2B AI",
    short: "Business-to-Business",
    code: "ELZ-B2B",
    audience: "Enterprise revenue, ops and back-office teams",
    tagline: "Agents that close, renew, and reconcile.",
    summary:
      "Pipeline research, RFP response, contract review, procurement, collections, and support escalation — as governed agents with approval gates, audit trails, and enterprise SSO.",
    accent: "#f59e0b",
    glyph: "▰",
    highlights: [
      {
        title: "Account intelligence",
        body: "Agents assemble a live dossier per account from CRM, product telemetry, news, and filings — refreshed on a schedule you set.",
      },
      {
        title: "Approval gates everywhere",
        body: "Anything that touches a customer, a contract, or a ledger routes through a named human with a signed record.",
      },
      {
        title: "Systems of record, natively",
        body: "First-class connectors for Salesforce, HubSpot, NetSuite, SAP, Workday, ServiceNow, Snowflake and Databricks.",
      },
    ],
    capabilities: [
      "Deal research & MEDDIC scoring agents",
      "RFP / security-questionnaire autofill",
      "Contract redline & obligation extraction",
      "AR collections and dunning sequences",
      "SSO/SCIM, GDPR & CCPA, DPA with SCCs, BAA available",
      "Full lineage: every claim links to a source document",
    ],
    metrics: [
      { value: "3.4x", label: "Qualified pipeline per rep" },
      { value: "72%", label: "Faster RFP turnaround" },
      { value: "100%", label: "Actions with audit lineage" },
    ],
    stack: ["Knowledge Vault", "Agent Reach", "Policy Engine"],
    snippet: {
      lang: "typescript",
      code: `const dossier = await elitze.b2b.accounts.brief({
  account: "acme-corp",
  sources: ["salesforce", "snowflake", "sec-edgar", "news"],
  sections: ["whitespace", "risk", "champion-map", "renewal-thesis"],
  citations: "required",
});

await elitze.approvals.request({
  action: dossier.recommendedOutreach,
  approver: "vp-sales@yourco.com",
});`,
    },
  },
  {
    slug: "b2c-ai",
    name: "B2C AI",
    short: "Business-to-Consumer",
    code: "ELZ-B2C",
    audience: "Consumer apps, commerce and lifecycle teams",
    tagline: "A million one-to-one conversations.",
    summary:
      "Personal shopping, onboarding, retention and support agents that talk to every customer like the only customer — at consumer scale, consumer latency, and consumer economics.",
    accent: "#ec4899",
    glyph: "◐",
    highlights: [
      {
        title: "Per-user memory",
        body: "Durable preference graphs per consumer, with export and one-click deletion for privacy requests.",
      },
      {
        title: "Lifecycle orchestration",
        body: "Agents decide the next best message, channel, and moment — then measure incremental lift, not vanity opens.",
      },
      {
        title: "Consumer-grade economics",
        body: "Small models, caching, and batching keep the blended cost per conversation in fractions of a cent.",
      },
    ],
    capabilities: [
      "Conversational commerce & guided discovery",
      "Churn-risk detection with save offers",
      "Multilingual support across 40+ locales",
      "Voice, chat, push, email & in-app surfaces",
      "Consent-aware personalization",
      "Holdout groups and incrementality testing",
    ],
    metrics: [
      { value: "$0.004", label: "Blended cost per conversation" },
      { value: "+23%", label: "Lift in 30-day retention" },
      { value: "40+", label: "Languages supported" },
    ],
    stack: ["Edge Runtime", "Agent Reach", "Predictive Engine"],
    snippet: {
      lang: "typescript",
      code: `const next = await elitze.b2c.lifecycle.decide({
  user: "u_8812",
  objective: "retain",
  channels: ["push", "email", "in-app"],
  constraints: { maxTouchesPerWeek: 2, quietHours: "22:00-08:00" },
  holdout: 0.1,
});`,
    },
  },
  {
    slug: "b2b2c-ai",
    name: "B2B2C AI",
    short: "Business-to-Business-to-Consumer",
    code: "ELZ-B2B2C",
    audience: "Marketplaces, fintechs and platform businesses",
    tagline: "Power your partners' customers, under their brand.",
    summary:
      "Run agents on behalf of the businesses you serve, reaching their end consumers — with per-brand voice, per-partner data isolation, and clean revenue share accounting.",
    accent: "#f43f5e",
    glyph: "◑",
    highlights: [
      {
        title: "Nested tenancy",
        body: "Platform → partner → end user. Three levels of isolation, policy inheritance, and independent kill switches.",
      },
      {
        title: "Brand-safe voice packs",
        body: "Each partner gets tone, vocabulary, and forbidden-claim lists enforced by a guardrail model before send.",
      },
      {
        title: "Revenue share accounting",
        body: "Usage attributed to the right partner and end-user cohort, with statements your finance team can reconcile.",
      },
    ],
    capabilities: [
      "Three-tier tenancy & policy inheritance",
      "Per-partner voice, branding and guardrails",
      "Embedded white-label consoles",
      "Partner-scoped analytics & statements",
      "Delegated admin and partner-level kill switch",
      "Data residency per partner region",
    ],
    metrics: [
      { value: "3", label: "Isolation tiers enforced" },
      { value: "1,900+", label: "Partner brands served" },
      { value: "0", label: "Brand-guardrail escapes" },
    ],
    stack: ["Core Router", "Policy Engine", "Meter Bus"],
    snippet: {
      lang: "typescript",
      code: `await elitze.b2b2c.partners.configure("northwind-bank", {
  voice: { tone: "reassuring", forbid: ["guaranteed returns"] },
  residency: "eu",
  endUserMemory: { ttlDays: 180, exportable: true },
  revenueShare: { model: "per-resolution", rate: 0.35 },
});`,
    },
  },
  {
    slug: "generative-ai",
    name: "Generative AI",
    short: "Create at scale",
    code: "ELZ-GEN",
    audience: "Content, design, marketing and media teams",
    tagline: "Every asset, every variant, on brand.",
    summary:
      "Text, image, audio, video and code generation wired to your brand system, your asset library, and your legal review — with provenance baked into every output.",
    accent: "#a855f7",
    glyph: "✦",
    highlights: [
      {
        title: "Brand systems as constraints",
        body: "Palettes, type scales, tone rules and legal claims are compiled into the generation call, not pasted into a prompt.",
      },
      {
        title: "Provenance by default",
        body: "C2PA content credentials and a full model/prompt/source trail attach to every asset produced.",
      },
      {
        title: "Variant factories",
        body: "Generate thousands of creative permutations, auto-score them, and promote only the winners to production.",
      },
    ],
    capabilities: [
      "Text, image, audio, video & code generation",
      "Brand-kit compilation and enforcement",
      "RAG-grounded copy with citations",
      "C2PA provenance + watermarking",
      "Human review queues with diff view",
      "Asset library sync (Figma, DAM, S3)",
    ],
    metrics: [
      { value: "14k", label: "Assets / day, peak" },
      { value: "97%", label: "First-pass brand compliance" },
      { value: "100%", label: "Outputs with provenance" },
    ],
    stack: ["Generation Mesh", "Knowledge Vault", "Review Queue"],
    snippet: {
      lang: "typescript",
      code: `const batch = await elitze.generative.variants({
  brief: "Spring launch — sustainable running shoe",
  brandKit: "acme-2026",
  surfaces: ["ig-story", "display-300x250", "email-hero"],
  count: 240,
  score: ["brand-fit", "predicted-ctr", "claim-safety"],
  promoteTop: 12,
});`,
    },
  },
  {
    slug: "predictive-ai",
    name: "Predictive AI",
    short: "Forecast and decide",
    code: "ELZ-PRED",
    audience: "Data, risk, growth and operations teams",
    tagline: "Know what happens next. Act before it does.",
    summary:
      "Churn, LTV, demand, fraud, and propensity models trained on your warehouse, monitored for drift, and exposed as low-latency decisions your agents can call mid-run.",
    accent: "#0ea5e9",
    glyph: "◭",
    highlights: [
      {
        title: "Warehouse-native training",
        body: "Train where the data lives — Snowflake, BigQuery, Databricks, Postgres — without building an export pipeline.",
      },
      {
        title: "Drift & fairness monitoring",
        body: "Feature and prediction drift alerts, slice-level performance, and bias audits on a schedule.",
      },
      {
        title: "Decisions, not just scores",
        body: "Wrap a model in a policy and return an action with an expected value, a confidence band, and a reason code.",
      },
    ],
    capabilities: [
      "AutoML for tabular, time-series & sequence data",
      "Online + offline feature store with parity checks",
      "Sub-25ms scoring endpoints",
      "Drift, bias and slice monitoring",
      "Counterfactual and what-if simulation",
      "Reason codes for regulated decisions",
    ],
    metrics: [
      { value: "23ms", label: "p99 scoring latency" },
      { value: "0.91", label: "Median AUC, churn models" },
      { value: "6 hrs", label: "Warehouse → live endpoint" },
    ],
    stack: ["Feature Store", "Model Registry", "Decision Policy"],
    snippet: {
      lang: "python",
      code: `from elitze.predictive import Model

churn = Model.train(
    source="snowflake://analytics.core.subscriptions",
    target="churned_30d",
    horizon="30d",
    monitors=["drift", "slice:plan", "fairness:region"],
)

decision = churn.decide(user_id="u_8812", policy="save-offer-v4")
# -> action="offer_20pct", ev=41.20, confidence=0.88, reason="usage_decline"`,
    },
  },
  {
    slug: "agentic-ai",
    name: "Agentic AI",
    short: "Autonomous, supervised work",
    code: "ELZ-AGENT",
    audience: "Everyone building autonomous systems",
    tagline: "Fleets of agents that finish the job.",
    summary:
      "Supervisor and specialist agents, planning, tool use, shared memory, and negotiated handoffs — running for minutes or months with a human able to step in at any node.",
    accent: "#22c55e",
    glyph: "✳",
    highlights: [
      {
        title: "Supervisor architectures",
        body: "A planner decomposes the goal, routes to specialists, verifies their work, and retries with a different strategy on failure.",
      },
      {
        title: "Shared, scoped memory",
        body: "Episodic, semantic, and procedural memory in the Knowledge Vault — scoped per agent, per fleet, per tenant.",
      },
      {
        title: "Guardrails that hold",
        body: "Budget caps, tool allow-lists, loop detection, and an always-available kill switch per fleet.",
      },
    ],
    capabilities: [
      "Multi-agent supervisor + specialist graphs",
      "MCP and OpenAPI tool binding",
      "Long-horizon runs with durable memory",
      "Self-verification and critique loops",
      "Budget, step and tool guardrails",
      "Live intervention: pause, edit state, resume",
    ],
    metrics: [
      { value: "87%", label: "Autonomous completion rate" },
      { value: "340", label: "Median steps, long-horizon run" },
      { value: "1 click", label: "Fleet-wide kill switch" },
    ],
    stack: ["Graph Runtime", "Knowledge Vault", "Agent Reach", "Policy Engine"],
    snippet: {
      lang: "typescript",
      code: `const fleet = await elitze.agentic.fleet({
  supervisor: "research-lead",
  specialists: ["web-scout", "analyst", "writer", "fact-checker"],
  tools: ["reach.search", "vault.query", "code.sandbox"],
  guardrails: { maxSteps: 500, maxUsd: 12, killSwitch: true },
  verify: "fact-checker must approve before publish",
});

await fleet.run({ goal: "Competitive teardown of the agent-runtime market" });`,
    },
  },
];

export const platformBySlug = (slug: string) =>
  platforms.find((p) => p.slug === slug);
