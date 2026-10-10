import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { C as ArrowUp, S as Box, _ as FileCheckCorner, a as Ruler, b as ChevronLeft, c as Paperclip, d as Menu, f as Map, g as FileTypeCorner, h as Layers, i as ShieldCheck, l as MessageSquare, m as Mail, n as Timer, o as RefreshCw, p as MapPin, r as Target, s as PencilRuler, t as X, u as MessageCircle, v as Clock, w as ArrowRight, x as Check, y as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cg6MHQc1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			});
		}, {
			threshold: .08,
			rootMargin: "0px 0px -40px 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: cn("transition-all duration-700 ease-out", visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0", className),
		children
	});
}
var BEFORE_IMAGE = "/BeforeAfter/P1/Before.jpeg";
var AFTER_IMAGE = "/BeforeAfter/P1/After.png";
function BeforeAfter() {
	const [pos, setPos] = (0, import_react.useState)(50);
	const wrapRef = (0, import_react.useRef)(null);
	const dragging = (0, import_react.useRef)(false);
	const setFromClientX = (0, import_react.useCallback)((clientX) => {
		const el = wrapRef.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const next = (clientX - rect.left) / rect.width * 100;
		setPos(Math.min(100, Math.max(0, next)));
	}, []);
	(0, import_react.useEffect)(() => {
		const move = (e) => dragging.current && setFromClientX(e.clientX);
		const touch = (e) => {
			if (dragging.current && e.touches[0]) setFromClientX(e.touches[0].clientX);
		};
		const up = () => dragging.current = false;
		window.addEventListener("mousemove", move);
		window.addEventListener("mouseup", up);
		window.addEventListener("touchmove", touch, { passive: true });
		window.addEventListener("touchend", up);
		return () => {
			window.removeEventListener("mousemove", move);
			window.removeEventListener("mouseup", up);
			window.removeEventListener("touchmove", touch);
			window.removeEventListener("touchend", up);
		};
	}, [setFromClientX]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "before-after",
		className: "section-y bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mx-auto max-w-2xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.2em] text-accent",
						children: "BEFORE AND AFTER"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-semibold text-primary md:text-4xl",
						children: "From Rough Sketch to Polished Plan"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: wrapRef,
						className: "relative aspect-[8/5] w-full select-none overflow-hidden rounded-sm border bg-background",
						onMouseDown: (e) => {
							dragging.current = true;
							setFromClientX(e.clientX);
						},
						onTouchStart: (e) => {
							dragging.current = true;
							if (e.touches[0]) setFromClientX(e.touches[0].clientX);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 bg-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: AFTER_IMAGE,
									alt: "Polished floor plan after redraw",
									className: "h-full w-full object-contain pointer-events-none",
									draggable: false
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 overflow-hidden",
								style: { width: `${pos}%` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-white",
									style: { width: `${pos > 0 ? 100 / pos * 100 : 100}%` },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: BEFORE_IMAGE,
										alt: "Original sketch floor plan before redraw",
										className: "h-full w-full object-contain pointer-events-none",
										draggable: false
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-3 top-3 rounded-sm bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground",
								children: "Before"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute right-3 top-3 rounded-sm bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground",
								children: "After"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute inset-y-0 w-0.5 bg-accent",
								style: { left: `${pos}%` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 0,
								max: 100,
								value: pos,
								"aria-label": "Compare before and after floor plan",
								onChange: (e) => setPos(Number(e.target.value)),
								className: "absolute inset-x-0 bottom-4 mx-auto w-[85%] cursor-ew-resize accent-accent"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-center text-sm text-muted-foreground",
					children: "Send us any sketch, PDF, or photo. We handle the rest."
				})
			]
		})
	});
}
var CONTACT = {
	email: "archisketch.biz@gmail.com",
	whatsappNumber: "447769472838",
	whatsappDisplay: "+447769472838",
	location: "London, United Kingdom",
	hours: "Mon – Sat, 10:00 – 20:00",
	linkedin: "[LINKEDIN_URL]",
	instagram: "https://www.instagram.com/archisketch5?stkn=Mm5jeWlmaHNzenVv&utm_source=qr"
};
var whatsappLink = `https://wa.me/${CONTACT.whatsappNumber}`;
var STATS = [
	{
		value: "[500+]",
		label: "Projects Delivered"
	},
	{
		value: "[24-48h]",
		label: "Turnaround"
	},
	{
		value: "[100%]",
		label: "Revision Satisfaction"
	},
	{
		value: "[5+]",
		label: "Countries Served"
	}
];
var SERVICES = [
	{
		icon: "Ruler",
		title: "Redraw Floor Plan",
		text: "Turn your old or hand-drawn plan into a clean, accurate, professional drawing."
	},
	{
		icon: "Box",
		title: "Matterport Tour Plan",
		text: "Walk through every room from anywhere with an immersive 3D virtual tour of your property."
	},
	{
		icon: "Map",
		title: "Schematic Floor Plan",
		text: "A clean, simplified layout showing room positions, walls, and flow at a glance."
	},
	{
		icon: "PencilRuler",
		title: "Color Floor Plan",
		text: "A vibrant, color-coded layout that makes every room and space easy to tell apart."
	},
	{
		icon: "FileCheck2",
		title: "Section & Elevations",
		text: "Detailed side and cut-through views showing heights, structure, and the exterior look of your building."
	}
];
var PORTFOLIO = [
	{
		title: "Gross Internal Area 01",
		category: "2D Plans",
		image: "/portfolio/2DFloorPlan/1.jpg"
	},
	{
		title: "Gross Internal Area 02",
		category: "2D Plans",
		image: "/portfolio/2DFloorPlan/2.jpg"
	},
	{
		title: "Total Internal Area - Ground Floor Plan",
		category: "2D Plans",
		image: "/portfolio/2DFloorPlan/6.jpg"
	},
	{
		title: "Total Internal Area - Ground & 1st Floor Plan",
		category: "2D Plans",
		image: "/portfolio/2DFloorPlan/7.jpg"
	},
	{
		title: "Total Internal Area - 1st & 2nd Floor Plan",
		category: "2D Plans",
		image: "/portfolio/2DFloorPlan/5.jpg"
	},
	{
		title: "1st & Second Floor Plan",
		category: "2D Plans",
		image: "/portfolio/2DFloorPlan/3.jpg"
	},
	{
		title: "Kitchen & Bathroom Plan",
		category: "2D Plans",
		image: "/portfolio/2DFloorPlan/4.jpg"
	},
	{
		title: "Rear & Front Elevation",
		category: "Elevation",
		image: "/portfolio/Elevation/1.jpg"
	},
	{
		title: "West (Rear) Elevation",
		category: "Elevation",
		image: "/portfolio/Elevation/2.jpg"
	},
	{
		title: "Proposed Plan",
		category: "Elevation",
		image: "/portfolio/Elevation/3.jpg"
	},
	{
		title: "Ground & 1st Floor",
		category: "HMO Plan",
		image: "/portfolio/HMOPlan/1.jpg"
	},
	{
		title: "Ground, 1st, & 3rd Floor",
		category: "HMO Plan",
		image: "/portfolio/HMOPlan/3.jpg"
	},
	{
		title: "5th & 6th Floor",
		category: "HMO Plan",
		image: "/portfolio/HMOPlan/2.jpg"
	},
	{
		title: "Plan-1",
		category: "Clients Work",
		image: "/portfolio/ClientsWork/1.jpeg"
	},
	{
		title: "Plan-2",
		category: "Clients Work",
		image: "/portfolio/ClientsWork/2.jpeg"
	},
	{
		title: "Plan-3",
		category: "Clients Work",
		image: "/portfolio/ClientsWork/3.jpeg"
	},
	{
		title: "Plan-4",
		category: "Clients Work",
		image: "/portfolio/ClientsWork/4.jpeg"
	},
	{
		title: "Plan-5",
		category: "Clients Work",
		image: "/portfolio/ClientsWork/5.jpeg"
	},
	{
		title: "Plan-6",
		category: "Clients Work",
		image: "/portfolio/ClientsWork/6.jpeg"
	},
	{
		title: "Plan-7",
		category: "Clients Work",
		image: "/portfolio/ClientsWork/7.jpg"
	},
	{
		title: "Plan-8",
		category: "Clients Work",
		image: "/portfolio/ClientsWork/8.PNG"
	},
	{
		title: "Plan-9",
		category: "Clients Work",
		image: "/portfolio/ClientsWork/9.jpg"
	},
	{
		title: "Plan-10",
		category: "Clients Work",
		image: "/portfolio/ClientsWork/10.PNG"
	},
	{
		title: "Plan-11",
		category: "Clients Work",
		image: "/portfolio/ClientsWork/11.jpeg"
	},
	{
		title: "Plan-12",
		category: "Clients Work",
		image: "/portfolio/ClientsWork/12.jpeg"
	},
	{
		title: "UNIT 302",
		category: "Schmatic Floor Plans",
		image: "/portfolio/SchmaticFloorPlans/UNIT 302.jpg"
	},
	{
		title: "UNIT 303",
		category: "Schmatic Floor Plans",
		image: "/portfolio/SchmaticFloorPlans/UNIT 303.jpg"
	},
	{
		title: "UNIT 304",
		category: "Schmatic Floor Plans",
		image: "/portfolio/SchmaticFloorPlans/UNIT 304.jpg"
	},
	{
		title: "UNIT 305",
		category: "Schmatic Floor Plans",
		image: "/portfolio/SchmaticFloorPlans/UNIT 305.jpg"
	},
	{
		title: "UNIT 306",
		category: "Schmatic Floor Plans",
		image: "/portfolio/SchmaticFloorPlans/UNIT 306.jpg"
	},
	{
		title: "UNIT 307",
		category: "Schmatic Floor Plans",
		image: "/portfolio/SchmaticFloorPlans/UNIT 307.jpg"
	},
	{
		title: "UNIT 308",
		category: "Schmatic Floor Plans",
		image: "/portfolio/SchmaticFloorPlans/UNIT 308.jpg"
	},
	{
		title: "UNIT 309",
		category: "Schmatic Floor Plans",
		image: "/portfolio/SchmaticFloorPlans/UNIT 309.jpg"
	},
	{
		title: "UNIT 310",
		category: "Schmatic Floor Plans",
		image: "/portfolio/SchmaticFloorPlans/UNIT 310.jpg"
	},
	{
		title: "UNIT 311",
		category: "Schmatic Floor Plans",
		image: "/portfolio/SchmaticFloorPlans/UNIT 311.jpg"
	},
	{
		title: "Section-1",
		category: "Section",
		image: "/portfolio/Section/Section 1.jpg"
	},
	{
		title: "Section-2",
		category: "Section",
		image: "/portfolio/Section/Section 2.jpg"
	},
	{
		title: "Section-3",
		category: "Section",
		image: "/portfolio/Section/Section 3.jpg"
	}
];
var PROCESS = [
	{
		title: "Send Your Files",
		text: "Upload sketches, PDFs, photos, or measurements."
	},
	{
		title: "Get a Quote",
		text: "Clear pricing and delivery time within hours."
	},
	{
		title: "Drafting and Review",
		text: "We draft your plan and share it for feedback."
	},
	{
		title: "Final Delivery",
		text: "Receive JPG, PNG, PDF, and CAD files, revisions included."
	}
];
var BENEFITS = [
	{
		icon: "Target",
		title: "Accurate Measurements",
		text: "Every room checked and labelled to scale."
	},
	{
		icon: "Timer",
		title: "Fast Turnaround",
		text: "Most plans delivered within 24 to 48 hours."
	},
	{
		icon: "RefreshCw",
		title: "Unlimited Revisions",
		text: "We adjust until the plan is right."
	},
	{
		icon: "FileType2",
		title: "Industry-Ready Files",
		text: "JPG, PNG, PDF, and CAD on delivery."
	},
	{
		icon: "ShieldCheck",
		title: "Confidential and Secure",
		text: "Your listings and files stay private."
	},
	{
		icon: "MessageSquare",
		title: "Responsive Support",
		text: "Quick replies on email and WhatsApp."
	}
];
var SERVICE_OPTIONS = [
	"2D Floor Plan",
	"Redraw Floor Plan",
	"Matterport Tour Plan",
	"Schematic Floor Plan",
	"Color Floor Plan",
	"Section",
	"HMO Plans",
	"Elevations",
	"Other"
];
var NAV_LINKS = [
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Portfolio",
		href: "#portfolio"
	},
	{
		label: "Process",
		href: "#process"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var ICONS = {
	Ruler,
	Box,
	Map,
	PencilRuler,
	FileCheck2: FileCheckCorner,
	Layers,
	Target,
	Timer,
	RefreshCw,
	FileType2: FileTypeCorner,
	ShieldCheck,
	MessageSquare
};
function SectionHeading({ label, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "mx-auto max-w-3xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.2em] text-accent",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-balance text-3xl font-semibold text-primary md:text-4xl",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: subtitle
			})
		]
	});
}
function TrustStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b bg-primary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4",
			children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: i * 80,
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-bold text-accent md:text-4xl",
					children: s.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-primary-foreground/75",
					children: s.label
				})]
			}, s.label))
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "section-y bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				label: "SERVICES",
				title: "Floor Plan Services Built for Real Estate",
				subtitle: "Everything you need to present a property clearly, in one place."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 flex flex-wrap justify-center gap-6",
				children: SERVICES.map((s, i) => {
					const Icon = ICONS[s.icon] ?? Ruler;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * 90,
						as: "article",
						className: "w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-lift flex h-full flex-col rounded-sm border bg-card p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex h-11 w-11 items-center justify-center rounded-sm bg-accent/12 text-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										size: 22,
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-lg font-semibold text-primary",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground",
									children: s.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 motion-safe:transition-all",
									children: ["Get Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										size: 15,
										"aria-hidden": "true"
									})]
								})
							]
						})
					}, s.title);
				})
			})]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "section-y bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				label: "PROCESS",
				title: "How It Works"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 grid gap-8 md:grid-cols-4",
				children: PROCESS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 90,
					as: "li",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-5xl font-bold text-accent/25",
								children: String(i + 1).padStart(2, "0")
							}),
							i < PROCESS.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-16 top-6 hidden h-px w-[calc(100%-3rem)] bg-border md:block",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-lg font-semibold text-primary",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: step.text
							})
						]
					})
				}, step.title))
			})]
		})
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				label: "WHY US",
				title: "Why Agents and Developers Choose Us"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: BENEFITS.map((b, i) => {
					const Icon = ICONS[b.icon] ?? Target;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full gap-4 rounded-sm border bg-card p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 text-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 22,
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold text-primary",
								children: b.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: b.text
							})] })]
						})
					}, b.title);
				})
			})]
		})
	});
}
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [showIntro, setShowIntro] = (0, import_react.useState)(true);
	function handleSubmit(e) {
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
			`Message: ${message}`
		].filter(Boolean).join("\n");
		const mailtoLink = `mailto:${CONTACT.email}?subject=${encodeURIComponent("New quote request")}&body=${encodeURIComponent(text)}`;
		window.open(mailtoLink, "_blank", "noopener");
		setSent(true);
		e.currentTarget.reset();
	}
	const fieldClass = "mt-1.5 w-full rounded-sm border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "section-y bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				label: "CONTACT",
				title: "Get Your Free Quote",
				subtitle: "Send your files or details. We reply with pricing and delivery time within hours."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "rounded-sm border bg-card p-7",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-medium text-primary",
									children: ["Name *", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "name",
										required: true,
										className: fieldClass,
										placeholder: "Your full name"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-medium text-primary",
									children: ["Email *", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "email",
										type: "email",
										required: true,
										className: fieldClass,
										placeholder: "you@company.com"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-medium text-primary",
									children: ["Company (optional)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "company",
										className: fieldClass,
										placeholder: "Agency or brokerage"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-medium text-primary",
									children: ["Service *", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										name: "service",
										required: true,
										defaultValue: "",
										className: fieldClass,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select a service"
										}), SERVICE_OPTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: s,
											children: s
										}, s))]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-5 block text-sm font-medium text-primary",
							children: ["Message *", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								required: true,
								rows: 5,
								className: fieldClass,
								placeholder: "Tell us about the property, number of plans, and deadline."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-5 block text-sm font-medium text-primary",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, {
										size: 15,
										"aria-hidden": "true"
									}), " Attach files (optional)"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									name: "files",
									multiple: true,
									className: "mt-1.5 w-full rounded-sm border bg-background px-3.5 py-2.5 text-sm text-muted-foreground file:mr-3 file:rounded-sm file:border-0 file:bg-surface file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-primary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs font-normal text-muted-foreground",
									children: "Files are not uploaded yet — please send them on WhatsApp or email."
								})
							]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "mt-4 text-sm font-medium text-destructive",
							children: error
						}),
						sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "status",
							className: "mt-4 text-sm font-medium text-accent",
							children: "Thanks! Your quote request is ready in WhatsApp — hit send there and we'll reply shortly."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "mt-6 w-full rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto",
							children: "Send Quote Request"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full flex-col rounded-sm border bg-primary p-7 text-primary-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold",
									children: showIntro ? "About Me" : "Contact Details"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowIntro(!showIntro),
									className: "text-xs font-semibold text-accent hover:underline",
									children: showIntro ? "View Contact Details" : "View About Me"
								})]
							}),
							showIntro ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 space-y-4 text-sm leading-relaxed",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hello! I'm a passionate designer specializing in high-quality floor plans for real estate professionals. [Update this intro with your actual details later]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "With extensive experience in both 2D and 3D modeling, my goal is to help you showcase your properties effectively and attract more buyers. I pride myself on quick turnarounds and exceptional attention to detail." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Whether you need a simple layout or a fully furnished 3D render, I'm here to bring your vision to life." })
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-5 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
												size: 18,
												className: "mt-0.5 shrink-0 text-accent",
												"aria-hidden": "true"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-primary-foreground/60",
												children: "Email"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `mailto:${CONTACT.email}`,
												className: "hover:underline",
												children: CONTACT.email
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
												size: 18,
												className: "mt-0.5 shrink-0 text-accent",
												"aria-hidden": "true"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-primary-foreground/60",
												children: "WhatsApp"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: whatsappLink,
												target: "_blank",
												rel: "noopener",
												className: "hover:underline",
												children: CONTACT.whatsappDisplay
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
												size: 18,
												className: "mt-0.5 shrink-0 text-accent",
												"aria-hidden": "true"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-primary-foreground/60",
												children: "Location"
											}), CONTACT.location] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
												size: 18,
												className: "mt-0.5 shrink-0 text-accent",
												"aria-hidden": "true"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-primary-foreground/60",
												children: "Working hours"
											}), CONTACT.hours] })]
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 border-t border-primary-foreground/15 pt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.18em] text-primary-foreground/60",
									children: "Follow"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex gap-3",
									children: [
										{
											label: "LinkedIn",
											href: CONTACT.linkedin,
											path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.4 8.75 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2.05-3.3-2.05 0-2.36 1.57-2.36 3.2V21h-4z"
										},
										{
											label: "Instagram",
											href: CONTACT.instagram,
											path: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 3.4a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8zm0 2.2a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4zm6.65-3.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
										},
										{
											label: "Behance",
											href: CONTACT.behance,
											path: "M9.1 5.5c1.9 0 3.4.9 3.4 2.9 0 1.2-.6 2-1.5 2.5 1.3.4 2 1.4 2 2.9 0 2.3-1.8 3.4-4 3.4H2V5.5zM5 10h3.4c.9 0 1.5-.4 1.5-1.2S9.3 7.6 8.4 7.6H5zm0 5.2h3.6c1 0 1.7-.5 1.7-1.4 0-1-.6-1.4-1.7-1.4H5zM15 6.7h5.6v1.4H15zm6.9 7.6h-6c.1 1.3.9 2 2.1 2 .8 0 1.5-.35 1.8-1h2c-.5 1.8-2 2.8-3.9 2.8-2.6 0-4.3-1.8-4.3-4.4 0-2.6 1.8-4.4 4.3-4.4 2.8 0 4.2 2.2 4 5zm-6-1.5h3.9c-.1-1.2-.8-1.9-1.9-1.9s-1.8.7-2 1.9z"
										}
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: s.href,
										target: "_blank",
										rel: "noopener",
										"aria-label": s.label,
										className: "inline-flex h-10 w-10 items-center justify-center rounded-sm border border-primary-foreground/20 text-primary-foreground transition-colors hover:border-accent hover:text-accent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											viewBox: "0 0 24 24",
											className: "h-4.5 w-4.5",
											fill: "currentColor",
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: s.path })
										})
									}, s.label))
								})]
							})
						]
					})
				})]
			})]
		})
	});
}
function FloatingActions() {
	const [showTop, setShowTop] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShowTop(window.scrollY > 600);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3",
		children: [showTop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Back to top",
			onClick: () => window.scrollTo({
				top: 0,
				behavior: "smooth"
			}),
			className: "inline-flex h-11 w-11 items-center justify-center rounded-sm border bg-card text-primary shadow-lg transition-colors hover:border-accent",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { size: 18 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: whatsappLink,
			target: "_blank",
			rel: "noopener",
			"aria-label": "Chat with us on WhatsApp",
			className: "inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl transition-transform hover:scale-105",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				className: "h-7 w-7",
				fill: "currentColor",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2zm0 1.8c2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.66 8.16-8.16 8.16a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.09.81.83-3.01-.2-.31a8.1 8.1 0 0 1-1.25-4.33c0-4.5 3.66-8.16 8.18-8.16zm-3.1 4.1c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.15.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.41h-.46z" })
			})
		})]
	});
}
function Logo({ tone = "primary" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/site-logo/logo-1.svg",
		alt: "Archisketch logo",
		className: "h-10 w-auto object-contain",
		style: { filter: tone === "inverted" ? "brightness(0) invert(1)" : "invert(11%) sepia(45%) saturate(861%) hue-rotate(182deg) brightness(97%) contrast(102%)" }
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t bg-primary text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { tone: "inverted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xs text-sm text-primary-foreground/70",
					children: "Precision floor plans for real estate professionals."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Quick links",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5 text-sm text-primary-foreground/70",
						children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "hover:text-accent",
							children: l.label
						}) }, l.href))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2.5 text-sm text-primary-foreground/70",
					children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#services",
						className: "hover:text-accent",
						children: s.title
					}) }, s.title))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2.5 text-sm text-primary-foreground/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${CONTACT.email}`,
							className: "hover:text-accent",
							children: CONTACT.email
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappLink,
							target: "_blank",
							rel: "noopener",
							className: "hover:text-accent",
							children: CONTACT.whatsappDisplay
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: CONTACT.location }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: CONTACT.hours })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-primary-foreground/12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl px-5 py-6 text-center text-xs text-primary-foreground/60",
				children: "© 2026 Shahroz Butt Archisketch. All rights reserved."
			})
		})]
	});
}
function HeroPlan() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 640 520",
		className: "h-full w-full",
		role: "img",
		"aria-label": "Illustration of a detailed architectural floor plan",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "640",
				height: "520",
				fill: "#FFFFFF"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: "#0B1F3A",
				strokeOpacity: "0.08",
				children: [Array.from({ length: 26 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: i * 25,
					y1: "0",
					x2: i * 25,
					y2: "520"
				}, `v${i}`)), Array.from({ length: 21 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "0",
					y1: i * 25,
					x2: "640",
					y2: i * 25
				}, `h${i}`))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: "#0B1F3A",
				strokeWidth: "8",
				fill: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "55",
						y: "50",
						width: "530",
						height: "420"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 50 V250" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M55 250 H585" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200 250 V470" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M430 250 V470" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "#14B8A6",
				fillOpacity: "0.16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "63",
					y: "58",
					width: "249",
					height: "184"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "438",
					y: "258",
					width: "139",
					height: "204"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: "#FFFFFF",
				strokeWidth: "8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 120 V180" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M250 250 H310" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M430 340 V400" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "#0B1F3A",
				fontFamily: "Inter, sans-serif",
				fontSize: "17",
				fontWeight: "600",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "95",
						y: "150",
						children: "MASTER BEDROOM"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "365",
						y: "150",
						children: "LIVING"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "90",
						y: "370",
						children: "BATH"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "245",
						y: "370",
						children: "KITCHEN"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "465",
						y: "370",
						children: "HALL"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "#0B1F3A",
				fillOpacity: "0.55",
				fontFamily: "Inter, sans-serif",
				fontSize: "14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "95",
						y: "172",
						children: "4.20 × 3.40 m"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "365",
						y: "172",
						children: "5.10 × 3.40 m"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "90",
						y: "392",
						children: "2.10 × 2.00 m"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "245",
						y: "392",
						children: "3.40 × 2.60 m"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "465",
						y: "392",
						children: "2.60 × 2.60 m"
					})
				]
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden border-b bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "blueprint-grid absolute inset-0 opacity-70",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.22em] text-accent",
					children: "FLOOR PLANS FOR REAL ESTATE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-4xl font-semibold leading-[1.1] text-primary md:text-5xl lg:text-[3.4rem]",
					children: "Floor Plans That Help Your Listings Sell Faster"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg",
					children: "Accurate 2D and Elevation floor plans, site plans, and redraws for agents, brokers, and developers. Delivered in 24 to 48 hours with free revisions."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90",
						children: "Get a Free Quote"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#portfolio",
						className: "rounded-sm border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
						children: "View Portfolio"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-7 flex flex-wrap gap-x-6 gap-y-2",
					children: [
						"24-48h turnaround",
						"Unlimited revisions",
						"MLS-ready files"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							size: 16,
							className: "text-accent",
							"aria-hidden": "true"
						}), item]
					}, item))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-sm border bg-card shadow-[0_30px_70px_-45px_rgba(11,31,58,0.8)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPlan, {})
				})
			})]
		})]
	});
}
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur transition-shadow ${scrolled ? "shadow-[0_1px_20px_-12px_rgba(11,31,58,0.6)]" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#home",
					"aria-label": "Archisketch home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 md:flex",
					"aria-label": "Main",
					children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "hidden rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 md:inline-flex",
						children: "Get a Quote"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex h-10 w-10 items-center justify-center rounded-sm border text-primary md:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t bg-background md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl flex-col px-5 py-3",
				"aria-label": "Mobile",
				children: [NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "border-b py-3 text-sm font-medium text-primary last:border-0",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					onClick: () => setOpen(false),
					className: "mt-3 rounded-sm bg-accent px-4 py-2.5 text-center text-sm font-semibold text-accent-foreground",
					children: "Get a Quote"
				})]
			})
		})]
	});
}
var FILTERS = [
	"All",
	"2D Plans",
	"Elevation",
	"HMO Plan",
	"Clients Work",
	"Schematic Floor Plans",
	"Section"
];
function Portfolio() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [openIndex, setOpenIndex] = (0, import_react.useState)(null);
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const items = (0, import_react.useMemo)(() => filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter), [filter]);
	const ITEMS_PER_PAGE = 8;
	const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
	const paginatedItems = items.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
	(0, import_react.useEffect)(() => {
		if (openIndex === null) return;
		const onKey = (e) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "portfolio",
		className: "section-y bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					label: "PORTFOLIO",
					title: "Recent Floor Plan Work",
					subtitle: "A sample of plans delivered for agents, brokers, and developers."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-9 flex flex-wrap justify-center gap-2",
					children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setFilter(f);
							setOpenIndex(null);
							setCurrentPage(1);
						},
						"aria-pressed": filter === f,
						className: `rounded-sm border px-4 py-2 text-sm font-medium transition-colors ${filter === f ? "border-accent bg-accent text-accent-foreground" : "bg-card text-muted-foreground hover:border-accent hover:text-primary"}`,
						children: f
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: paginatedItems.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 4 * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpenIndex((currentPage - 1) * ITEMS_PER_PAGE + i),
							className: "group relative block w-full overflow-hidden rounded-sm border bg-card text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: `${item.title} — ${item.category} floor plan sample`,
								loading: "lazy",
								className: "aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute inset-0 flex flex-col justify-end bg-primary/75 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base font-semibold text-primary-foreground",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-accent",
									children: item.category
								})]
							})]
						})
					}, item.image))
				}),
				totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-10 flex items-center justify-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setCurrentPage((p) => Math.max(1, p - 1)),
							disabled: currentPage === 1,
							className: "inline-flex h-10 w-10 items-center justify-center rounded-sm border bg-card text-primary transition-colors hover:bg-accent disabled:opacity-50 disabled:hover:bg-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 20 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm font-medium text-muted-foreground",
							children: [
								"Page ",
								currentPage,
								" of ",
								Math.max(1, totalPages)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setCurrentPage((p) => Math.min(Math.max(1, totalPages), p + 1)),
							disabled: currentPage >= totalPages || totalPages === 0,
							className: "inline-flex h-10 w-10 items-center justify-center rounded-sm border bg-card text-primary transition-colors hover:bg-accent disabled:opacity-50 disabled:hover:bg-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 20 })
						})
					]
				})
			]
		}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": active.title,
			className: "fixed inset-0 z-[60] flex items-center justify-center bg-primary/90 p-4",
			onClick: () => setOpenIndex(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-3xl rounded-sm bg-card p-3",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: active.image,
						alt: `${active.title} — ${active.category} floor plan sample`,
						className: "w-full rounded-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-2 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-primary",
							children: active.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: active.category
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Previous project",
								onClick: () => setOpenIndex((i) => ((i ?? 0) - 1 + items.length) % items.length),
								className: "inline-flex h-9 w-9 items-center justify-center rounded-sm border text-primary hover:bg-surface",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Next project",
								onClick: () => setOpenIndex((i) => ((i ?? 0) + 1) % items.length),
								className: "inline-flex h-9 w-9 items-center justify-center rounded-sm border text-primary hover:bg-surface",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 18 })
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						autoFocus: true,
						"aria-label": "Close",
						onClick: () => setOpenIndex(null),
						className: "absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-card text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
					})
				]
			})
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStrip, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {})
		]
	});
}
//#endregion
export { Index as component };
