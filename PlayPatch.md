Senior Expert Prompt — “PlayPatch”

(Astro + Premium Cartoon UI for Kids & Family Services)

Role

You are a Principal Creative Developer & UX Engineer.

Objective:
Build a playful yet premium, trust-forward demo website for kids & family services (parties, activities, childcare, tutoring).
The site must delight children without undermining parental confidence, and convert strongly to bookings and enquiries.

Design Philosophy — “Joy with Structure”

This UI should feel:

Fun and animated for kids

Safe, organized, and credible for parents

Think modern children’s museum, not cheap cartoon app.
Every playful element is grounded in clear hierarchy, spacing, and readability.

0) Non-Negotiables

Astro 4.x SSG, GitHub Pages compatible

Performance-first (Lighthouse-friendly)

Primary conversions:

Book a party

View packages

Enquire

Accessibility:

Large tap targets (≥48px)

High contrast text

prefers-reduced-motion fully respected

No visual clutter, no flashing animations, no sensory overload

1) Visual Design System — “Soft Pop”
Color Tokens (Joyful but Controlled)

Base / Canvas

Cream: #FFF7E8

Ink: #1B1B1D

Primary Pops

Pop A (Hero / CTAs): #7C5CFF

Pop B (Highlights): #FFB000

Pop C (Success / Calm): #00D9A6

Attention / Badges

Badge: #FF4D6D

Rule: One dominant pop per section, never all three at once.

Surface & Shape Language

Corners: 20–24px radius

Borders: 2–3px thick, always visible

Shadows:

Soft, lifted, never harsh

Slight color tint (not pure black)

Cards should feel like foam blocks or stickers placed on a table

Iconography & Illustration

Friendly, rounded icons

Sticker-style badges:

“Most Popular”

“Best for Ages 5–7”

“Includes Setup”

Mascot illustrations allowed but:

One main mascot max

Used for guidance, not decoration spam

2) Typography System
Fonts

Headings:

Baloo 2 or Fredoka

Rounded, expressive, large

Body:

Inter

Clean, neutral, highly readable

Hierarchy Rules

Headings = playful

Body text = calm and factual

Safety notes, inclusions, and pricing never use playful fonts alone

3) Motion System — “Squash & Stretch (Lite)”
Allowed Motion

CTA buttons gently squish on hover

Buttons compress slightly on click

Success moments:

Confetti burst once per session only

Triggered by form success or package selection

Forbidden Motion

Continuous bouncing

Auto-playing loops

Large parallax shifts

Reduced Motion

If prefers-reduced-motion:

No confetti

No squash

Fade/opacity only

4) Layout & Page Rhythm
Grid

Desktop: 12-column grid

Cards align cleanly, never stagger randomly

Mobile-first spacing with generous padding

Section Flow (Home)

Mascot-led hero with primary CTA

“What we offer” (3–4 activity cards)

Packages preview (pricing clarity)

Trust & safety reassurance

Testimonials from parents

Final booking CTA

5) Pages

/ Home

/packages/ (core conversion page)

/activities/

/gallery/

/faqs/

/contact/

6) Signature Components & Behaviors
Package Cards

Big, friendly cards

Always show:

Age range

Duration

What’s included

Visual hierarchy:

Name → Price → Inclusions → CTA

One “Most Popular” card visually emphasized

Booking CTA

Persistent “Book now” or “Enquire” button:

Sticky on mobile

Visible after every major section

Button text is action-oriented, never vague

Trust & Safety Block (Critical)

Include:

Staff checks (WWCC, first aid – mock copy ok)

Safety procedures

Parent testimonials

Calm, neutral styling (less color, more whitespace)

7) Data & Architecture
Data Files

packages.ts

activities.ts

testimonials.ts

Interactivity

Optional Astro Island:

Package picker / filter

Age-based recommendations

No heavy JS frameworks unless justified

8) SEO & Local Trust

JSON-LD:

LocalBusiness

Service

Perth suburbs listed naturally in footer

FAQ page eligible for FAQ schema

Language reinforces:

Safety

Experience

Happy families

9) Deliverables
Components

StickerButton.astro

PackageCard.astro

MascotHero.astro

TrustBlock.astro

ConfettiOnce.ts

Optional Island

PackagePickerIsland.tsx

Final Direction

This site should feel like:

“A joyful kids space that parents instantly trust.”

If it feels cheap, chaotic, or over-animated, it fails.
If it feels too corporate, it also fails.

The win is playful confidence.