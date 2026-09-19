import Link from "next/link";
import { site } from "@/lib/site";
import { platforms } from "@/lib/platforms";
import { differentiators, openSource, techModules } from "@/lib/tech";
import { guardrailLayers } from "@/lib/trust";
import { Section, Eyebrow, Cta, StatRow, Code } from "@/components/ui";
import { PlatformGrid } from "@/components/PlatformGrid";
import { CoreDiagram } from "@/components/CoreDiagram";

const logos = [
  "NORTHWIND BANK",
  "HELIOGRID",
  "ATLAS FREIGHT",
  "VERDANT HEALTH",
  "KITSCH LABS",
  "MERIDIAN RETAIL",
  "ORBITAL TELECOM",
  "PLATEFUL",
  "CRIMSON AUTO",
  "BLUELINE ENERGY",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg mask-fade" />
        <div className="pointer-events-none absolute left-1/2 top-[-18rem] h-[36rem] w-[62rem] -translate-x-1/2 rounded-full bg-indigo-600/22 blur-[140px]" />
        <div className="pointer-events-none absolute right-[-10rem] top-40 h-[26rem] w-[26rem] rounded-full bg-cyan-500/12 blur-[130px]" />

        <Section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="rise">
            <Eyebrow>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Ten platforms · one agentic brain
            </Eyebrow>
          </div>

          <h1 className="rise mt-7 max-w-5xl text-[2.6rem] font-semibold leading-[1.03] tracking-[-0.03em] sm:text-7xl">
            <span className="text-gradient">Grow your business</span>
            <br />
            with agents that finish the work.
          </h1>

          <p className="rise mt-7 max-w-2xl text-[17px] leading-relaxed text-muted">
            Over a billion decisions run through agentic systems every day.{" "}
            {site.fullName} lets you build, deploy, govern and monetize them —
            across SaaS, embedded, PaaS, APIs, B2B, B2C, B2B2C, generative,
            predictive and fully agentic surfaces.
          </p>

          <div className="rise mt-9 flex flex-wrap gap-3">
            <Cta href="/console">Launch the console</Cta>
            <Cta href="/platforms" variant="ghost">
              Explore all 10 platforms
            </Cta>
          </div>

          <div className="mt-16">
            <StatRow stats={site.stats} />
          </div>
        </Section>
      </div>

      {/* LOGO MARQUEE */}
      <div className="border-y border-line py-7 overflow-hidden">
        <p className="mb-6 text-center text-[11px] uppercase tracking-[0.2em] text-muted">
          Running production agents for
        </p>
        <div className="relative flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-14 pr-14">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-[13px] font-medium tracking-[0.14em] text-white/25"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* AUDIENCE CARDS */}
      <Section className="py-20 lg:py-28">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Let&apos;s get your agents in front of the work
        </h2>
        <p className="mt-5 max-w-2xl text-[16px] text-muted">
          We built Elitze for teams like yours. Support queues, underwriting,
          RFPs, product copilots, lifecycle marketing, forecasting. Whatever it
          is, we&apos;ll help you automate it — with a human still holding the
          wheel.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "For product teams",
              body: "Ship an AI-native product with tenancy, metering and evals handled.",
              link: "/platforms/ai-saas",
              cta: "Build on AI SaaS",
              accent: "#6366f1",
            },
            {
              title: "For enterprises",
              body: "Put governed agents on revenue, back-office and risk workflows.",
              link: "/platforms/b2b-ai",
              cta: "See B2B AI",
              accent: "#f59e0b",
            },
            {
              title: "For platform engineers",
              body: "Durable graph execution, checkpoints and time-travel debugging.",
              link: "/platforms/ai-paas",
              cta: "Run on AI PaaS",
              accent: "#8b5cf6",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-3xl border border-line bg-[#080a12] p-7"
            >
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${c.accent}, transparent)`,
                }}
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full opacity-[0.12] blur-3xl"
                style={{ background: c.accent }}
              />
              <h3 className="relative text-xl font-semibold tracking-tight">
                {c.title}
              </h3>
              <p className="relative mt-3 text-[14px] leading-relaxed text-muted">
                {c.body}
              </p>
              <Link
                href={c.link}
                className="relative mt-7 inline-flex items-center gap-1.5 text-[13.5px] font-medium"
                style={{ color: c.accent }}
              >
                {c.cta}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* CORE */}
      <div className="border-y border-line bg-[#070810]">
        <Section className="py-20 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>{site.brain}</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              One brain. Every platform.{" "}
              <span className="text-muted">Every time.</span>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-muted">
              {site.brainBlurb} Each platform feeds Core the same signal loop —
              so a routing improvement earned in Predictive AI shows up in your
              support copilot the same afternoon.
            </p>
          </div>
          <div className="mt-14">
            <CoreDiagram />
          </div>
        </Section>
      </div>

      {/* PLATFORMS */}
      <Section className="py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>The platform suite</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Ten platforms, fully interlocked
            </h2>
            <p className="mt-5 text-[16px] text-muted">
              Adopt one. Adopt all ten. They share a router, a memory layer, a
              policy engine and a billing meter — so the seams that usually
              leak data simply aren&apos;t there.
            </p>
          </div>
          <Cta href="/platforms" variant="ghost">
            Compare platforms
          </Cta>
        </div>
        <div className="mt-12">
          <PlatformGrid />
        </div>
      </Section>

      {/* TECHNOLOGY MODULES */}
      <div className="border-y border-line bg-[#070810]">
        <Section className="py-20 lg:py-28">
          <Eyebrow>Built on the best of open source</Eyebrow>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Graph Studio. Agent Reach. Knowledge Vault.
          </h2>
          <p className="mt-5 max-w-2xl text-[16px] text-muted">
            We didn&apos;t reinvent the runtime. We took LangGraph for durable
            orchestration, Agent Reach for live internet access, and an
            Obsidian-compatible Markdown vault for memory — then made them
            enterprise-grade and put one control plane over the top.
          </p>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
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
                <p className="mt-1 text-[12.5px] uppercase tracking-[0.1em] text-muted">
                  {t.kicker}
                </p>
                <p className="mt-4 text-[13.5px] leading-relaxed text-foreground/65">
                  {t.summary}
                </p>
                <ul className="mt-5 space-y-1.5">
                  {t.bullets.slice(0, 3).map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-[12.5px] text-muted"
                    >
                      <span style={{ color: t.accent }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <span
                  className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium"
                  style={{ color: t.accent }}
                >
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Section>
      </div>


      {/* TRUST / GUARDRAILS */}
      <div className="border-y border-line bg-[#070810]">
        <Section className="py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Governance</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                Six layers between an instruction and an irreversible action
              </h2>
              <p className="mt-5 text-[16px] text-muted">
                An agent with tool access is a production system with a credit
                card. Guardrails are enforced at six distinct points in every
                run — and they fail closed.
              </p>
            </div>
            <Cta href="/guardrails" variant="ghost">
              See every control
            </Cta>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {guardrailLayers.map((l, i) => (
              <Link
                key={l.name}
                href="/guardrails"
                className="group rounded-2xl border border-line bg-[#080a12] p-6 transition hover:-translate-y-1 hover:border-white/20"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-lg font-mono text-[11.5px]"
                    style={{ background: `${l.accent}1c`, color: l.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10.5px] uppercase tracking-[0.12em] text-muted">
                    {l.stage}
                  </span>
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-tight">
                  {l.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {l.controls[0]}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="text-[12px] uppercase tracking-[0.14em] text-muted">
              Verifiable today:
            </span>
            {[
              "Encryption in transit & at rest",
              "Tenant isolation",
              "Audit ledger on every action",
              "GDPR & CCPA workflows",
              "NIST AI RMF–aligned controls",
            ].map((c) => (
              <span
                key={c}
                className="rounded-lg border border-line bg-[#080a12] px-3 py-1.5 text-[12.5px] text-foreground/70"
              >
                {c}
              </span>
            ))}
            <Link
              href="/trust"
              className="text-[12.5px] font-medium text-cyan-300 hover:underline"
            >
              Full compliance status →
            </Link>
          </div>
        </Section>
      </div>

      {/* CODE */}
      <Section className="py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Developer experience</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Eleven lines to a supervised fleet
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-muted">
              One SDK across all ten platforms. Typed clients for TypeScript,
              Python, Go and Rust. An OpenAI-compatible endpoint if you&apos;d
              rather not install anything at all. MCP tools so any agent
              framework — yours or ours — can drive it.
            </p>
            <ul className="mt-7 space-y-2.5">
              {[
                "OpenAI-compatible /v1 gateway",
                "MCP server exposing every Elitze tool",
                "LangGraph-native graph deploys",
                "Local dev with a one-command emulator",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-[14px]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-400/15 text-[11px] text-emerald-300">
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Cta href="/docs">Read the docs</Cta>
            </div>
          </div>
          <Code
            lang="typescript"
            code={`import { Elitze } from "@elitze/sdk";

const elitze = new Elitze({ apiKey: process.env.ELITZE_API_KEY });

const fleet = await elitze.agentic.fleet({
  supervisor: "revenue-lead",
  specialists: ["web-scout", "analyst", "writer"],
  tools: ["reach.search", "reach.github", "vault.query"],
  memory: { vault: "obsidian://acme/accounts", writeBack: true },
  guardrails: { maxSteps: 500, maxUsd: 12, killSwitch: true },
});

const run = await fleet.run({
  goal: "Build the renewal thesis for Northwind Bank",
  approve: "vp-sales@acme.com",
});

console.log(run.answer, run.citations, run.costUsd);`}
          />
        </div>
      </Section>

      {/* DIFFERENTIATORS */}
      <div className="border-y border-line bg-[#070810]">
        <Section className="py-20 lg:py-28">
          <Eyebrow>Why Elitze</Eyebrow>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Full-stack beats point solutions
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => (
              <div key={d.title} className="bg-[#070810] p-7">
                <span className="font-mono text-[11px] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[16.5px] font-semibold tracking-tight">
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

      {/* OSS */}
      <Section className="py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Open source inside</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Standing on great repositories
            </h2>
          </div>
          <Cta href="/open-source" variant="ghost">
            Full dependency map
          </Cta>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {openSource.slice(0, 6).map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-line bg-[#080a12] p-5 transition hover:border-white/20"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12.5px] text-foreground/85">
                  {r.org}/{r.name.toLowerCase().replace(/\s+/g, "-")}
                </span>
                <span className="text-muted transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </div>
              <p className="mt-2.5 text-[13px] leading-relaxed text-muted">
                {r.blurb}
              </p>
              <span className="mt-3 inline-block rounded-md bg-white/6 px-2 py-0.5 text-[11px] text-foreground/70">
                {r.role}
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <div className="border-t border-line">
        <Section className="py-24 text-center">
          <div className="pointer-events-none absolute left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-600/16 blur-[120px]" />
          <h2 className="relative mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Put {platforms.length} platforms behind one agent.
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-[16px] text-muted">
            Start free with 1M agent steps. No card, no sales call, no
            month-long onboarding.
          </p>
          <div className="relative mt-9 flex flex-wrap justify-center gap-3">
            <Cta href="/console">Open the console</Cta>
            <Cta href="/contact" variant="ghost">
              Talk to an architect
            </Cta>
          </div>
        </Section>
      </div>
    </>
  );
}
