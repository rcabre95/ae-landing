import { Container } from "@/components/ui/Container";

const BOOKING_URL = "https://cal.com/archtechenterprises/discovery";
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
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby="booking-note"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-text transition-colors hover:bg-primary hover:text-background sm:w-auto sm:px-8"
          >
            Schedule your audit
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              focusable="false"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 3h4v4M13 3 7 9M11 9.5V13H3V5h3.5" />
            </svg>
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md border-2 border-primary-bright px-6 py-3 text-base font-semibold text-primary-bright transition-colors hover:bg-primary-bright hover:text-background sm:w-auto sm:px-8"
          >
            Email us
          </a>
        </div>
        <p id="booking-note" className="mt-4 text-sm">
          Scheduling opens Cal.com in a new tab.
        </p>
      </Container>
    </section>
  );
}
