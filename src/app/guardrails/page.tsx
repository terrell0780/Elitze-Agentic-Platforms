import { pageMeta, JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { guardrailLayers } from "@/lib/trust";
import { PageHero, Section, Eyebrow, Cta, Code } from "@/components/ui";

export const metadata = pageMeta({
  title: "Guardrails",
  description:
    "Six enforcement layers stand between an instruction and an irreversible action: identity, input defense, execution limits, human authority, output validation and audit evidence.",
  path: "/guardrails",
});

export default function GuardrailsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Trust Center", path: "/trust" },
          { name: "Guardrails", path: "/guardrails" },
        ])}
      />

      <PageHero
        eyebrow="Guardrails"
        title={
          <>
            Six layers between an instruction{" "}
            <span className="text-muted">and an irreversible action.</span>
          </>
        }
        subtitle="An agent with tool access is a production system with a credit card. Guardrails are not a content filter bolted on at the end — they are enforced at six distinct points in the run, and they fail closed."
      >
        <div className="flex flex-wrap gap-3">
          <Cta href="/console">See them in a live run</Cta>
          <Cta href="/security" variant="ghost">
            Security practices
          </Cta>
        </div>
      </PageHero>

      <Section className="py-16 lg:py-24">
        <div className="space-y-4">
          {guardrailLayers.map((l, i) => (
            <div
              key={l.name}
              className="overflow-hidden rounded-3xl border border-line bg-[#080a12]"
            >
              <div
                className="h-px w-full"
                style={{
                  background: `linear-gradient(90deg, ${l.accent}, transparent)`,
                }}
              />
              <div className="grid gap-6 p-7 lg:grid-cols-[280px_1fr] lg:p-9">
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-lg font-mono text-[12px]"
                      style={{ background: `${l.accent}1c`, color: l.accent }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-[18px] font-semibold tracking-tight">
                      {l.name}
                    </h2>
                  </div>
                  <span
                    className="mt-4 inline-block rounded-full px-2.5 py-1 text-[10.5px] uppercase tracking-[0.14em]"
                    style={{ background: `${l.accent}14`, color: l.accent }}
                  >
                    {l.stage}
                  </span>
                </div>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {l.controls.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-[13.5px]">
                      <span className="mt-1 shrink-0" style={{ color: l.accent }}>
                        ▸
                      </span>
                      <span className="text-foreground/75">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="border-y border-line bg-[#070810]">
        <Section className="py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Policy as code</Eyebrow>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-4xl">
                Guardrails live in version control
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-muted">
                Every limit is declared alongside the fleet it governs, reviewed
                in a pull request, and enforced by Core before a call is made —
                not audited after the spend. Changing a budget or widening a
                tool allow-list leaves the same trail as changing code.
              </p>
              <ul className="mt-7 space-y-2.5">
                {[
                  "Fail closed — an unavailable policy engine blocks the action",
                  "Budgets enforced pre-flight, not reconciled post-hoc",
                  "Allow-lists are explicit; nothing is granted by default",
                  "Kill switch propagates fleet-wide in under two seconds",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-[14px]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-400/15 text-[11px] text-emerald-300">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <Code
              lang="yaml"
              code={`# guardrails/revenue-fleet.yaml
fleet: revenue-lead
fail_mode: closed

budget:
  per_run_usd: 12.00
  per_tenant_monthly_usd: 2500
  on_exceed: hard_stop

execution:
  max_steps: 500
  max_wall_clock: 30m
  loop_detection: true
  sandbox: no_ambient_credentials

tools:
  allow: [reach.search, reach.github, vault.query, crm.read]
  deny:  [crm.write, payments.*, email.send]

approvals:
  - when: action.touches_customer
    approver: vp-sales@acme.com
    dual_control: false
  - when: action.value_usd > 10000
    approver: cfo@acme.com
    dual_control: true

output:
  require_citations: true
  groundedness_min: 0.85
  on_unsupported_claim: block

kill_switch: armed`}
            />
          </div>
        </Section>
      </div>

      <Section className="py-16 lg:py-24">
        <Eyebrow>What happens when something goes wrong</Eyebrow>
        <h2 className="mt-5 max-w-3xl text-2xl font-semibold tracking-tight sm:text-4xl">
          Containment is a feature, not an incident response plan
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {[
            {
              t: "An agent loops",
              b: "Oscillation detection trips, the run is checkpointed and halted, and the fleet owner is notified with the state diff that caused it.",
            },
            {
              t: "Spend spikes",
              b: "Anomaly monitoring compares against the rolling baseline. Soft warning, then hard stop at the configured ceiling — before the provider is called.",
            },
            {
              t: "Injection in retrieved content",
              b: "Untrusted content is quarantined and stripped of tool authority. The attempt is logged as a security event with the source URL and hash.",
            },
            {
              t: "A model degrades",
              b: "Eval scores drop below the release bar, routing shifts away from that model automatically, and the regression blocks the next deploy.",
            },
            {
              t: "A bad fact enters memory",
              b: "Open the vault, edit the Markdown, commit. Git history shows which run wrote it and every downstream answer that cited it.",
            },
            {
              t: "You need it stopped now",
              b: "One click or one API call halts every run in the fleet, preserves all checkpoints for review, and requires explicit re-arming to resume.",
            },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-3xl border border-line bg-[#080a12] p-7"
            >
              <h3 className="text-[16px] font-semibold tracking-tight">{x.t}</h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                {x.b}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
