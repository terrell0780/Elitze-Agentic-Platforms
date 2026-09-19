import { techBySlug } from "@/lib/tech";
import { TechPage } from "@/components/TechPage";
import { Section, Eyebrow, Code } from "@/components/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Knowledge Vault",
  description:
    "Agent memory as human-readable Markdown: wikilinks, frontmatter, canvas, git-backed history and hybrid vector plus keyword plus graph retrieval.",
  path: "/vault",
});

const t = techBySlug("vault")!;


export default function VaultPage() {
  return (
    <>
      <TechPage
        module={t}
        snippet={{
          lang: "typescript",
          code: `import { Vault } from "@elitze/vault";

const vault = new Vault({
  path: "obsidian://acme/accounts",   // a real Obsidian vault
  sync: "git",                        // every memory change is a commit
  index: ["vector", "bm25", "links"], // hybrid retrieval
});

// agents write memory as Markdown a human can read
await vault.note("accounts/Northwind Bank", {
  frontmatter: { tier: "enterprise", renewal: "2026-11-01", arr: 480_000 },
  body: \`## Renewal thesis
Champion is [[Dana Okafor]]. Blocker is the [[SSO migration]].
Usage up 34% QoQ — see [[Q3 usage review]].\`,
  tags: ["#account", "#renewal-risk/low"],
});

// retrieval follows links, not just embeddings
const ctx = await vault.query("why is Northwind renewing?", {
  hops: 2,
  scope: "accounts/",
});`,
        }}
        extras={[
          {
            title: "Human-readable memory",
            body: "Open the vault in Obsidian, read exactly what your agents believe, and fix a wrong fact by editing a sentence.",
          },
          {
            title: "Wikilinks & backlinks",
            body: "Memory is a graph of [[linked notes]], so retrieval can traverse relationships an embedding search would miss entirely.",
          },
          {
            title: "Git-backed history",
            body: "Every write is a commit. Diff what an agent learned last Tuesday, blame a bad fact to a run, revert it in one command.",
          },
          {
            title: "Hybrid retrieval",
            body: "Dense vectors, BM25 keyword matching and graph traversal are fused and reranked — grounded answers, fewer hallucinations.",
          },
          {
            title: "Canvas maps",
            body: "Agents can draw Obsidian Canvas files: architecture maps, account org charts, incident timelines — visual output humans keep.",
          },
          {
            title: "Scoped namespaces",
            body: "Folder-level scopes per tenant, fleet and agent, with read/write policy enforced by Core before any note is touched.",
          },
        ]}
      />
      <div className="border-t border-line bg-[#070810]">
        <Section className="py-18 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>What a memory actually looks like</Eyebrow>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-4xl">
                No opaque blobs. Just Markdown.
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-muted">
                Most agent platforms store memory as vectors you can never read
                or correct. The Knowledge Vault stores it as files your team
                already knows how to open, review and edit — with frontmatter
                the retriever can filter on and links it can walk.
              </p>
            </div>
            <Code
              lang="markdown"
              code={`---
entity: Northwind Bank
type: account
tier: enterprise
renewal: 2026-11-01
arr: 480000
confidence: 0.91
source_runs: [run_8fa21, run_9cc04]
updated_by: agent:revenue-lead
---

# Northwind Bank

## Renewal thesis
Champion is [[Dana Okafor]] (VP Ops, joined 2024).
Blocker is the [[SSO migration]] — slipped twice.
Usage up 34% QoQ, see [[Q3 usage review]].

## Open risks
- Security review pending #renewal-risk/medium
- Competing eval with [[Vendor X]] — closed 2026-08

> [!verified] Fact checked 2026-09-12 by dana@northwind.com`}
            />
          </div>
        </Section>
      </div>
    </>
  );
}
