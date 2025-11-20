"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "FinTech Revolution",
    description: "Rebuilt a conversion-led marketing site and onboarding flow for a global FinTech scale-up.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    result: "35% lift in activation, WCAG AA compliance, and sub-second LCP.",
    link: "https://example.com/fintech",
  },
  {
    name: "HealthPlus App",
    description: "Designed and shipped a cross-platform care companion with offline-first support.",
    tech: ["React Native", "Node.js", "GraphQL"],
    result: "HIPAA-ready architecture, 60k MAUs within 3 months, crash-free sessions at 99.6%.",
    link: "https://example.com/healthplus",
  },
  {
    name: "EcoStore E-commerce",
    description: "Custom storefront with editorial content, shoppable stories, and growth analytics baked-in.",
    tech: ["Shopify", "Liquid", "JavaScript"],
    result: "22% increase in AOV and SEO pipeline to support weekly launches.",
    link: "https://example.com/ecostore",
  },
];

export function ShowcaseSection() {
  return (
    <section id="showcase" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Selected work</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Builds that are fast, secure, and unforgettable.
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              A sample of the products, experiences, and platforms we have helped craft and grow.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Plan your launch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl border border-border/70 bg-card/90 shadow-lg shadow-primary/10 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/15">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.5),transparent_35%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(255,255,255,0.4),transparent_35%)]" />
              </div>

              <div className="flex flex-col gap-3 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{project.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden rounded-full bg-primary/10 p-2 text-primary transition-colors group-hover:inline-flex"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm font-semibold text-foreground">{project.result}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
                >
                  View case study
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
