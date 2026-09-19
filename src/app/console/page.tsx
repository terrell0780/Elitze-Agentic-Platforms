import { Console } from "@/components/Console";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Console",
  description:
    "The Elitze control plane: fleets, graph runs, routing decisions, run economics and guardrail state in one view.",
  path: "/console",
});


export default function ConsolePage() {
  return <Console />;
}
