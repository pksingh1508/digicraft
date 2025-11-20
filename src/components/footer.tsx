import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="text-lg font-semibold">Digicraft Consulting</div>
            <p className="text-sm text-muted-foreground">
              Digital product, mobile, SEO, and startup partners who build with you—strategic, fast, and reliable.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#services" className="transition-colors hover:text-primary">Website Building</Link></li>
              <li><Link href="#services" className="transition-colors hover:text-primary">Mobile Apps</Link></li>
              <li><Link href="#services" className="transition-colors hover:text-primary">SEO & Growth</Link></li>
              <li><Link href="#services" className="transition-colors hover:text-primary">Startup Assistance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#process" className="transition-colors hover:text-primary">How we work</Link></li>
              <li><Link href="#showcase" className="transition-colors hover:text-primary">Case Studies</Link></li>
              <li><Link href="#testimonials" className="transition-colors hover:text-primary">Client Stories</Link></li>
              <li><Link href="mailto:hello@digicraft.studio" className="transition-colors hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="mailto:hello@digicraft.studio" className="transition-colors hover:text-primary">Email</Link></li>
              <li><Link href="https://www.linkedin.com" className="transition-colors hover:text-primary">LinkedIn</Link></li>
              <li><Link href="https://www.twitter.com" className="transition-colors hover:text-primary">Twitter / X</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Digicraft Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
