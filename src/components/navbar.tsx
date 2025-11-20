"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#showcase", label: "Work" },
    { href: "#process", label: "Process" },
    { href: "#testimonials", label: "Clients" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/25">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-tight">
              Digicraft Consulting
            </span>
            <span className="text-xs text-muted-foreground">Digital product & growth studio</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex shadow-md shadow-primary/30">
            <Link href="#contact">Book a call</Link>
          </Button>
          <button
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-md p-2 transition md:hidden hover:bg-muted"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <motion.nav
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        className="mx-auto block max-w-6xl overflow-hidden px-4 md:hidden"
      >
        <div className="flex flex-col gap-3 pb-4 pt-2 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 transition-colors hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full">
            <Link href="#contact" onClick={() => setOpen(false)}>
              Book a call
            </Link>
          </Button>
        </div>
      </motion.nav>
    </motion.header>
  );
}
