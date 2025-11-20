"use client"

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  // Avoid hydration mismatch by rendering a neutral icon until mounted.
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative overflow-hidden rounded-full border border-gray-200 bg-muted/60 text-foreground transition-all hover:-translate-y-0.5 hover:shadow-sm dark:border-gray-700"
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const Icon = isDark ? Moon : Sun;

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative overflow-hidden rounded-full border border-gray-200 bg-muted/60 text-foreground transition-all hover:-translate-y-0.5 hover:shadow-sm dark:border-gray-700"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.6, rotate: 45 }}
          transition={{ duration: 0.22, ease: [0.22, 0.68, 0, 1] }}
          className="flex items-center justify-center"
        >
          <Icon className="h-[1.2rem] w-[1.2rem]" />
        </motion.span>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
