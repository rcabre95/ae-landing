import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="py-section">
      <Container className="flex flex-col items-center text-center">
        <Image
          src="/ae-logo.svg"
          alt="ArchTech Enterprises"
          width={754}
          height={440}
          preload
          className="h-auto w-full max-w-xs sm:max-w-sm md:max-w-md"
        />
        <h1
          id="hero-heading"
          className="mt-8 max-w-[20ch] text-4xl leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl"
        >
          Your bridge to better practices.
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-pretty sm:text-xl">
          Start with a complimentary AI solutions audit interview. We&apos;ll
          find where we can save your business money or time, and likely both.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-text transition-colors hover:bg-primary hover:text-background sm:w-auto sm:px-8"
        >
          Book your complimentary audit
        </a>
      </Container>
    </section>
  );
}
