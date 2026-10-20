import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function SiteFooter() {
  return (
    <footer className="bg-primary py-10 text-background">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Logo className="h-7 w-7" />
          <span className="font-heading text-lg font-semibold">
            ArchTech Enterprises
          </span>
        </div>
        <p className="text-sm">
          &copy; ArchTech Enterprises. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
