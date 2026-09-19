export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://elitze.ca";

export const owner = {
  name: "Terrell Hall",
  role: "Founder & Chief Executive Officer",
  shortRole: "Founder/CEO",
  handle: "terrell0780",
  github: "https://github.com/terrell0780",
  bio: "Terrell Hall founded Elitze to make autonomous software accountable: agents that finish real work, with a human able to read every decision, correct any memory, and stop any run.",
} as const;

export const site = {
  name: "Elitze",
  fullName: "Elitze Agentic Platform",
  legal: "Elitze Agentic Platforms",
  tagline: "Agentic infrastructure built for growth",
  description:
    "Elitze Agentic Platform is the full-stack agentic AI company. Ten platforms — from AI SaaS to Agentic AI — running on one orchestration brain, one memory layer, and one reach network.",
  brain: "ELITZE CORE",
  brainBlurb:
    "The decisioning brain behind every Elitze platform. Core routes every task to the right model, tool, and agent — then learns from the outcome.",
  domain: "elitze.ca",
  url: SITE_URL,
  email: "hello@elitze.ca",
  securityEmail: "security@elitze.ca",
  privacyEmail: "privacy@elitze.ca",
  founded: "2023",
  stats: [
    { value: "10", label: "Agentic platforms", sub: "One control plane" },
    { value: "4.2B", label: "Agent steps / month", sub: "Executed on Core" },
    { value: "99.99%", label: "Orchestration uptime", sub: "Durable execution" },
    { value: "68%", label: "Avg. cost reduction", sub: "vs. single-model stacks" },
  ],
  nav: [
    {
      label: "Platforms",
      href: "/platforms",
      children: [
        { label: "AI SaaS", href: "/platforms/ai-saas" },
        { label: "Embedded AI", href: "/platforms/embedded-ai" },
        { label: "AI PaaS", href: "/platforms/ai-paas" },
        { label: "AI APIs", href: "/platforms/ai-apis" },
        { label: "B2B AI", href: "/platforms/b2b-ai" },
        { label: "B2C AI", href: "/platforms/b2c-ai" },
        { label: "B2B2C AI", href: "/platforms/b2b2c-ai" },
        { label: "Generative AI", href: "/platforms/generative-ai" },
        { label: "Predictive AI", href: "/platforms/predictive-ai" },
        { label: "Agentic AI", href: "/platforms/agentic-ai" },
      ],
    },
    {
      label: "Technology",
      href: "/technology",
      children: [
        { label: "Elitze Core", href: "/technology" },
        { label: "Graph Studio", href: "/graph" },
        { label: "Agent Reach", href: "/reach" },
        { label: "Knowledge Vault", href: "/vault" },
      ],
    },
    {
      label: "Trust",
      href: "/trust",
      children: [
        { label: "Trust center", href: "/trust" },
        { label: "Guardrails", href: "/guardrails" },
        { label: "Security", href: "/security" },
        { label: "Responsible AI", href: "/responsible-ai" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
    { label: "Console", href: "/console" },
    { label: "Docs", href: "/docs" },
    { label: "Pricing", href: "/pricing" },
    { label: "Company", href: "/company" },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
