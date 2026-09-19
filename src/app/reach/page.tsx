import type { Metadata } from "next";
import { techBySlug } from "@/lib/tech";
import { TechPage } from "@/components/TechPage";
import { Section, Eyebrow } from "@/components/ui";

const t = techBySlug("reach")!;

export const metadata: Metadata = {
  title: t.name,
  description: t.summary,
};

const channels = [
  ["Any web page", "Reader", "No auth"],
  ["Web search", "Semantic", "No auth"],
  ["GitHub", "Repos, issues, releases", "Token"],
  ["Reddit", "Threads & search", "No auth"],
  ["YouTube", "Metadata & transcripts", "No auth"],
  ["Bilibili", "Metadata & subtitles", "Optional"],
  ["X / Twitter", "Posts & search", "Cookies"],
  ["LinkedIn", "Profiles & posts", "Session"],
  ["RSS / Atom", "Feeds & change alerts", "No auth"],
  ["Hacker News", "Stories & comments", "No auth"],
  ["arXiv", "Papers & abstracts", "No auth"],
  ["SEC EDGAR", "Filings", "No auth"],
  ["Docs sites", "Crawl & chunk", "No auth"],
];

export default function ReachPage() {
  return (
    <>
      <TechPage
        module={t}
        snippet={{
          lang: "bash",
          code: `# health check every channel before a run
$ elitze reach doctor
  web        ✓ reader ok          (jina)
  search     ✓ semantic ok        (exa)
  github     ✓ authenticated      (gh)
  youtube    ✓ transcripts ok     (yt-dlp)
  rss        ✓ 42 feeds tracked   (feedparser)
  x/twitter  ⚠ cookies expired    -> elitze reach auth x

# use it from an agent, or straight from the shell
$ elitze reach search "agent runtime market 2026" --n 10 --json
$ elitze reach github "langchain-ai/langgraph" --releases
$ elitze reach read https://example.com/whitepaper --markdown`,
        }}
        extras={[
          {
            title: "One tool contract",
            body: "Thirteen-plus channels normalized into a single reach.* tool surface, so your prompts don't grow a special case per site.",
          },
          {
            title: "Zero key juggling",
            body: "Most channels need no API key at all. The ones that do are handled by the credential broker, never by your prompt.",
          },
          {
            title: "Self-healing",
            body: "reach doctor diagnoses broken channels and repairs them; failures degrade to an alternate channel instead of killing the run.",
          },
          {
            title: "Cached and rate-aware",
            body: "Shared fetch cache across your whole fleet plus per-channel rate governors, so a thousand agents don't get you blocked.",
          },
          {
            title: "Provenance on every fetch",
            body: "URL, retrieval timestamp, and content hash ride along with the text, so downstream citations are always verifiable.",
          },
          {
            title: "MCP native",
            body: "Reach is exposed as an MCP server — usable from Elitze agents, LangGraph nodes, or any third-party MCP client you already run.",
          },
        ]}
      />
      <div className="border-t border-line bg-[#070810]">
        <Section className="py-18 lg:py-24">
          <Eyebrow>Channel coverage</Eyebrow>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[560px] text-left text-[13.5px]">
              <thead className="bg-white/4 text-[11px] uppercase tracking-[0.12em] text-muted">
                <tr>
                  <th className="px-5 py-3.5 font-medium">Channel</th>
                  <th className="px-5 py-3.5 font-medium">Capability</th>
                  <th className="px-5 py-3.5 font-medium">Auth</th>
                </tr>
              </thead>
              <tbody>
                {channels.map(([c, cap, auth]) => (
                  <tr key={c} className="border-t border-line hover:bg-white/3">
                    <td className="px-5 py-3.5 font-medium">{c}</td>
                    <td className="px-5 py-3.5 text-muted">{cap}</td>
                    <td className="px-5 py-3.5 text-muted">{auth}</td>
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
