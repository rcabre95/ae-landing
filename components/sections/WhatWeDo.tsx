import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Automate the busywork",
    description:
      "Data entry, follow-up emails, scheduling, report building. We hand the repetitive tasks to AI so your team can spend its time on work that needs a person.",
  },
  {
    title: "Connect the tools you already use",
    description:
      "Your CRM, inbox, spreadsheets, and calendar should talk to each other. We wire them together so information moves on its own instead of by copy and paste.",
  },
  {
    title: "Tame the personal to-do list",
    description:
      "Pain points don't stop at the office. We set up assistants that sort your inbox, track bills and appointments, and keep the household running smoothly.",
  },
];

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-heading"
      className="py-section"
    >
      <Container>
        <SectionHeading
          id="what-we-do-heading"
          eyebrow="What we do"
          title="We find what slows you down and fix it with AI."
        >
          Every business and household has tasks that eat hours and add little
          value. We dig in, find where the time goes, and build automations that
          fit how you already work. No jargon, no one-size-fits-all software.
        </SectionHeading>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-lg border border-muted border-t-4 border-t-accent bg-background p-6"
            >
              <h3 className="text-xl leading-snug">{service.title}</h3>
              <p className="mt-3 leading-relaxed">{service.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
