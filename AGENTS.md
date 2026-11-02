# FAHNN Website: Agent Instructions

This repository is the website for **Food Access Healthy Neighborhoods Now (FAHNN)**, built on the AstroWind template. The first half of this file is about FAHNN: purpose, voice, content rules, and workflow. The second half documents the template's technical architecture.

## About FAHNN

FAHNN is a neighbor-led 501(c)(3) nonprofit in Syracuse, NY's Valley/Southside neighborhood, founded in **2019** by longtime residents and incorporated as a nonprofit in **June 2026**.

- **Mission:** FAHNN works with neighbors and partners in Syracuse's Valley/Southside to build food, health, and education resources on land the community owns.
- **Vision:** _Community wealth. Community flourishing. Community sovereignty._ In Syracuse's historically impoverished Valley/Southside, FAHNN is building all three: rooted in food, health, education, and land that neighbors own, so no one has to leave to thrive.
- **Core belief:** **Food and health are human rights.** FAHNN works for access to food _and_ health services. Never reduce it to "a food organization" or "a farmers market."
- **The problem:** In 2018 the neighborhood's only full-service grocery store, at the Valley Plaza, closed. Since then there has been **no full-service grocery store within a 2-mile radius** of Valley Plaza.
- **FAHNN as catalyst:** FAHNN's weekly markets proved the demand → FAHNN was a catalyst for a **$1.7 million** Food Access Expansion grant (**2025**; the Syracuse Economic Development Corporation is the grantee) to renovate the empty Tops space and open Super Imperial Market → a new grocery store opens at the Plaza in **2027** → an independent pharmacy is coming to the Plaza → next, a community-owned hub for food, health, and services in the Valley/Southside.
- **Farmers Market:** Saturdays, 8 a.m.–2 p.m., 4141 S Salina St, Syracuse, NY 13205. SNAP accepted.
- **Programs:** Farmers Market (summer and winter), Mobile Markets for senior residences, Wellness Wednesdays, workshops and public conversations with officials, community gatherings (Thanksgiving drive, community dinner, open house).
- **Public contact:** fahnnsyracuse@gmail.com · Instagram `@healthyneighborhoodsnow` · Facebook `fahnnsyracuse`.

## What the site must do

1. **Be FAHNN's source of truth**, for the public and for FAHNN's own board and staff. Every official fact lives in exactly one place in the code (planned: `src/data/*.ts` and `src/config.yaml`), and pages read from it. Never hardcode a fact such as market hours in more than one place.
2. **Tell the story** through photos, short text, and video, leaning on FAHNN's strength: relationships.
3. **Show an organization, not one person.** A Board of Directors, partners, and neighbors, led by Executive Director Rhonda Vesey.
4. **Keep every audience moving:** neighbors, donors and funders, partners and officials, volunteers, press. Every page is short and ends with a clear next step to another page.
5. **Make it easy to show up, get involved, and give** (donations via an embedded Zeffy form).

### Planned pages

Header: Our Story · What We Do · Our People · News · Get Involved, plus Search and a **Donate** button. **Our Story is the home page** (`/`; `/our-story` redirects there). Also: Donate, Contact, FAHNN at a Glance (fast facts, boilerplate, downloads; linked from the footer), Privacy.

## Voice and content rules

- **Too short beats too long.** At most five sections per page; one big statement plus a short paragraph per section. When in doubt, cut.
- **Plain language,** roughly an 8th-grade reading level. Explain or avoid jargon ("wrap-around services," "food sovereignty," "capital development").
- **"We," not "she."** Copy speaks as FAHNN. Individuals appear as attributed quotes.
- **Lead with a person, a moment, or a concrete fact,** then the meaning.
- **Naming the problem: a three-step ladder.**
  1. The fact: "Since 2018, there has been no full-service grocery store within 2 miles of Valley Plaza."
  2. The cause, in plain words: decisions about where stores open and close, and where money is invested, left the neighborhood behind. It didn't just happen.
  3. The name, **only on Our Story, once, with its definition** (not used today: the home page stops at step 2): "Some people call this a 'food desert.' But deserts are natural, and this was made by people. That's why many call it **food apartheid**: when whether you can get healthy food depends on where you live, who you are, and decisions made by others."
  - Never use "food apartheid" without that definition, and never in the hero, buttons, the Donate page, or fast facts.
  - Always follow the problem with what FAHNN did about it, in the same section.
