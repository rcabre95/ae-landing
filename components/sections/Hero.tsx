import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-primary py-section">
      <Container className="flex flex-col items-center text-center">
        <Logo className="h-16 w-16 sm:h-20 sm:w-20" />
        <p className="mt-4 font-heading text-lg font-semibold tracking-tight text-accent sm:text-xl">
          ArchTech Enterprises
        </p>
        <h1
          id="hero-heading"
          className="mt-6 max-w-[20ch] text-4xl leading-tight tracking-tight text-balance text-background sm:text-5xl lg:text-6xl"
        >
          Find the friction. Let AI handle it.
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-pretty text-muted sm:text-xl">
          We find the pain points in your business or your life and build AI
          automations that take them off your plate.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-semibold text-text transition-colors hover:bg-background focus-visible:outline-background"
        >
          Book a free consultation
        </a>
      </Container>
    </section>
  );
}
