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
      className="bg-muted py-section"
    >
      <Container>
        <SectionHeading
          id="what-we-do-heading"
          eyebrow="What we do"
          title="Enterprise solutions, custom designed for small business."
        >
          Every business has tasks that eat hours and add little value. We find
          where the time goes and build AI automations that fit how you already
          work. Let ArchTech earn your trust, save your time, and gain your
          respect as your premier AI solutions firm.
        </SectionHeading>

        {/* role="list" keeps list semantics in Safari, which drops them when list-style is none. */}
        <ul role="list" className="mt-12 grid gap-6 lg:grid-cols-3">
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
