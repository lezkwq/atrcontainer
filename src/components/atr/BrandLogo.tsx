import logo from "@/assets/atr_logo_transparente.webp";

export function BrandLogo({ className }: { className: string }) {
  // Frame the visible logo within the original square PNG.
  return (
    <svg
      role="img"
      aria-label="ATR Refrigeração"
      viewBox="88 398 1078 480"
      className={`overflow-hidden ${className}`}
    >
      <image href={logo} width="1254" height="1254" />
    </svg>
  );
}
