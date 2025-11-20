import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/services";
import { ShowcaseSection } from "@/components/sections/showcase";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,hsl(var(--primary)/0.08),transparent_28%),radial-gradient(circle_at_78%_6%,hsl(var(--secondary)/0.08),transparent_24%)] dark:bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.2),transparent_28%),radial-gradient(circle_at_78%_10%,hsl(var(--secondary)/0.16),transparent_26%),linear-gradient(135deg,hsl(270 5.5556% 7.0588%),hsl(0 0% 13.3333%))]" />
      <Navbar />
      <main className="relative flex flex-col">
        <HeroSection />
        <ServicesSection />
        <ShowcaseSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
