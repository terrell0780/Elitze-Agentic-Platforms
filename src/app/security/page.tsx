import { pageMeta, JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { securityPractices, certifications } from "@/lib/trust";
import { site } from "@/lib/site";
import { PageHero, Section, Eyebrow, Cta, Code } from "@/components/ui";
import { ComplianceBadge } from "@/components/ComplianceBadge";

export const metadata = pageMeta({
  title: "Security",
  description:
    "Encryption, tenant isolation, secrets brokering, vulnerability management and coordinated disclosure at Elitze Agentic Platform.",
  path: "/security",
});

const sla = [
  ["Acknowledgement", "1 business day"],
  ["Triage & severity", "3 business days"],
  ["Status updates", "Every 5 business days"],
  ["Critical remediation", "7 days"],
  ["High remediation", "30 days"],
  ["Medium / low", "90 days"],
];

export default function SecurityPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Trust Center", path: "/trust" },
          { name: "Security", path: "/security" },
        ])}
      />

      <PageHero
        eyebrow="Security"
        title={
          <>
            Built for systems{" "}
            <span className="text-muted">that cannot be handed a guess.</span>
          </>
        }
        subtitle="Agents hold credentials, call internal APIs and move money. The platform is designed on the assumption that any single component — including a model — may behave badly."
      >
        <div className="flex flex-wrap gap-3">
          <Cta href="/guardrails">Runtime guardrails</Cta>
          <Cta href="/trust" variant="ghost">
            Trust Center
          </Cta>
        </div>
      </PageHero>

      <Section className="py-16 lg:py-24">
        <Eyebrow>Practices</Eyebrow>
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
      </Section>

      <div className="border-y border-line bg-[#070810]">
        <Section className="py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <Eyebrow>Coordinated disclosure</Eyebrow>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-4xl">
                Report a vulnerability
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-muted">
                Email{" "}
                <span className="font-mono text-foreground/85">
                  {site.securityEmail}
                </span>{" "}
                with a description, reproduction steps, the affected endpoint or
                version, and any proof-of-concept. Please don&apos;t file a
                public issue for a security report.
              </p>

              <div className="mt-8 overflow-hidden rounded-2xl border border-line">
                <table className="w-full text-left text-[13.5px]">
                  <thead className="bg-white/4 text-[11px] uppercase tracking-[0.12em] text-muted">
                    <tr>
                      <th className="px-5 py-3 font-medium">Stage</th>
                      <th className="px-5 py-3 font-medium">Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sla.map(([k, v]) => (
                      <tr key={k} className="border-t border-line">
                        <td className="px-5 py-3">{k}</td>
                        <td className="px-5 py-3 font-mono text-[12.5px] text-cyan-300">
                          {v}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 rounded-2xl border border-emerald-400/25 bg-emerald-400/6 p-6">
                <h3 className="text-[15px] font-semibold text-emerald-300">
                  Safe harbor
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/75">
                  We will not pursue legal action against good-faith research
                  that respects user privacy, avoids service degradation, uses
                  only accounts you own or are permitted to test, and allows
                  reasonable time to remediate before public disclosure.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Code
                lang="text"
                code={`# /.well-known/security.txt
Contact: mailto:${site.securityEmail}
Expires: 2027-09-19T00:00:00.000Z
Preferred-Languages: en
Canonical: https://${site.domain}/.well-known/security.txt
Policy: https://${site.domain}/security
Acknowledgments: https://${site.domain}/security`}
              />
              <div className="rounded-3xl border border-line bg-[#080a12] p-7">
                <h3 className="text-[15px] font-semibold tracking-tight">
                  Out of scope
                </h3>
                <ul className="mt-4 space-y-2">
                  {[
                    "Missing headers with no demonstrated impact",
                    "Volumetric denial of service",
                    "Social engineering of staff or customers",
                    "Scanner output without a working proof-of-concept",
                    "Issues in third-party services we do not control",
                  ].map((x) => (
                    <li key={x} className="flex gap-2.5 text-[13px] text-muted">
                      <span className="text-rose-400">✕</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <Section className="py-16 lg:py-24">
        <Eyebrow>Application hardening</Eyebrow>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-4xl">
          Shipped with this site
        </h2>
        <p className="mt-4 max-w-2xl text-[14.5px] text-muted">
          Defense in depth applies to our own surfaces too. These headers are
          served on every response.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Content-Security-Policy", "Restricts script, style, frame and connect origins"],
            ["Strict-Transport-Security", "2-year max-age, includeSubDomains, preload"],
            ["X-Content-Type-Options", "nosniff — blocks MIME confusion"],
            ["Referrer-Policy", "strict-origin-when-cross-origin"],
            ["Permissions-Policy", "Camera, mic, geolocation and topics disabled"],
            ["Cross-Origin-Opener-Policy", "same-origin process isolation"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="rounded-2xl border border-line bg-[#080a12] p-5"
            >
              <div className="font-mono text-[12px] text-cyan-300">{k}</div>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{v}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="border-t border-line bg-[#070810]">
        <Section className="py-16 lg:py-24">
          <Eyebrow>Compliance status</Eyebrow>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-4xl">
            Claimed only where earned
          </h2>
          <p className="mt-4 max-w-2xl text-[14.5px] text-muted">
            Each framework shows its real state. We do not display a
            certification badge without a signed report or certificate behind
            it.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {certifications.map((c) => (
              <ComplianceBadge key={c.name} name={c.name} state={c.state} />
            ))}
          </div>
          <p className="mt-6 text-[13px] text-muted">
            Full detail and current stage for each item is on the{" "}
            <a href="/trust" className="text-cyan-300 hover:underline">
              Trust Center
            </a>
            .
          </p>
        </Section>
      </div>
    </>
  );
}
