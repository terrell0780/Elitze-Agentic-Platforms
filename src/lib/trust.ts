export const guardrailLayers = [
  {
    name: "Identity & access",
    accent: "#6366f1",
    stage: "Before the run",
    controls: [
      "SSO (SAML 2.0, OIDC) with SCIM user lifecycle",
      "Role-based access down to the individual agent and tool",
      "Short-lived, scoped credentials brokered per run — never in prompts",
      "Hardware-key MFA enforcement for privileged roles",
      "Just-in-time elevation with automatic expiry",
    ],
  },
  {
    name: "Input & prompt defense",
    accent: "#06b6d4",
    stage: "On every request",
    controls: [
      "Prompt-injection detection on all untrusted retrieved content",
      "Untrusted content quarantined and never granted tool authority",
      "PII detection with tokenized replacement at the boundary",
      "Schema validation before a payload reaches a model",
      "Jailbreak and role-override classifiers on the ingress path",
    ],
  },
  {
    name: "Execution limits",
    accent: "#8b5cf6",
    stage: "During the run",
    controls: [
      "Hard budget caps per run, fleet, tenant and workspace",
      "Maximum step counts with loop and oscillation detection",
      "Tool allow-lists — an agent cannot call what it was not granted",
      "Network egress allow-lists per fleet",
      "Sandboxed code execution with no ambient credentials",
      "Wall-clock timeouts with graceful checkpointed shutdown",
    ],
  },
  {
    name: "Human authority",
    accent: "#f59e0b",
    stage: "At decision points",
    controls: [
      "Approval gates on any customer-facing, contractual or financial action",
      "Interrupt, inspect state, edit, and resume at any graph edge",
      "Named approvers with signed, timestamped decision records",
      "Fleet-wide kill switch reachable in one click or one API call",
      "Dual-control requirement for high-risk action classes",
    ],
  },
  {
    name: "Output validation",
    accent: "#22c55e",
    stage: "Before release",
    controls: [
      "Groundedness scoring — unsupported claims are blocked, not flagged",
      "Citation enforcement with source URL and content hash",
      "Brand voice and forbidden-claim checks per tenant",
      "Safety, toxicity and regulated-advice classifiers",
      "Structured-output repair with fail-closed defaults",
    ],
  },
  {
    name: "Evidence & audit",
    accent: "#a855f7",
    stage: "After the run",
    controls: [
      "Append-only audit ledger of every decision and tool call",
      "OpenTelemetry span per node with cost and latency",
      "Reason codes on regulated decisions",
      "C2PA provenance on generated media",
      "Full run replay from any checkpoint for incident review",
    ],
  },
];

export const securityPractices = [
  {
    title: "Encryption",
    body: "TLS 1.3 in transit and AES-256 at rest. Per-tenant envelope encryption with customer-managed keys available on Enterprise.",
  },
  {
    title: "Isolation",
    body: "Tenant data is separated at the storage, memory-namespace and routing layers. Tool sandboxes run without ambient credentials or shared state.",
  },
  {
    title: "Secrets handling",
    body: "Credentials live in a broker, are injected at call time, are never written to prompts, logs or memory, and rotate automatically.",
  },
  {
    title: "Data residency",
    body: "Pin processing and storage to a region per workspace, per tenant or per partner. Residency is enforced by the router before a call is made.",
  },
  {
    title: "Retention & deletion",
    body: "Configurable retention windows with verifiable deletion. Export or erase any subject's data, including derived memory, on request.",
  },
  {
    title: "Model boundaries",
    body: "Customer content is never used to train foundation models. Zero-retention provider agreements are the default on paid plans.",
  },
  {
    title: "Vulnerability management",
    body: "Continuous dependency scanning, quarterly third-party penetration tests, and a coordinated disclosure program with published response targets.",
  },
  {
    title: "Availability",
    body: "Multi-region active deployment, durable checkpointing, and tested restore procedures. A run survives a node loss or a mid-flight deploy.",
  },
  {
    title: "Monitoring",
    body: "Anomaly detection on spend, tool usage and egress. Alerts route to your channel and can trip the kill switch automatically.",
  },
];

