import { Clock, Mail, MapPin, MessageCircle, Paperclip } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./Sections";
import { CONTACT, SERVICE_OPTIONS, whatsappLink } from "./site-data";

/*
 * NOTE: There is no backend. Submitting opens a prefilled WhatsApp message.
 * TO SWAP IN A FORM SERVICE LATER (Formspree, Getform, Web3Forms, etc.):
 * replace the body of handleSubmit with a fetch POST to your endpoint, e.g.
 *   await fetch("https://formspree.io/f/XXXX", { method: "POST", body: new FormData(e.currentTarget) });
 */

export function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [showIntro, setShowIntro] = useState(true);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const service = String(data.get("service") ?? "");
    const company = String(data.get("company") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !service || !message) {
      setError("Please fill in name, email, service, and message.");
      return;
    }
    setError("");

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : "",
      `Service: ${service}`,
      `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const mailtoLink = `mailto:${CONTACT.email}?subject=${encodeURIComponent("New quote request")}&body=${encodeURIComponent(text)}`;
    window.open(mailtoLink, "_blank", "noopener");
    setSent(true);
    e.currentTarget.reset();
  }

  const fieldClass =
    "mt-1.5 w-full rounded-sm border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent";

  return (
    <section id="contact" className="section-y bg-surface">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="CONTACT"
          title="Get Your Free Quote"
          subtitle="Send your files or details. We reply with pricing and delivery time within hours."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <form onSubmit={handleSubmit} className="rounded-sm border bg-card p-7" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-primary">
                  Name *
                  <input name="name" required className={fieldClass} placeholder="Your full name" />
                </label>
                <label className="block text-sm font-medium text-primary">
                  Email *
                  <input
                    name="email"
                    type="email"
                    required
                    className={fieldClass}
                    placeholder="you@company.com"
                  />
                </label>
                <label className="block text-sm font-medium text-primary">
                  Company (optional)
                  <input name="company" className={fieldClass} placeholder="Agency or brokerage" />
                </label>
                <label className="block text-sm font-medium text-primary">
                  Service *
                  <select name="service" required defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="mt-5 block text-sm font-medium text-primary">
                Message *
                <textarea
                  name="message"
                  required
                  rows={5}
                  className={fieldClass}
                  placeholder="Tell us about the property, number of plans, and deadline."
                />
              </label>

              <label className="mt-5 block text-sm font-medium text-primary">
                <span className="flex items-center gap-2">
                  <Paperclip size={15} aria-hidden="true" /> Attach files (optional)
                </span>
                <input
                  type="file"
                  name="files"
                  multiple
                  className="mt-1.5 w-full rounded-sm border bg-background px-3.5 py-2.5 text-sm text-muted-foreground file:mr-3 file:rounded-sm file:border-0 file:bg-surface file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-primary"
                />
                <span className="mt-1 block text-xs font-normal text-muted-foreground">
                  Files are not uploaded yet — please send them on WhatsApp or email.
                </span>
              </label>

              {error && (
                <p role="alert" className="mt-4 text-sm font-medium text-destructive">
                  {error}
                </p>
              )}
              {sent && (
                <p role="status" className="mt-4 text-sm font-medium text-accent">
                  Thanks! Your quote request is ready in WhatsApp — hit send there and we'll reply shortly.
                </p>
              )}

              <button
                type="submit"
                className="mt-6 w-full rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                Send Quote Request
              </button>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-sm border bg-primary p-7 text-primary-foreground">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{showIntro ? "About Me" : "Contact Details"}</h3>
                <button
                  type="button"
                  onClick={() => setShowIntro(!showIntro)}
                  className="text-xs font-semibold text-accent hover:underline"
                >
                  {showIntro ? "View Contact Details" : "View About Me"}
                </button>
              </div>

              {showIntro ? (
                <div className="flex-1 space-y-4 text-sm leading-relaxed">
                  <p>
                    Hello! I'm a passionate designer specializing in high-quality floor plans for real estate professionals.
                    [Update this intro with your actual details later]
                  </p>
                  <p>
                    With extensive experience in both 2D and 3D modeling, my goal is to help you showcase your properties
                    effectively and attract more buyers. I pride myself on quick turnarounds and exceptional attention to detail.
                  </p>
                  <p>
                    Whether you need a simple layout or a fully furnished 3D render, I'm here to bring your vision to life.
                  </p>
                </div>
              ) : (
                <div className="flex-1">
                  <ul className="space-y-5 text-sm">
                    <li className="flex gap-3">
                      <Mail size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                      <span>
                        <span className="block text-primary-foreground/60">Email</span>
                        <a href={`mailto:${CONTACT.email}`} className="hover:underline">
                          {CONTACT.email}
                        </a>
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <MessageCircle size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                      <span>
                        <span className="block text-primary-foreground/60">WhatsApp</span>
                        <a href={whatsappLink} target="_blank" rel="noopener" className="hover:underline">
                          {CONTACT.whatsappDisplay}
                        </a>
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                      <span>
                        <span className="block text-primary-foreground/60">Location</span>
                        {Array.isArray(CONTACT.location) ? (
                          CONTACT.location.map((line, idx) => (
                            <span key={idx} className="block">
                              {line}
                            </span>
                          ))
                        ) : (
                          <span>{CONTACT.location}</span>
                        )}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Clock size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                      <span>
                        <span className="block text-primary-foreground/60">Working hours</span>
                        {CONTACT.hours}
                      </span>
                    </li>
                  </ul>
                </div>
              )}

              <div className="mt-8 border-t border-primary-foreground/15 pt-6">
                <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">Follow</p>
                <div className="mt-3 flex gap-3">
                  {[
                    { label: "LinkedIn", href: CONTACT.linkedin, path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.4 8.75 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2.05-3.3-2.05 0-2.36 1.57-2.36 3.2V21h-4z" },
                    { label: "Instagram", href: CONTACT.instagram, path: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 3.4a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8zm0 2.2a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4zm6.65-3.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" },
                    { label: "Behance", href: CONTACT.behance, path: "M9.1 5.5c1.9 0 3.4.9 3.4 2.9 0 1.2-.6 2-1.5 2.5 1.3.4 2 1.4 2 2.9 0 2.3-1.8 3.4-4 3.4H2V5.5zM5 10h3.4c.9 0 1.5-.4 1.5-1.2S9.3 7.6 8.4 7.6H5zm0 5.2h3.6c1 0 1.7-.5 1.7-1.4 0-1-.6-1.4-1.7-1.4H5zM15 6.7h5.6v1.4H15zm6.9 7.6h-6c.1 1.3.9 2 2.1 2 .8 0 1.5-.35 1.8-1h2c-.5 1.8-2 2.8-3.9 2.8-2.6 0-4.3-1.8-4.3-4.4 0-2.6 1.8-4.4 4.3-4.4 2.8 0 4.2 2.2 4 5zm-6-1.5h3.9c-.1-1.2-.8-1.9-1.9-1.9s-1.8.7-2 1.9z" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener"
                      aria-label={s.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-primary-foreground/20 text-primary-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
