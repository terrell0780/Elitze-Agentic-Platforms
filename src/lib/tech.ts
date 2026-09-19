export type TechModule = {
  slug: string;
  name: string;
  kicker: string;
  basedOn: string;
  accent: string;
  summary: string;
  bullets: string[];
  repos: { name: string; url: string; why: string }[];
};

export const techModules: TechModule[] = [
  {
    slug: "technology",
    name: "Elitze Core",
    kicker: "The decisioning brain",
    basedOn: "Model routing, caching & policy",
    accent: "#6366f1",
    summary:
      "Core sits above every Elitze platform. It scores each incoming task, picks the model and tool path with the best expected value, enforces budget and policy, and feeds the outcome back into the router so the next decision is better.",
    bullets: [
      "Task classification → model selection in under 9ms",
      "Expected-value routing across 40+ models and 6 providers",
      "Semantic cache shared across every platform",
      "Budget, residency and tool policy enforced at the edge",
      "Every decision logged with its counterfactual",
    ],
    repos: [],
  },
  {
    slug: "graph",
    name: "Graph Studio",
    kicker: "Stateful agent orchestration",
    basedOn: "Built on LangGraph",
    accent: "#8b5cf6",
    summary:
      "Graph Studio is Elitze's visual and code-first orchestration layer, built on LangGraph. Model agent logic as a state machine: nodes are actions, edges are conditions, cycles are allowed. Checkpointers make runs durable; interrupts make them supervisable.",
    bullets: [
      "Nodes, conditional edges, cycles and subgraphs",
      "Durable execution — resume exactly where a run failed",
      "Human-in-the-loop interrupt / inspect / edit / resume",
      "Time-travel replay from any checkpoint",
      "Supervisor + specialist multi-agent composition",
      "Postgres, Redis and SQLite checkpointers",
      "Traces stream to LangSmith and OpenTelemetry",
    ],
    repos: [
      {
        name: "langchain-ai/langgraph",
        url: "https://github.com/langchain-ai/langgraph",
        why: "Graph runtime, checkpointing, interrupts and multi-agent subgraphs.",
      },
      {
        name: "langchain-ai/langchain",
        url: "https://github.com/langchain-ai/langchain",
        why: "Model and tool adapters feeding Core's router.",
      },
    ],
  },
  {
    slug: "reach",
    name: "Agent Reach",
    kicker: "Give your agents the open internet",
    basedOn: "Built on Agent Reach",
    accent: "#f59e0b",
    summary:
      "Agent Reach is the read-and-search layer that lets Elitze agents see past your firewall: web pages, search, GitHub, Reddit, YouTube transcripts, RSS, and social platforms — through one unified tool contract, with per-channel auth, rate limits and caching handled for you.",
    bullets: [
      "13+ channels behind a single tool interface",
      "Web reader + semantic web search with no key juggling",
      "GitHub repo, issue and release discovery",
      "YouTube / video transcript extraction",
      "RSS and newsroom monitoring with change alerts",
      "Per-channel health checks (reach doctor) and self-repair",
      "Exposed to agents as MCP tools — usable from any framework",
    ],
    repos: [
      {
        name: "Panniantong/Agent-Reach",
        url: "https://github.com/Panniantong/Agent-Reach",
        why: "Multi-platform internet access for agents — the basis of the Reach channel set.",
      },
      {
        name: "EdisonChenAI/agent-reach",
        url: "https://github.com/EdisonChenAI/agent-reach",
        why: "Channel tooling and the doctor diagnostic model.",
      },
      {
        name: "modelcontextprotocol/servers",
        url: "https://github.com/modelcontextprotocol/servers",
        why: "MCP server catalog Reach wraps for tool exposure.",
      },
    ],
  },
  {
    slug: "vault",
    name: "Knowledge Vault",
    kicker: "Memory your team can read",
    basedOn: "Obsidian-compatible, Markdown-native",
    accent: "#a855f7",
    summary:
      "Agent memory shouldn't be an opaque vector blob. The Knowledge Vault stores episodic, semantic and procedural memory as linked Markdown in an Obsidian-compatible vault — so a human can open the folder, follow the backlinks, fix a wrong fact, and the agents pick it up on the next run.",
    bullets: [
      "Plain Markdown + YAML frontmatter — no lock-in",
      "Obsidian-compatible wikilinks, tags and graph view",
      "Bi-directional sync: agent writes, human edits, agent re-reads",
      "Hybrid retrieval — vector + BM25 + graph traversal",
      "Canvas support for agent-drawn architecture maps",
      "Git-backed history: every memory change is a diff",
      "Scoped namespaces per tenant, fleet and agent",
    ],
    repos: [
      {
        name: "obsidianmd/obsidian-releases",
        url: "https://github.com/obsidianmd/obsidian-releases",
        why: "Vault format, plugin and canvas compatibility target.",
      },
      {
        name: "obsidian-community",
        url: "https://github.com/obsidian-community",
        why: "Community plugin conventions for the Elitze sync plugin.",
      },
    ],
  },
];

