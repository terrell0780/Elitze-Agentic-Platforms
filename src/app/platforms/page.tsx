import Link from "next/link";
import type { Metadata } from "next";
import { platforms } from "@/lib/platforms";
import { PageHero, Section, Cta } from "@/components/ui";
import { PlatformGrid } from "@/components/PlatformGrid";

export const metadata: Metadata = {
  title: "Platforms",
  description:
    "Ten interlocking agentic platforms: AI SaaS, Embedded AI, AI PaaS, AI APIs, B2B AI, B2C AI, B2B2C AI, Generative AI, Predictive AI and Agentic AI.",
};

export default function PlatformsPage() {
  return (
    <>
      <PageHero
        eyebrow="The suite"
        title={
          <>
            Ten platforms.{" "}
            <span className="text-muted">One agentic control plane.</span>
          </>
        }
        subtitle="Every Elitze platform runs on the same router, memory layer, policy engine and meter. Start with one surface and add the rest without re-plumbing a thing."
      >
        <div className="flex flex-wrap gap-3">
          <Cta href="/console">Start free</Cta>
          <Cta href="/pricing" variant="ghost">
            See pricing
          </Cta>
        </div>
      </PageHero>

      <Section className="py-16 lg:py-24">
        <PlatformGrid />
      </Section>

      <div className="border-t border-line bg-[#070810]">
        <Section className="py-16 lg:py-24">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
            Compare at a glance
          </h2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[820px] text-left text-[13.5px]">
              <thead className="bg-white/4 text-[11px] uppercase tracking-[0.12em] text-muted">
                <tr>
                  <th className="px-5 py-4 font-medium">Platform</th>
                  <th className="px-5 py-4 font-medium">Code</th>
                  <th className="px-5 py-4 font-medium">Best for</th>
                  <th className="px-5 py-4 font-medium">Core modules</th>
                  <th className="px-5 py-4 font-medium">Headline metric</th>
                </tr>
              </thead>
              <tbody>
                {platforms.map((p) => (
                  <tr
                    key={p.slug}
                    className="border-t border-line transition hover:bg-white/3"
                  >
                    <td className="px-5 py-4">
                      <Link
                        href={`/platforms/${p.slug}`}
                        className="flex items-center gap-2.5 font-medium"
                      >
                        <span style={{ color: p.accent }}>{p.glyph}</span>
                        {p.name}
                      </Link>
                    </td>
                    <td className="px-5 py-4 font-mono text-[11.5px] text-muted">
                      {p.code}
                    </td>
                    <td className="px-5 py-4 text-muted">{p.audience}</td>
                    <td className="px-5 py-4 text-muted">
                      {p.stack.join(" · ")}
                    </td>
                    <td className="px-5 py-4">
                      <span className="font-semibold">{p.metrics[0].value}</span>{" "}
                      <span className="text-muted">{p.metrics[0].label}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      </div>
    </>
  );
}
