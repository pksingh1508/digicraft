import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { careers } from "@/data/careers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Careers | Digicraft Consulting",
  description:
    "Join Digicraft Consulting. Build web, mobile, platform, and design experiences with a team that ships fast and learns together.",
};

export default function CareersPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background to-muted/40">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-4 w-4" />
              Digicraft Careers
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Build with the team that ships for modern companies.
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              We’re engineers, designers, and builders who care about fast delivery, great craft, and measurable outcomes.
              Show us what you can build, and we’ll open the right door for you.
            </p>
          </div>
          <Button asChild size="lg" className="shadow-lg shadow-primary/25">
            <Link href="#roles">View open roles</Link>
          </Button>
        </div>

        <div id="roles" className="mt-12 grid gap-6 md:grid-cols-2">
          {careers.map((role) => (
            <Card
              key={role.slug}
              className="group h-full border-border/70 bg-card/90 shadow-sm shadow-primary/10 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <CardHeader className="flex flex-row items-start justify-between gap-3">
                <div>
                  <CardTitle className="text-2xl font-semibold">{role.title}</CardTitle>
                  <CardDescription className="mt-1">{role.team}</CardDescription>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {role.location} · {role.type}
                  </div>
                  <div className="mt-2 text-xs font-semibold text-muted-foreground">{role.salary}</div>
                </div>
                <Link
                  href={`/careers/${role.slug}`}
                  className="hidden rounded-full bg-primary/10 p-2 text-primary transition hover:bg-primary/20 group-hover:inline-flex"
                  aria-label={`Read more about ${role.title}`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{role.intro}</p>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {role.responsibilities.slice(0, 2).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-3 py-1 transition-colors group-hover:border-primary/40 group-hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline" className="group-hover:border-primary/60">
                  <Link href={`/careers/${role.slug}`} className="flex items-center gap-2">
                    View details <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
