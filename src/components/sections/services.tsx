"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Code, PenTool, Rocket, Search, Smartphone, Sparkles } from "lucide-react";

const services = [
  {
    title: "Website Building",
    description: "High-performance, visually striking websites tailored to your goals with conversion-first UX.",
    icon: Code,
  },
  {
    title: "Mobile App Building",
    description: "Intuitive, feature-rich iOS and Android apps that provide seamless experiences for your customers.",
    icon: Smartphone,
  },
  {
    title: "SEO & Organic Growth",
    description: "Data-driven sprints to dominate search results, improve technical health, and scale content operations.",
    icon: Search,
  },
  {
    title: "Blog Site Building",
    description: "Custom-designed content platforms that establish thought leadership and make publishing effortless.",
    icon: PenTool,
  },
  {
    title: "Startup Assistance",
    description: "End-to-end support from MVP development to go-to-market strategies.",
    icon: Rocket,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-gradient-to-b from-background to-primary/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">What we build</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Full-stack teams for your biggest digital bets.
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Strategy, design, engineering, and growth working together—from first sprint to market launch.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Delivery squads + retained growth support</span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full border-border/70 bg-card/80 shadow-sm shadow-primary/10 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4 text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-foreground">Need something custom?</p>
            <p>We assemble pods around your goals—growth experiments, product revamps, or full-scale launches.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
          >
            Book a discovery call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
