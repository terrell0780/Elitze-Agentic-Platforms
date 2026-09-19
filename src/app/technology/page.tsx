import Link from "next/link";
import { techModules, differentiators } from "@/lib/tech";
import { site } from "@/lib/site";
import { PageHero, Section, Eyebrow, Cta, StatRow } from "@/components/ui";
import { CoreDiagram } from "@/components/CoreDiagram";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Technology",
  description:
    "Elitze Core is the decisioning brain over all ten platforms: expected-value model routing, semantic caching, policy enforcement and a closed learning loop.",
  path: "/technology",
});

const core = techModules[0];


const layers = [
  {
    name: "Surface layer",
    items: ["Console", "Embedded SDKs", "OpenAI-compatible API", "MCP server"],
  },
  {
    name: "Platform layer",
    items: ["10 Elitze platforms", "Per-platform policy", "Metering & entitlements"],
  },
  {
    name: "Orchestration layer",
    items: ["Graph Studio (LangGraph)", "Checkpoint store", "Interrupts & approvals"],
  },
  {
    name: "Intelligence layer",
    items: ["Core router", "Model mesh (40+ models)", "Semantic cache", "Evals"],
  },
  {
    name: "Knowledge layer",
    items: ["Knowledge Vault (Obsidian)", "Feature store", "Hybrid retrieval"],
  },
  {
    name: "Context layer",
    items: ["Agent Reach (13+ channels)", "Connectors", "Redaction gateway"],
  },
  {
    name: "Trust layer",
    items: ["Guardrails", "Provenance", "OTel traces", "Audit ledger"],
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow={site.brain}
        title={
          <>
            The decisioning brain{" "}
            <span className="text-muted">behind every platform.</span>
          </>
        }
        subtitle={core.summary}
      >
        <div className="flex flex-wrap gap-3">
          <Cta href="/docs">Architecture docs</Cta>
          <Cta href="/open-source" variant="ghost">
            Open source inside
          </Cta>
        </div>
      </PageHero>

      <Section className="py-16 lg:py-24">
        <StatRow stats={site.stats} />
        <div className="mt-16">
          <CoreDiagram />
        </div>
      </Section>

      <div className="border-y border-line bg-[#070810]">
        <Section className="py-16 lg:py-24">
          <Eyebrow>The stack</Eyebrow>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-4xl">
            Seven layers, one control plane
          </h2>
          <div className="mt-10 space-y-2">
            {layers.map((l, i) => (
              <div
                key={l.name}
                className="flex flex-col gap-3 rounded-2xl border border-line bg-[#080a12] px-6 py-5 sm:flex-row sm:items-center"
                style={{ marginInline: `${i * 10}px` }}
              >
                <span className="w-48 shrink-0 text-[14px] font-medium">
                  {l.name}
                </span>
                <div className="flex flex-wrap gap-2">
                  {l.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-lg border border-line bg-white/4 px-2.5 py-1 text-[12px] text-muted"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section className="py-16 lg:py-24">
        <Eyebrow>Core modules</Eyebrow>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {techModules.slice(1).map((t) => (
            <Link
              key={t.slug}
              href={`/${t.slug}`}
              className="group rounded-3xl border border-line bg-[#080a12] p-7 transition hover:-translate-y-1 hover:border-white/20"
            >
              <span
                className="inline-block rounded-full px-2.5 py-1 text-[10.5px] uppercase tracking-[0.14em]"
                style={{ background: `${t.accent}1c`, color: t.accent }}
              >
                {t.basedOn}
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                {t.name}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                {t.summary}
              </p>
              <span
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium"
                style={{ color: t.accent }}
              >
                Explore
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <div className="border-t border-line bg-[#070810]">
        <Section className="py-16 lg:py-24">
          <Eyebrow>Design principles</Eyebrow>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-[#070810] p-7">
                <h3 className="text-[16.5px] font-semibold tracking-tight">
                  {d.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
