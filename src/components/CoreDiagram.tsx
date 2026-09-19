"use client";

import { useEffect, useState } from "react";
import { platforms } from "@/lib/platforms";

const steps = [
  { node: "Intake", detail: "Task classified · intent, risk, budget tier" },
  { node: "Route", detail: "Model + tool path chosen by expected value" },
  { node: "Plan", detail: "Supervisor decomposes into a LangGraph state machine" },
  { node: "Reach", detail: "Agent Reach pulls live web, GitHub, video, RSS context" },
  { node: "Recall", detail: "Knowledge Vault returns linked Markdown memory" },
  { node: "Act", detail: "Tools execute in sandbox · checkpoint committed" },
  { node: "Verify", detail: "Guardrails, evals and human gate before release" },
  { node: "Learn", detail: "Outcome written back — the router gets smarter" },
];

export function CoreDiagram() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
      <div className="relative aspect-square w-full max-w-[520px] mx-auto">
        <div className="absolute inset-0 rounded-full border border-line" />
        <div className="absolute inset-[13%] rounded-full border border-line" />
        <div className="absolute inset-[26%] rounded-full border border-line" />

        {platforms.map((p, i) => {
          const angle = (i / platforms.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(angle) * 43;
          const y = 50 + Math.sin(angle) * 43;
          return (
            <div
              key={p.slug}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl border text-[13px] transition duration-500"
                style={{
                  background: `${p.accent}18`,
                  borderColor: `${p.accent}44`,
                  color: p.accent,
                  transform: active % platforms.length === i ? "scale(1.25)" : "scale(1)",
                }}
                title={p.name}
              >
                {p.glyph}
              </div>
            </div>
          );
        })}

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
          {platforms.map((p, i) => {
            const angle = (i / platforms.length) * Math.PI * 2 - Math.PI / 2;
            return (
              <line
                key={p.slug}
                x1="50"
                y1="50"
                x2={50 + Math.cos(angle) * 43}
                y2={50 + Math.sin(angle) * 43}
                stroke={p.accent}
                strokeWidth="0.35"
                className="dash"
                opacity={0.45}
              />
            );
          })}
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="glass flex h-28 w-28 flex-col items-center justify-center rounded-full text-center">
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
              Elitze
            </span>
            <span className="text-[15px] font-semibold">CORE</span>
            <span className="mt-1 h-1 w-8 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300 pulseline" />
          </div>
        </div>
      </div>

      <div>
        <div className="space-y-1.5">
          {steps.map((s, i) => (
            <button
              key={s.node}
              onMouseEnter={() => setActive(i)}
              className={`flex w-full items-start gap-4 rounded-xl border px-4 py-3 text-left transition ${
                active === i
                  ? "border-white/18 bg-white/6"
                  : "border-transparent hover:bg-white/3"
              }`}
            >
              <span
                className={`mt-0.5 font-mono text-[11px] ${
                  active === i ? "text-cyan-300" : "text-muted"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block text-[14px] font-medium">{s.node}</span>
                <span className="block text-[12.5px] text-muted">{s.detail}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
