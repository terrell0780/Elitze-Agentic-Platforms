import Link from "next/link";
import { platforms } from "@/lib/platforms";

export function PlatformGrid({ limit }: { limit?: number }) {
  const list = limit ? platforms.slice(0, limit) : platforms;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((p) => (
        <Link
          key={p.slug}
          href={`/platforms/${p.slug}`}
          className="group relative overflow-hidden rounded-3xl border border-line bg-[#080a12] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-[0.16] blur-3xl transition-opacity duration-300 group-hover:opacity-40"
            style={{ background: p.accent }}
          />
          <div className="relative flex items-start justify-between">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-[17px]"
              style={{
                background: `${p.accent}1f`,
                color: p.accent,
                boxShadow: `inset 0 0 0 1px ${p.accent}33`,
              }}
            >
              {p.glyph}
            </div>
            <span className="font-mono text-[10px] tracking-wider text-muted">
              {p.code}
            </span>
          </div>
          <h3 className="relative mt-5 text-[17px] font-semibold tracking-tight">
            {p.name}
          </h3>
          <p className="relative mt-1 text-[12px] uppercase tracking-[0.12em] text-muted">
            {p.short}
          </p>
          <p className="relative mt-3 line-clamp-3 text-[13.5px] leading-relaxed text-foreground/65">
            {p.tagline} {p.summary}
          </p>
          <div className="relative mt-5 flex items-center gap-1.5 text-[13px] font-medium">
            <span style={{ color: p.accent }}>Explore</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: p.accent }}
            >
              <path
                d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      ))}
    </div>
  );
}
