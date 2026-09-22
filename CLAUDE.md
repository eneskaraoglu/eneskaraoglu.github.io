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

### Design system — Neumorphism / Soft UI

Every element is molded from one cool-grey surface (`--bg: #E0E5EC`); depth comes only from dual shadows (light top-left, dark bottom-right). No borders, no white cards. All tokens live in `:root` at the top of `styles.css`:

- **Color:** `--bg`, `--fg`, `--muted`, `--accent` (#6C63FF, fills and large text), `--accent-text` (#4F46E5 — use for small accent text; #6C63FF fails WCAG AA on the background), `--accent-2` (teal, success)
- **Shadows:** `--raised`, `--raised-hover`, `--raised-sm`, `--inset`, `--inset-deep`, `--inset-sm`, `--press-accent` (pressed state on violet buttons). Use these tokens — don't hand-write new shadow values.
- **Radius:** `--radius-lg` 32px (cards), `--radius` 16px (buttons, wells), `--radius-sm` 12px
- **Motion:** `--t` 300ms, `--t-slow` 500ms, `--ease`
- **Fonts:** Plus Jakarta Sans (display), DM Sans (body), Fira Code (code-flavoured bits only)

`class="surface"` gives the raised 32px clay card. Icon wells and tags use inset shadows. Hover = lift + `--raised-hover`; active = press to `--inset-sm`.

### Scroll reveal

Add `class="reveal"` to any element to opt into the entrance animation (`IntersectionObserver`, threshold 0.12, adds `.visible`). Hero elements use `@keyframes fadeUp` with delays instead.

### JavaScript (`js/main.js`)

- **i18n** — `applyLanguage()`; bumps `i18nVersion` so in-flight title decode animations abort
- **Typed text** — cycles `typedWords` from translations into `#typed`
- **Scroll reveal**, **mobile nav** (`.open` on `#nav-links` and `#nav-toggle`, `aria-expanded`)
- **Title decode** — `.section-title` scrambles through code glyphs on first view
- **Nav state** — active link + `#nav-path` (`<enes/projects />`) and `#nav-progress` scroll bar
- **Timeline** — sets `--progress` on `.timeline` to draw the violet fill
- **Route transition** — in-page `a[href^="#"]` clicks show a terminal card (`routeLines` per section id) before jumping
- **Hero network** — canvas inside `.hero-well` with languages/protocols exchanging packets; pauses off-screen

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
