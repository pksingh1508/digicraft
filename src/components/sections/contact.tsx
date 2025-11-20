"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react";

const contactMethods = [
  {
    title: "Email",
    detail: "hello@digicraft.studio",
    icon: Mail,
    href: "mailto:hello@digicraft.studio"
  },
  {
    title: "Call",
    detail: "+1 (555) 201-2049",
    icon: Phone,
    href: "tel:+15552012049"
  },
  {
    title: "Discovery call",
    detail: "15-minute fit check to map the first sprint.",
    icon: MessageSquare,
    href: "mailto:hello@digicraft.studio?subject=Discovery%20Call%20with%20Digicraft"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border-2 border-gray-600 dark:border-gray-500 bg-linear-to-r from-primary/10 via-card to-secondary/10 shadow-2xl shadow-primary/15"
        >
          <div className="grid gap-8 px-6 py-10 md:grid-cols-[1.1fr,0.9fr] md:px-10 md:py-14">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Let&apos;s build together
              </p>
              <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
                Tell us about your roadmap and we&apos;ll set up a working
                session.
              </h2>
              <p className="text-lg text-muted-foreground">
                We&apos;ll review your goals, timelines, and tech stack, then
                propose the right team and first sprint.
              </p>
              <Link
                href="mailto:hello@digicraft.studio"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
              >
                Email the partners
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <Link
                  key={method.title}
                  href={method.href}
                  className="group flex items-start gap-3 rounded-2xl border-2 border-gray-600 bg-card/90 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg dark:border-gray-500"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <method.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {method.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {method.detail}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
