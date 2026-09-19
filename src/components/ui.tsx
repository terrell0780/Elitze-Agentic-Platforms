import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/4 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-muted">
      {children}
    </span>
  );
}

export function Cta({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14px] font-medium transition";
  return (
    <Link
      href={href}
      className={
        variant === "primary"
          ? `${base} bg-white text-[#05060a] hover:bg-white/90`
          : `${base} border border-line text-foreground hover:bg-white/6`
      }
    >
      {children}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

export function Code({ code, lang }: { code: string; lang?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-[#080a12]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        {lang && (
          <span className="ml-2 font-mono text-[11px] text-muted">{lang}</span>
        )}
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.7] text-[#c8cee0]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function StatRow({
  stats,
}: {
  stats: readonly { value: string; label: string; sub?: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-[#05060a] px-6 py-7">
          <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
          <div className="mt-1.5 text-[13px] text-foreground/80">{s.label}</div>
          {s.sub && <div className="mt-0.5 text-[11.5px] text-muted">{s.sub}</div>}
        </div>
      ))}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 grid-bg mask-fade opacity-60" />
      <Section className="relative py-20 lg:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-muted">
          {subtitle}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </Section>
    </div>
  );
}