- **No specific impact counts** (people served, pounds of food, number of workshops) unless FAHNN provides a verified record. Show impact through verifiable facts, photos (weekly markets since 2019), press coverage, quotes, and video.
- **Community hub:** say "a community-owned hub in the Valley/Southside." Don't promise Valley Plaza as its location.
- **People:** show only the current Board of Directors (photo, name, position if any, term, short bio) and the Executive Director. Don't list founders or past advisory boards individually.
- **Photos:** only FAHNN's own photos of real people and places, never stock. If a photo is missing, use a solid color block and a TODO. Write alt text that describes the scene.
- **Press:** link to original articles. Don't reuse outlets' photos or video without permission.

## Privacy: this repository is public

- Never commit personal phone numbers or emails, budgets, internal estimates, or unpublished figures. Use the organizational email for all contact.
- Internal planning docs live in `docs/` (git-ignored, local only): `docs/site-plan.md` (page-by-page plan and build checklist) and `docs/content-inventory.md` (source content and status of each fact). Read them when present; they may not exist in other clones.

## Design system

- **Palette:** Forest `#1E4A2E` (primary: headings, primary buttons, the **Donate** button, closing bands) · Garden `#2F7A3B` (links, accents) · Tomato `#B8432A` (sparing highlights) · Sunflower `#F2B33D` (small accents only, never text on light backgrounds) · Sprout `#E6F0DC` (section backgrounds) · Cream `#FBF7EF` (page) · White (header and footer) · Ink `#24211D` (body text). Dark mode: Night `#141A15`, surface `#1D261F`, text `#EDE8DE`, Leaf `#8CC97A`, Tomato-light `#F08A6C` (with dark text). All text pairings meet WCAG AA. Green leads; no blue anywhere.
  - Defined once in `src/components/CustomStyles.astro` and used through Tailwind tokens: `primary` (Forest; Leaf in dark mode), `secondary` (Garden), `accent` (Tomato), `highlight` (Sunflower), `surface` (Sprout), `chrome` (header and footer: white; Night in dark mode), `on-primary` / `on-accent` (text on filled buttons and bands), plus `bg-page`, `text-heading`, `text-default`, `text-muted`, `text-link`. Never hardcode a hex value or a Tailwind color like `blue-500` in a component.
- **Type:** Fraunces (headings and big statements) and Atkinson Hyperlegible (body and interface), via the Astro Fonts API. Body text at 18px or larger.
- **Feel:** warm, grassroots, polished. Full-bleed real photos, generous spacing, rounded corners. Move away from the template's tech-startup look.
- **Accessibility:** WCAG AA contrast, keyboard navigation, captions on video, no autoplaying sound.

## Site-wide requirements

