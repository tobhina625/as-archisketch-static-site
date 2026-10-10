export function Logo({ tone = "primary" }: { tone?: "primary" | "inverted" }) {
  return (
    <img
      src="/site-logo/logo-1.svg"
      alt="Archisketch logo"
      className="h-10 w-auto object-contain"
      style={{
        filter:
          tone === "inverted"
            ? // White — for dark footer background
            "brightness(0) invert(1)"
            : // Brand navy #0B1F3A — for light navbar background
            "invert(11%) sepia(45%) saturate(861%) hue-rotate(182deg) brightness(97%) contrast(102%)",
      }}
    />
  );
}
