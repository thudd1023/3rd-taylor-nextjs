import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warm T.L.C. Worksheet + Free GTM Audit",
  description:
    "Get the Warm T.L.C. worksheet, a copy-and-paste LLM prompt, and book your free GTM audit.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
