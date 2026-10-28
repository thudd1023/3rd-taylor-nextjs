"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureUtm } from "@/lib/utm";

export default function UtmCapture() {
  const pathname = usePathname();
  useEffect(() => {
    captureUtm();
  }, [pathname]);
  return null;
}
