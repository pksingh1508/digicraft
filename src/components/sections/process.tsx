"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  LayoutDashboard,
  Wrench,
  TrendingUp
} from "lucide-react";

const steps = [
  {
    title: "Discover",
    description:
      "Workshops, analytics, and stakeholder interviews to clarify the mission, KPIs, and users.",
    icon: Compass
  },
  {
    title: "Design & Align",
    description:
      "CX journeys, UX prototypes, and UI systems shaped with your brand and accessibility guidelines.",
    icon: LayoutDashboard
  },
  {
    title: "Build & Launch",
    description:
      "Engineering pods ship in sprints with QA, performance budgets, and observability built-in.",
    icon: Wrench
  },
  {
    title: "Scale & Optimize",
    description:
      "SEO roadmaps, content, and experiments to keep velocity high after launch.",
    icon: TrendingUp
  }
];

const whyUs = [
  "Product, engineering, and growth experts in one room.",
  "Transparent governance: weekly demos + leadership-ready reports.",
  "Design systems that keep teams shipping with quality.",
  "Enterprise-grade security, privacy, and compliance mindset."
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              How we work
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Strategy-led, sprint-driven, outcomes obsessed.
            </h2>
            <p className="text-lg text-muted-foreground">
              Digicraft pairs sharp thinking with craft-level execution. We
              adapt to your stack and rituals, while keeping delivery
              predictable and high quality.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {whyUs.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border-2 border-gray-600 bg-card p-4 shadow-sm dark:border-gray-500"
                >
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Tell us about your roadmap
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="space-y-4 rounded-3xl border-2 border-gray-600 bg-card/90 p-6 shadow-xl shadow-primary/10 backdrop-blur dark:border-gray-500">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              End-to-end delivery framework
            </p>
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 rounded-2xl border-2 border-gray-600 bg-muted/40 p-4 dark:border-gray-500"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {step.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
