type LogoProps = {
  className?: string;
};

/** Arch mark: a gold arch with a keystone. Decorative; pair with the visible name. */
export function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={`text-accent ${className}`}
    >
      <path
        d="M6 28V16a10 10 0 0 1 20 0v12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <path d="M13.5 3h5l-1 6h-3z" fill="currentColor" />
      <path d="M3 28h26" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
