import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Intake meeting",
    description:
      "We start with a conversation about your day-to-day: what's tedious, what falls through the cracks, and what you wish just happened on its own.",
  },
  {
    title: "Custom gameplan",
    description:
      "We map your pain points to specific AI solutions and lay out a clear plan: what we'll build, which tools it touches, and what changes for you.",
  },
  {
    title: "Implementation",
    description:
      "We build, test, and launch the automations, then walk you through them so you're confident using them. We stick around to tune things as you go.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-muted py-section"
    >
      <Container>
        <SectionHeading
          id="how-it-works-heading"
          eyebrow="How it works"
          title="From first conversation to working automation in three steps."
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-lg bg-background p-6">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-lg font-semibold text-accent"
              >
                {index + 1}
              </span>
              <h3 className="mt-4 text-xl leading-snug">
                <span className="sr-only">Step {index + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
