import { pageMeta, JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { privacySections } from "@/lib/legal";
import { site } from "@/lib/site";
import { LegalDoc } from "@/components/LegalDoc";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "What Elitze collects, why, how long we keep it, where it is processed, and the rights you can exercise. We do not sell data or train foundation models on customer content.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <LegalDoc
        kicker="Legal"
        title="Privacy Policy"
        intro={`How ${site.legal} handles personal data — as a controller for our own site and accounts, and as a processor for the content your agents touch.`}
        sections={privacySections}
        contact={site.privacyEmail}
      />
    </>
  );
}
