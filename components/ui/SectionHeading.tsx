import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

/** Eyebrow, h2, and optional intro paragraph for a section on a light background. */
export function SectionHeading({ id, eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="max-w-prose">
      <p className="text-sm font-semibold tracking-widest text-primary-bright uppercase">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 text-3xl leading-tight tracking-tight text-balance sm:text-4xl"
      >
        {title}
      </h2>
      {children && (
        <p className="mt-4 text-lg leading-relaxed text-pretty">{children}</p>
      )}
    </div>
  );
}
