import { ContactForm } from "@/components/ContactForm";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Talk to an Elitze solutions architect about putting governed agents on your workflows.",
  path: "/contact",
});


export default function ContactPage() {
  return <ContactForm />;
}
