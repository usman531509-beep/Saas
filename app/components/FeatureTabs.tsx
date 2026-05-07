import { Code, LineChart, Network } from "lucide-react";
import { Feature108 } from "@/components/ui/shadcnblocks-com-feature108";
import { Reveal } from "./Reveal";

const tabs = [
  {
    value: "tab-1",
    icon: <Code className="h-auto w-4 shrink-0" />,
    label: "Agent SDKs",
    content: {
      badge: "Developer-first",
      title: "Build agents in the language you already use.",
      description:
        "Typed SDKs for TypeScript, Python and Go. Local-first dev loop with hot reload, full debugger support, and one-line streaming. Bring your own provider keys or use ours.",
      buttonText: "Read the SDK docs",
      imageSrc:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1400&q=80&auto=format&fit=crop",
      imageAlt: "Code editor on a dark screen",
    },
  },
  {
    value: "tab-2",
    icon: <LineChart className="h-auto w-4 shrink-0" />,
    label: "Live Telemetry",
    content: {
      badge: "Production observability",
      title: "Trace every token, tool call and decision.",
      description:
        "Real-time traces, structured logs and cost-per-run break-downs. Replay any production session, export to your warehouse, and gate releases on golden-dataset evals.",
      buttonText: "Open a sample trace",
      imageSrc:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80&auto=format&fit=crop",
      imageAlt: "Analytics dashboard with charts",
    },
  },
  {
    value: "tab-3",
    icon: <Network className="h-auto w-4 shrink-0" />,
    label: "Edge Network",
    content: {
      badge: "Global by default",
      title: "Sub-second routing, in 26 regions.",
      description:
        "Inference runs at the edge with smart caching, automatic failover and per-region data residency. p95 under 900ms whether your users are in Tokyo, Berlin or São Paulo.",
      buttonText: "View the network",
      imageSrc:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80&auto=format&fit=crop",
      imageAlt: "Circuit board close-up",
    },
  },
];

export function FeatureTabs() {
  return (
    <Reveal direction="left">
      <Feature108
        badge="Platform deep-dive"
        heading="Three pillars. One coherent platform."
        description="Everything you need from prototype to production without stitching together five vendors."
        tabs={tabs}
      />
    </Reveal>
  );
}
