# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal developer portfolio for **Enes Karaoglu**, hosted at `https://eneskaraoglu.github.io` via GitHub Pages. Static site — no build tools, no dependencies, no package manager.

## Development & Deployment

**Preview locally:** Open `index.html` directly in any browser — no server required.

**Deploy:** Push to `main` branch; GitHub Pages publishes automatically.

```powershell
git add index.html css/styles.css js/main.js js/translations.js
git commit -m "your message"
git push origin main
```

The untracked CV files (`*.docx`, `*.pdf`, `*.md` CVs) in the root are not part of the site — don't commit them unless asked (anything pushed is publicly downloadable).

## Architecture

- `index.html` — markup: `<nav>`, two `.tech-marquee` bands, five sections (`#hero`, `#about`, `#projects`, `#experience`, `#contact`), `<footer>`
- `css/styles.css` — all styles
- `js/translations.js` — EN/TR dictionaries; elements opt in with `data-i18n` (text) or `data-i18n-html` (HTML)
- `js/main.js` — all behaviour

### Design system — Industrial Skeuomorphism

A matte-plastic chassis (`--chassis: #e0e5ec`) with hardware mounted on it, lit from the top-left at 45°: highlights top/left, shadows bottom/right. Elevation levels: recessed (-1: slots, screens, grooves) → chassis (0) → panels (+1: cards) → keys (+2: buttons). All tokens live in `:root` at the top of `styles.css`:

- **Materials:** `--chassis`, `--panel`, `--recessed`, `--ink`, `--label`, `--dark` / `--dark-2` (screens, bezels), `--screen-text`
- **Signal colors:** `--accent` #ff4757 (LEDs, glows, large marks only), `--accent-face` #dc2f3e (button faces — white text passes AA), `--accent-text` #b8202f (small red text on chassis), `--led-green`, `--tape` (masking tape)
- **Shadows:** `--sh-card`, `--sh-floating`, `--sh-key`, `--sh-pressed`, `--sh-recessed`, `--sh-sharp`, `--sh-accent`, `--glow-red`, `--glow-green`, `--emboss` (white text-shadow). Use these — don't hand-write new shadow values.
- **Textures:** `--noise` (inline SVG, on `body::before`), `--scanlines`, `--screw`; carbon fibre is a shared selector group (`.device-bezel, .route-box, .tech-marquee`). No external texture images.
- **Radius:** `--r-sm` 4 · `--r-md` 8 · `--r-lg` 16 · `--r-xl` 24 · `--r-2xl` 32
- **Motion:** `--spring` (overshoot, for lifts/entrances), `--ease`; presses are 150ms `translateY(2px)` + `--sh-pressed`
- **Fonts:** Inter (UI), JetBrains Mono (labels, tags, numbers, screens — uppercase with wide tracking for stamped labels)

Reusable parts: `.surface` = bolted module (raised card with four corner screws; vent slots are the `::after` on `.skill-group` / `.project-card`), `.led` / `.led--green` = pulsing status LED. The hero `.device` is a CSS-built screen whose `.device-screen` hosts the network canvas.

### Scroll reveal

Add `class="reveal"` to any element to opt into the entrance animation (`IntersectionObserver`, threshold 0.12, adds `.visible`). Hero elements use `@keyframes fadeUp` with delays instead.

### JavaScript (`js/main.js`)

- **i18n** — `applyLanguage()`; bumps `i18nVersion` so in-flight title decode animations abort
- **Typed text** — cycles `typedWords` from translations into `#typed`
- **Scroll reveal**, **mobile nav** (`.open` on `#nav-links` and `#nav-toggle`, `aria-expanded`)
- **Title decode** — `.section-title` scrambles through code glyphs on first view
- **Nav state** — active link + `#nav-path` (`<enes/projects />`) and `#nav-progress` scroll bar
- **Timeline** — sets `--progress` on `.timeline` to draw the red LED current in the pipe
- **Route transition** — in-page `a[href^="#"]` clicks show a terminal card (`routeLines` per section id) before jumping
- **Hero network** — canvas inside `.device-screen` (the hero device CRT) with languages/protocols exchanging packets; pauses off-screen

All motion is skipped or frozen under `prefers-reduced-motion`.

## Content to update

| Location | What to update |
|---|---|
| `#hero` | Bio (`hero.bio` in translations), `typedWords` |
| `#about .about-text` | Bio paragraphs |
| `.skills-stack` | `.skill-group` / `.skill-tag` items |
| `.projects-grid` | Project cards (name, description, tags); update the count in `routeLines.projects` |
| `.timeline` | Roles, companies, dates (most recent first) |
| `.tech-marquee` | Language and integration lists |
| `#contact` / footer | Email, phone, social link `href`s |

Remember to add both EN and TR strings in `js/translations.js` for any new `data-i18n` key.
