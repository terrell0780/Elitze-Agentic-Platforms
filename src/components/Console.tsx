"use client";

import { useEffect, useRef, useState } from "react";
import { platforms } from "@/lib/platforms";
import { Section, Eyebrow } from "./ui";

type Step = {
  node: string;
  detail: string;
  meta: string;
  kind: "route" | "reach" | "vault" | "tool" | "gate" | "done";
};

const SCRIPT: Record<string, Step[]> = {
  "Renewal thesis · Northwind Bank": [
    { node: "intake", detail: "Goal parsed · risk=low · budget tier=balanced", meta: "4ms", kind: "route" },
    { node: "route", detail: "elitze-auto → claude-class for synthesis, small model for extraction", meta: "9ms · $0.0021 est", kind: "route" },
    { node: "plan", detail: "Supervisor emitted 6-node LangGraph · checkpointer=postgres", meta: "graph@v14", kind: "route" },
    { node: "reach.search", detail: "12 sources fetched · 3 from SEC EDGAR, 5 news, 4 docs", meta: "1.8s", kind: "reach" },
    { node: "reach.github", detail: "Scanned 2 public repos for integration signals", meta: "0.6s", kind: "reach" },
    { node: "vault.query", detail: "Walked 2 link hops from accounts/Northwind Bank.md", meta: "31 notes · 14ms", kind: "vault" },
    { node: "analyst", detail: "Usage +34% QoQ · SSO migration flagged as blocker", meta: "6.2s", kind: "tool" },
    { node: "fact-checker", detail: "9 of 9 claims cited · 0 unsupported", meta: "2.1s", kind: "gate" },
    { node: "human gate", detail: "Awaiting vp-sales@acme.com · state checkpointed", meta: "paused", kind: "gate" },
    { node: "vault.write", detail: "Memory updated → accounts/Northwind Bank.md (git commit a91f2)", meta: "done", kind: "done" },
  ],
  "Churn save · consumer cohort 8812": [
    { node: "intake", detail: "Objective=retain · cohort size 41,208", meta: "3ms", kind: "route" },
    { node: "predictive.score", detail: "Churn model v7 scored cohort · AUC 0.91", meta: "23ms p99", kind: "route" },
    { node: "route", detail: "Small model selected — cost per conversation $0.004", meta: "cache hit 38%", kind: "route" },
    { node: "vault.query", detail: "Per-user preference graphs loaded · consent checked", meta: "19ms", kind: "vault" },
    { node: "generative.variants", detail: "240 message variants generated across 3 channels", meta: "11.4s", kind: "tool" },
    { node: "guardrails", detail: "Brand voice + claim safety pass · 4 variants rejected", meta: "0.9s", kind: "gate" },
    { node: "lifecycle.decide", detail: "Next-best action per user · 10% holdout reserved", meta: "2.3s", kind: "tool" },
    { node: "done", detail: "37,087 sends queued · incrementality test armed", meta: "$164.32", kind: "done" },
  ],
  "RFP autofill · 214 questions": [
    { node: "intake", detail: "Document parsed · 214 questions, 9 sections", meta: "1.2s", kind: "route" },
    { node: "route", detail: "Batched to cheapest model clearing 0.93 quality bar", meta: "$0.41 est", kind: "route" },
    { node: "vault.query", detail: "Security policy vault · 1,942 source notes indexed", meta: "44ms", kind: "vault" },
    { node: "reach.read", detail: "Pulled current security whitepaper + control evidence", meta: "1.1s", kind: "reach" },
    { node: "writer", detail: "214 answers drafted · every claim link-cited", meta: "48s", kind: "tool" },
    { node: "fact-checker", detail: "6 answers flagged low-confidence for review", meta: "8.2s", kind: "gate" },
    { node: "human gate", detail: "Routed to security@acme.com · 6 items", meta: "paused", kind: "gate" },
    { node: "done", detail: "208 auto-approved · export ready (.docx)", meta: "72% faster", kind: "done" },
  ],
};

const KIND_COLOR: Record<Step["kind"], string> = {
  route: "#6366f1",
  reach: "#f59e0b",
  vault: "#a855f7",
  tool: "#22c55e",
  gate: "#06b6d4",
  done: "#94a3b8",
};

