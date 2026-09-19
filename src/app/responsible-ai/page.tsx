import { pageMeta, JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { responsiblePrinciples, prohibitedUses } from "@/lib/trust";
import { site, owner } from "@/lib/site";
import { PageHero, Section, Eyebrow, Cta } from "@/components/ui";

export const metadata = pageMeta({
  title: "Responsible AI",
  description:
    "Our AI governance commitments: human authority, legibility, grounded output, disclosure, fairness monitoring, data minimization and prohibited uses.",
  path: "/responsible-ai",
});

export default function ResponsibleAiPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Trust Center", path: "/trust" },
          { name: "Responsible AI", path: "/responsible-ai" },
        ])}
      />

      <PageHero
        eyebrow="Responsible AI"
        title={
          <>
            Autonomy is granted,{" "}
            <span className="text-muted">never assumed.</span>
          </>
        }
        subtitle="These commitments are enforced in the product, not just stated on a page. Where a principle below has a mechanism, that mechanism ships on every plan."
      >
        <div className="flex flex-wrap gap-3">
          <Cta href="/guardrails">How it&apos;s enforced</Cta>
          <Cta href="/trust" variant="ghost">
            Trust Center
          </Cta>
        </div>
      </PageHero>

      <Section className="py-16 lg:py-24">
        <Eyebrow>Principles</Eyebrow>
        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {responsiblePrinciples.map((p, i) => (
            <div key={p.title} className="bg-[#05060a] p-7">
              <span className="font-mono text-[11px] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[16.5px] font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <div className="border-y border-line bg-[#070810]">
        <Section className="py-16 lg:py-24">
          <Eyebrow>Acceptable use</Eyebrow>
          <h2 className="mt-5 max-w-3xl text-2xl font-semibold tracking-tight sm:text-4xl">
            What you may not build here
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] text-muted">
            These restrictions are incorporated into the Terms of Service.
            Accounts found in violation are suspended, and where a customer
            serves their own end users through the platform, equivalent
            restrictions must be passed through.
          </p>
          <ul className="mt-10 grid gap-3 lg:grid-cols-2">
            {prohibitedUses.map((u) => (
              <li
                key={u}
                className="flex items-start gap-3 rounded-2xl border border-line bg-[#080a12] p-5"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-rose-400/15 text-[11px] text-rose-300">
                  ✕
                </span>
                <span className="text-[13.5px] leading-relaxed text-foreground/75">
                  {u}
                </span>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <Section className="py-16 lg:py-24">
        <Eyebrow>Governance</Eyebrow>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-4xl">
          How decisions get made
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {[
            {
              t: "Risk classification before launch",
              b: "Every agent template is classified by potential impact on people. Higher classifications require human approval gates, reason codes and documented evaluation before they can be deployed.",
            },
            {
              t: "Evaluation in the release path",
              b: "Golden datasets, groundedness scoring and slice-level fairness checks run on every deploy. A regression blocks the rollout rather than generating a ticket.",
            },
            {
              t: "Incident review",
              b: "Any guardrail escape, harmful output or governance failure triggers a review with full run replay. Findings become new evals so the same failure cannot ship twice.",
            },
            {
              t: "Executive accountability",
              b: `AI governance reports to ${owner.name}, ${owner.role}. Policy changes that widen what agents may do autonomously require sign-off at that level.`,
            },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-3xl border border-line bg-[#080a12] p-7"
            >
              <h3 className="text-[16.5px] font-semibold tracking-tight">
                {x.t}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                {x.b}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-line bg-[#080a12] p-7">
          <h3 className="text-[15px] font-semibold tracking-tight">
            Raise a concern
          </h3>
          <p className="mt-2.5 max-w-2xl text-[13.5px] leading-relaxed text-muted">
            If you believe an agent built on Elitze has caused harm, or that
            this policy is being violated, contact{" "}
            <span className="font-mono text-foreground/85">{site.email}</span>.
            Reports are reviewed by the governance team and escalated to the
            CEO&apos;s office where warranted.
          </p>
        </div>
      </Section>
    </>
  );
}
