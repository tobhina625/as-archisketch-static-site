import { Plus } from "lucide-react";
import { useState } from "react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./Sections";
import { FAQS } from "./site-data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-y bg-background">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading label="FAQ" title="Questions, Answered" />
        <div className="mt-10 divide-y rounded-sm border bg-card">
          {FAQS.map((item, i) => {
            const expanded = open === i;
            return (
              <Reveal key={item.q} delay={i * 50}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpen(expanded ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-primary">{item.q}</span>
                    <Plus
                      size={18}
                      aria-hidden="true"
                      className={`shrink-0 text-accent transition-transform ${expanded ? "rotate-45" : ""}`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  hidden={!expanded}
                  className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground"
                >
                  {item.a}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
