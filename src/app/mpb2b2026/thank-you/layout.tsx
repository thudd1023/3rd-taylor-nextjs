import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Your Email | Warm T.L.C.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
