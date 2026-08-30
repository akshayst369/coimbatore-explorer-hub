import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Mountain,
  Landmark,
  TreePine,
  ShoppingBag,
  Coffee,
  UtensilsCrossed,
  Camera,
  Sun,
  CalendarDays,
  TrainFront,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

import heroImg from "../assets/hero.jpg";
import marudamalaiImg from "../assets/marudamalai.jpg";
import siruvaniImg from "../assets/siruvani.jpg";
import ishaImg from "../assets/isha.jpg";
import valparaiImg from "../assets/valparai.jpg";
import aliyarImg from "../assets/aliyar.jpg";
import gdNaiduImg from "../assets/gd-naidu.jpg";
import textilesImg from "../assets/textiles.jpg";
import akshayImg from "../assets/akshay.jpg.asset.json";
const akshayPhoto = akshayImg.url;

const SITE_NAME = "Kovai Trails";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kovai Trails — Coimbatore Travel Guide | Places to Visit in Kovai" },
      {
        name: "description",
        content:
          "Discover the best places to visit in Coimbatore (Kovai): Marudamalai Temple, Siruvani Waterfalls, Isha Yoga Center, Valparai and more. Things to do, local food, culture and travel tips.",
      },
      {
        property: "og:title",
        content: "Kovai Trails — Coimbatore Travel Guide",
      },
      {
        property: "og:description",
        content:
          "Explore the Manchester of South India: temples, waterfalls, hill getaways, food and culture in and around Coimbatore.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Coimbatore (Kovai), Tamil Nadu, India",
          description:
            "Coimbatore, known as the Manchester of South India, is a major city in Tamil Nadu famous for its textile industry, temples, waterfalls and as a gateway to the Western Ghats hill stations.",
          url: "/",
          touristType: ["Cultural tourism", "Nature tourism", "Pilgrimage"],
          includesAttraction: [
            { "@type": "TouristAttraction", name: "Marudamalai Murugan Temple" },
            { "@type": "TouristAttraction", name: "Siruvani Waterfalls" },
            { "@type": "TouristAttraction", name: "Isha Yoga Center & Adiyogi" },
            { "@type": "TouristAttraction", name: "Valparai" },
            { "@type": "TouristAttraction", name: "Aliyar Dam" },
          ],
        }),
      },
    ],
  }),
});

const NAV_LINKS = [
  { href: "#places", label: "Places" },
  { href: "#experiences", label: "Experiences" },
  { href: "#culture", label: "Culture" },
  { href: "#about", label: "About" },
];

const PLACES = [
  {
    name: "Marudamalai Murugan Temple",
    tag: "Temple",
    image: marudamalaiImg,
    alt: "Colorful gopuram of Marudamalai Murugan Temple on a green hill near Coimbatore",
    description:
      "A 12th-century hilltop temple dedicated to Lord Murugan, about 12 km from the city. The climb rewards you with sweeping views of Coimbatore and the Western Ghats.",
    maps: "https://www.google.com/maps/search/Marudamalai+Temple+Coimbatore",
  },
  {
    name: "Isha Yoga Center & Adiyogi",
    tag: "Spiritual",
    image: ishaImg,
    alt: "The giant Adiyogi Shiva statue at Isha Yoga Center near Coimbatore at dusk",
    description:
      "Home to the iconic 112-ft Adiyogi statue and the Dhyanalinga meditation dome at the foothills of the Velliangiri Mountains. Especially magical at dusk.",
    maps: "https://www.google.com/maps/search/Isha+Yoga+Center+Coimbatore",
  },
  {
    name: "Siruvani Waterfalls",
    tag: "Nature",
    image: siruvaniImg,
    alt: "Siruvani waterfalls cascading into a clear forest pool near Coimbatore",
    description:
      "Set in dense forest about 37 km away, these falls feed the Siruvani dam — the source of Coimbatore's famously sweet drinking water. A refreshing half-day trip.",
    maps: "https://www.google.com/maps/search/Siruvani+Waterfalls",
  },
  {
    name: "Valparai",
    tag: "Hill getaway",
    image: valparaiImg,
    alt: "Winding ghat road through misty tea estates on the way to Valparai",
    description:
      "A tea-garden hill station reached by 40 hairpin bends from Pollachi. Look out for lion-tailed macaques and elephants on the way up. Best as an overnight trip.",
    maps: "https://www.google.com/maps/search/Valparai",
  },
  {
    name: "Aliyar Dam & Park",
    tag: "Day trip",
    image: aliyarImg,
    alt: "Aliyar dam reservoir with gardens and the Anaimalai hills behind",
    description:
      "A scenic reservoir at the foot of the Anaimalai hills with gardens, a small aquarium and viewpoints. Pairs perfectly with a drive up to Valparai.",
    maps: "https://www.google.com/maps/search/Aliyar+Dam",
  },
  {
    name: "GD Naidu Museum",
    tag: "Museum",
    image: gdNaiduImg,
    alt: "Vintage cars and scooters displayed at the GD Naidu museum in Coimbatore",
    description:
      "A tribute to G. D. Naidu, the 'Edison of India' — vintage cars, early electronics and curious inventions that tell the story of Coimbatore's industrial spirit.",
    maps: "https://www.google.com/maps/search/GD+Naidu+Museum+Coimbatore",
  },
];