- **No third-party branding on the site.** No AstroWind, Astro, GitHub, or Netlify names, links, icons, or "made with" credits in the header, footer, or anywhere visitors see. Social links are Instagram, Facebook, and email only. (Zeffy's branding inside its embedded form is acceptable.)
- **Search:** Pagefind (static index built after `astro build`, styled to match the site; header, nav, and footer excluded from the index).
- **Donations (Zeffy):** inline `<iframe>` embed on `/donate` via a reusable `src/components/common/ZeffyEmbed.astro`, plus Zeffy's modal popup for Donate buttons elsewhere. Store the form URL once. Load Zeffy's script with `is:inline` and `data-astro-rerun` because `<ClientRouter />` page transitions can stop scripts re-running after navigation.
- **Forms:** Netlify Forms for contact and volunteer forms (with a honeypot field).
- **Hosting:** Netlify (`netlify.toml`). Every push to `main` deploys.

## Workflow

- Work one build step per session, following the checklist in `docs/site-plan.md` when present. Each step ends in one commit.
- Before committing: `npm run build` and `npm run check` must pass.
- Images live in `src/assets/images/`, named in `snake_case` (e.g. `logo_<partner>.png`, `farmers_market_<scene>.png`).

---

# AstroWind Template Reference

## Project Overview

AstroWind is a free, open-source website template built with **Astro v7** and **Tailwind CSS v4**. It generates a fully static site optimized for performance, SEO, and accessibility.

**Stack:** Astro v7 | Tailwind CSS v4 | TypeScript 5.9 | MDX | Sharp

## Skills

Before implementing a project-specific task (disabling the blog, Open Graph images, base paths, CMS, deployments, header customisation…), check `.agents/skills/` for an existing skill and follow it.

## Quick Reference

| Command           | Purpose                             |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start dev server at localhost:4321  |
| `npm run build`   | Production build to `./dist/`       |
| `npm run preview` | Preview production build locally    |
| `npm run check`   | Run astro check + ESLint + Prettier |
| `npm run fix`     | Auto-fix ESLint + Prettier issues   |

**Node.js requirement:** >= 22.22.3

## Architecture

### Directory Structure

```
src/
  assets/styles/tailwind.css   # Tailwind v4 config (themes, utilities, plugins)
  components/
    common/        # Shared: Image, Metadata, Analytics, ToggleTheme
    ui/            # Primitives: Button, Form, Headline, Timeline, WidgetWrapper
    widgets/       # Page sections: Hero, Features, Bento, Pricing, Comparison, FAQs, Team, Gallery…
    blog/          # Blog: SinglePost, List, Pagination, Tags
    CustomStyles.astro  # CSS variables for colors and fonts
  content.config.ts    # Content Collections schema (Astro 5+ location)
  data/post/           # Blog posts (.md, .mdx)
  layouts/             # Layout.astro, PageLayout.astro, MarkdownLayout.astro
  pages/               # File-based routing
  utils/               # blog.ts, images.ts, permalinks.ts, frontmatter.ts
  config.yaml          # Site configuration (loaded as virtual module)
  navigation.ts        # Navigation structure
  types.d.ts           # TypeScript type definitions
vendor/integration/    # Custom Astro integration for config loading
```

### Path Aliases

Use `~/` to import from `src/`:

```typescript
import Image from '~/components/common/Image.astro';
import { SITE } from 'astrowind:config';
```

### Configuration System

Site config lives in `src/config.yaml` and is loaded as a Vite virtual module `astrowind:config` by the custom integration in `vendor/integration/`. Exports: `SITE`, `I18N`, `METADATA`, `APP_BLOG`, `UI`, `ANALYTICS`.

## Tailwind CSS v4

Configuration is CSS-first in `src/assets/styles/tailwind.css`:

- **Theme tokens:** `@theme { --color-primary: var(--aw-color-primary); ... }`
- **Custom utilities:** `@utility bg-page { ... }`
- **Dark mode:** Class-based via `@variant dark (&:where(.dark, .dark *))`
- **Plugins:** `@plugin "@tailwindcss/typography"`
- **Custom variant:** `@custom-variant intersect (&:not([no-intersect]))`

CSS variables for colors/fonts are defined in `src/components/CustomStyles.astro` with light/dark theme variants.

The Vite plugin `@tailwindcss/vite` is configured in `astro.config.ts` (not as an Astro integration).

### Class Merging

Components use `twMerge` from `tailwind-merge` v3 for conditional class composition.

## Content Collections

Defined in `src/content.config.ts` using Astro's Content Layer API with `glob()` loader. Posts are in `src/data/post/` as `.md` or `.mdx` files.

Post frontmatter: `title` (required), `publishDate`, `updateDate`, `draft`, `excerpt`, `image`, `category`, `tags`, `author`, `metadata`.

## Component Patterns

- Props extend interfaces from `~/types`
- Use `class:list` for conditional classes
- Use `twMerge()` when accepting className overrides
- Use named slots for layout composition
- Widget components accept standardized props (see `~/types`)

## Image Handling

`src/components/common/Image.astro` supports:

- Local images via `astro:assets` (optimized by Sharp)
- Remote images via Unpic CDN
- Allowed domains (for providers Unpic can't detect, processed by Sharp): `cdn.pixabay.com`

Hero images use `loading="eager"` and `fetchpriority="high"`.

## Fonts

Fonts are handled by Astro's native **Fonts API**, configured in `astro.config.ts` under the `fonts` key (provider, family, `cssVariable`) and injected via the `<Font />` component in `src/layouts/Layout.astro`. Astro self-hosts, subsets, preloads, and generates metric-adjusted fallbacks. To change the typeface, edit the `fonts` entry and point `--aw-font-*` in `CustomStyles.astro` at the new `cssVariable`.

## Third-party Scripts (Partytown)

`@astrojs/partytown` is wired as an **opt-in** in `astro.config.ts`, gated behind `const hasExternalScripts = false`. Set it to `true` to offload third-party scripts (e.g. Google Analytics via `analytics.vendors.googleAnalytics.partytown`) to a web worker. It is disabled by default so the base template ships no external scripts.

## Content Security Policy

Astro's native CSP is intentionally **not** enabled in this version: it is incompatible with `<ClientRouter />` view transitions (shipped on by default) and would break the arbitrary third-party scripts a template user typically adds. CSP is deferred to AstroWind v2, where the component model (and optional SSR) make it clean and opt-in.

## Verification Checklist

After changes, always verify:

1. `npm run build` succeeds
2. `npm run check` passes (astro check + ESLint + Prettier)
3. Visual check in browser: homepage, blog, dark mode, mobile menu
4. Structured data describes the site it is on: the `WebSite` / `Organization` block in `src/pages/index.astro` is built only from `config.yaml`; anything you add there must be true for your site
