import {
  PricingCard,
  type PricingCardProps,
} from "@/components/ui/animated-glassy-pricing";
import { Reveal } from "./Reveal";

const plans: PricingCardProps[] = [
  {
    planName: "Starter",
    description: "For solo builders and side-projects.",
    price: "0",
    features: [
      "5,000 agent runs / month",
      "1 workspace",
      "Community support",
      "Basic evals",
    ],
    buttonText: "Start free",
    buttonVariant: "secondary",
  },
  {
    planName: "Team",
    description: "For teams shipping agents to real users.",
    price: "49",
    features: [
      "Unlimited workspaces",
      "Versioned prompts & rollback",
      "PR-gated evaluations",
      "26-region edge deploy",
      "SOC 2 + SSO",
    ],
    buttonText: "Start 14-day trial",
    isPopular: true,
    buttonVariant: "primary",
  },
  {
    planName: "Business",
    description: "For scale-ups with strict requirements.",
    price: "199",
    features: [
      "Private VPC deploy",
      "HIPAA / FedRAMP",
      "Custom data residency",
      "Dedicated support",
    ],
    buttonText: "Talk to sales",
    buttonVariant: "primary",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative mx-auto max-w-7xl px-6 py-28 md:py-36"
    >
      <Reveal className="mx-auto max-w-3xl text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-foreground/70">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Pricing
        </div>
        <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Find the{" "}
          <span className="text-cyan-400">perfect plan</span> for your team.
        </h2>
        <p className="mt-4 text-pretty text-foreground/60">
          Start free. Pay only for what you ship — not what you experiment with.
          Switch plans anytime.
        </p>
      </Reveal>

      <div className="mt-14 flex flex-col items-center justify-center gap-8 md:flex-row md:items-stretch md:gap-6">
        {plans.map((plan) => (
          <PricingCard key={plan.planName} {...plan} />
        ))}
      </div>
    </section>
  );
}