export function Console() {
  const goals = Object.keys(SCRIPT);
  const [goal, setGoal] = useState(goals[0]);
  const [n, setN] = useState(0);
  const [running, setRunning] = useState(true);
  const selectGoal = (g: string) => {
    setGoal(g);
    setN(0);
    setRunning(true);
  };
  const logRef = useRef<HTMLDivElement>(null);

  const steps = SCRIPT[goal];

  useEffect(() => {
    if (!running || n >= steps.length) return;
    const t = setTimeout(() => setN((v) => v + 1), 780);
    return () => clearTimeout(t);
  }, [n, running, steps.length]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: 99999, behavior: "smooth" });
  }, [n]);

  return (
    <>
      <div className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 grid-bg mask-fade opacity-60" />
        <Section className="relative py-16 lg:py-20">
          <Eyebrow>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live console · demo workspace
          </Eyebrow>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Elitze Console
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] text-muted">
            Every run, every routing decision, every tool call and memory write —
            in one place. Pick a workload below and watch a graph execute.
          </p>
        </Section>
      </div>

      <Section className="py-12 lg:py-16">
        <div className="flex flex-wrap gap-2">
          {goals.map((g) => (
            <button
              key={g}
              onClick={() => selectGoal(g)}
              className={`rounded-xl border px-4 py-2 text-[13px] transition ${
                g === goal
                  ? "border-white/25 bg-white/8 text-foreground"
                  : "border-line text-muted hover:bg-white/4"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          {/* RUN LOG */}
          <div className="overflow-hidden rounded-3xl border border-line bg-[#080a12]">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <div className="flex items-center gap-2.5">
                <span
                  className={`h-2 w-2 rounded-full ${
                    n < steps.length ? "bg-emerald-400 pulseline" : "bg-slate-500"
                  }`}
                />
                <span className="font-mono text-[12px] text-muted">
                  run_8fa21c · graph@v14 · checkpointer=postgres
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setRunning((r) => !r)}
                  className="rounded-lg border border-line px-2.5 py-1 text-[11.5px] text-muted hover:bg-white/5"
                >
                  {running ? "Pause" : "Resume"}
                </button>
                <button
                  onClick={() => {
                    setN(0);
                    setRunning(true);
                  }}
                  className="rounded-lg border border-line px-2.5 py-1 text-[11.5px] text-muted hover:bg-white/5"
                >
                  Replay
                </button>
              </div>
            </div>
            <div
              ref={logRef}
              className="h-[420px] overflow-y-auto p-5 font-mono text-[12.5px]"
            >
              {steps.slice(0, n).map((s, i) => (
                <div key={i} className="mb-3 flex gap-3">
                  <span className="w-6 shrink-0 text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="w-1 shrink-0 rounded-full"
                    style={{ background: KIND_COLOR[s.kind] }}
                  />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span style={{ color: KIND_COLOR[s.kind] }}>{s.node}</span>
                      <span className="text-[10.5px] text-muted">{s.meta}</span>
                    </div>
                    <div className="mt-0.5 text-[#aab0c6]">{s.detail}</div>
                  </div>
                </div>
              ))}
              {n < steps.length && (
                <div className="flex gap-3 text-muted">
                  <span className="w-6" />
                  <span className="animate-pulse">▍executing…</span>
                </div>
              )}
              {n >= steps.length && (
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/8 px-4 py-3 text-emerald-300">
                  run complete · {steps.length} nodes · all checkpoints committed
                </div>
              )}
            </div>
          </div>

          {/* SIDE PANELS */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-line bg-[#080a12] p-5">
              <h3 className="text-[13px] uppercase tracking-[0.12em] text-muted">
                Run economics
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {[
                  ["Steps", `${n}/${steps.length}`],
                  ["Cost", `$${(n * 0.0184).toFixed(4)}`],
                  ["Cache hits", `${Math.min(n * 4, 31)}%`],
                  ["Tokens", `${(n * 1842).toLocaleString()}`],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="text-[11px] text-muted">{k}</div>
                    <div className="mt-0.5 text-lg font-semibold tabular-nums">
                      {v}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/8">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300 transition-all duration-500"
                  style={{ width: `${(n / steps.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="rounded-3xl border border-line bg-[#080a12] p-5">
              <h3 className="text-[13px] uppercase tracking-[0.12em] text-muted">
                Platforms engaged
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {platforms.map((p, i) => {
                  const on = i < Math.ceil((n / steps.length) * 6);
                  return (
                    <span
                      key={p.slug}
                      className="rounded-lg border px-2.5 py-1 text-[11.5px] transition"
                      style={{
                        borderColor: on ? `${p.accent}55` : "var(--line)",
                        background: on ? `${p.accent}16` : "transparent",
                        color: on ? p.accent : "var(--muted)",
                      }}
                    >
                      {p.glyph} {p.name}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-line bg-[#080a12] p-5">
              <h3 className="text-[13px] uppercase tracking-[0.12em] text-muted">
                Guardrails
              </h3>
              <ul className="mt-4 space-y-2.5 text-[13px]">
                {[
                  ["Budget cap", "$12.00 / run"],
                  ["Max steps", "500"],
                  ["Tool allow-list", "9 tools"],
                  ["Human gate", "on high risk"],
                  ["Kill switch", "armed"],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-center justify-between">
                    <span className="text-muted">{k}</span>
                    <span className="font-mono text-[12px]">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
