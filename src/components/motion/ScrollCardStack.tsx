"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

interface StackItem {
  title: string;
  desc: string;
}

function StackCard({
  item,
  index,
  total,
  scrollYProgress,
}: {
  item: StackItem;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const segment = 1 / total;
  const start = index * segment;
  const fadeInEnd = start + segment * 0.25;
  const enter = start + segment * 0.6;
  const settled = start + segment;
  const recede = settled + segment * 0.25;

  const x = useTransform(scrollYProgress, [start, enter], ["45%", "0%"]);
  const opacity = useTransform(scrollYProgress, [start, fadeInEnd, settled, recede], [0, 1, 1, 0.35]);
  const scale = useTransform(scrollYProgress, [start, enter, settled], [0.94, 1, 1 - (total - index - 1) * 0.04]);

  return (
    <motion.div
      style={{ x, opacity, scale, zIndex: index }}
      className="absolute inset-0 flex flex-col justify-center bg-ink border border-cream/15 rounded-2xl p-8 md:p-10"
    >
      <div className="text-warm font-mono text-sm">0{index + 1}</div>
      <h3 className="mt-3 font-display text-2xl md:text-4xl font-medium text-balance">{item.title}</h3>
      <p className="mt-4 text-cream/70 md:text-lg leading-relaxed max-w-lg">{item.desc}</p>
    </motion.div>
  );
}

/** Pins in place while the page scrolls; each item slides in from the right as its own card. */
export function ScrollCardStack({ items, vhPerItem = 85 }: { items: StackItem[]; vhPerItem?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <div ref={ref} style={{ height: `${items.length * vhPerItem}vh` }} className="relative">
      <div className="sticky top-28 md:top-32">
        <div className="relative h-[300px] md:h-[260px]">
          {items.map((item, i) => (
            <StackCard key={item.title} item={item} index={i} total={items.length} scrollYProgress={scrollYProgress} />
          ))}
        </div>
        <div className="mt-6 h-1 rounded-full bg-cream/10 overflow-hidden">
          <motion.div style={{ scaleX: scrollYProgress }} className="h-full w-full origin-left bg-warm rounded-full" />
        </div>
      </div>
    </div>
  );
}
