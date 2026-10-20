import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function SiteHeader() {
  return (
    <header className="bg-primary">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-text"
      >
        Skip to content
      </a>
      <Container className="flex h-16 items-center sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-3 rounded text-background no-underline focus-visible:outline-accent"
        >
          <Logo className="h-8 w-8 sm:h-9 sm:w-9" />
          <span className="font-heading text-lg font-semibold tracking-tight sm:text-xl">
            ArchTech Enterprises
          </span>
        </Link>
      </Container>
    </header>
  );
}
