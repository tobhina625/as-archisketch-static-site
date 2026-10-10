import { createFileRoute } from "@tanstack/react-router";

import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { Portfolio } from "@/components/site/Portfolio";
import {
  Pricing,
  Process,
  Services,
  Testimonials,
  TrustStrip,
  WhyUs,
} from "@/components/site/Sections";

const TITLE = "Floor Plan Services for Real Estate | Shahroz Butt Archisketch";
const DESCRIPTION =
  "Accurate 2D and 3D floor plans, site plans, and redraws for agents, brokers, and developers. Delivered in 24 to 48 hours with free revisions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Shahroz Butt Archisketch" },
      { property: "og:url", content: "https://shahrozbutt-archisketch.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://shahrozbutt-archisketch.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Shahroz Butt Archisketch",
          description: DESCRIPTION,
          url: "https://shahrozbutt-archisketch.com/",
          areaServed: "Worldwide",
          serviceType: [
            "2D Floor Plans",
            "3D Floor Plans",
            "Site Plans",
            "Floor Plan Redraw",
            "MLS and Listing Plans",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Portfolio />
        <BeforeAfter />
        <Process />
        {/* <Pricing /> */}
        <WhyUs />
        {/* <Testimonials /> */}
        {/* <FAQ /> */}
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
