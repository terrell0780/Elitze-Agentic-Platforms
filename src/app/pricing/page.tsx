import type { Metadata } from "next";
import { PageHero, Section, Cta, Eyebrow } from "@/components/ui";
import { platforms } from "@/lib/platforms";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Usage-based pricing across all ten Elitze platforms.",
};

const tiers = [
  {
    name: "Developer",
    price: "$0",
    unit: "forever",
    blurb: "Everything you need to ship a prototype that isn't a toy.",
    features: [
      "1M agent steps / month",
      "All 10 platforms",
      "Graph Studio (SQLite checkpoints)",
      "Agent Reach: 6 no-auth channels",
      "Knowledge Vault: 1 vault, 10k notes",
      "Community support",
    ],
    cta: "Start free",
    accent: "#8b90a6",
  },
  {
    name: "Growth",
    price: "$2,400",
    unit: "/ month + usage",
    blurb: "For teams with agents in front of real customers.",
    features: [
      "25M agent steps included",
      "Postgres & Redis checkpointers",
      "All 13+ Reach channels",
      "Unlimited vaults, git-backed",
      "Evals in CI with release gating",
      "SSO, audit log, 99.9% SLA",
      "Slack support, 4h response",
    ],
    cta: "Start 30-day trial",
    accent: "#6366f1",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "annual",
    blurb: "Regulated workloads, private deployment, your paper.",
    features: [
      "Unlimited steps, committed spend",
      "VPC, on-prem or air-gapped",
      "Bring your own models (vLLM)",
      "Data residency per partner/region",
      "SOC 2 II, ISO 27001, HIPAA, GDPR",
      "99.99% SLA, named architect",
      "Reason codes & model risk docs",
    ],
    cta: "Talk to sales",
    accent: "#22d3ee",
  },
];

const meters = [
  ["Agent step", "$0.00008", "One node execution in a graph"],
  ["Gateway request", "$0.00002", "On top of provider token cost"],
  ["Cached response", "$0.000002", "Semantic or exact cache hit"],
  ["Reach fetch", "$0.0004", "One page, search or transcript"],
  ["Vault query", "$0.00006", "Hybrid retrieval, any hop depth"],
  ["Prediction", "$0.00003", "One scoring call"],
  ["Generated asset", "$0.004", "Image / audio / video variant"],
  ["Checkpoint GB-month", "$0.18", "Durable run state storage"],
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Pay for work done.{" "}
            <span className="text-muted">Not seats you forgot about.</span>
          </>
        }
        subtitle="One meter across all ten platforms. Set a budget per workspace, per tenant, or per run — and Core enforces it before the spend happens, not after."
      />

      <Section className="py-16 lg:py-24">
        <div className="grid gap-4 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative overflow-hidden rounded-3xl border p-8 ${
                t.featured
                  ? "border-indigo-400/40 bg-[#0a0c18]"
                  : "border-line bg-[#080a12]"
              }`}
            >
              {t.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-indigo-500/20 px-2.5 py-1 text-[10.5px] uppercase tracking-[0.14em] text-indigo-300">
                  Most popular
                </span>
              )}
              <h3 className="text-[15px] font-medium" style={{ color: t.accent }}>
                {t.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight">
                  {t.price}
                </span>
                <span className="text-[13px] text-muted">{t.unit}</span>
              </div>
              <p className="mt-3 text-[13.5px] text-muted">{t.blurb}</p>
              <ul className="mt-7 space-y-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px]">
                    <span style={{ color: t.accent }}>✓</span>
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Cta
                  href={t.name === "Enterprise" ? "/contact" : "/console"}
                  variant={t.featured ? "primary" : "ghost"}
                >
                  {t.cta}
                </Cta>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="border-y border-line bg-[#070810]">
        <Section className="py-16 lg:py-24">
          <Eyebrow>Metered units</Eyebrow>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-4xl">
            Every unit, published
          </h2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] text-left text-[13.5px]">
              <thead className="bg-white/4 text-[11px] uppercase tracking-[0.12em] text-muted">
                <tr>
                  <th className="px-5 py-3.5 font-medium">Unit</th>
                  <th className="px-5 py-3.5 font-medium">Rate</th>
                  <th className="px-5 py-3.5 font-medium">What it covers</th>
                </tr>
              </thead>
              <tbody>
                {meters.map(([u, r, d]) => (
                  <tr key={u} className="border-t border-line hover:bg-white/3">
                    <td className="px-5 py-3.5 font-medium">{u}</td>
                    <td className="px-5 py-3.5 font-mono text-[12.5px] text-cyan-300">
                      {r}
                    </td>
                    <td className="px-5 py-3.5 text-muted">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-[13px] text-muted">
            All {platforms.length} platforms draw from the same balance. Cached
            work is billed at ~2% of an uncached call, which is why most teams
            see spend fall after the first month.
          </p>
        </Section>
      </div>

      <Section className="py-16 lg:py-24">
        <Eyebrow>Questions</Eyebrow>
        <div className="mt-8 grid gap-3 lg:grid-cols-2">
          {[
            [
              "What exactly is an agent step?",
              "One node execution inside a graph — a model call, a tool call, a retrieval, or a routing decision. Retries caused by our infrastructure are never billed.",
            ],
            [
              "Do I pay provider costs separately?",
              "Yes. Model tokens are passed through at provider list price with no markup; Elitze charges only the gateway unit on top.",
            ],
            [
              "Can I cap spend?",
              "Budgets can be set per workspace, tenant, fleet or individual run, with soft warnings and hard stops enforced before a call is made.",
            ],
            [
              "Can I bring my own models?",
              "On Enterprise, yes — point Core at your vLLM, Bedrock, Vertex or Azure deployment and routing treats them as first-class options.",
            ],
            [
              "Is there a migration path off Elitze?",
              "Graphs export as LangGraph code, memory is already Markdown in your Obsidian vault, tools are MCP, traces are OpenTelemetry. Leaving is a copy command.",
            ],
            [
              "What about startups and nonprofits?",
              "$50k in credits for pre-Series-A startups and registered nonprofits, applied against any of the ten platforms.",
            ],
          ].map(([q, a]) => (
            <div
              key={q}
              className="rounded-2xl border border-line bg-[#080a12] p-6"
            >
              <h3 className="text-[15px] font-medium">{q}</h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                {a}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
