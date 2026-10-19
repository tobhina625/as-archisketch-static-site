/* ============================================================
   EDITABLE SITE CONTENT — change values here.
   Placeholders are kept in [BRACKETS] so they are easy to find.
   ============================================================ */

export const CONTACT = {
  email: "archisketch.biz@gmail.com",
  whatsappNumber: "447769472838", // digits only, e.g. 923001234567
  whatsappDisplay: "+447769472838",
  location: [
    "High Street Thornton Heath",
    "CR7 8RU",
    "United Kingdom (UK)",
  ],
  hours: "Mon – Sat, 10:00 – 20:00",
  linkedin: "[LINKEDIN_URL]",
  instagram: "https://www.instagram.com/archisketch5?stkn=Mm5jeWlmaHNzenVv&utm_source=qr",
  // behance: "[BEHANCE_URL]",
};

export const whatsappLink = `https://wa.me/${CONTACT.whatsappNumber}`;

export const STATS = [
  { value: "[500+]", label: "Projects Delivered" },
  { value: "[24-48h]", label: "Turnaround" },
  { value: "[100%]", label: "Revision Satisfaction" },
  { value: "[5+]", label: "Countries Served" },
];

export const SERVICES = [
  {
    icon: "Ruler",
    title: "Redraw Floor Plan",
    text: "Turn your old or hand-drawn plan into a clean, accurate, professional drawing.",
  },
  {
    icon: "Box",
    title: "Matterport Tour Plan",
    text: "Walk through every room from anywhere with an immersive 3D virtual tour of your property.",
  },
  {
    icon: "Map",
    title: "Schematic Floor Plan",
    text: "A clean, simplified layout showing room positions, walls, and flow at a glance.",
  },
  {
    icon: "PencilRuler",
    title: "Color Floor Plan",
    text: "A vibrant, color-coded layout that makes every room and space easy to tell apart.",
  },
  {
    icon: "FileCheck2",
    title: "Section & Elevations",
    text: "Detailed side and cut-through views showing heights, structure, and the exterior look of your building.",
  },
] as const;

export type PortfolioCategory = "2D Plans" | "Elevation" | "HMO Plan" | "Clients Work" | "Schematic Floor Plans" | "Section";

export const PORTFOLIO: {
  title: string;
  category: PortfolioCategory;
  image: string;
}[] = [
    { title: "Gross Internal Area 01", category: "2D Plans", image: "/portfolio/2DFloorPlan/1.jpg" },
    { title: "Gross Internal Area 02", category: "2D Plans", image: "/portfolio/2DFloorPlan/2.jpg" },
    { title: "Total Internal Area - Ground Floor Plan", category: "2D Plans", image: "/portfolio/2DFloorPlan/6.jpg" },
    { title: "Total Internal Area - Ground & 1st Floor Plan", category: "2D Plans", image: "/portfolio/2DFloorPlan/7.jpg" },
    { title: "Total Internal Area - 1st & 2nd Floor Plan", category: "2D Plans", image: "/portfolio/2DFloorPlan/5.jpg" },
    { title: "1st & Second Floor Plan", category: "2D Plans", image: "/portfolio/2DFloorPlan/3.jpg" },
    { title: "Kitchen & Bathroom Plan", category: "2D Plans", image: "/portfolio/2DFloorPlan/4.jpg" },
    { title: "Rear & Front Elevation", category: "Elevation", image: "/portfolio/Elevation/1.jpg" },
    { title: "West (Rear) Elevation", category: "Elevation", image: "/portfolio/Elevation/2.jpg" },
    { title: "Proposed Plan", category: "Elevation", image: "/portfolio/Elevation/3.jpg" },
    { title: "Ground & 1st Floor", category: "HMO Plan", image: "/portfolio/HMOPlan/1.jpg" },
    { title: "Ground, 1st, & 3rd Floor", category: "HMO Plan", image: "/portfolio/HMOPlan/3.jpg" },
    { title: "5th & 6th Floor", category: "HMO Plan", image: "/portfolio/HMOPlan/2.jpg" },
    { title: "Plan-1", category: "Clients Work", image: "/portfolio/ClientsWork/1.jpeg" },
    { title: "Plan-2", category: "Clients Work", image: "/portfolio/ClientsWork/2.jpeg" },
    { title: "Plan-3", category: "Clients Work", image: "/portfolio/ClientsWork/3.jpeg" },
    { title: "Plan-4", category: "Clients Work", image: "/portfolio/ClientsWork/4.jpeg" },
    { title: "Plan-5", category: "Clients Work", image: "/portfolio/ClientsWork/5.jpeg" },
    { title: "Plan-6", category: "Clients Work", image: "/portfolio/ClientsWork/6.jpeg" },
    { title: "Plan-7", category: "Clients Work", image: "/portfolio/ClientsWork/7.jpg" },
    { title: "Plan-8", category: "Clients Work", image: "/portfolio/ClientsWork/8.PNG" },
    { title: "Plan-9", category: "Clients Work", image: "/portfolio/ClientsWork/9.jpg" },
    { title: "Plan-10", category: "Clients Work", image: "/portfolio/ClientsWork/10.PNG" },
    { title: "Plan-11", category: "Clients Work", image: "/portfolio/ClientsWork/11.jpeg" },
    { title: "Plan-12", category: "Clients Work", image: "/portfolio/ClientsWork/12.jpeg" },
    { title: "UNIT 302", category: "Schmatic Floor Plans", image: "/portfolio/SchmaticFloorPlans/UNIT 302.jpg" },
    { title: "UNIT 303", category: "Schmatic Floor Plans", image: "/portfolio/SchmaticFloorPlans/UNIT 303.jpg" },
    { title: "UNIT 304", category: "Schmatic Floor Plans", image: "/portfolio/SchmaticFloorPlans/UNIT 304.jpg" },
    { title: "UNIT 305", category: "Schmatic Floor Plans", image: "/portfolio/SchmaticFloorPlans/UNIT 305.jpg" },
    { title: "UNIT 306", category: "Schmatic Floor Plans", image: "/portfolio/SchmaticFloorPlans/UNIT 306.jpg" },
    { title: "UNIT 307", category: "Schmatic Floor Plans", image: "/portfolio/SchmaticFloorPlans/UNIT 307.jpg" },
    { title: "UNIT 308", category: "Schmatic Floor Plans", image: "/portfolio/SchmaticFloorPlans/UNIT 308.jpg" },
    { title: "UNIT 309", category: "Schmatic Floor Plans", image: "/portfolio/SchmaticFloorPlans/UNIT 309.jpg" },
    { title: "UNIT 310", category: "Schmatic Floor Plans", image: "/portfolio/SchmaticFloorPlans/UNIT 310.jpg" },
    { title: "UNIT 311", category: "Schmatic Floor Plans", image: "/portfolio/SchmaticFloorPlans/UNIT 311.jpg" },
    { title: "Section-1", category: "Section", image: "/portfolio/Section/Section 1.jpg" },
    { title: "Section-2", category: "Section", image: "/portfolio/Section/Section 2.jpg" },
    { title: "Section-3", category: "Section", image: "/portfolio/Section/Section 3.jpg" },
  ];

