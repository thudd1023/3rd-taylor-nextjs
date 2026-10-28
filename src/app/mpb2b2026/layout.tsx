import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Here's your session resources",
  description:
    "Get the Warm T.L.C. worksheet, a copy-and-paste LLM prompt, and book your free GTM audit.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
