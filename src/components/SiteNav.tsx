"use client";
import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoDark from "@/assets/logo-dark.png";

const solutionsMenu = [
  {
    heading: "Strategy",
    links: [{ label: "Diagnose Growth Gaps", href: "/solutions/diagnose-growth-gaps" }],
  },
  {
    heading: "Pipeline Growth",
    links: [
      { label: "Drive More Qualified Pipeline", href: "/solutions/qualified-pipeline" },
      { label: "Launch a New Product", href: "/solutions/launch-product" },
      { label: "Win Target Accounts (ABM)", href: "/solutions/abm" },
      { label: "Automate & Scale Outbound", href: "/solutions/outbound" },
      { label: "Expand Internationally", href: "/solutions/expand-internationally" },
    ],
  },
  {
    heading: "Conversion & Efficiency",
    links: [{ label: "Improve Pipeline Conversion", href: "/solutions/conversion" }],
  },
];

const whoWeServeMenu = [
  {
    heading: "By Role",
    links: [
      { label: "CEOs & Founders", href: "/who-we-serve/ceos-founders" },
      { label: "Marketing Leaders", href: "/who-we-serve/marketing-leaders" },
      { label: "Sales Leaders", href: "/who-we-serve/sales-leaders" },
      { label: "VC Operating Partners", href: "/who-we-serve/vc-operating-partners" },
    ],
  },
  {
    heading: "By Company Type",
    links: [
      { label: "B2B SaaS", href: "/who-we-serve/saas" },
      { label: "B2B FinTech", href: "/who-we-serve/fintech" },
      { label: "B2B MedTech", href: "/who-we-serve/medtech" },
      { label: "B2B AI-Native Tech", href: "/who-we-serve/ai-native" },
      { label: "Disruptive B2B Tech (Crypto, Blockchain, Web3)", href: "/who-we-serve/disruptive" },
      { label: "Industrial Tech", href: "/who-we-serve/industrial" },
    ],
  },
];

const workWithUsMenu = [
  { label: "Start with an Audit", desc: "Begin with a Revenue Growth Audit", href: "/revenue-growth-audit" },
  { label: "Launch a Campaign", desc: "Kick off a Campaign Engine engagement", href: "/campaign-engine#get-started" },
  { label: "Retain a Marketing Team", desc: "Ongoing strategic + execution partnership", href: "/momentum" },
];

const MegaPanel = ({ children }: { children: React.ReactNode }) => (
  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
    <div className="bg-cream border border-border rounded-2xl shadow-bold p-8 min-w-[640px]">{children}</div>
  </div>
);

const NavTrigger = ({ label }: { label: string }) => (
  <button className="inline-flex items-center gap-1 hover:text-accent transition-colors">
    {label} <ChevronDown className="h-3.5 w-3.5" />
  </button>
);

const SiteNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label="3rd + Taylor">
          <Image src={logoDark} alt="3rd + Taylor" className="h-6 md:h-7 w-auto" />
        </Link>

        <nav className="hidden xl:flex items-center gap-7 text-sm font-medium">
          {/* Solutions mega */}
          <div className="group relative">
            <NavTrigger label="Solutions" />
            <MegaPanel>
              <div className="grid grid-cols-3 gap-8">
                {solutionsMenu.map((col) => (
                  <div key={col.heading}>
                    <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">{col.heading}</div>
                    <ul className="space-y-2">
                      {col.links.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} className="text-ink hover:text-accent transition-colors">{l.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </MegaPanel>
          </div>

          {/* Who We Serve mega */}
          <div className="group relative">
            <NavTrigger label="Who We Serve" />
            <MegaPanel>
              <div className="grid grid-cols-2 gap-8">
                {whoWeServeMenu.map((col) => (
                  <div key={col.heading}>
                    <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">{col.heading}</div>
                    <ul className="space-y-2">
                      {col.links.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} className="text-ink hover:text-accent transition-colors">{l.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </MegaPanel>
          </div>

          <Link href="/campaign-engine" className="hover:text-accent transition-colors">Campaign Engine</Link>
          <Link href="/pricing" className="hover:text-accent transition-colors">Pricing</Link>

          {/* Work With Us dropdown */}
          <div className="group relative">
            <NavTrigger label="Work With Us" />
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
              <div className="bg-cream border border-border rounded-2xl shadow-bold p-4 min-w-[340px]">
                <ul className="space-y-1">
                  {workWithUsMenu.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="block rounded-xl px-3 py-2.5 hover:bg-secondary transition-colors">
                        <div className="font-semibold text-ink">{l.label}</div>
                        <div className="text-xs text-muted-foreground">{l.desc}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Link href="/resources" className="hover:text-accent transition-colors">Resources</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/free-gtm-scan" className="hidden sm:inline-flex items-center gap-1.5 border border-ink/20 text-ink text-sm font-semibold px-4 py-2 rounded-full hover:bg-ink hover:text-cream transition-colors">
            Free GTM Scan
          </Link>
          <Link href="/lets-talk" className="inline-flex items-center gap-1.5 bg-ink text-cream text-sm font-semibold px-4 py-2 rounded-full hover:bg-accent transition-colors">
            Let's Talk <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button className="xl:hidden p-2 -mr-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden border-t border-border bg-cream">
          <div className="container py-4 space-y-1 text-sm">
            <MobileGroup
              label="Solutions"
              groups={solutionsMenu}
              onNavigate={() => setMobileOpen(false)}
            />
            <MobileGroup
              label="Who We Serve"
              groups={whoWeServeMenu}
              onNavigate={() => setMobileOpen(false)}
            />
            <Link href="/campaign-engine" onClick={() => setMobileOpen(false)} className="block py-3 border-b border-border font-medium">Campaign Engine</Link>
            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="block py-3 border-b border-border font-medium">Pricing</Link>
            <MobileGroup
              label="Work With Us"
              flatLinks={workWithUsMenu.map((l) => ({ label: l.label, href: l.href }))}
              onNavigate={() => setMobileOpen(false)}
            />
            <Link href="/resources" onClick={() => setMobileOpen(false)} className="block py-3 border-b border-border font-medium">Resources</Link>
          </div>
        </div>
      )}
    </header>
  );
};

type MobileGroupProps = {
  label: string;
  groups?: { heading: string; links: { label: string; href: string }[] }[];
  flatLinks?: { label: string; href: string }[];
  onNavigate: () => void;
};

const MobileGroup = ({ label, groups, flatLinks, onNavigate }: MobileGroupProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-3 font-medium text-left"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-3 space-y-4">
          {groups?.map((g) => (
            <div key={g.heading}>
              <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">{g.heading}</div>
              <ul className="space-y-2">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} onClick={onNavigate} className="block text-ink hover:text-accent">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {flatLinks && (
            <ul className="space-y-2">
              {flatLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={onNavigate} className="block text-ink hover:text-accent">{l.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SiteNav;
