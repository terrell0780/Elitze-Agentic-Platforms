"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#05060a]/85 backdrop-blur-xl border-b border-line"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-5 lg:px-8">
        <Logo />

        <nav
          className="hidden lg:flex items-center gap-1"
          onMouseLeave={() => setMenu(null)}
        >
          {site.nav.map((item) => (
            <div key={item.label} className="relative">
              <Link
                href={item.href}
                onMouseEnter={() => setMenu("children" in item ? item.label : null)}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-[13.5px] text-foreground/80 transition hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
                {"children" in item && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                )}
              </Link>
              {"children" in item && menu === item.label && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="glass w-64 rounded-2xl p-2 shadow-2xl shadow-black/60">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setMenu(null)}
                        className="block rounded-xl px-3 py-2 text-[13.5px] text-foreground/75 transition hover:bg-white/6 hover:text-foreground"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/console"
            className="hidden sm:block rounded-lg px-3.5 py-2 text-[13.5px] text-foreground/80 transition hover:text-foreground"
          >
            Sign in
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-white px-4 py-2 text-[13.5px] font-medium text-[#05060a] transition hover:bg-white/90"
          >
            Deploy an agent
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="lg:hidden rounded-lg border border-line p-2"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d={open ? "M3 3l10 10M13 3L3 13" : "M2 4h12M2 8h12M2 12h12"}
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-[#05060a]/97 px-5 py-4 max-h-[70vh] overflow-y-auto">
          {site.nav.map((item) => (
            <div key={item.label} className="py-1.5">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-1.5 text-sm font-medium"
              >
                {item.label}
              </Link>
              {"children" in item && (
                <div className="ml-3 mt-1 grid grid-cols-2 gap-x-3 border-l border-line pl-3">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="py-1 text-[13px] text-muted"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
