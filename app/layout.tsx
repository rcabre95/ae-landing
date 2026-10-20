import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const description =
  "Enterprise AI solutions, custom designed for small business. Book a complimentary AI solutions audit and find where you can save time and money.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.SITE_URL ?? "https://archtechenterprises.com",
  ),
  title: {
    default: "ArchTech Enterprises | AI Solutions for Small Business",
    template: "%s | ArchTech Enterprises",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "ArchTech Enterprises",
    title: "ArchTech Enterprises | Your Bridge to Better Practices",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArchTech Enterprises | Your Bridge to Better Practices",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-text">
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
