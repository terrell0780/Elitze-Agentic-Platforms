import type { Metadata } from "next";
import { Console } from "@/components/Console";

export const metadata: Metadata = {
  title: "Console",
  description:
    "The Elitze control plane: fleets, graph runs, routing decisions, reach channels and vault memory in one view.",
};

export default function ConsolePage() {
  return <Console />;
}
