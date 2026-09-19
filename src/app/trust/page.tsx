import Link from "next/link";
import { pageMeta, JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { certifications, securityPractices, subprocessorNotes } from "@/lib/trust";
import { site, owner } from "@/lib/site";
import { PageHero, Section, Eyebrow, Cta } from "@/components/ui";
import { ComplianceCard } from "@/components/ComplianceBadge";

export const metadata = pageMeta({
  title: "Trust Center",
  description:
    "Security, privacy, compliance and AI governance at Elitze: certifications, data handling, sub-processors and the guardrails that keep autonomous agents accountable.",
  path: "/trust",
});

const faqs = [
  {
    q: "Is customer content used to train models?",
    a: "No. Customer content and outputs are never used to train foundation models, and on paid plans model providers operate under zero-retention agreements by default.",
  },
  {
    q: "Where is data processed and stored?",
    a: "You can pin processing and storage to a region per workspace, tenant or partner. Residency is enforced by the router before any call is made.",
  },
  {
    q: "Can an agent act without human approval?",
    a: "Only where you grant it. Any customer-facing, contractual or financial action can require a named approver, and every fleet has a one-click kill switch.",
  },
  {
    q: "How do I report a vulnerability?",
    a: "Email security@elitze.ca. We acknowledge within one business day and operate a coordinated disclosure program with safe harbor for good-faith research.",
  },
];

const pillars = [
  {
    t: "Security",
    d: "Encryption, isolation, secrets brokering and continuous vulnerability management.",
    href: "/security",
    accent: "#06b6d4",
  },
  {
    t: "Guardrails",
    d: "Six enforcement layers between an instruction and an irreversible action.",
    href: "/guardrails",
    accent: "#8b5cf6",
  },
  {
    t: "Responsible AI",
    d: "Human authority, disclosure, fairness monitoring and prohibited uses.",
    href: "/responsible-ai",
    accent: "#22c55e",
  },
  {
    t: "Privacy",
    d: "What we collect, why, how long, and the rights you can exercise.",
    href: "/privacy",
    accent: "#f59e0b",
  },
];

export default function TrustPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Trust Center", path: "/trust" },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <PageHero
        eyebrow="Trust Center"
        title={
          <>
            Autonomy you can{" "}
            <span className="text-muted">actually account for.</span>
          </>
        }
        subtitle="Agents touch real systems, real money and real customers. Everything on this page exists so that when one acts, you can prove what it did, why it did it, and who authorized it."
      >
        <div className="flex flex-wrap gap-3">
          <Cta href="/security">Security practices</Cta>
          <Cta href="/guardrails" variant="ghost">
            See the guardrails
          </Cta>
        </div>
      </PageHero>

      <Section className="py-16 lg:py-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Link
              key={p.t}
              href={p.href}
              className="group rounded-3xl border border-line bg-[#080a12] p-6 transition hover:-translate-y-1 hover:border-white/20"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl text-[15px]"
                style={{ background: `${p.accent}1c`, color: p.accent }}
              >
                ◆
              </span>
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight">
                {p.t}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                {p.d}
              </p>
              <span
                className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium"
                style={{ color: p.accent }}
              >
                Read
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <div className="border-y border-line bg-[#070810]">
        <Section className="py-16 lg:py-24">
          <Eyebrow>Certifications & frameworks</Eyebrow>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-4xl">
            Where we actually stand
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
            We publish the status of every framework rather than a wall of
            logos. Nothing below is claimed as certified unless a signed
            auditor report or certificate exists and we can show it to you.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c) => (
              <ComplianceCard key={c.name} {...c} />
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-amber-400/25 bg-amber-400/6 p-6">
            <h3 className="text-[14.5px] font-semibold text-amber-300">
              What you can ask us for today
            </h3>
            <p className="mt-2 max-w-3xl text-[13.5px] leading-relaxed text-foreground/75">
              Our security whitepaper, architecture and data-flow documentation,
              penetration test summary, sub-processor registry, DPA with
              Standard Contractual Clauses, and a completed CAIQ or SIG
              questionnaire. Where an audit is still in progress we will tell
              you the stage and the expected completion date rather than imply a
              report exists. Request any of it at{" "}
              <span className="font-mono text-foreground/90">{site.email}</span>.
            </p>
          </div>
        </Section>
      </div>

      <Section className="py-16 lg:py-24">
        <Eyebrow>Data handling</Eyebrow>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-4xl">
          How your data is treated
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {securityPractices.map((p) => (
            <div key={p.title} className="bg-[#05060a] p-7">
              <h3 className="text-[16px] font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-line bg-[#080a12] p-7">
          <h3 className="text-[16px] font-semibold tracking-tight">
            Sub-processors
          </h3>
          <ul className="mt-4 space-y-2">
            {subprocessorNotes.map((n) => (
              <li key={n} className="flex gap-3 text-[13.5px] text-muted">
                <span className="text-cyan-300">▸</span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <div className="border-y border-line bg-[#070810]">
        <Section className="py-16 lg:py-24">
          <Eyebrow>Common questions</Eyebrow>
          <div className="mt-8 grid gap-3 lg:grid-cols-2">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-line bg-[#080a12] p-6"
              >
                <h3 className="text-[15px] font-medium">{f.q}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section className="py-16 lg:py-24">
        <div className="rounded-3xl border border-line bg-[#080a12] p-8 lg:p-12">
          <Eyebrow>Accountability</Eyebrow>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight">
            Who is responsible
          </h2>
          <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-muted">
            Security, privacy and AI governance at {site.legal} report directly
            to {owner.name}, {owner.role}. Escalations that cannot be resolved
            through the addresses below reach the CEO&apos;s office within one
            business day.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Security", site.securityEmail],
              ["Privacy", site.privacyEmail],
              ["General", site.email],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-2xl border border-line bg-[#05060a] p-5"
              >
                <div className="text-[12px] uppercase tracking-[0.12em] text-muted">
                  {k}
                </div>
                <div className="mt-1.5 font-mono text-[13.5px]">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