/**
 * COMPLIANCE CLAIMS — READ BEFORE EDITING
 * ----------------------------------------------------------------------
 * `state` drives how each item is rendered. Only ever set a claim to
 * "certified" when you hold the actual signed report or certificate.
 *
 *   certified   -> green check. REQUIRES: signed auditor report / certificate
 *                  number on file. SOC 2 = CPA firm opinion letter.
 *                  ISO = accredited body certificate. Nothing else qualifies.
 *   in-progress -> amber. An audit/readiness engagement is genuinely underway.
 *   planned     -> grey. On the roadmap, not yet started. Safe to show.
 *   practice    -> neutral. A legal obligation you meet or a framework you
 *                  align controls to. Not a certification and never shown
 *                  as one (GDPR, CCPA, HIPAA-via-BAA, NIST AI RMF).
 *
 * Misrepresenting a certification is an FTC Section 5 deceptive practice and
 * can void enterprise contracts for fraud in the inducement. When in doubt,
 * use "practice" and describe what you actually do.
 */
export type ComplianceState =
  | "certified"
  | "in-progress"
  | "planned"
  | "practice";

export const complianceStateMeta: Record<
  ComplianceState,
  { label: string; accent: string; icon: string }
> = {
  certified: { label: "Certified", accent: "#22c55e", icon: "check" },
  "in-progress": { label: "In progress", accent: "#f59e0b", icon: "clock" },
  planned: { label: "Planned", accent: "#8b90a6", icon: "dot" },
  practice: { label: "Practice", accent: "#06b6d4", icon: "shield" },
};

export const certifications: {
  name: string;
  state: ComplianceState;
  status: string;
}[] = [
  {
    name: "SOC 2 Type II",
    state: "in-progress",
    status:
      "Readiness assessment underway. Observation window not yet complete — no report is available today.",
  },
  {
    name: "ISO/IEC 27001",
    state: "planned",
    status:
      "Information security management system being documented ahead of a Stage 1 audit.",
  },
  {
    name: "ISO/IEC 42001",
    state: "planned",
    status:
      "AI management system controls mapped; certification not yet scheduled.",
  },
  {
    name: "GDPR",
    state: "practice",
    status:
      "DPA with Standard Contractual Clauses available. A legal obligation we meet, not a certification.",
  },
  {
    name: "CCPA / CPRA",
    state: "practice",
    status:
      "Consumer rights request workflows operating. We do not sell personal data.",
  },
  {
    name: "HIPAA",
    state: "practice",
    status:
      "There is no such thing as HIPAA certification. We will sign a Business Associate Agreement on Enterprise.",
  },
  {
    name: "EU AI Act",
    state: "in-progress",
    status:
      "Readiness program active: risk classification, technical documentation and transparency obligations.",
  },
  {
    name: "NIST AI RMF",
    state: "practice",
    status:
      "Controls mapped to the Govern, Map, Measure and Manage functions. A voluntary framework, not a certification.",
  },
];

/** Only claims backed by a real artifact. Empty until an audit completes. */
export const verifiedCertifications = certifications.filter(
  (c) => c.state === "certified"
);


export const responsiblePrinciples = [
  {
    title: "Human authority is never optional",
    body: "Every consequential action has a named human who can approve, edit or stop it. Autonomy is something you grant deliberately and can revoke instantly.",
  },
  {
    title: "Legibility over cleverness",
    body: "If a person cannot read why an agent did something, that behavior does not ship. Memory is human-readable Markdown; every decision carries a trace.",
  },
  {
    title: "Grounded or silent",
    body: "Claims without a verifiable source are blocked before release rather than presented with false confidence.",
  },
  {
    title: "Disclosure by default",
    body: "Users are told when they are interacting with an agent and when media is AI-generated. Provenance metadata travels with the output.",
  },
  {
    title: "Fairness under measurement",
    body: "Predictive models are monitored for drift and slice-level disparity, with reason codes on decisions that affect people.",
  },
  {
    title: "Minimum necessary data",
    body: "Agents receive the least data required for the task. Redaction happens at the boundary, before anything leaves your process.",
  },
];

export const prohibitedUses = [
  "Fully autonomous decisions on credit, housing, employment or insurance without human review and reason codes",
  "Biometric surveillance, emotion inference in workplaces or schools, or social scoring",
  "Impersonating a real person, or generating synthetic media of someone without documented consent",
  "Producing content that sexualizes minors, incites violence, or supports targeted harassment",
  "Automating unlawful discrimination, deceptive claims, or manipulative dark patterns",
  "Developing weapons, malware, or infrastructure intrusion capabilities",
  "Circumventing rate limits, access controls, or terms of any third-party service through Reach channels",
  "Unsupervised medical, legal or financial advice presented as professional guidance",
];

export const subprocessorNotes = [
  "A current sub-processor registry is published and versioned.",
  "Customers receive 30 days' notice before a new sub-processor is engaged.",
  "Every sub-processor is bound by data protection terms at least as strict as ours.",
  "Model providers operate under zero-retention agreements on paid plans.",
];
