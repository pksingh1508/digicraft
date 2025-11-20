"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Timer } from "lucide-react";

export function HeroSection() {
  const stats = [
    { value: "120+", label: "Launches delivered", detail: "Websites, products, campaigns." },
    { value: "4.9/5", label: "Client rating", detail: "Partnership-first, no hand-offs." },
    { value: "14 days", label: "To first prototype", detail: "Tight sprints with demos." },
  ];

  const focusAreas = [
    "Full-stack web & mobile delivery",
    "SEO & content systems that convert",
    "Startup advisory & go-to-market",
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pb-20 pt-24"
    >
      <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute inset-x-0 top-16 z-0 mx-auto h-64 max-w-4xl rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1.1fr,0.9fr] lg:gap-16">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
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
            We are the product, engineering, and growth team that ships your website, mobile app,
            SEO systems, and startup playbook—fast, secure, and beautifully on-brand.
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
                className="flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-2 shadow-sm shadow-primary/5"
              >
                <span className="inline-flex h-2 w-2 rounded-full bg-primary/70" />
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" className="gap-2 shadow-lg shadow-primary/30" asChild>
              <a href="#contact">
                Book a strategy call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#showcase">See our work</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/80 bg-card/80 p-4 shadow-sm shadow-primary/10 backdrop-blur"
              >
                <div className="font-display text-3xl font-semibold text-foreground">{stat.value}</div>
                <div className="mt-1 text-sm font-semibold text-muted-foreground">{stat.label}</div>
                <p className="mt-1 text-sm text-muted-foreground/80">{stat.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -left-12 -top-6 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/90 shadow-2xl shadow-primary/20 backdrop-blur">
            <div className="flex flex-col gap-6 p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Engagement Snapshot
                  </p>
                  <h3 className="font-display text-2xl font-semibold">Digital command center</h3>
                </div>
                <div className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                  Trusted Partners
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-2xl border border-border/80 bg-muted/40 p-4">
                  <Timer className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Sprint teams on demand</p>
                    <p className="text-sm text-muted-foreground">
                      POD model with PM, design, engineering, and SEO collaborating in 2-week sprints.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-border/80 bg-muted/40 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Secure, scalable builds</p>
                    <p className="text-sm text-muted-foreground">
                      Performance budgets, accessibility baked-in, and observability from day one.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-border/70 bg-primary/10 p-3 text-primary">
                  Growth rituals <span className="font-semibold text-foreground">weekly demo + KPI pulse</span>
                </div>
                <div className="rounded-xl border border-border/70 bg-secondary/10 p-3 text-secondary-foreground">
                  Launch governance <span className="font-semibold text-foreground">QA, SEO, analytics ready</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
