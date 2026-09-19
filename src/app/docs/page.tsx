import Link from "next/link";
import type { Metadata } from "next";
import { platforms } from "@/lib/platforms";
import { PageHero, Section, Eyebrow, Code } from "@/components/ui";

export const metadata: Metadata = {
  title: "Docs",
  description: "Quickstarts, SDK references and architecture guides for Elitze.",
};

const guides = [
  {
    group: "Get started",
    items: [
      ["Quickstart: your first agent", "5 min"],
      ["Install the CLI & emulator", "3 min"],
      ["Authentication & API keys", "4 min"],
      ["Local development loop", "6 min"],
    ],
  },
  {
    group: "Graph Studio",
    items: [
      ["Nodes, edges and state", "8 min"],
      ["Checkpointers & durable runs", "7 min"],
      ["Human-in-the-loop interrupts", "6 min"],
      ["Time-travel debugging", "5 min"],
      ["Supervisor + specialist fleets", "9 min"],
    ],
  },
  {
    group: "Agent Reach",
    items: [
      ["Enabling channels", "4 min"],
      ["reach doctor & self-repair", "3 min"],
      ["Citations and provenance", "5 min"],
      ["Rate governors & caching", "5 min"],
    ],
  },
  {
    group: "Knowledge Vault",
    items: [
      ["Vault layout & frontmatter", "6 min"],
      ["Obsidian sync plugin", "4 min"],
      ["Hybrid retrieval tuning", "8 min"],
      ["Memory scopes & policy", "6 min"],
    ],
  },
  {
    group: "Operate",
    items: [
      ["Budgets and kill switches", "5 min"],
      ["Evals in CI", "7 min"],
      ["OpenTelemetry & LangSmith", "5 min"],
      ["Data residency & redaction", "6 min"],
    ],
  },
];

export default function DocsPage() {
  return (
    <>
      <PageHero
        eyebrow="Documentation"
        title={
          <>
            Build your first agent{" "}
            <span className="text-muted">in about five minutes.</span>
          </>
        }
        subtitle="One SDK, ten platforms. Install the CLI, run the emulator locally, deploy the same graph to production with one command."
      />

      <Section className="py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Eyebrow>Quickstart</Eyebrow>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-4xl">
              Zero to a running graph
            </h2>
            <ol className="mt-8 space-y-5">
              {[
                ["Install", "npm i -g @elitze/cli && elitze login"],
                ["Scaffold", "elitze init research-fleet --template agentic"],
                ["Run locally", "elitze dev  # emulator + vault + reach doctor"],
                ["Deploy", "elitze deploy --env production"],
              ].map(([k, v], i) => (
                <li key={k} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/7 font-mono text-[12px]">
                    {i + 1}
                  </span>
                  <div>
                    <div className="text-[14.5px] font-medium">{k}</div>
                    <code className="mt-1 block font-mono text-[12.5px] text-cyan-300/90">
                      {v}
                    </code>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <Code
            lang="python"
            code={`# agent.py — a supervised research fleet
from elitze import Elitze, guardrails
from elitze.reach import search, github
from elitze.vault import Vault

elitze = Elitze()
vault = Vault("obsidian://acme/research")

fleet = elitze.fleet(
    supervisor="research-lead",
    specialists=["web-scout", "analyst", "writer", "fact-checker"],
    tools=[search, github, vault.query, vault.write],
    guardrails=guardrails(max_steps=500, max_usd=12, kill_switch=True),
    verify="fact-checker must approve before publish",
)

run = fleet.run(
    goal="Teardown of the agent-runtime market",
    approve="research-lead@acme.com",
)

print(run.answer)
print(run.citations)   # every claim → source URL + hash
print(run.cost_usd, run.steps, run.checkpoint_id)`}
          />
        </div>
      </Section>

      <div className="border-y border-line bg-[#070810]">
        <Section className="py-16 lg:py-24">
          <Eyebrow>Guides</Eyebrow>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <div key={g.group}>
                <h3 className="text-[13px] uppercase tracking-[0.12em] text-muted">
                  {g.group}
                </h3>
                <ul className="mt-4 space-y-1">
                  {g.items.map(([title, time]) => (
                    <li key={title}>
                      <span className="flex items-baseline justify-between gap-3 rounded-lg px-2 py-1.5 text-[13.5px] text-foreground/75 transition hover:bg-white/5">
                        {title}
                        <span className="shrink-0 font-mono text-[11px] text-muted">
                          {time}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section className="py-16 lg:py-24">
        <Eyebrow>Platform references</Eyebrow>
        <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {platforms.map((p) => (
            <Link
              key={p.slug}
              href={`/platforms/${p.slug}`}
              className="rounded-xl border border-line bg-[#080a12] px-4 py-3 text-[13.5px] transition hover:border-white/20"
            >
              <span style={{ color: p.accent }}>{p.glyph}</span>{" "}
              {p.name}
              <span className="mt-0.5 block font-mono text-[10.5px] text-muted">
                {p.code}
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
