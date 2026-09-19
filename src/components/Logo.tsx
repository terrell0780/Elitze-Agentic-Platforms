import Link from "next/link";
import { site } from "@/lib/site";

export function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <defs>
        <linearGradient id="elz" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#818cf8" />
          <stop offset="0.55" stopColor="#6366f1" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#elz)" />
      <path
        d="M10 9.5h12M10 16h8.5M10 22.5h12"
        stroke="#05060a"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="23.5" cy="16" r="2.3" fill="#05060a" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 group shrink-0">
      <Mark />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight">
          {site.name}
        </span>
        {!compact && (
          <span className="text-[9.5px] uppercase tracking-[0.18em] text-muted mt-0.5">
            Agentic Platform
          </span>
        )}
      </span>
    </Link>
  );
}
