import type { Metadata } from "next";
import { openSource } from "@/lib/tech";
import { PageHero, Section, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Open source",
  description:
    "The open source projects Elitze Agentic Platform is built on — LangGraph, Agent Reach, Obsidian, MCP and more.",
};

export default function OpenSourcePage() {
  return (
    <>
      <PageHero
        eyebrow="Open source inside"
        title={
          <>
            We build on the commons{" "}
            <span className="text-muted">and we say so.</span>
          </>
        }
        subtitle="Elitze is assembled from the best agent infrastructure the community has produced, hardened for production and wrapped in one control plane. Here's the full list, with what each project does for you."
      />

      <Section className="py-16 lg:py-24">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {openSource.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-2xl border border-line bg-[#080a12] p-6 transition hover:-translate-y-0.5 hover:border-white/20"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-[16px] font-semibold tracking-tight">
                    {r.name}
                  </h3>
                  <p className="mt-0.5 font-mono text-[11.5px] text-muted">
                    {r.org}
                  </p>
                </div>
                <span className="text-muted transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </div>
              <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-muted">
                {r.blurb}
              </p>
              <span className="mt-5 inline-block self-start rounded-md bg-white/6 px-2 py-0.5 text-[11px] text-foreground/70">
                {r.role}
              </span>
            </a>
          ))}
        </div>
      </Section>

      <div className="border-t border-line bg-[#070810]">
        <Section className="py-16 lg:py-24">
          <Eyebrow>Giving back</Eyebrow>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              {
                t: "Upstream first",
                b: "Fixes we make to LangGraph, Agent Reach and MCP servers go upstream before they ship in Elitze.",
              },
              {
                t: "Open plugins",
                b: "The Elitze Obsidian sync plugin and the Reach channel adapters are MIT licensed and public.",
              },
              {
                t: "No lock-in by design",
                b: "Markdown memory, LangGraph code, MCP tools, OTel traces, OpenAI-compatible API. Export everything, any day.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-line bg-[#080a12] p-7"
              >
                <h3 className="text-[16.5px] font-semibold tracking-tight">
                  {x.t}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                  {x.b}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
