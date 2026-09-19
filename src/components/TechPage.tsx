import type { TechModule } from "@/lib/tech";
import { Section, Eyebrow, Cta, Code } from "./ui";

export function TechPage({
  module: t,
  extras,
  snippet,
}: {
  module: TechModule;
  extras?: { title: string; body: string }[];
  snippet?: { lang: string; code: string };
}) {
  return (
    <>
      <div className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 grid-bg mask-fade opacity-60" />
        <div
          className="pointer-events-none absolute left-1/3 top-[-14rem] h-[28rem] w-[40rem] rounded-full blur-[130px] opacity-25"
          style={{ background: t.accent }}
        />
        <Section className="relative py-20 lg:py-28">
          <Eyebrow>{t.basedOn}</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {t.name}
          </h1>
          <p className="mt-3 text-[15px] uppercase tracking-[0.14em] text-muted">
            {t.kicker}
          </p>
          <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-muted">
            {t.summary}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href="/docs">Read the docs</Cta>
            <Cta href="/console" variant="ghost">
              Try it free
            </Cta>
          </div>
        </Section>
      </div>

      <Section className="py-18 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <Eyebrow>What you get</Eyebrow>
            <ul className="mt-8 space-y-3">
              {t.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[14.5px]">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[11px]"
                    style={{ background: `${t.accent}22`, color: t.accent }}
                  >
                    ✓
                  </span>
                  <span className="text-foreground/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          {snippet && <Code lang={snippet.lang} code={snippet.code} />}
        </div>
      </Section>

      {extras && (
        <div className="border-y border-line bg-[#070810]">
          <Section className="py-18 lg:py-24">
            <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {extras.map((e) => (
                <div key={e.title} className="bg-[#070810] p-7">
                  <h3 className="text-[16.5px] font-semibold tracking-tight">
                    {e.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                    {e.body}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      )}

      {t.repos.length > 0 && (
        <Section className="py-18 lg:py-24">
          <Eyebrow>Upstream projects</Eyebrow>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-4xl">
            Open source we build on
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.repos.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-line bg-[#080a12] p-6 transition hover:border-white/20"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12.5px]">{r.name}</span>
                  <span className="text-muted transition-transform group-hover:translate-x-0.5">
                    ↗
                  </span>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  {r.why}
                </p>
              </a>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
