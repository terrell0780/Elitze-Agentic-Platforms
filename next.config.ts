import type { NextConfig } from "next";

/**
 * Content-Security-Policy.
 * 'unsafe-inline' on style-src is required by Tailwind's runtime style
 * injection; script-src allows Next's hydration inline bootstrap.
 * frame-ancestors stays permissive enough for the preview proxy to embed.
 */
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https: wss:",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=(), payment=(), usb=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-site" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
];

// STATIC_EXPORT=1 produces a plain HTML/CSS/JS folder in ./out that can be
// uploaded to any web host (IONOS shared hosting, S3, cPanel, nginx...).
// Security headers cannot be sent by Next in that mode - they are served by
// the generated .htaccess instead (see scripts/build-static.sh).
const isStaticExport = process.env.STATIC_EXPORT === "1";

// Set BASE_PATH when the site is served from a SUBFOLDER of the domain,
// e.g. BASE_PATH=/elitze  ->  https://elitze.ca/elitze/
// Leave unset when the domain's root maps to the upload folder (normal case).
const basePath = (process.env.BASE_PATH || "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  ...(isStaticExport
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        trailingSlash: true,
        ...(basePath ? { basePath, assetPrefix: basePath } : {}),
      }
    : {}),
  async headers() {
    if (isStaticExport) return [];
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/.well-known/security.txt",
        headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }],
      },
    ];
  },
  async redirects() {
    if (isStaticExport) return [];
    return [
      { source: "/security.txt", destination: "/.well-known/security.txt", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/terms-of-service", destination: "/terms", permanent: true },
      { source: "/tos", destination: "/terms", permanent: true },
      { source: "/trust-center", destination: "/trust", permanent: true },
    ];
  },
};

export default nextConfig;
