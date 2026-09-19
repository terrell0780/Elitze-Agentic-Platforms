export const LEGAL_UPDATED = "September 19, 2026";
export const LEGAL_EFFECTIVE = "October 1, 2026";

export type LegalSection = { heading: string; body: string[]; list?: string[] };

export const termsSections: LegalSection[] = [
  {
    heading: "1. Agreement to these terms",
    body: [
      "These Terms of Service govern access to and use of the Elitze Agentic Platform, including the console, APIs, SDKs, command-line tools, Graph Studio, Agent Reach, Knowledge Vault and any related documentation (together, the \"Services\"). By creating an account, calling an API, or deploying an agent, you agree to these terms on behalf of yourself and any organization you represent.",
      "If you do not have authority to bind your organization, or you do not agree, do not use the Services.",
    ],
  },
  {
    heading: "2. Accounts, workspaces and eligibility",
    body: [
      "You must be at least 18 years old and legally able to enter a contract. You are responsible for the accuracy of your account information, for safeguarding your API keys and credentials, and for all activity that occurs under your workspaces.",
      "Notify us immediately at security@elitze.ca if you suspect unauthorized access. We provide key rotation, scoped credentials and audit logging to help you contain an incident quickly.",
    ],
  },
  {
    heading: "3. Customer content and ownership",
    body: [
      "You retain all rights to the data, prompts, graphs, documents, vault contents and other material you submit (\"Customer Content\"), and to the outputs generated for you through the Services (\"Output\"), to the extent such rights are available under applicable law.",
      "We claim no ownership of your Customer Content or Output. You grant us only the limited license necessary to operate, secure and support the Services for you — for example, to route a request to a model provider you have enabled, to store checkpoints so a run can resume, or to investigate an incident you report.",
      "We do not use Customer Content or Output to train foundation models. On paid plans, model providers are engaged under zero-retention terms by default.",
    ],
  },
  {
    heading: "4. Nature of AI output",
    body: [
      "The Services are probabilistic. Output may be inaccurate, incomplete, outdated or unsuitable for your purpose, and similar requests may produce different results for you and for others. Output is not professional advice.",
      "You are responsible for reviewing Output before relying on it, and for maintaining human oversight proportionate to the risk of the decision. We provide approval gates, groundedness scoring, citation enforcement, reason codes and kill switches precisely so you can exercise that oversight — using them is your responsibility, not ours.",
      "Do not deploy agents in a manner that makes consequential decisions about people without meaningful human review.",
    ],
  },
  {
    heading: "5. Acceptable use",
    body: [
      "You may not use the Services to violate law, infringe rights, or cause foreseeable harm. Prohibited uses are listed in our Responsible AI policy and are incorporated into these terms by reference.",
      "You are responsible for your end users' conduct on the Services. Where you serve your own customers through the platform, you must pass through restrictions at least as protective as these terms.",
    ],
  },
  {
    heading: "6. Third-party services and connected channels",
    body: [
      "The Services can connect to third-party model providers, data sources, internet channels and systems of record at your direction. Those third parties are governed by their own terms, and your use of them through Elitze must comply with those terms.",
      "You are responsible for ensuring you have the right to access any source you direct an agent to retrieve, and for respecting robots directives, rate limits and access controls. We provide rate governors and channel controls to help you do so.",
    ],
  },
  {
    heading: "7. Fees, metering and budgets",
    body: [
      "Paid plans are billed on the published unit rates plus any committed platform fee. Metered usage is measured by our systems, which are the authoritative record, and is billed in arrears.",
      "Budgets, soft warnings and hard stops are available at the workspace, tenant, fleet and run level. You are responsible for configuring them; usage incurred within the limits you set is payable. Fees exclude taxes. Charges are non-refundable except where required by law.",
    ],
  },
  {
    heading: "8. Service levels, support and changes",
    body: [
      "Availability commitments, support response targets and credits, where offered, are stated in your plan or order form. We may modify or discontinue features, and will give reasonable advance notice of material adverse changes to paid plans.",
      "We may suspend access without prior notice where necessary to protect the Services, comply with law, or stop active harm — and will restore access promptly once resolved.",
    ],
  },
  {
    heading: "9. Confidentiality and data protection",
    body: [
      "Each party will protect the other's confidential information with at least reasonable care. Our processing of personal data is governed by the Privacy Policy and, where applicable, a Data Processing Addendum incorporating Standard Contractual Clauses.",
      "Our security practices and sub-processor commitments are described in the Trust Center. Certification status published there reflects the current state of each audit program; we make no warranty that any certification not expressly listed as held in an executed order form has been obtained, and you should not rely on a planned or in-progress status as though it were a completed audit.",
    ],
  },
  {
    heading: "10. Intellectual property",
    body: [
      "We retain all rights in the Services, including Elitze Core, Graph Studio, Agent Reach, Knowledge Vault, our trademarks and our documentation. Nothing here transfers those rights to you beyond the right to use the Services under these terms.",
      "The Services incorporate open-source components under their respective licenses, which are acknowledged publicly and control over these terms for those components.",
      "Feedback you choose to share may be used to improve the Services without obligation to you.",
    ],
  },
  {
    heading: "11. Warranty disclaimer",
    body: [
      "Except as expressly stated, the Services are provided \"as is\" and \"as available\" without warranties of any kind, whether express, implied or statutory, including merchantability, fitness for a particular purpose, non-infringement, accuracy of Output, or uninterrupted operation.",
    ],
  },
  {
    heading: "12. Limitation of liability",
    body: [
      "To the maximum extent permitted by law, neither party is liable for indirect, incidental, special, consequential, exemplary or punitive damages, or for lost profits, revenue, goodwill or data, even if advised of the possibility.",
      "Each party's total aggregate liability arising out of these terms is limited to the amounts paid or payable by you for the Services in the twelve months preceding the event giving rise to the claim. These limits do not apply to your payment obligations, either party's indemnity obligations, or liability that cannot be limited by law.",
    ],
  },
  {
    heading: "13. Indemnification",
    body: [
      "You will defend and indemnify us against third-party claims arising from your Customer Content, your Output usage, or your breach of these terms or the Responsible AI policy. We will defend and indemnify you against third-party claims that the Services, used as permitted, infringe that party's intellectual property rights.",
    ],
  },
  {
    heading: "14. Term, termination and exit",
    body: [
      "You may stop using the Services at any time. Either party may terminate for material breach not cured within 30 days of notice.",
      "On termination you may export your data during a 30-day window. We designed the platform so leaving is practical: graphs export as portable orchestration code, memory is already Markdown in your own vault, tools follow an open protocol, and traces are standard OpenTelemetry. After the export window, data is deleted on our published schedule.",
    ],
  },
  {
    heading: "15. Governing law and disputes",
    body: [
      "These terms are governed by the laws of the State of Delaware, excluding its conflict-of-laws rules. The parties will attempt good-faith resolution for 30 days before initiating formal proceedings, which will be brought in the state or federal courts located in Delaware.",
      "Nothing prevents either party from seeking injunctive relief to protect intellectual property or confidential information.",
    ],
  },
  {
    heading: "16. General",
    body: [
      "These terms, together with any order form, the Privacy Policy and the Responsible AI policy, are the entire agreement between us. If a provision is unenforceable, the rest remains in effect. Neither party may assign without consent, except in connection with a merger or sale of substantially all assets.",
      "We may update these terms; material changes take effect 30 days after notice, and continued use after that date constitutes acceptance. Questions: legal@elitze.ca.",
    ],
  },
];

