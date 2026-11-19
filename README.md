# FAHNN Website

This is the website for **Food Access Healthy Neighborhoods Now (FAHNN)**, a neighbor-led nonprofit in Syracuse's Valley/Southside. We believe food and health are human rights.

- **Website:** https://fahnn.netlify.app (moving to https://fahnn.org)
- **Farmers Market:** Saturdays, 8 a.m.–2 p.m., 4141 S Salina St, Syracuse, NY · SNAP accepted
- **Contact:** fahnnsyracuse@gmail.com · [Instagram](https://www.instagram.com/healthyneighborhoodsnow/) · [Facebook](https://www.facebook.com/fahnnsyracuse/)

## Why is our website on GitHub?

GitHub is a free service for storing the files that make up a website.

- **It keeps a history of every change:** what changed, when, and who changed it. Nothing is lost, and any mistake can be undone.
- **It publishes the site automatically.** When a change is saved here, our web host (Netlify) updates the live website within minutes.
- **It's free and backed up**, so FAHNN doesn't depend on one person's computer or a paid website builder.
- **It's open.** Anyone can see how the site is built, and volunteers can suggest improvements.

Because everything here is public, **this repository never holds private information**: no personal phone numbers or emails, internal notes, or unpublished figures.

## For people editing the site

The site is built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/), starting from the open-source [AstroWind](https://github.com/arthelokyo/astrowind) template. You'll need [Node.js](https://nodejs.org/) 22 or newer.

| Command         | What it does                                  |
| --------------- | --------------------------------------------- |
| `npm install`   | Install what the site needs (first time only) |
| `npm run dev`   | Preview the site at http://localhost:4321     |
| `npm run build` | Build the finished site into `dist/`          |
| `npm run check` | Check for errors and formatting problems      |

Most text and settings live in `src/config.yaml`, `src/navigation.ts`, and the pages in `src/pages/`. Guidance for AI coding assistants and developers is in [AGENTS.md](./AGENTS.md).

## License

The website code is based on AstroWind and is available under the [MIT License](./LICENSE.md). FAHNN's name, logo, photos, and written content belong to FAHNN.
