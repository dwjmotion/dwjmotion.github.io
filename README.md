# dwjmotion.github.io

Portfolio site for DWJ Motion. Built with [Eleventy](https://www.11ty.dev/) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Where things live

| What | File |
|---|---|
| Site title, links, Bunny library ID + CDN hostname | `src/_data/site.json` |
| Projects (one Markdown file each, ordered by `order`) | `src/projects/` |
| Hero | `src/_includes/partials/hero.njk` |
| Project block layout | `src/_includes/partials/project-block.njk` |
| Video player, image and placeholder components | `src/_includes/partials/macros.njk` |
| Styles | `src/assets/css/main.css` |
| Scripts (video, logo loop) | `src/assets/js/site.js` |
| Web-ready images | `src/assets/img/` |

## Adding a project

Copy `src/projects/olay-face-the-stem-gap.md`, rename it (lowercase, hyphens), and fill in the front matter. Leave `videoId`, `stills` or `caseStudy` empty to show grey placeholder blocks.

## Local preview (optional)

Requires Node.js 22+.

```
npm install
npm start
```

Then open http://localhost:8080.