export const privacySections: LegalSection[] = [
  {
    heading: "1. Who we are",
    body: [
      "Elitze Agentic Platforms is the controller of personal data we collect about visitors to our website and administrators of our Services. When we process personal data contained in Customer Content on behalf of a customer, we act as a processor under that customer's instructions and a Data Processing Addendum.",
      "Contact our privacy team at privacy@elitze.ca.",
    ],
  },
  {
    heading: "2. What we collect",
    body: ["We collect only what is necessary to operate, secure and improve the Services:"],
    list: [
      "Account data — name, work email, organization, role and authentication identifiers",
      "Usage and billing data — metered units consumed, budgets, invoices and payment status",
      "Technical data — IP address, device and browser information, and security event logs",
      "Support data — messages, diagnostics and attachments you send us",
      "Customer Content — prompts, documents, vault memory and outputs processed on your instruction",
    ],
  },
  {
    heading: "3. How we use it",
    body: ["We use personal data to:"],
    list: [
      "Provide, maintain and secure the Services and authenticate users",
      "Meter usage, enforce budgets and issue accurate invoices",
      "Detect abuse, fraud, anomalous spend and security incidents",
      "Provide support and communicate about service changes and outages",
      "Comply with legal obligations and enforce our terms",
      "Improve reliability and performance using aggregated, de-identified metrics",
    ],
  },
  {
    heading: "4. What we do not do",
    body: [
      "We do not sell personal data, and we do not share it for cross-context behavioral advertising.",
      "We do not use Customer Content to train foundation models. On paid plans, model providers process requests under zero-retention agreements by default.",
      "We do not use agent memory or vault contents for any purpose beyond serving the workspace that owns it.",
    ],
  },
  {
    heading: "5. Legal bases",
    body: [
      "Where the GDPR or UK GDPR applies, we rely on: performance of a contract (providing the Services), legitimate interests (securing the platform, preventing abuse, improving reliability), legal obligation (tax and accounting records), and consent where required, which you may withdraw at any time.",
      "As a Canadian organization we also handle personal information in accordance with PIPEDA, applying its accountability, limiting collection, safeguards and openness principles. Where provincial legislation applies — including Quebec's Law 25 — we honour its additional requirements on consent, transparency and the right to portability.",
    ],
  },
  {
    heading: "6. Retention",
    body: [
      "Account and billing records are retained for the life of the account and for the period required by tax and accounting law thereafter. Security logs follow a defined retention window. Customer Content is retained according to the retention policy you configure for your workspace, and is deleted on the published schedule after termination or on verified request.",
    ],
  },
  {
    heading: "7. Your rights",
    body: [
      "Depending on where you live, you may have rights to access, correct, delete, port, restrict or object to processing of your personal data, and to withdraw consent. Residents of California may request disclosure of categories collected and may exercise rights without discriminatory treatment. Individuals in Canada may request access to their personal information and challenge its accuracy under PIPEDA, and may escalate an unresolved complaint to the Office of the Privacy Commissioner of Canada.",
      "Submit a request to privacy@elitze.ca. We verify identity before acting and respond within the period required by applicable law. If your data sits inside a customer's workspace, we will route your request to that customer as the controller.",
    ],
  },
  {
    heading: "8. International transfers",
    body: [
      "We operate in multiple regions and can pin processing and storage to a region you select. Where personal data is transferred across borders, we rely on Standard Contractual Clauses, the UK Addendum, or an adequacy decision, together with supplementary technical measures including encryption in transit and at rest.",
    ],
  },
  {
    heading: "9. Sub-processors",
    body: [
      "We publish a versioned sub-processor registry covering infrastructure, model providers and support tooling. Customers receive 30 days' notice before a new sub-processor is engaged and may object on reasonable data protection grounds. Every sub-processor is bound by terms at least as protective as ours.",
    ],
  },
  {
    heading: "10. Security",
    body: [
      "We apply TLS 1.3 in transit, AES-256 at rest, tenant isolation across storage and memory namespaces, brokered short-lived credentials, least-privilege access, continuous dependency scanning and quarterly third-party penetration testing. Full detail is published in the Trust Center.",
      "Report a vulnerability to security@elitze.ca. We operate a coordinated disclosure program and will not pursue legal action against good-faith research conducted within its scope.",
    ],
  },
  {
    heading: "11. Cookies",
    body: [
      "We use strictly necessary cookies for authentication and security, and limited first-party analytics to understand product usage. We do not use third-party advertising cookies or cross-site trackers. Where consent is required, you may manage preferences at any time.",
    ],
  },
  {
    heading: "12. Children",
    body: [
      "The Services are not directed to children under 16, and we do not knowingly collect their personal data. If you believe a child has provided us data, contact privacy@elitze.ca and we will delete it.",
    ],
  },
  {
    heading: "13. Changes",
    body: [
      "We will post any update here with a revised date and, for material changes, give at least 30 days' notice to account administrators before the change takes effect.",
    ],
  },
];