export const techBySlug = (slug: string) =>
  techModules.find((t) => t.slug === slug);

export const openSource = [
  {
    name: "LangGraph",
    org: "langchain-ai",
    url: "https://github.com/langchain-ai/langgraph",
    role: "Graph Studio runtime",
    blurb:
      "Stateful, cyclic agent orchestration with durable checkpoints and human-in-the-loop interrupts.",
  },
  {
    name: "Agent Reach",
    org: "Panniantong",
    url: "https://github.com/Panniantong/Agent-Reach",
    role: "Reach channels",
    blurb:
      "One CLI giving agents read and search access to 13+ internet platforms with zero API fees.",
  },
  {
    name: "Obsidian",
    org: "obsidianmd",
    url: "https://github.com/obsidianmd/obsidian-releases",
    role: "Knowledge Vault format",
    blurb:
      "Markdown vault, wikilinks, tags and canvas — human-readable agent memory.",
  },
  {
    name: "Model Context Protocol",
    org: "modelcontextprotocol",
    url: "https://github.com/modelcontextprotocol/servers",
    role: "Tool interoperability",
    blurb:
      "Standard tool contract so Elitze agents can call — and be called by — any MCP client.",
  },
  {
    name: "LiteLLM",
    org: "BerriAI",
    url: "https://github.com/BerriAI/litellm",
    role: "Provider fanout",
    blurb: "Unified completion API and failover across every major model provider.",
  },
  {
    name: "Temporal",
    org: "temporalio",
    url: "https://github.com/temporalio/temporal",
    role: "Long-horizon durability",
    blurb: "Workflow engine backing runs that live for weeks, not seconds.",
  },
  {
    name: "Qdrant",
    org: "qdrant",
    url: "https://github.com/qdrant/qdrant",
    role: "Vector retrieval",
    blurb: "Hybrid dense + sparse search under the Knowledge Vault.",
  },
  {
    name: "Ragas",
    org: "explodinggradients",
    url: "https://github.com/explodinggradients/ragas",
    role: "Eval harness",
    blurb: "Groundedness and faithfulness scoring in the release pipeline.",
  },
  {
    name: "Guardrails",
    org: "guardrails-ai",
    url: "https://github.com/guardrails-ai/guardrails",
    role: "Output validation",
    blurb: "Schema, claim and safety validation before a response leaves the gateway.",
  },
  {
    name: "OpenTelemetry",
    org: "open-telemetry",
    url: "https://github.com/open-telemetry/opentelemetry-python",
    role: "Observability",
    blurb: "Spans on every node, tool call and model invocation.",
  },
  {
    name: "vLLM",
    org: "vllm-project",
    url: "https://github.com/vllm-project/vllm",
    role: "Self-hosted inference",
    blurb: "High-throughput serving for private and on-prem deployments.",
  },
  {
    name: "DSPy",
    org: "stanfordnlp",
    url: "https://github.com/stanfordnlp/dspy",
    role: "Prompt optimization",
    blurb: "Compiles prompts against your evals instead of hand-tuning them.",
  },
];

export const differentiators = [
  {
    title: "Ten platforms, one brain",
    body: "AppLovin unified ad demand, supply and measurement. Elitze unifies generation, prediction, orchestration and reach — every platform trains the same router.",
  },
  {
    title: "Memory a human can read",
    body: "Obsidian-compatible Markdown vaults instead of opaque embeddings. Open the folder, fix the fact, ship the correction.",
  },
  {
    title: "Durable by construction",
    body: "LangGraph checkpoints mean a run survives a deploy, a crash, or a three-week approval cycle.",
  },
  {
    title: "Agents that see the internet",
    body: "Agent Reach wires in 13+ live channels so your agents research from the open web, not a stale index.",
  },
  {
    title: "Open protocols, no lock-in",
    body: "MCP tools, OpenAI-compatible APIs, Markdown memory, OTel traces. Export everything, any day.",
  },
  {
    title: "Governance that ships",
    body: "Budgets, approval gates, reason codes, provenance and a kill switch — built in, not bolted on.",
  },
];