const EXPERIENCES = [
  {
    icon: UtensilsCrossed,
    title: "Eat like a local",
    text: "Start with a tiffin breakfast — idli, dosa and piping-hot filter coffee. Try Kongu Nadu specialities like arisi paruppu sadam and kalan varuval at a local mess.",
  },
  {
    icon: ShoppingBag,
    title: "Shop the textile city",
    text: "Coimbatore is the Manchester of South India. Hunt for pure cotton and silk at Town Hall, Cross Cut Road and RS Puram — great quality at mill prices.",
  },
  {
    icon: Landmark,
    title: "Temple trail",
    text: "From Marudamalai to the ancient Perur Pateeswarar Temple on the Noyyal river, the city's temples blend Chola-era architecture with living tradition.",
  },
  {
    icon: Mountain,
    title: "Escape to the Ghats",
    text: "Valparai, Topslip and the Anaimalai hills are within a few hours' drive — tea estates, wildlife and cool mountain air whenever the city gets warm.",
  },
  {
    icon: Coffee,
    title: "Taste Siruvani water",
    text: "Locals swear Coimbatore's Siruvani water is among the sweetest in the world. It even shows up in the taste of the city's famous filter coffee.",
  },
  {
    icon: Camera,
    title: "Chase viewpoints",
    text: "Sunrise from Marudamalai hill, sunset at Aliyar dam, mist on the Valparai ghat road — the region is generous to photographers in every season.",
  },
];

const FACTS = [
  { icon: Sun, label: "Best time to visit", value: "October to March, pleasant 20–28°C days" },
  { icon: TrainFront, label: "How to reach", value: "Coimbatore International Airport, Junction railway station, NH 544 & NH 948" },
  { icon: CalendarDays, label: "Ideal trip length", value: "2–3 days for the city, +2 for Valparai" },
  { icon: TreePine, label: "Known for", value: "Textiles, engineering, temples & Siruvani water" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" aria-hidden />
          <span className="font-display text-xl font-bold text-foreground">
            {SITE_NAME}
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#places"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Plan your trip
          </a>
        </nav>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 md:hidden" aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative">
        <img
          src={heroImg}
          alt="Golden sunrise over the misty Western Ghats hills near Coimbatore"
          className="h-[70vh] min-h-[420px] w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-14 sm:px-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-200">
            Coimbatore · Tamil Nadu · India
          </p>
          <h1 className="font-display max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Kovai Trails
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            Explore the Manchester of South India — ancient temples, forest
            waterfalls, tea-clad hills and some of the best filter coffee you'll
            ever taste.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#places"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              See places to visit
            </a>
            <a
              href="#culture"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Know the city
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Welcome to Kovai
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Coimbatore — lovingly called <em>Kovai</em> — is Tamil Nadu's
              second-largest city, sitting on the banks of the Noyyal river at
              the foot of the Western Ghats. It grew wealthy on cotton and
              engineering, yet stayed green, courteous and deeply rooted in
              tradition.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              It's also the perfect base camp: within an hour or two you can be
              meditating at Isha, wading under a forest waterfall, or climbing
              40 hairpin bends into tea country.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {FACTS.map((f) => (
              <div key={f.label} className="rounded-xl border border-border bg-card p-4">
                <f.icon className="h-5 w-5 text-accent" aria-hidden />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {f.label}
                </p>
                <p className="mt-1 text-sm font-medium leading-snug">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Places */}
      <section id="places" className="scroll-mt-20 bg-secondary/60 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Places to visit in &amp; around Coimbatore
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Hilltop temples, forest falls and misty tea gardens — these are the
            spots every Kovai itinerary should include.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLACES.map((p) => (
              <article
                key={p.name}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {p.tag}
                  </span>
                  <h3 className="font-display mt-3 text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <a
                    href={p.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    <MapPin className="h-4 w-4" aria-hidden />
                    View on Google Maps
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="scroll-mt-20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Things to do &amp; local experiences
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The best of Kovai isn't just seen — it's eaten, sipped, shopped and
            driven through.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCES.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <e.icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {e.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section id="culture" className="scroll-mt-20 bg-primary py-16 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={textilesImg}
              alt="Bright silk and cotton fabrics stacked in a textile market street in Coimbatore"
              loading="lazy"
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Culture &amp; city character
            </h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/85">
              Coimbatore earned its "Manchester of South India" nickname from
              its spinning mills and textile trade — a legacy you can still
              touch in the fabric bazaars of Town Hall. Tamil is the language of
              daily life, and the local Kongu Tamil dialect is known for its
              polite, respectful tone.
            </p>
            <p className="mt-3 leading-relaxed text-primary-foreground/85">
              The city celebrates Pongal with gusto, keeps its temple festivals
              grand, and feeds everyone generously. People here are famously
              courteous — don't be surprised when strangers call you
              <em> "amma"</em> or <em>"anna"</em> with a smile.
            </p>
          </div>
        </div>
      </section>

      {/* About the creator */}
      <section id="about" className="scroll-mt-20 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            About the creator
          </h2>
          <img
            src={akshayPhoto}
            alt="Akshay, creator of Kovai Trails"
            width={128}
            height={128}
            className="mx-auto mt-8 h-32 w-32 rounded-full object-cover ring-4 ring-accent/20"
          />
          <h3 className="font-display mt-4 text-xl font-semibold">Akshay</h3>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted-foreground">
            Hi, I'm Akshay — I built Kovai Trails to share what makes
            Coimbatore special: its temples, hills, food and warm-hearted
            people. I hope this little guide helps you plan a trip you'll love.
            Vanakkam, and enjoy Kovai!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
          <div className="flex items-center gap-2">
            <Mountain className="h-5 w-5 text-primary" aria-hidden />
            <span className="font-display text-lg font-bold">{SITE_NAME}</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">
            Kovai Trails — a Coimbatore travel guide created by Akshay.
          </p>
        </div>
      </footer>
    </div>
  );
}
