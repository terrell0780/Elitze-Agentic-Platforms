import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero, Section, Eyebrow, StatRow, Cta } from "@/components/ui";

export const metadata: Metadata = {
  title: "Company",
  description: `About ${site.legal}.`,
};

const timeline = [
  ["2023", "Elitze founded around one idea: the model isn't the product, the loop is."],
  ["2024", "Core router ships. First three platforms — APIs, PaaS, SaaS — go GA."],
  ["2025", "Graph Studio launches on LangGraph. Knowledge Vault adopts the Obsidian format."],
  ["2026", "Agent Reach brings 13+ live channels. All ten platforms unified under one meter."],
];

const values = [
  ["Outcomes over demos", "A run that finishes is worth a thousand impressive transcripts."],
  ["Legible by default", "If a human can't read the memory or the trace, it isn't production software."],
  ["Governance is a feature", "Budgets, gates and kill switches are why agents get to touch real systems."],
  ["Open where it counts", "Standard protocols, exportable state, honest credit to upstream projects."],
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title={
          <>
            We build the infrastructure{" "}
            <span className="text-muted">agents run on.</span>
          </>
        }
        subtitle={`${site.legal} is a full-stack agentic AI company. Ten platforms, one brain, one promise: the work actually gets finished, and a human can always see how.`}
      >
        <Cta href="/contact">Get in touch</Cta>
      </PageHero>

      <Section className="py-16 lg:py-24">
        <StatRow
          stats={[
            { value: "2023", label: "Founded", sub: "San Francisco & Lisbon" },
            { value: "184", label: "Elitzens", sub: "Across 19 countries" },
            { value: "1,900+", label: "Customers", sub: "Startups to Fortune 100" },
            { value: "$0", label: "Lock-in cost", sub: "Export everything" },
          ]}
        />
      </Section>

      <div className="border-y border-line bg-[#070810]">
        <Section className="py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Timeline</Eyebrow>
              <div className="mt-8 space-y-6">
                {timeline.map(([y, t]) => (
                  <div key={y} className="flex gap-6">
                    <span className="w-14 shrink-0 font-mono text-[13px] text-cyan-300">
                      {y}
                    </span>
                    <p className="text-[14.5px] leading-relaxed text-foreground/80">
                      {t}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Eyebrow>Values</Eyebrow>
              <div className="mt-8 space-y-5">
                {values.map(([t, b]) => (
                  <div key={t}>
                    <h3 className="text-[15.5px] font-semibold tracking-tight">
                      {t}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>

      <Section className="py-16 lg:py-24">
        <Eyebrow>Trust</Eyebrow>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-4xl">
          Compliance, in writing
        </h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "SOC 2 Type II",
            "ISO 27001",
            "ISO 42001 (AI management)",
            "HIPAA",
            "GDPR",
            "CCPA",
            "EU AI Act readiness",
            "Pen-tested quarterly",
            "Sub-processor registry",
            "Model risk documentation",
          ].map((c) => (
            <span
              key={c}
              className="rounded-xl border border-line bg-[#080a12] px-3.5 py-2 text-[13px] text-foreground/75"
            >
              {c}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}
