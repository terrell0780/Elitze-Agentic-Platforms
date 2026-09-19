import { pageMeta, JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { termsSections } from "@/lib/legal";
import { site } from "@/lib/site";
import { LegalDoc } from "@/components/LegalDoc";

export const metadata = pageMeta({
  title: "Terms of Service",
  description:
    "The agreement governing use of the Elitze Agentic Platform: content ownership, the nature of AI output, acceptable use, fees, liability and exit rights.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <LegalDoc
        kicker="Legal"
        title="Terms of Service"
        intro={`These terms govern your use of the ${site.fullName}. They are written to be read — plain language where possible, and no clause that quietly claims ownership of your work.`}
        sections={termsSections}
        contact="legal@elitze.ca"
      />
    </>
  );
}
