import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./Sections";
import { PORTFOLIO } from "./site-data";

const FILTERS = ["All", "2D Plans", "Elevation", "HMO Plan", "Clients Work", "Schematic Floor Plans", "Section"] as const;

export function Portfolio() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const items = useMemo(
    () => (filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter)),
    [filter],
  );

  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const paginatedItems = items.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => ((i ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") setOpenIndex((i) => ((i ?? 0) - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, items.length]);

  const active = openIndex === null ? null : items[openIndex];

  return (
    <section id="portfolio" className="section-y bg-surface">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="PORTFOLIO"
          title="Recent Floor Plan Work"
          subtitle="A sample of plans delivered for agents, brokers, and developers."
        />

        <Reveal className="mt-9 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => {
                setFilter(f);
                setOpenIndex(null);
                setCurrentPage(1);
              }}
              aria-pressed={filter === f}
              className={`rounded-sm border px-4 py-2 text-sm font-medium transition-colors ${filter === f
                ? "border-accent bg-accent text-accent-foreground"
                : "bg-card text-muted-foreground hover:border-accent hover:text-primary"
                }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {paginatedItems.map((item, i) => (
            <Reveal key={item.image} delay={(i % 4) * 80}>
              <button
                type="button"
                onClick={() => setOpenIndex((currentPage - 1) * ITEMS_PER_PAGE + i)}
                className="group relative block w-full overflow-hidden rounded-sm border bg-card text-left"
              >
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.category} floor plan sample`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex flex-col justify-end bg-primary/75 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="text-base font-semibold text-primary-foreground">{item.title}</span>
                  <span className="text-xs text-accent">{item.category}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {totalPages > 1 && (
          <Reveal className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border bg-card text-primary transition-colors hover:bg-accent disabled:opacity-50 disabled:hover:bg-card"
            >
              <ChevronLeft size={20} />
            </button>

            <span className="text-sm font-medium text-muted-foreground">
              Page {currentPage} of {Math.max(1, totalPages)}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(Math.max(1, totalPages), p + 1))}
              disabled={currentPage >= totalPages || totalPages === 0}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border bg-card text-primary transition-colors hover:bg-accent disabled:opacity-50 disabled:hover:bg-card"
            >
              <ChevronRight size={20} />
            </button>
          </Reveal>
        )}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/90 p-4"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-sm bg-card p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.image}
              alt={`${active.title} — ${active.category} floor plan sample`}
              className="w-full rounded-sm"
            />
            <div className="flex items-center justify-between px-2 py-3">
              <div>
                <p className="text-sm font-semibold text-primary">{active.title}</p>
                <p className="text-xs text-muted-foreground">{active.category}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous project"
                  onClick={() => setOpenIndex((i) => ((i ?? 0) - 1 + items.length) % items.length)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-sm border text-primary hover:bg-surface"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Next project"
                  onClick={() => setOpenIndex((i) => ((i ?? 0) + 1) % items.length)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-sm border text-primary hover:bg-surface"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <button
              type="button"
              autoFocus
              aria-label="Close"
              onClick={() => setOpenIndex(null)}
              className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-card text-primary"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
