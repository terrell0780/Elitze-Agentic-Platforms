import Link from "next/link";
import { site, owner } from "@/lib/site";
import { platforms } from "@/lib/platforms";
import { Mark } from "./Logo";

const columns = [
  {
    title: "Platforms",
    links: platforms.slice(0, 5).map((p) => [p.name, `/platforms/${p.slug}`]),
  },
  {
    title: "\u00a0",
    links: platforms.slice(5).map((p) => [p.name, `/platforms/${p.slug}`]),
  },
  {
    title: "Technology",
    links: [
      ["Elitze Core", "/technology"],
      ["Graph Studio", "/graph"],
      ["Agent Reach", "/reach"],
      ["Knowledge Vault", "/vault"],
      ["Open source", "/open-source"],
      ["Docs", "/docs"],
      ["Console", "/console"],
    ],
  },
  {
    title: "Trust & company",
    links: [
      ["Trust Center", "/trust"],
      ["Guardrails", "/guardrails"],
      ["Security", "/security"],
      ["Responsible AI", "/responsible-ai"],
      ["Privacy Policy", "/privacy"],
      ["Terms of Service", "/terms"],
      ["Pricing", "/pricing"],
      ["Company", "/company"],
      ["Contact", "/contact"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-[#040508]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Mark size={26} />
              <span className="font-semibold tracking-tight">{site.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-muted">
              {site.description}
            </p>
            <div className="mt-6 space-y-1">
              <p className="text-[12.5px] text-foreground/70">
                Founded by{" "}
                <span className="font-medium text-foreground">{owner.name}</span>
              </p>
              <p className="text-[12px] text-muted">{owner.role}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={owner.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-line px-2.5 py-1 text-[11px] text-muted transition hover:text-foreground"
              >
                GitHub
              </a>
              {["X", "LinkedIn", "Discord"].map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-line px-2.5 py-1 text-[11px] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {columns.map((c, i) => (
            <div key={i}>
              <h4 className="text-[11px] uppercase tracking-[0.16em] text-muted">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {c.links.map(([l, h]) => (
                  <li key={h}>
                    <Link
                      href={h}
                      className="text-[13.5px] text-foreground/70 transition hover:text-foreground"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-[12px] text-muted">
            <p>
              © {new Date().getFullYear()} {owner.name} / {site.legal}. All
              rights reserved.
            </p>
            <p className="mt-1">
              Elitze, Elitze Core, Graph Studio, Agent Reach and Knowledge Vault
              are trademarks of {site.legal}.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-[12px] text-muted">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/security" className="hover:text-foreground">
              Security
            </Link>
            <Link href="/trust" className="hover:text-foreground">
              Trust
            </Link>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
