import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoLight from "@/assets/logo-light.png";

const company = [
  { label: "About", href: "/about" },
  { label: "Why 3rd + Taylor", href: "/why" },
  { label: "Resources", href: "/resources" },
  { label: "Who We Serve (by Role)", href: "/who-we-serve/by-role" },
  { label: "Who We Serve (by Industry)", href: "/who-we-serve/by-industry" },
  { label: "FAQs", href: "/faqs" },
  { label: "Structured Data for LLM", href: "/ai-info" },
];

const solutions = [
  { label: "Diagnose Growth Gaps", href: "/solutions/diagnose-growth-gaps" },
  { label: "Drive More Qualified Pipeline", href: "/solutions/qualified-pipeline" },
  { label: "Launch a New Product", href: "/solutions/launch-product" },
  { label: "Improve Pipeline Conversion", href: "/solutions/conversion" },
  { label: "Win Target Accounts (ABM)", href: "/solutions/abm" },
  { label: "Scale Outbound Prospecting", href: "/solutions/outbound" },
  { label: "Expand Internationally", href: "/solutions/expand-internationally" },
];

const product = [
  { label: "Campaign Engine", href: "/campaign-engine" },
];

const addOns = [
  { label: "ABM", href: "/solutions/abm" },
  { label: "Personalized Outbound at Scale", href: "/solutions/outbound" },
  { label: "Conversion Optimization", href: "/solutions/conversion" },
];

const getStarted = [
  { label: "Free GTM Scan", href: "/free-gtm-scan" },
  { label: "Start with an Audit", href: "/revenue-growth-audit#get-started" },
  { label: "Launch a Campaign", href: "/campaign-engine#get-started" },
  { label: "Retain a Marketing Team", href: "/momentum#get-started" },
  { label: "Not Sure? Book a Call", href: "/lets-talk" },
];

const Col = ({ title, items }: { title: string; items: { label: string; href: string }[] }) => (
  <div>
    <div className="text-xs font-semibold uppercase tracking-wider text-cream/40 mb-4">{title}</div>
    <ul className="space-y-2 text-cream/80 text-sm">
      {items.map((l) => (
        <li key={l.href + l.label}>
          <Link href={l.href} className="hover:text-warm transition-colors">{l.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const SiteFooter = () => (
  <footer className="bg-ink text-cream py-16">
    <div className="container">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1">
          <Image src={logoLight} alt="3rd + Taylor" className="h-7 w-auto" />
          <p className="mt-4 text-cream/60 text-sm max-w-xs">
            B2B campaign execution for lean marketing teams. Pipeline, not just activity.
          </p>
          <Link href="/lets-talk" className="mt-6 inline-flex items-center gap-1.5 bg-warm text-ink px-4 py-2 rounded-full text-sm font-semibold hover:bg-cream transition-colors">
            Let's Talk <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <address className="mt-6 not-italic text-cream/45 text-xs leading-relaxed">
            13499 Biscayne Blvd, Suite 107<br />
            North Miami, FL 33181
          </address>
        </div>
        <Col title="Company" items={company} />
        <Col title="Solutions" items={solutions} />
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-cream/40 mb-4">Core Engagement</div>
          <ul className="space-y-2 text-cream/80 text-sm">
            {product.map((l) => (
              <li key={l.href + l.label}>
                <Link href={l.href} className="hover:text-warm transition-colors">{l.label}</Link>
              </li>
            ))}
            <li className="pt-3">
              <div className="text-cream/60 font-semibold">Add-On Services</div>
              <ul className="mt-2 space-y-2 pl-4 border-l border-cream/10">
                {addOns.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className="hover:text-warm transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <Col title="Get Started" items={getStarted} />
      </div>
      <div className="mt-16 pt-8 border-t border-cream/10 flex flex-wrap justify-between gap-4 text-sm text-cream/40">
        <div>© {new Date().getFullYear()} 3rd + Taylor. All rights reserved.</div>
        <div className="flex gap-6">
          <Link href="/terms" className="hover:text-cream/70">Terms & Conditions</Link>
          <Link href="/privacy" className="hover:text-cream/70">Privacy Policy</Link>
          <Link href="/sitemap" className="hover:text-cream/70">Sitemap</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
