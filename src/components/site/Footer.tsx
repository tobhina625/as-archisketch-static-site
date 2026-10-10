import { Logo } from "./Logo";
import { CONTACT, NAV_LINKS, SERVICES, whatsappLink } from "./site-data";

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <Logo tone="inverted" />
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            Precision floor plans for real estate professionals.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <a href="#services" className="hover:text-accent">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-accent">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={whatsappLink} target="_blank" rel="noopener" className="hover:text-accent">
                {CONTACT.whatsappDisplay}
              </a>
            </li>
            <li>{CONTACT.location}</li>
            <li>{CONTACT.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/12">
        <p className="mx-auto max-w-6xl px-5 py-6 text-center text-xs text-primary-foreground/60">
          © 2026 Shahroz Butt Archisketch. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
