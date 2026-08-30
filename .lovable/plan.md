# Plan: Coimbatore Tourism Website

## Site name (SEO-friendly)
**Kovai Trails — Coimbatore Travel Guide** ("Kovai" is the popular local name for Coimbatore, so the name ranks for both "Kovai" and "Coimbatore tourism" searches). Tagline: *"Explore the Manchester of South India."*

## Approach
A clean, single-page tourism site (fast, light, simple to deploy — one click publish). Content is written from well-known public sources (Wikipedia-level facts, famous attractions) rather than live API integrations, keeping it reliable and zero-maintenance. After the plan is approved, I'll generate a couple of visual design directions for you to pick from, then build.

## Page structure

```text
Header (sticky nav)
  └── Logo: Kovai Trails | Links: Home, Places, Experiences, Culture, About
Hero
  └── Name + tagline, short intro about Coimbatore, call-to-action
Places to Visit (card grid with photos)
  └── Marudamalai Temple, VOC Park & Zoo, Siruvani Waterfalls,
      Gass Forest Museum, Brookefields Mall, GD Naidu Museum,
      Dhyanalinga / Isha Yoga Center, Black Thunder (Mettupalayam),
      Valparai & Aliyar day trips
Things to Do & Local Experiences
  └── Street food (Kovai korai & filter coffee), textile shopping
      (Town Hall & RS Puram), temple trail, Western Ghats getaways
Culture & City Facts
  └── "Manchester of South India" textile heritage, language, climate,
      best time to visit, how to reach
About the Creator
  └── "Built by Akshay" section with a photo and a short personal note
      to build trust. NO phone number, email, or any contact details —
      just the name Akshay and the photo.
Footer
  └── Quick links, credit line
```

## Features included
- SEO setup per page: title, meta description, Open Graph tags (no "Lovable App" defaults)
- Responsive design, works on mobile and desktop
- Photo-real generated images for hero and attraction cards
- Fast load: no heavy widgets, no backend needed
- Simple deployment via the Publish button (one click)

## What I'm intentionally leaving out (to keep it simple and reliable)
- Live widgets (weather, Google Maps embed, YouTube/Instagram feeds, currency converter, event scraping): these need API keys or break without maintenance. Instead, the site links out to Google Maps and weather for each attraction, which always works.

## Technical notes
- TanStack Start + Tailwind, single route at `/` (replaces the placeholder)
- Semantic HTML, single H1, alt text on images, JSON-LD (TouristDestination) for SEO
- All colors via design tokens; content is static data so nothing needs a database
