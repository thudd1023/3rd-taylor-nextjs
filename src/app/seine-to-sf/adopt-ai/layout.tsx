import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seine to SF Private Dinner · Adopt AI Paris",
  description:
    "An invitation-only private dinner on the opening night of Adopt AI at the Grand Palais, Paris, for leaders in AI, B2B tech, and marketing. Hosted by 3rd + Taylor.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
