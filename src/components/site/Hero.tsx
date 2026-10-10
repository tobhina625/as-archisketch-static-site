import { Check } from "lucide-react";

import { Reveal } from "./Reveal";

function HeroPlan() {
  return (
    <svg viewBox="0 0 640 520" className="h-full w-full" role="img" aria-label="Illustration of a detailed architectural floor plan">
      <rect width="640" height="520" fill="#FFFFFF" />
      <g stroke="#0B1F3A" strokeOpacity="0.08">
        {Array.from({ length: 26 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 25} y1="0" x2={i * 25} y2="520" />
        ))}
        {Array.from({ length: 21 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 25} x2="640" y2={i * 25} />
        ))}
      </g>
      <g stroke="#0B1F3A" strokeWidth="8" fill="none">
        <rect x="55" y="50" width="530" height="420" />
        <path d="M320 50 V250" />
        <path d="M55 250 H585" />
        <path d="M200 250 V470" />
        <path d="M430 250 V470" />
      </g>
      <g fill="#14B8A6" fillOpacity="0.16">
        <rect x="63" y="58" width="249" height="184" />
        <rect x="438" y="258" width="139" height="204" />
      </g>
      <g stroke="#FFFFFF" strokeWidth="8">
        <path d="M320 120 V180" />
        <path d="M250 250 H310" />
        <path d="M430 340 V400" />
      </g>
      <g fill="#0B1F3A" fontFamily="Inter, sans-serif" fontSize="17" fontWeight="600">
        <text x="95" y="150">MASTER BEDROOM</text>
        <text x="365" y="150">LIVING</text>
        <text x="90" y="370">BATH</text>
        <text x="245" y="370">KITCHEN</text>
        <text x="465" y="370">HALL</text>
      </g>
      <g fill="#0B1F3A" fillOpacity="0.55" fontFamily="Inter, sans-serif" fontSize="14">
        <text x="95" y="172">4.20 × 3.40 m</text>
        <text x="365" y="172">5.10 × 3.40 m</text>
        <text x="90" y="392">2.10 × 2.00 m</text>
        <text x="245" y="392">3.40 × 2.60 m</text>
        <text x="465" y="392">2.60 × 2.60 m</text>
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b bg-background">
      <div className="blueprint-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent">
            FLOOR PLANS FOR REAL ESTATE
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] text-primary md:text-5xl lg:text-[3.4rem]">
            Floor Plans That Help Your Listings Sell Faster
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Accurate 2D and Elevation floor plans, site plans, and redraws for agents, brokers, and
            developers. Delivered in 24 to 48 hours with free revisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Get a Free Quote
            </a>
            <a
              href="#portfolio"
              className="rounded-sm border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View Portfolio
            </a>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {["24-48h turnaround", "Unlimited revisions", "MLS-ready files"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check size={16} className="text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="overflow-hidden rounded-sm border bg-card shadow-[0_30px_70px_-45px_rgba(11,31,58,0.8)]">
            <HeroPlan />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
