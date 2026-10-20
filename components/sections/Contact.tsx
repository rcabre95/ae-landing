import { Container } from "@/components/ui/Container";

// TODO: Replace with the real Calendly link.
const CALENDLY_URL = "https://calendly.com/your-link";
const CONTACT_EMAIL = "info@archtechenterprises.com";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-muted py-section"
    >
      <Container className="flex flex-col items-center text-center">
        <h2
          id="contact-heading"
          className="max-w-[24ch] text-3xl leading-tight tracking-tight text-balance sm:text-4xl"
        >
          Ready to see where AI can save you time and money?
        </h2>
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-pretty">
          Book your complimentary AI solutions audit interview with our
          experienced team. It&apos;s a no-pressure conversation about your
          business and where we can help.
        </p>
        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <a
            href={CALENDLY_URL}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-semibold text-text transition-colors hover:bg-primary hover:text-background sm:w-auto"
          >
            Schedule your audit
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md border-2 border-primary-bright px-8 py-3 text-base font-semibold text-primary-bright transition-colors hover:bg-primary-bright hover:text-background sm:w-auto"
          >
            Email us
          </a>
        </div>
      </Container>
    </section>
  );
}
