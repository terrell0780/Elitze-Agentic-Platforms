import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { platforms } from "@/lib/platforms";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: { path: string; priority: number; freq: "daily" | "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/platforms", priority: 0.9, freq: "weekly" },
    { path: "/technology", priority: 0.9, freq: "monthly" },
    { path: "/graph", priority: 0.8, freq: "monthly" },
    { path: "/reach", priority: 0.8, freq: "monthly" },
    { path: "/vault", priority: 0.8, freq: "monthly" },
    { path: "/pricing", priority: 0.8, freq: "monthly" },
    { path: "/docs", priority: 0.7, freq: "weekly" },
    { path: "/trust", priority: 0.7, freq: "monthly" },
    { path: "/guardrails", priority: 0.7, freq: "monthly" },
    { path: "/security", priority: 0.7, freq: "monthly" },
    { path: "/responsible-ai", priority: 0.7, freq: "monthly" },
    { path: "/company", priority: 0.6, freq: "monthly" },
    { path: "/open-source", priority: 0.6, freq: "monthly" },
    { path: "/contact", priority: 0.5, freq: "yearly" },
    { path: "/console", priority: 0.5, freq: "monthly" },
    { path: "/privacy", priority: 0.4, freq: "yearly" },
    { path: "/terms", priority: 0.4, freq: "yearly" },
  ];

  return [
    ...core.map((c) => ({
      url: `${SITE_URL}${c.path === "/" ? "" : c.path}`,
      lastModified: now,
      changeFrequency: c.freq,
      priority: c.priority,
    })),
    ...platforms.map((p) => ({
      url: `${SITE_URL}/platforms/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
