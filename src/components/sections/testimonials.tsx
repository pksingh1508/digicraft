"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Digicraft squad felt like our in-house team. They shipped a new site, SEO program, and analytics setup in six weeks.",
    name: "Radhika Menon",
    title: "VP Growth, FinTech Scale-up"
  },
  {
    quote:
      "We got a mobile app in production faster than our internal team could scope it. Clean code, strong governance, zero surprises.",
    name: "Evan Carter",
    title: "Founder, HealthPlus"
  },
  {
    quote:
      "They bridge strategy and execution better than any consultancy we've worked with. Leadership-ready reporting every sprint.",
    name: "Samar Khan",
    title: "COO, DTC Retail Collective"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Client voice
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Partners who stay because we deliver.
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              We build long-term relationships by shipping the work, not just
              the decks.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border-2 border-gray-600 bg-card/90 p-6 shadow-lg shadow-primary/10 dark:border-gray-500"
            >
              <Quote className="absolute -left-4 -top-4 h-16 w-16 text-primary/10" />
              <p className="text-base leading-relaxed text-foreground">
                {item.quote}
              </p>
              <div className="mt-6">
                <p className="font-semibold text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
