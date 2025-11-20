import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MapPin, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { careers, getCareer } from "@/data/careers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

type Params = { slug: string };

export function generateStaticParams() {
  return careers.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = getCareer(slug);
  if (!role) return { title: "Role not found | Digicraft Careers" };
  return {
    title: `${role.title} | Digicraft Careers`,
    description: role.intro
  };
}

export default async function CareerDetail({
  params
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const role = getCareer(slug);

  if (!role) return notFound();

  return (
    <div className="relative min-h-screen bg-linear-to-b from-background via-background to-muted/40">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="flex flex-col gap-3">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to careers
          </Link>
          <p className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-gray-600 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:border-gray-500">
            <Sparkles className="h-4 w-4" />
            Digicraft Careers
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {role.title}
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            {role.intro}
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-600 bg-muted px-3 py-1 dark:border-gray-500">
              <MapPin className="h-4 w-4" />
              {role.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-600 bg-muted px-3 py-1 dark:border-gray-500">
              {role.team}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-600 bg-muted px-3 py-1 dark:border-gray-500">
              {role.type}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-600 bg-muted px-3 py-1 dark:border-gray-500">
              {role.salary}
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card className="h-full border-2 border-gray-600 bg-card/90 shadow-sm shadow-primary/10 dark:border-gray-500">
            <CardHeader>
              <CardTitle>What you&apos;ll do</CardTitle>
              <CardDescription>
                Core responsibilities you&apos;ll own in this role.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {role.responsibilities.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full border-2 border-gray-600 bg-card/90 shadow-sm shadow-primary/10 dark:border-gray-500">
            <CardHeader>
              <CardTitle>What you&apos;ll bring</CardTitle>
              <CardDescription>
                Skills and experiences we look for first.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Must-haves
                </p>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  {role.mustHave.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Nice-to-haves
                </p>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  {role.niceToHave.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-2 border-gray-600 bg-primary/5 shadow-lg shadow-primary/15 dark:border-gray-500">
          <CardHeader>
            <CardTitle>How to apply</CardTitle>
            <CardDescription>
              We assess real work. Ship something relevant, show your craft, and
              we&apos;ll take it from there.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              Step 1: Join the hackathon at{" "}
              <Link
                href="https://hackathonwallah.com"
                className="text-primary underline-offset-4 hover:underline"
              >
                hackathonwallah.com
              </Link>{" "}
              and build a small project tailored to this role.
            </p>
            <p>
              Step 2: Include a short README outlining your approach, stack, and
              trade-offs.
            </p>
            <p>
              Step 3: Submit your project link and a 2-minute Loom walkthrough
              with your repo/demo URL.
            </p>
            <p>
              Step 4: If your build is a strong fit, we&apos;ll schedule an
              interview to go deeper.
            </p>
            <div className="pt-2">
              <Button
                asChild
                className="gap-2 border-2 border-gray-600 dark:border-gray-500"
              >
                <Link
                  href="https://www.hackathonwallah.com/hackathons"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4"
                >
                  Register Here <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
