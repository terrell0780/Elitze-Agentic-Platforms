import Link from "next/link";
import { site, owner } from "@/lib/site";
import { PageHero, Section, Eyebrow, StatRow, Cta } from "@/components/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Company",
  description:
    "Elitze Agentic Platforms, founded by Terrell Hall — building infrastructure that makes autonomous software accountable.",
  path: "/company",
});


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
        <div className="rounded-3xl border border-line bg-[#080a12] p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500/30 to-cyan-400/20 text-3xl font-semibold">
              TH
            </div>
            <div>
              <Eyebrow>Founder &amp; owner</Eyebrow>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {owner.name}
              </h2>
              <p className="mt-1 text-[14px] text-cyan-300">{owner.role}</p>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
                {owner.bio}
              </p>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
                {owner.name} owns {site.legal} and sets the direction for the
                platform suite, the Core router, and the governance standards
                every agent on the network runs under. Security, privacy and AI
                governance report directly to the CEO&apos;s office.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={owner.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-line px-3.5 py-2 text-[13px] transition hover:bg-white/6"
                >
                  GitHub ↗
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="rounded-xl border border-line px-3.5 py-2 text-[13px] transition hover:bg-white/6"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <StatRow
          stats={[
            { value: "2023", label: "Founded", sub: "San Francisco & Lisbon" },
            { value: "184", label: "Elitzens", sub: "Across 19 countries" },
            { value: "1,900+", label: "Customers", sub: "Startups to Fortune 100" },
            { value: "$0", label: "Lock-in cost", sub: "Export everything" },
          ]}
          />
        </div>
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
        <p className="mt-4 max-w-2xl text-[14.5px] text-muted">
          These are practices in place today. Formal certification status —
          including what is audited, in progress or merely planned — is
          published in full on the{" "}
          <Link href="/trust" className="text-cyan-300 hover:underline">
            Trust Center
          </Link>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "GDPR & CCPA workflows",
            "DPA with SCCs available",
            "BAA available on Enterprise",
            "EU AI Act readiness program",
            "NIST AI RMF–aligned controls",
            "Quarterly penetration testing",
            "Versioned sub-processor registry",
            "Model risk documentation",
            "Coordinated vulnerability disclosure",
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
