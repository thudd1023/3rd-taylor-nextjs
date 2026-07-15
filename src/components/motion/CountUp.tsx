"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const PARTS_RE = /^([^\d]*)(\d+)([^\d]*)$/;

/** Animates a numeric label (e.g. "426%", "$15M") counting up from 0 once it scrolls into view. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const match = value.match(PARTS_RE);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const target = match ? Number(match[2]) : 0;
  const prefix = match?.[1] ?? "";
  const suffix = match?.[3] ?? "";
  const display = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!isInView || !match) return;
    const controls = animate(count, target, { duration: 1.3, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [isInView, match, target, count]);

  if (!match) {
    return <span className={className}>{value}</span>;
  }

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
