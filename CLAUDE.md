# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal developer portfolio for **Enes Karaoglu**, hosted at `https://eneskaraoglu.github.io` via GitHub Pages. The entire site is a single file: `index.html`, with all CSS and JavaScript inlined — no build tools, no dependencies, no package manager.

## Development & Deployment

**Preview locally:** Open `index.html` directly in any browser — no server required.

**Deploy:** Push to `main` branch; GitHub Pages publishes automatically.

```powershell
git add index.html
git commit -m "your message"
git push origin main
```

## Architecture

Everything lives in `index.html` in this order:

1. `<style>` block — all CSS
2. `<nav>` — fixed glassmorphism navigation
3. Five `<section>` elements: `#hero`, `#about`, `#projects`, `#experience`, `#contact`
4. `<footer>`
5. `<script>` block — all JavaScript (typed effect, scroll reveal, mobile nav)

### Design system (CSS custom properties)

All colors and sizing are defined in `:root` at the top of `<style>`:

```css
--accent-1: #ff4d2e;   /* red-orange — primary brand color (codeek QR app) */
--accent-2: #3b82f6;   /* blue — secondary (codeek Math app) */
--accent-3: #ff8c42;   /* amber — tertiary / labels / timeline */
--bg-1/2/3             /* dark background layers */
--glass-bg / --glass-border / --glass-hover   /* glassmorphism values */
--radius: 16px
--nav-h: 64px
```

When changing the color theme, update the `:root` variables **and** the hardcoded `rgba()` values below them (radial gradient orbs, `.btn-primary` shadows, `.tag` background/border, `.timeline-item::before` glow, `.social-link:hover` shadow). The `rgba()` values cannot reference CSS variables so they must be updated manually.

### Glassmorphism utility

Any element that needs the glass card look gets `class="glass"`:

```css
.glass { background: var(--glass-bg); border: 1px solid var(--glass-border);
         backdrop-filter: blur(16px); border-radius: var(--radius); }
```

### Scroll reveal

Add `class="reveal"` to any element to opt into the entrance animation. The `IntersectionObserver` in the `<script>` block adds `.visible` when the element enters the viewport (threshold 0.12), triggering the CSS transition on `opacity` and `transform`.

Hero elements use named `@keyframes fadeUp` with CSS animation-delay instead, since they fire immediately on load.

### JavaScript (bottom of file)

Three self-contained behaviours, no functions exported:
- **Typed text** — cycles `words[]` array with typewriter effect into `#typed`
- **Scroll reveal** — `IntersectionObserver` on all `.reveal` elements
- **Mobile nav** — toggles `.open` class on `#nav-links` via `#nav-toggle` button

## Content Placeholders to Replace

| Location | What to update |
|---|---|
| `#hero` | Bio paragraph, typed `words[]` array in `<script>` |
| `#about .about-text` | Bio paragraphs |
| `.skills-grid` | `.skill-pill` items |
| `.projects-grid` | Project names, descriptions, tags, `href` on `.project-link` anchors |
| `.timeline` | Roles, companies, dates, descriptions (most recent first) |
| `#contact` / footer | Social link `href` attributes (LinkedIn, Twitter/X) |
