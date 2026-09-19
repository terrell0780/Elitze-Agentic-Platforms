"use client";

import { useState } from "react";
import { platforms } from "@/lib/platforms";
import { site } from "@/lib/site";
import { Section, Eyebrow } from "./ui";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [picked, setPicked] = useState<string[]>(["agentic-ai"]);

  const toggle = (slug: string) =>
    setPicked((p) =>
      p.includes(slug) ? p.filter((x) => x !== slug) : [...p, slug]
    );

  return (
    <>
      <div className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 grid-bg mask-fade opacity-60" />
        <Section className="relative py-16 lg:py-20">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Tell us what you want automated.
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] text-muted">
            A solutions architect — not an SDR — replies within one business
            day. Or skip this entirely and start free in the console.
          </p>
        </Section>
      </div>

      <Section className="py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl border border-line bg-[#080a12] p-7 lg:p-9"
          >
            {sent ? (
              <div className="py-16 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                  ✓
                </div>
                <h2 className="mt-5 text-xl font-semibold">Message queued</h2>
                <p className="mt-2 text-[14px] text-muted">
                  This is a demo build, so nothing was actually sent — but in
                  production this would open a routed thread with an architect.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-xl border border-line px-4 py-2 text-[13.5px] hover:bg-white/5"
                >
                  Send another
                </button>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["Full name", "Dana Okafor"],
                    ["Work email", "dana@company.com"],
                    ["Company", "Northwind Bank"],
                    ["Role", "VP Engineering"],
                  ].map(([label, ph]) => (
                    <label key={label} className="block">
                      <span className="text-[12.5px] text-muted">{label}</span>
                      <input
                        required
                        placeholder={ph}
                        className="mt-1.5 w-full rounded-xl border border-line bg-white/3 px-3.5 py-2.5 text-[14px] outline-none transition placeholder:text-white/22 focus:border-indigo-400/50"
                      />
                    </label>
                  ))}
                </div>

                <div className="mt-6">
                  <span className="text-[12.5px] text-muted">
                    Which platforms are you interested in?
                  </span>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {platforms.map((p) => {
                      const on = picked.includes(p.slug);
                      return (
                        <button
                          type="button"
                          key={p.slug}
                          onClick={() => toggle(p.slug)}
                          className="rounded-xl border px-3 py-1.5 text-[12.5px] transition"
                          style={{
                            borderColor: on ? `${p.accent}66` : "var(--line)",
                            background: on ? `${p.accent}18` : "transparent",
                            color: on ? p.accent : "var(--muted)",
                          }}
                        >
                          {p.glyph} {p.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <label className="mt-6 block">
                  <span className="text-[12.5px] text-muted">
                    What should the agents do?
                  </span>
                  <textarea
                    rows={5}
                    placeholder="We want to automate renewal research across 1,900 accounts, with a human approving any customer-facing message…"
                    className="mt-1.5 w-full resize-none rounded-xl border border-line bg-white/3 px-3.5 py-2.5 text-[14px] outline-none transition placeholder:text-white/22 focus:border-indigo-400/50"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-7 w-full rounded-xl bg-white px-5 py-3 text-[14px] font-medium text-[#05060a] transition hover:bg-white/90"
                >
                  Send to an architect
                </button>
              </>
            )}
          </form>

          <div className="space-y-4">
            {[
              {
                t: "Start without us",
                b: "1M agent steps free, all ten platforms, no card required.",
                link: "/console",
                cta: "Open the console",
              },
              {
                t: "Read first",
                b: "Quickstarts, graph patterns and the full architecture guide.",
                link: "/docs",
                cta: "Browse docs",
              },
              {
                t: "Security review",
                b: "Security whitepaper, pen test summary, sub-processor registry and DPA on request.",
                link: "/company",
                cta: "Trust & compliance",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-3xl border border-line bg-[#080a12] p-6"
              >
                <h3 className="text-[15.5px] font-semibold tracking-tight">
                  {c.t}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                  {c.b}
                </p>
                <a
                  href={c.link}
                  className="mt-4 inline-block text-[13px] font-medium text-cyan-300"
                >
                  {c.cta} →
                </a>
              </div>
            ))}
            <div className="rounded-3xl border border-line bg-[#080a12] p-6">
              <p className="text-[13px] text-muted">Prefer email?</p>
              <p className="mt-1 font-mono text-[14px]">{site.email}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
