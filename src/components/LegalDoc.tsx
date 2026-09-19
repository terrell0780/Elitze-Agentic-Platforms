import type { LegalSection } from "@/lib/legal";
import { LEGAL_UPDATED, LEGAL_EFFECTIVE } from "@/lib/legal";
import { Section, Eyebrow } from "./ui";

export function LegalDoc({
  kicker,
  title,
  intro,
  sections,
  contact,
}: {
  kicker: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  contact: string;
}) {
  return (
    <>
      <div className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 grid-bg mask-fade opacity-50" />
        <Section className="relative py-16 lg:py-20">
          <Eyebrow>{kicker}</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-muted">
            {intro}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <span className="rounded-lg border border-line bg-white/4 px-3 py-1.5 text-[12.5px] text-muted">
              Last updated: {LEGAL_UPDATED}
            </span>
            <span className="rounded-lg border border-line bg-white/4 px-3 py-1.5 text-[12.5px] text-muted">
              Effective: {LEGAL_EFFECTIVE}
            </span>
          </div>
        </Section>
      </div>

      <Section className="py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <nav className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
                Contents
              </p>
              <ul className="mt-4 space-y-1.5 border-l border-line pl-4">
                {sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#s${i}`}
                      className="block text-[12.5px] leading-snug text-muted transition hover:text-foreground"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <article className="max-w-3xl">
            {sections.map((s, i) => (
              <section key={s.heading} id={`s${i}`} className="scroll-mt-24 mb-10">
                <h2 className="text-[19px] font-semibold tracking-tight">
                  {s.heading}
                </h2>
                {s.body.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="mt-3.5 text-[14.5px] leading-[1.75] text-foreground/72"
                  >
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-4 space-y-2">
                    {s.list.map((l) => (
                      <li
                        key={l}
                        className="flex gap-3 text-[14px] leading-relaxed text-foreground/72"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-300" />
                        {l}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="mt-12 rounded-2xl border border-line bg-[#080a12] p-6">
              <h3 className="text-[15px] font-semibold tracking-tight">
                Questions about this document
              </h3>
              <p className="mt-2 text-[13.5px] text-muted">
                Write to{" "}
                <span className="font-mono text-foreground/85">{contact}</span>{" "}
                and a human will respond.
              </p>
            </div>

            <p className="mt-8 text-[12px] leading-relaxed text-muted">
              This document is provided for informational purposes and does not
              constitute legal advice. Have counsel review and adapt it for your
              jurisdiction and business before relying on it in production.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
