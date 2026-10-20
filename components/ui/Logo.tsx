import { useId } from "react";

type LogoProps = {
  className?: string;
};

/** ArchTech bridge mark on a warm white tile. Decorative; pair with the visible name. */
export function Logo({ className = "" }: LogoProps) {
  const clipId = useId();

  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="14" y="0" width="36" height="52" />
        </clipPath>
      </defs>
      {/* tile */}
      <rect width="64" height="64" rx="14" fill="var(--background)" />
      {/* hangers */}
      <g stroke="var(--accent)" strokeWidth="3.5">
        <path d="M25 22V35" />
        <path d="M32 19V35" />
        <path d="M39 22V35" />
      </g>
      {/* arch */}
      <path
        clipPath={`url(#${clipId})`}
        d="M10,48C10,29.348 19.931,14 32,14C44.069,14 54,29.348 54,48"
        fill="none"
        stroke="var(--text)"
        strokeWidth="5.5"
      />
      {/* deck */}
      <rect x="12" y="33" width="40" height="5" fill="var(--text)" />
      {/* towers */}
      {["", "matrix(-1,0,0,1,64,0)"].map((transform) => (
        <g key={transform || "left"} transform={transform || undefined}>
          <rect x="6" y="20" width="10" height="30" fill="var(--text)" />
          <rect x="8.5" y="23" width="5" height="25" fill="var(--accent)" />
          <rect x="4" y="48" width="14" height="6" rx="1" fill="var(--text)" />
        </g>
      ))}
    </svg>
  );
}
