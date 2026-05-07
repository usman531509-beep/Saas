import { Icon3D } from "./Icon3D";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: "spark" as const,
    title: "Compose",
    body: "Build agents in a typed graph editor. Bring your own tools, retrievers and models — or pick from the library.",
  },
  {
    icon: "shield" as const,
    title: "Evaluate",
    body: "Lock in quality with golden datasets, LLM-judges and human review — gated to every PR before it ships.",
  },
  {
    icon: "globe" as const,
    title: "Deploy",
    body: "Push to 26 edge regions with one click. Auto-rollback on regressions, canary by traffic share.",
  },
  {
    icon: "wave" as const,
    title: "Observe",
    body: "Trace every token. Diagnose with replay, export traces to your warehouse, and tune from real production data.",
  },
];

export function Workflow() {
  return (
    <section
      id="workflow"
      className="relative mx-auto max-w-7xl px-6 py-28 md:py-36"
    >
      <Reveal direction="right">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-foreground/70">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          How it works
        </div>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Four steps from idea to production-ready agent.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="group relative h-full overflow-hidden rounded-3xl glass p-6 transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-foreground/[0.06]"
          >
            <div className="mb-5 flex items-center justify-between">
              <Icon3D name={s.icon} className="!h-12 !w-12" />
              <span className="font-mono text-[11px] tracking-widest text-foreground/30">
                0{i + 1}
              </span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/60">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
