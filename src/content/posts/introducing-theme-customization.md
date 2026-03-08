---
title: "Introducing Theme Customization"
description: "Change colors, fonts, and spacing across your entire site with a few clicks."
author: "Sam Lee"
date: 2026-01-28
image: /images/features/step-3.jpg
image_alt: "Theme customization interface"
tags:
  - Features
  - Design
  - Announcement
draft: false
---

We're excited to announce **full theme customization** in Chaipress. Change your site's entire look and feel from CloudCannon's data editor — no CSS knowledge required.

## What You Can Customize

### Colors

Pick any color for three main tokens:

- **Primary** — Buttons, links, accents, CTA backgrounds
- **Secondary** — Headings, navbar, footer background
- **Accent** — Star ratings, stat numbers, highlights

Use the color picker in CloudCannon or paste a hex code directly. Changes propagate to every component on every page instantly.

### Typography

Choose from four carefully selected font pairings:

| Font | Style | Best For |
|------|-------|----------|
| **Inter** | Clean, neutral | SaaS, Docs, General |
| **Space Grotesk** | Modern, geometric | Tech, Startups |
| **DM Sans** | Friendly, rounded | Education, Creative |
| **Sora** | Bold, contemporary | Marketing, Agency |

You can set heading and body fonts independently — e.g., Space Grotesk headings with Inter body text.

### Border Radius

Control the roundness of buttons, cards, and inputs:

- **None** — Sharp, square corners (0px)
- **Small** — Subtle rounding (4px)
- **Medium** — Balanced look (8px) ← *default*
- **Large** — Prominent rounding (16px)
- **Full** — Pill-shaped buttons (9999px)

### Spacing

Adjust the vertical rhythm between sections:

- **Compact** — Less whitespace, more content density
- **Default** — Balanced spacing for most sites
- **Spacious** — Generous breathing room, premium feel

## How It Works

Behind the scenes, theme values are stored in `data/theme.json`:

```json
{
  "primary_color": "#4F46E5",
  "secondary_color": "#0F172A",
  "accent_color": "#F59E0B",
  "font_heading": "Inter",
  "font_body": "Inter",
  "border_radius": "medium",
  "spacing_preset": "default"
}
```

At build time, these values are injected as CSS custom properties. Tailwind CSS picks them up through the `@theme` directive, so every utility class like `bg-primary` or `text-secondary` updates automatically.

## Tips for Good Color Choices

1. **Contrast matters** — Ensure your primary color has enough contrast against white text (use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/))
2. **Stay consistent** — Use your brand's actual hex codes
3. **Less is more** — Three colors is plenty. Let whitespace do the work.
4. **Test on mobile** — Colors can appear differently on various screens

## Try It Now

1. Go to **Site Settings → theme** in CloudCannon
2. Click any color field to open the picker
3. Select a new font from the dropdown
4. Save and preview — your entire site updates

It's that simple. No deploys, no code, no waiting.

---

*Have a custom font you'd like to use? [Contact us](/about/) and we'll help you add it to your Chaipress setup.*
