import type { Metadata } from "next";
import { site, owner, SITE_URL } from "./site";

/**
 * Canonical-first metadata builder.
 * Every page gets a self-referencing canonical, absolute OG/Twitter images,
 * and explicit robots directives aligned with Google Search guidance (2026):
 * indexable, max-image-preview:large, no index bloat from utility routes.
 */
export function pageMeta({
  title,
  description,
  path,
  noindex = false,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  type?: "website" | "article";
}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogImage = `${SITE_URL}/opengraph-image`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      url,
      siteName: site.fullName,
      title,
      description,
      locale: "en_US",
      images: [{ url: ogImage, width: 1200, height: 630, alt: site.fullName }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/** Organization + WebSite graph. Establishes named ownership for E-E-A-T. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: site.legal,
        alternateName: site.fullName,
        url: SITE_URL,
        description: site.description,
        foundingDate: site.founded,
        email: site.email,
        founder: {
          "@type": "Person",
          "@id": `${SITE_URL}/#owner`,
          name: owner.name,
          jobTitle: owner.role,
          description: owner.bio,
          url: `${SITE_URL}/company`,
          sameAs: [owner.github],
        },
        knowsAbout: [
          "Agentic AI",
          "AI orchestration",
          "Generative AI",
          "Predictive AI",
          "AI governance",
          "Multi-agent systems",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: site.email,
            availableLanguage: ["English"],
          },
          {
            "@type": "ContactPoint",
            contactType: "security",
            email: site.securityEmail,
            availableLanguage: ["English"],
          },
          {
            "@type": "ContactPoint",
            contactType: "privacy",
            email: site.privacyEmail,
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: site.fullName,
        description: site.description,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };
}

/** SoftwareApplication entry for a platform page. */
export function platformJsonLd(p: {
  name: string;
  summary: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${site.name} ${p.name}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud",
    url: `${SITE_URL}/platforms/${p.slug}`,
    description: p.summary,
    provider: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free tier with 1M agent steps per month",
      url: `${SITE_URL}/pricing`,
    },
  };
}

export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path === "/" ? "" : t.path}`,
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
