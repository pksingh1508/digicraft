"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Timer } from "lucide-react";

export function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);
  const stats = [
    {
      value: 120,
      suffix: "+",
      duration: 1.4,
      label: "Launches delivered",
      detail: "Websites, products, campaigns."
    },
    {
      value: 4.9,
      suffix: "/5",
      duration: 1.2,
      label: "Client rating",
      detail: "Partnership-first, no hand-offs."
    },
    {
      value: 14,
      suffix: " days",
      duration: 1,
      label: "To first prototype",
      detail: "Tight sprints with demos."
    }
  ];

  const focusAreas = [
    "Full-stack web & mobile delivery",
    "SEO & content systems that convert",
    "Startup advisory & go-to-market"
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-linear-to-b from-primary/5 via-background to-background pb-20 pt-24"
    >
      <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute inset-x-0 top-16 z-0 mx-auto h-64 max-w-4xl rounded-full bg-primary/10 blur-3xl" />

      <div
        ref={ref}
        className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1.1fr,0.9fr] lg:gap-16"
      >
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border-2 border-gray-600 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:border-gray-500"
          >
            <Sparkles className="h-4 w-4" />
            Digicraft Consulting
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Building unapologetic digital experiences that compound your growth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            We are the product, engineering, and growth team that ships your
            website, mobile app, SEO systems, and startup playbook—fast, secure,
            and beautifully on-brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap gap-3 text-sm text-muted-foreground"
          >
            {focusAreas.map((item, index) => (
              <span
                key={item}
                className="flex items-center gap-2 rounded-full border-2 border-gray-600 bg-card px-3 py-2 shadow-sm shadow-primary/5 dark:border-gray-500"
              >
                <span className="inline-flex h-2 w-2 rounded-full bg-primary/70" />
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                detail={stat.detail}
                duration={stat.duration}
                delay={index * 0.2}
                animate={inView}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  suffix,
  label,
  detail,
  duration,
  delay,
  animate
}: {
  value: number;
  suffix: string;
  label: string;
  detail: string;
  duration: number;
  delay: number;
  animate: boolean;
}) {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!animate || !spanRef.current) return;
    let frame: number;
    const start = performance.now();

    const update = (time: number) => {
      const progress = Math.min((time - start) / (duration * 1000), 1);
      const current = value * progress;
      spanRef.current!.textContent = `${current.toFixed(
        Number.isInteger(value) ? 0 : 1
      )}${suffix}`;
      if (progress < 1) {
        frame = requestAnimationFrame(update);
      }
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [animate, value, duration, suffix]);

  return (
    <motion.div
      className="rounded-2xl border-2 border-gray-600 bg-card/80 p-4 shadow-sm shadow-primary/10 backdrop-blur dark:border-gray-500"
      initial={{ opacity: 0, y: 16 }}
      animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="font-display text-3xl font-semibold text-foreground">
        <span ref={spanRef}>0{suffix}</span>
      </div>
      <div className="mt-1 text-sm font-semibold text-muted-foreground">
        {label}
      </div>
      <p className="mt-1 text-sm text-muted-foreground/80">{detail}</p>
    </motion.div>
  );
}
