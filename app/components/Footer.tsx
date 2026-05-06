import { Logo } from "./Logo";

const cols = [
  {
    title: "Product",
    links: ["Features", "Workflow", "Pricing", "Changelog", "Roadmap"],
  },
  { title: "Resources", links: ["Docs", "Guides", "API Reference", "Status"] },
  { title: "Company", links: ["About", "Customers", "Careers", "Press"] },
  { title: "Legal", links: ["Terms", "Privacy", "DPA", "Security"] },
];

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl px-6 pb-16 pt-12">
      <div className="grid gap-10 border-t border-foreground/10 pt-12 md:grid-cols-6">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-foreground/55">
            The operating system for AI-native teams. Built in San Francisco.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-[11px] uppercase tracking-widest text-foreground/40">
              {c.title}
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-foreground/65 transition-colors hover:text-foreground"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-foreground/10 pt-6 text-xs text-foreground/45 md:flex-row md:items-center">
        <span>© 2026 Nebula Labs, Inc. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-foreground">
            Twitter
          </a>
          <a href="#" className="hover:text-foreground">
            GitHub
          </a>
          <a href="#" className="hover:text-foreground">
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}
