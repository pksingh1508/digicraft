import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { fontMontserrat, fontPoppins, fontMono } from "@/fonts";
import { LenisProvider } from "@/components/lenis-provider";

export const metadata: Metadata = {
  title: "Digicraft Consulting | Digital Product & Growth Partners",
  description:
    "We build digital experiences, mobile apps, SEO systems, and startup playbooks that compound growth for modern teams."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${fontMontserrat.variable} ${fontPoppins.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
