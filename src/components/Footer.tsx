import Link from "next/link";
import { site } from "@/lib/site";
import { platforms } from "@/lib/platforms";
import { Mark } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-[#040508]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Mark size={26} />
              <span className="font-semibold tracking-tight">{site.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-muted">
              {site.description}
            </p>
            <div className="mt-6 flex gap-2">
              {["GitHub", "X", "LinkedIn", "Discord"].map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-line px-2.5 py-1 text-[11px] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.16em] text-muted">
              Platforms
            </h4>
            <ul className="mt-4 space-y-2">
              {platforms.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/platforms/${p.slug}`}
                    className="text-[13.5px] text-foreground/70 hover:text-foreground"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.16em] text-muted">
              &nbsp;
            </h4>
            <ul className="mt-4 space-y-2">
              {platforms.slice(5).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/platforms/${p.slug}`}
                    className="text-[13.5px] text-foreground/70 hover:text-foreground"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.16em] text-muted">
              Company
            </h4>
            <ul className="mt-4 space-y-2">
              {[
                ["Technology", "/technology"],
                ["Graph Studio", "/graph"],
                ["Agent Reach", "/reach"],
                ["Knowledge Vault", "/vault"],
                ["Open source", "/open-source"],
                ["Docs", "/docs"],
                ["Pricing", "/pricing"],
                ["Company", "/company"],
                ["Contact", "/contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link
                    href={h}
                    className="text-[13.5px] text-foreground/70 hover:text-foreground"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legal}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Security</span>
            <span>SOC 2 Type II</span>
            <span>Status: operational</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
