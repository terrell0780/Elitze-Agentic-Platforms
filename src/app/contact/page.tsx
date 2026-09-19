import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to an Elitze solutions architect.",
};

export default function ContactPage() {
  return <ContactForm />;
}