export const PROCESS = [
  { title: "Send Your Files", text: "Upload sketches, PDFs, photos, or measurements." },
  { title: "Get a Quote", text: "Clear pricing and delivery time within hours." },
  { title: "Drafting and Review", text: "We draft your plan and share it for feedback." },
  { title: "Final Delivery", text: "Receive JPG, PNG, PDF, and CAD files, revisions included." },
];

export const PRICING = [
  { name: "2D Floor Plan", price: "$[10]", unit: "per plan", delivery: "Delivery in 24h", popular: false },
  { name: "3D Floor Plan", price: "$[25]", unit: "per plan", delivery: "Delivery in 48h", popular: true },
  { name: "Site Plan", price: "$[30]", unit: "per plan", delivery: "Delivery in 48h", popular: false },
];

export const PRICING_FEATURES = [
  "Unlimited revisions",
  "Multiple file formats",
  "Commercial use",
  "Confidential handling",
];

export const BENEFITS = [
  { icon: "Target", title: "Accurate Measurements", text: "Every room checked and labelled to scale." },
  { icon: "Timer", title: "Fast Turnaround", text: "Most plans delivered within 24 to 48 hours." },
  { icon: "RefreshCw", title: "Unlimited Revisions", text: "We adjust until the plan is right." },
  { icon: "FileType2", title: "Industry-Ready Files", text: "JPG, PNG, PDF, and CAD on delivery." },
  { icon: "ShieldCheck", title: "Confidential and Secure", text: "Your listings and files stay private." },
  { icon: "MessageSquare", title: "Responsive Support", text: "Quick replies on email and WhatsApp." },
];

export const TESTIMONIALS = [
  {
    quote: "Fast, accurate, and exactly what our listings needed. Our enquiries went up.",
    name: "[Client Name]",
    role: "Real Estate Agent, [City]",
  },
  {
    quote: "They redrew forty old scanned plans in a week. Quality was consistent throughout.",
    name: "[Client Name]",
    role: "Broker, [City]",
  },
  {
    quote: "The 3D plans sell the space before the viewing. Easy process, clear pricing.",
    name: "[Client Name]",
    role: "Property Photographer, [City]",
  },
];

export const FAQS = [
  {
    q: "What files do you need to start?",
    a: "A sketch, scanned plan, PDF, photo, or a list of measurements is enough. If something is unclear, we ask before drafting.",
  },
  {
    q: "How long does delivery take?",
    a: "Most 2D plans are ready in 24 hours. 3D and site plans usually take 48 hours. Bulk orders get a schedule up front.",
  },
  {
    q: "How many revisions are included?",
    a: "Unlimited revisions on the plan you ordered, at no extra cost.",
  },
  {
    q: "What file formats do I receive?",
    a: "JPG, PNG, and PDF as standard. CAD files are available on request.",
  },
  {
    q: "Do you offer bulk discounts?",
    a: "Yes. Agencies, developers, and photographers get volume rates and white-label delivery.",
  },
  {
    q: "How do I pay?",
    a: "Bank transfer, Wise, or PayPal. Invoices are sent before delivery for first orders.",
  },
];

export const SERVICE_OPTIONS = [
  "2D Floor Plan",
  "Redraw Floor Plan",
  "Matterport Tour Plan",
  "Schematic Floor Plan",
  "Color Floor Plan",
  "Section",
  "HMO Plans",
  "Elevations",
  "Other",
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  // { label: "Pricing", href: "#pricing" },
  // { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
