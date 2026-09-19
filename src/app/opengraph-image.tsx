import { ImageResponse } from "next/og";
import { site, owner } from "@/lib/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.fullName} — ${site.tagline}`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05060a",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg,#818cf8,#6366f1 55%,#22d3ee)",
              display: "flex",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#f4f5f9", fontSize: 38, fontWeight: 700 }}>
              Elitze
            </div>
            <div
              style={{
                color: "#8b90a6",
                fontSize: 17,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              Agentic Platform
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
              maxWidth: 940,
              display: "flex",
            }}
          >
            Agents that finish the work.
          </div>
          <div
            style={{
              color: "#8b90a6",
              fontSize: 27,
              maxWidth: 880,
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            Ten agentic platforms on one governed control plane — orchestration,
            memory, reach and guardrails.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 26,
          }}
        >
          <div style={{ color: "#6b7089", fontSize: 21, display: "flex" }}>
            {owner.name} · {owner.shortRole}
          </div>
          <div style={{ color: "#6b7089", fontSize: 21, display: "flex" }}>
            {site.domain}
          </div>
        </div>
      </div>
    ),
    size
  );
}
