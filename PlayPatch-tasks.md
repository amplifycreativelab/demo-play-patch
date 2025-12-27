# Development Tasks - PlayPatch (Premium Cartoon UI for Kids & Family Services)

Source docs:

- `PlayPatch/PlayPatch.md`
- Reference format: `cafe-restaurant-demo/Demo 1 - Cafe - Restaurant - Tasks.md`

How to use:

- Mark items complete by changing `- [ ]` to `- [x]`.
- Work top-to-bottom; later phases depend on earlier setup.

## Phase 0 - Project Decisions

- [ ] Confirm GitHub Pages repo name for Astro `base` (must be `"/<repo>/"`).
- [ ] Confirm business placeholders (brand name, phone/email, Perth service area, hours, socials).
- [ ] Confirm primary conversions and page routes: Book a party, View packages, Enquire.
- [ ] Confirm booking flow: external booking link vs on-site form UI vs phone-first.
- [ ] Choose heading font: Baloo 2 OR Fredoka.
- [ ] Confirm mascot usage (max one main mascot; guidance only, not decoration spam).
- [ ] Confirm whether optional interactivity is included:
  - [ ] Package picker/filter
  - [ ] Age-based recommendations
  - [ ] Confetti success moment triggers (form success vs package selection vs both)

## Phase 1 - Astro Setup (SSG + GitHub Pages)

- [ ] Create Astro 4 project (static output / SSG).
- [ ] Configure `astro.config.mjs` with `site` + `base` placeholders for GitHub Pages.
- [ ] Ensure internal links and asset URLs work under the base path (no hard-coded `/`).
- [ ] Add/verify scripts: `dev`, `build`, `preview`.
- [ ] Add fonts (Baloo 2/Fredoka + Inter) and confirm they load cleanly.
- [ ] Add `src/assets/` placeholders:
  - [ ] mascot illustration(s)
  - [ ] activity images
  - [ ] gallery images
  - [ ] package visuals
  - [ ] OG image

## Phase 2 - Design System (Soft Pop)

- [ ] Define tokens (CSS variables or Tailwind theme) for the exact palette:
  - [ ] Cream `#FFF7E8`, Ink `#1B1B1D`
  - [ ] Pop A `#7C5CFF`, Pop B `#FFB000`, Pop C `#00D9A6`
  - [ ] Badge `#FF4D6D`
- [ ] Enforce palette rule: one dominant pop per section (never all three at once).
- [ ] Define shape language:
  - [ ] Corner radius 20-24px
  - [ ] Borders 2-3px thick and always visible
  - [ ] Shadows soft/lifted with slight tint (not pure black)
- [ ] Create sticker/foam-block card styling (premium, not cheap).
- [ ] Typography rules:
  - [ ] Headings use the playful font; body uses Inter (calm and factual)
  - [ ] Safety notes, inclusions, and pricing never rely on playful font alone
- [ ] Implement focus-visible styles and ensure high-contrast text.
- [ ] Ensure large tap targets (>= 48px) for all key controls.

## Phase 3 - Core Layout & Shared Components

- [ ] Create `src/layouts/MainLayout.astro` with:
  - [ ] Skip link
  - [ ] Header/nav + footer
  - [ ] SEO meta slots/placeholders (title/description/canonical/OG/Twitter)
  - [ ] Persistent booking CTA behavior (sticky on mobile; after major sections)
- [ ] Build required components (deliverables):
  - [ ] `StickerButton.astro` (hover squish, strong focus-visible, 48px min height)
  - [ ] `PackageCard.astro` (age range, duration, inclusions, clear CTA; supports "Most Popular")
  - [ ] `MascotHero.astro` (mascot-led hero with strong hierarchy)
  - [ ] `TrustBlock.astro` (neutral styling, more whitespace, safety/trust content)
  - [ ] `ConfettiOnce.ts` (confetti burst once per session; reduced motion disables)
- [ ] Optional island:
  - [ ] `PackagePickerIsland.tsx` (filters/recommendations; minimal hydration; no heavy framework unless justified)

## Phase 4 - Data Layer (Typed + Static-First)

- [ ] Create `src/data/packages.ts` (typed):
  - [ ] name, price, ageRange, duration, inclusions[], badges[] (Most Popular, Best for Ages 5-7, Includes Setup)
