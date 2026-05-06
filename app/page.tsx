import { AnimatedGradient } from "./components/AnimatedGradient";
import { Bento } from "./components/Bento";
import { CTA } from "./components/CTA";
import { FeatureTabs } from "./components/FeatureTabs";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Pricing } from "./components/Pricing";
import { Stats } from "./components/Stats";
import { Workflow } from "./components/Workflow";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedGradient />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Bento />
        <Workflow />
        <FeatureTabs />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
