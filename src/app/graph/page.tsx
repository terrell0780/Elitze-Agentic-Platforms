import type { Metadata } from "next";
import { techBySlug } from "@/lib/tech";
import { TechPage } from "@/components/TechPage";

const t = techBySlug("graph")!;

export const metadata: Metadata = {
  title: t.name,
  description: t.summary,
};

export default function GraphPage() {
  return (
    <TechPage
      module={t}
      snippet={{
        lang: "python",
        code: `from elitze.graph import StateGraph, START, END, interrupt
from elitze.checkpoint import PostgresSaver
from elitze.reach import web_search
from elitze.vault import Vault

vault = Vault("obsidian://acme/research")

g = StateGraph(ResearchState)
g.add_node("plan", planner)
g.add_node("research", web_search.as_node(max_sources=12))
g.add_node("recall", vault.as_node(mode="hybrid"))
g.add_node("draft", writer)
g.add_node("review", interrupt(when="confidence < 0.8"))
g.add_node("publish", publish)

g.add_edge(START, "plan")
g.add_edge("plan", "research")
g.add_edge("research", "recall")
g.add_edge("recall", "draft")
g.add_conditional_edges("draft", gate, ["review", "publish"])
g.add_edge("publish", END)

app = g.compile(checkpointer=PostgresSaver.from_env())

# resume a run that was paused three days ago
app.update_state(config, {"approved": True})
app.invoke(None, config)`,
      }}
      extras={[
        {
          title: "Nodes, edges, cycles",
          body: "Model any control flow — loops, retries with a different strategy, fan-out/fan-in, nested subgraphs. No hidden framework magic.",
        },
        {
          title: "Checkpointers",
          body: "Postgres, Redis or SQLite. Every state transition is committed, so a crash, a deploy, or a three-week approval cycle can't lose a run.",
        },
        {
          title: "Interrupts",
          body: "Pause on any edge, surface the full state to a reviewer, accept their edit, resume — with the human's change recorded in lineage.",
        },
        {
          title: "Time travel",
          body: "Fork a production run from any checkpoint, swap the model or prompt, and diff outcomes side by side before you ship the change.",
        },
        {
          title: "Multi-agent",
          body: "Supervisors delegate to specialist subgraphs that inherit checkpointing and HITL automatically. Compose fleets, not spaghetti.",
        },
        {
          title: "Observability",
          body: "Every node emits an OpenTelemetry span and a LangSmith trace: inputs, outputs, tokens, latency, cost, and the routing decision.",
        },
      ]}
    />
  );
}
