import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { platforms, platformBySlug } from "@/lib/platforms";
import { Section, Eyebrow, Cta, Code } from "@/components/ui";
import { pageMeta, JsonLd, platformJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return platforms.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = platformBySlug(slug);
  if (!p) return { title: "Not found" };
  return pageMeta({
    title: `${p.name} — ${p.short}`,
    description: p.summary,
    path: `/platforms/${p.slug}`,
  });
}

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = platformBySlug(slug);
  if (!p) notFound();

  const idx = platforms.findIndex((x) => x.slug === p.slug);
  const next = platforms[(idx + 1) % platforms.length];

  return (
    <>
      <JsonLd data={platformJsonLd(p)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Platforms", path: "/platforms" },
          { name: p.name, path: `/platforms/${p.slug}` },
        ])}
      />
      <div className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 grid-bg mask-fade opacity-60" />
        <div
          className="pointer-events-none absolute left-1/4 top-[-14rem] h-[30rem] w-[40rem] rounded-full blur-[130px] opacity-25"
          style={{ background: p.accent }}
        />
        <Section className="relative py-20 lg:py-28">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-2xl text-lg"
              style={{
                background: `${p.accent}20`,
                color: p.accent,
                boxShadow: `inset 0 0 0 1px ${p.accent}38`,
              }}
            >
              {p.glyph}
            </div>
            <div>
              <div className="text-[14px] font-medium">{p.name}</div>
              <div className="font-mono text-[11px] text-muted">{p.code}</div>
            </div>
          </div>

          <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {p.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-muted">
            {p.summary}
          </p>
          <p className="mt-4 text-[13px] uppercase tracking-[0.12em] text-muted">
            Built for: {p.audience}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href="/console">Start building</Cta>
            <Cta href="/contact" variant="ghost">
              Book a walkthrough
            </Cta>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {p.metrics.map((m) => (
              <div key={m.label} className="bg-[#05060a] px-6 py-6">
                <div
                  className="text-2xl font-semibold tracking-tight"
                  style={{ color: p.accent }}
                >
                  {m.value}
                </div>
                <div className="mt-1 text-[13px] text-muted">{m.label}</div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section className="py-18 lg:py-24">
        <Eyebrow>How it works</Eyebrow>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {p.highlights.map((h, i) => (
            <div
              key={h.title}
              className="rounded-3xl border border-line bg-[#080a12] p-7"
            >
              <span className="font-mono text-[11px] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[17px] font-semibold tracking-tight">
                {h.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                {h.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <div className="border-y border-line bg-[#070810]">
        <Section className="py-18 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Capabilities</Eyebrow>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-4xl">
                Everything included in {p.name}
              </h2>
              <ul className="mt-8 space-y-3">
                {p.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[14px]">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[11px]"
                      style={{ background: `${p.accent}22`, color: p.accent }}
                    >
                      ✓
                    </span>
                    <span className="text-foreground/80">{c}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-line bg-white/4 px-2.5 py-1 text-[12px] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <Code lang={p.snippet.lang} code={p.snippet.code} />
          </div>
        </Section>
      </div>

      <Section className="py-18 lg:py-24">
        <div className="rounded-3xl border border-line bg-[#080a12] p-8 lg:p-12">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-[12px] uppercase tracking-[0.14em] text-muted">
                Next platform
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {next.name}
              </h3>
              <p className="mt-2 max-w-xl text-[14px] text-muted">
                {next.tagline}
              </p>
            </div>
            <Link
              href={`/platforms/${next.slug}`}
              className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-2.5 text-[14px] font-medium transition hover:bg-white/6"
            >
              Continue <span style={{ color: next.accent }}>→</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
