# ArchTech Enterprises: Landing Page

Marketing site for ArchTech Enterprises, an AI automation consultancy. We find the pain points in a client's business or life and use AI to address them.

## Stack
- Next.js (App Router), TypeScript, Tailwind CSS
- No component libraries (no shadcn, MUI, etc.) unless explicitly asked
- No animation libraries unless asked; CSS transitions are fine
- Use `next/image` for images and `next/font` for fonts

## Conventions
- Pages in `app/`, section components in `components/sections/`, small shared pieces in `components/ui/`
- One component per file, named exports
- Each homepage section is a self-contained component so new ones (testimonials, case studies, intake form) can slot in without refactors
- Copy lives in the components for now; no CMS
- Keep diffs small and scoped to the task in the prompt. Don't touch unrelated files.

## Design tokens
Define these as Tailwind theme values and CSS variables, and use only these. No ad hoc hex values.
- Colors (Notre Dame inspired, no green, a shade lighter):
  - `primary` `#143865`: headers, nav, dark section backgrounds
  - `primary-bright` `#1C4F8F`: links, hover states
  - `accent` `#D39F10`: CTA button fills, highlights, small decorative details
  - `background` `#F8F4EC`: warm white page background (not pure white)
  - `text` `#0C2340`: body text and headings on light backgrounds
  - `muted` `#EFE9D9`: alternating section bands, borders, dividers
- Color usage rules:
  - Gold fails AA contrast as text on light backgrounds. Never use `accent` for body copy, links, or small text on `background` or `muted`.
  - Gold buttons get `text` (navy) labels, not white.
  - Gold text is fine on `primary` or `text` (navy) backgrounds.
  - Links on light backgrounds use `primary-bright`.
- Fonts (load via `next/font/google`):
  - Headings: Fraunces (semibold, keep the optical sizing default)
  - Body and UI: Inter
- Max content width: 1200px for the page container, with horizontal padding of 16px on mobile and 24px+ on larger screens
- Paragraph text max width: about 65ch so copy stays readable inside wide sections
- Section vertical spacing: consistent across sections

## Quality bar
- Mobile first, responsive at sm/md/lg
- Semantic HTML: one `h1`, logical heading order, landmarks (`header`, `main`, `footer`)
- Accessible: alt text, visible focus states, AA color contrast, keyboard navigable
- No pricing on the site

## Planned (don't build until asked)
- Testimonials section
- Case studies section
- Intake form: name, business email, industry, optional "about me" textarea