- [ ] Create `src/data/activities.ts` (typed) with enough items for 3-4 offer cards + full Activities page.
- [ ] Create `src/data/testimonials.ts` (typed) with parent quotes and names/roles (mock OK).
- [ ] Add realistic sample content and ensure copy tone is calm and trust-forward.

## Phase 5 - Pages (IA + Conversion)

### Home (`src/pages/index.astro`)

- [ ] Mascot-led hero with primary CTA (Book a party) and secondary CTA (View packages).
- [ ] "What we offer" section with 3-4 activity cards (clear hierarchy, no clutter).
- [ ] Packages preview (pricing clarity; highlight one "Most Popular").
- [ ] Trust & safety reassurance block (WWCC/first aid mock copy, procedures, testimonials).
- [ ] Testimonials section from parents.
- [ ] Final booking CTA (strong and simple).

### Packages (`src/pages/packages/index.astro`) (core conversion page)

- [ ] Render full package list from `packages.ts` with consistent hierarchy: Name -> Price -> Inclusions -> CTA.
- [ ] Ensure one highlighted package ("Most Popular") is emphasized without being loud.
- [ ] Include enquiry/booking form UI or booking link flow.

### Activities (`src/pages/activities/index.astro`)

- [ ] Render activity list/cards from `activities.ts` with ages and what to expect.

### Gallery (`src/pages/gallery/index.astro`)

- [ ] Responsive gallery grid with optimized images and calm captions.
- [ ] Alt text and keyboard-friendly interaction.

### FAQs (`src/pages/faqs/index.astro`)

- [ ] Build FAQ list/accordion (accessible; no flashy animation; reduced motion friendly).
- [ ] Ensure content supports safety/trust and reduces booking friction.

### Contact (`src/pages/contact/index.astro`)

- [ ] Enquiry form UI (non-functional OK) with accessible labels and calm validation.
- [ ] Repeat key trust signals and clear next steps.

## Phase 6 - Motion (Squash & Stretch Lite) + Reduced Motion

- [ ] Implement CTA hover squish (gentle) and click compress (subtle).
- [ ] Implement confetti burst (success moment) with "once per session" gating.
- [ ] Enforce forbidden motion patterns:
  - [ ] No continuous bouncing
  - [ ] No autoplay loops
  - [ ] No large parallax shifts
  - [ ] No flashing/sensory overload
- [ ] Reduced motion behavior (`prefers-reduced-motion: reduce`):
  - [ ] No confetti
  - [ ] No squash
  - [ ] Use simple opacity only when needed

## Phase 7 - SEO & Local Trust (Perth)

- [ ] Set per-page titles + meta descriptions (trust-forward, family-safe tone).
- [ ] Canonical URLs respect `site` + `base`.
- [ ] Add OpenGraph + Twitter meta with placeholder OG image.
- [ ] Inject JSON-LD:
  - [ ] `LocalBusiness`
  - [ ] `Service`
- [ ] Add Perth suburbs naturally in footer/service area (no keyword stuffing).
- [ ] Add FAQ schema on `/faqs/` if appropriate and straightforward.

## Phase 8 - Accessibility & UX Checks

- [ ] Keyboard navigation works across nav, cards, forms, and FAQ interactions.
- [ ] Focus-visible is obvious and consistent.
- [ ] Touch targets meet 48px minimum.
- [ ] Contrast is sufficient for all text and CTAs (especially on cream + pop colors).
- [ ] Reduced motion keeps the site fully usable (no hidden content behind motion).

## Phase 9 - Performance, QA & Deployment

- [ ] Keep JS minimal; any island must be scoped and light.
- [ ] Use `astro:assets` for responsive images (sizing, lazy-load, formats).
- [ ] Verify build works under GitHub Pages base path (no broken links/assets).
- [ ] Add minimal `README.md` with install/dev/build/preview + GH Pages base path notes + reduced motion notes.

## Optional / Bonus

- [ ] Add a sticky mobile action bar (Book / Packages / Call / Map) if it improves conversion without clutter.
- [ ] Add an "open now / closed" indicator for hours (only if it supports trust and clarity).
