import {
  ArrowRight,
  Box,
  Check,
  FileCheck2,
  FileType2,
  Layers,
  Map,
  MessageSquare,
  PencilRuler,
  RefreshCw,
  Ruler,
  ShieldCheck,
  Star,
  Target,
  Timer,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "./Reveal";
import { BENEFITS, PRICING, PRICING_FEATURES, PROCESS, SERVICES, STATS, TESTIMONIALS } from "./site-data";

const ICONS: Record<string, LucideIcon> = {
  Ruler,
  Box,
  Map,
  PencilRuler,
  FileCheck2,
  Layers,
  Target,
  Timer,
  RefreshCw,
  FileType2,
  ShieldCheck,
  MessageSquare,
};

export function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-accent">{label}</p>
      <h2 className="mt-3 text-balance text-3xl font-semibold text-primary md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}

export function TrustStrip() {
  return (
    <section className="border-b bg-primary">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="text-center">
            <p className="font-display text-3xl font-bold text-accent md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-primary-foreground/75">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="section-y bg-background">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="SERVICES"
          title="Floor Plan Services Built for Real Estate"
          subtitle="Everything you need to present a property clearly, in one place."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Ruler;
            return (
              <Reveal 
                key={s.title} 
                delay={(i % 3) * 90} 
                as="article"
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="card-lift flex h-full flex-col rounded-sm border bg-card p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-accent/12 text-accent">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-primary">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 motion-safe:transition-all"
                  >
                    Get Quote <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="section-y bg-background">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading label="PROCESS" title="How It Works" />
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {PROCESS.map((step, i) => (
            <Reveal key={step.title} delay={i * 90} as="li">
              <div className="relative h-full">
                <span className="font-display text-5xl font-bold text-accent/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < PROCESS.length - 1 && (
                  <span
                    className="absolute left-16 top-6 hidden h-px w-[calc(100%-3rem)] bg-border md:block"
                    aria-hidden="true"
                  />
                )}
                <h3 className="mt-3 text-lg font-semibold text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="section-y bg-surface">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="PRICING"
          title="Simple, Transparent Pricing"
          subtitle="No hidden fees. Revisions always included."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRICING.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div
                className={`card-lift flex h-full flex-col rounded-sm border bg-card p-8 ${p.popular ? "border-accent shadow-[0_24px_60px_-40px_rgba(11,31,58,0.9)] md:-mt-4" : ""
                  }`}
              >
                {p.popular && (
                  <span className="mb-4 w-fit rounded-sm bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-primary">{p.name}</h3>
                <p className="mt-4 font-display text-4xl font-bold text-primary">
                  {p.price}
                  <span className="ml-1 text-sm font-medium text-muted-foreground">{p.unit}</span>
                </p>
                <p className="mt-1 text-sm text-accent">{p.delivery}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {PRICING_FEATURES.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-accent" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 rounded-sm px-5 py-3 text-center text-sm font-semibold transition-opacity hover:opacity-90 ${p.popular
                      ? "bg-accent text-accent-foreground"
                      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                >
                  Request Quote
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Bulk orders or agency partnership?{" "}
          <a href="#contact" className="font-semibold text-accent underline-offset-4 hover:underline">
            Get custom rates.
          </a>
        </p>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="section-y bg-background">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading label="WHY US" title="Why Agents and Developers Choose Us" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => {
            const Icon = ICONS[b.icon] ?? Target;
            return (
              <Reveal key={b.title} delay={(i % 3) * 80}>
                <div className="flex h-full gap-4 rounded-sm border bg-card p-6">
                  <span className="mt-0.5 text-accent">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-primary">{b.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section-y bg-surface">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading label="TESTIMONIALS" title="What Clients Say" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 90}>
              <figure className="card-lift flex h-full flex-col rounded-sm border bg-card p-7">
                <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t pt-4">
                  <p className="text-sm font-semibold text-primary">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
