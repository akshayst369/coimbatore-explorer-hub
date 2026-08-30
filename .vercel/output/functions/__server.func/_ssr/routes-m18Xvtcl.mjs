import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Sun, c as Menu, d as Coffee, f as Camera, i as TrainFront, l as MapPin, n as UtensilsCrossed, o as ShoppingBag, p as CalendarDays, r as TreePine, s as Mountain, t as X, u as Landmark } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-m18Xvtcl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-UGDwBUW8.jpg";
var marudamalai_default = "/assets/marudamalai-BgC1g5th.jpg";
var siruvani_default = "/assets/siruvani-DC2m--Mc.jpg";
var isha_default = "/assets/isha-Blx37jgD.jpg";
var valparai_default = "/assets/valparai-D2blLDkx.jpg";
var aliyar_default = "/assets/aliyar-D4brb6K1.jpg";
var gd_naidu_default = "/assets/gd-naidu-B_RH64TK.jpg";
var textiles_default = "/assets/textiles-cfWO2rbJ.jpg";
var akshay_default = "/assets/akshay-DPfawo5V.jpeg";
var SITE_NAME = "Kovai Trails";
var NAV_LINKS = [
	{
		href: "#places",
		label: "Places"
	},
	{
		href: "#experiences",
		label: "Experiences"
	},
	{
		href: "#culture",
		label: "Culture"
	},
	{
		href: "#about",
		label: "About"
	}
];
var PLACES = [
	{
		name: "Marudamalai Murugan Temple",
		tag: "Temple",
		image: marudamalai_default,
		alt: "Colorful gopuram of Marudamalai Murugan Temple on a green hill near Coimbatore",
		description: "A 12th-century hilltop temple dedicated to Lord Murugan, about 12 km from the city. The climb rewards you with sweeping views of Coimbatore and the Western Ghats.",
		maps: "https://www.google.com/maps/search/Marudamalai+Temple+Coimbatore"
	},
	{
		name: "Isha Yoga Center & Adiyogi",
		tag: "Spiritual",
		image: isha_default,
		alt: "The giant Adiyogi Shiva statue at Isha Yoga Center near Coimbatore at dusk",
		description: "Home to the iconic 112-ft Adiyogi statue and the Dhyanalinga meditation dome at the foothills of the Velliangiri Mountains. Especially magical at dusk.",
		maps: "https://www.google.com/maps/search/Isha+Yoga+Center+Coimbatore"
	},
	{
		name: "Siruvani Waterfalls",
		tag: "Nature",
		image: siruvani_default,
		alt: "Siruvani waterfalls cascading into a clear forest pool near Coimbatore",
		description: "Set in dense forest about 37 km away, these falls feed the Siruvani dam — the source of Coimbatore's famously sweet drinking water. A refreshing half-day trip.",
		maps: "https://www.google.com/maps/search/Siruvani+Waterfalls"
	},
	{
		name: "Valparai",
		tag: "Hill getaway",
		image: valparai_default,
		alt: "Winding ghat road through misty tea estates on the way to Valparai",
		description: "A tea-garden hill station reached by 40 hairpin bends from Pollachi. Look out for lion-tailed macaques and elephants on the way up. Best as an overnight trip.",
		maps: "https://www.google.com/maps/search/Valparai"
	},
	{
		name: "Aliyar Dam & Park",
		tag: "Day trip",
		image: aliyar_default,
		alt: "Aliyar dam reservoir with gardens and the Anaimalai hills behind",
		description: "A scenic reservoir at the foot of the Anaimalai hills with gardens, a small aquarium and viewpoints. Pairs perfectly with a drive up to Valparai.",
		maps: "https://www.google.com/maps/search/Aliyar+Dam"
	},
	{
		name: "GD Naidu Museum",
		tag: "Museum",
		image: gd_naidu_default,
		alt: "Vintage cars and scooters displayed at the GD Naidu museum in Coimbatore",
		description: "A tribute to G. D. Naidu, the 'Edison of India' — vintage cars, early electronics and curious inventions that tell the story of Coimbatore's industrial spirit.",
		maps: "https://www.google.com/maps/search/GD+Naidu+Museum+Coimbatore"
	}
];
var EXPERIENCES = [
	{
		icon: UtensilsCrossed,
		title: "Eat like a local",
		text: "Start with a tiffin breakfast — idli, dosa and piping-hot filter coffee. Try Kongu Nadu specialities like arisi paruppu sadam and kalan varuval at a local mess."
	},
	{
		icon: ShoppingBag,
		title: "Shop the textile city",
		text: "Coimbatore is the Manchester of South India. Hunt for pure cotton and silk at Town Hall, Cross Cut Road and RS Puram — great quality at mill prices."
	},
	{
		icon: Landmark,
		title: "Temple trail",
		text: "From Marudamalai to the ancient Perur Pateeswarar Temple on the Noyyal river, the city's temples blend Chola-era architecture with living tradition."
	},
	{
		icon: Mountain,
		title: "Escape to the Ghats",
		text: "Valparai, Topslip and the Anaimalai hills are within a few hours' drive — tea estates, wildlife and cool mountain air whenever the city gets warm."
	},
	{
		icon: Coffee,
		title: "Taste Siruvani water",
		text: "Locals swear Coimbatore's Siruvani water is among the sweetest in the world. It even shows up in the taste of the city's famous filter coffee."
	},
	{
		icon: Camera,
		title: "Chase viewpoints",
		text: "Sunrise from Marudamalai hill, sunset at Aliyar dam, mist on the Valparai ghat road — the region is generous to photographers in every season."
	}
];
var FACTS = [
	{
		icon: Sun,
		label: "Best time to visit",
		value: "October to March, pleasant 20–28°C days"
	},
	{
		icon: TrainFront,
		label: "How to reach",
		value: "Coimbatore International Airport, Junction railway station, NH 544 & NH 948"
	},
	{
		icon: CalendarDays,
		label: "Ideal trip length",
		value: "2–3 days for the city, +2 for Valparai"
	},
	{
		icon: TreePine,
		label: "Known for",
		value: "Textiles, engineering, temples & Siruvani water"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mountain, {
						className: "h-6 w-6 text-primary",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl font-bold text-foreground",
						children: SITE_NAME
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-6 md:flex",
					"aria-label": "Main",
					children: [NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
						children: l.label
					}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#places",
						className: "rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90",
						children: "Plan your trip"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "md:hidden text-foreground",
					onClick: () => setOpen((v) => !v),
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-border bg-background px-4 pb-4 md:hidden",
			"aria-label": "Mobile",
			children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: l.href,
				onClick: () => setOpen(false),
				className: "block py-2 text-sm font-medium text-muted-foreground hover:text-primary",
				children: l.label
			}, l.href))
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background font-sans text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_default,
						alt: "Golden sunrise over the misty Western Ghats hills near Coimbatore",
						className: "h-[70vh] min-h-[420px] w-full object-cover",
						width: 1920,
						height: 1080
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-14 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-sm font-semibold uppercase tracking-widest text-amber-200",
								children: "Coimbatore · Tamil Nadu · India"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl",
								children: "Kovai Trails"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-lg text-white/85",
								children: "Explore the Manchester of South India — ancient temples, forest waterfalls, tea-clad hills and some of the best filter coffee you'll ever taste."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#places",
									className: "rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90",
									children: "See places to visit"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#culture",
									className: "rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10",
									children: "Know the city"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-2 md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold sm:text-4xl",
							children: "Welcome to Kovai"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 leading-relaxed text-muted-foreground",
							children: [
								"Coimbatore — lovingly called ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Kovai" }),
								" — is Tamil Nadu's second-largest city, sitting on the banks of the Noyyal river at the foot of the Western Ghats. It grew wealthy on cotton and engineering, yet stayed green, courteous and deeply rooted in tradition."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 leading-relaxed text-muted-foreground",
							children: "It's also the perfect base camp: within an hour or two you can be meditating at Isha, wading under a forest waterfall, or climbing 40 hairpin bends into tea country."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-4",
						children: FACTS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, {
									className: "h-5 w-5 text-accent",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: f.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-medium leading-snug",
									children: f.value
								})
							]
						}, f.label))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "places",
				className: "scroll-mt-20 bg-secondary/60 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold sm:text-4xl",
							children: "Places to visit in & around Coimbatore"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-muted-foreground",
							children: "Hilltop temples, forest falls and misty tea gardens — these are the spots every Kovai itinerary should include."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
							children: PLACES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.image,
										alt: p.alt,
										loading: "lazy",
										width: 800,
										height: 600,
										className: "aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent",
											children: p.tag
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display mt-3 text-xl font-semibold",
											children: p.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-muted-foreground",
											children: p.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: p.maps,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
												className: "h-4 w-4",
												"aria-hidden": true
											}), "View on Google Maps"]
										})
									]
								})]
							}, p.name))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "experiences",
				className: "scroll-mt-20 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold sm:text-4xl",
							children: "Things to do & local experiences"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-muted-foreground",
							children: "The best of Kovai isn't just seen — it's eaten, sipped, shopped and driven through."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
							children: EXPERIENCES.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-11 w-11 items-center justify-center rounded-full bg-primary/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e.icon, {
											className: "h-5 w-5 text-primary",
											"aria-hidden": true
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display mt-4 text-lg font-semibold",
										children: e.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: e.text
									})
								]
							}, e.title))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "culture",
				className: "scroll-mt-20 bg-primary py-16 text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: textiles_default,
							alt: "Bright silk and cotton fabrics stacked in a textile market street in Coimbatore",
							loading: "lazy",
							width: 800,
							height: 600,
							className: "aspect-[4/3] w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold sm:text-4xl",
							children: "Culture & city character"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-primary-foreground/85",
							children: "Coimbatore earned its \"Manchester of South India\" nickname from its spinning mills and textile trade — a legacy you can still touch in the fabric bazaars of Town Hall. Tamil is the language of daily life, and the local Kongu Tamil dialect is known for its polite, respectful tone."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 leading-relaxed text-primary-foreground/85",
							children: [
								"The city celebrates Pongal with gusto, keeps its temple festivals grand, and feeds everyone generously. People here are famously courteous — don't be surprised when strangers call you",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: " \"amma\"" }),
								" or ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "\"anna\"" }),
								" with a smile."
							]
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "about",
				className: "scroll-mt-20 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-4 text-center sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold sm:text-4xl",
							children: "About the creator"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: akshay_default,
							alt: "Akshay, creator of Kovai Trails",
							width: 128,
							height: 128,
							className: "mx-auto mt-8 h-32 w-32 rounded-full object-cover object-[center_top] ring-4 ring-accent/20"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-4 text-xl font-semibold",
							children: "Akshay"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-xl leading-relaxed text-muted-foreground",
							children: "Hi, I'm Akshay — I built Kovai Trails to share what makes Coimbatore special: its temples, hills, food and warm-hearted people. I hope this little guide helps you plan a trip you'll love. Vanakkam, and enjoy Kovai!"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border bg-secondary/60 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mountain, {
								className: "h-5 w-5 text-primary",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-bold",
								children: SITE_NAME
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex flex-wrap justify-center gap-x-6 gap-y-2",
							"aria-label": "Footer",
							children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: l.href,
								className: "text-sm text-muted-foreground hover:text-primary",
								children: l.label
							}, l.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Kovai Trails — a Coimbatore travel guide created by Akshay."
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
