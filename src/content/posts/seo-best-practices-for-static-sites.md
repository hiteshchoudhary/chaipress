---
title: "SEO Best Practices for Static Sites"
description: "How to maximize your search engine visibility with Astro and CloudCannon."
author: "Morgan Chen"
date: 2026-02-10
image: /images/features/step-2.jpg
image_alt: "SEO analytics dashboard"
tags:
  - SEO
  - Performance
  - Tutorial
draft: false
---

Static sites have a natural SEO advantage — they're fast, secure, and easy for search engines to crawl. But speed alone isn't enough. Here's how to make the most of your Chaipress site's SEO potential.

## Built-In SEO Features

Every Chaipress page comes with an **SEO panel** in CloudCannon where you can set:

- **Page description** — The meta description shown in search results
- **Featured image** — Used for Open Graph and Twitter cards
- **Canonical URL** — Prevent duplicate content issues
- **No-index toggle** — Keep staging or draft pages out of search

These fields map directly to `<meta>` tags in the page `<head>`.

## Writing Effective Meta Descriptions

Your meta description is your ad copy in search results. Guidelines:

- **Length:** 150-160 characters (Google truncates beyond this)
- **Include your target keyword** naturally
- **Add a call-to-action** ("Learn how...", "Discover...")
- **Be specific** — Avoid generic descriptions

### Examples

```
❌ "Welcome to our website. We offer great products and services."

✅ "Build and publish landing pages in minutes with Chaipress.
    6 templates, visual editing, zero code required. Start free."
```

## Page Speed = SEO Advantage

Google uses Core Web Vitals as a ranking factor. Chaipress sites score well because:

| Metric | What It Measures | Our Target |
|--------|-----------------|------------|
| LCP | Largest Contentful Paint | < 2.5s |
| INP | Interaction to Next Paint | < 200ms |
| CLS | Cumulative Layout Shift | < 0.1 |

### Tips to Keep Scores High

1. **Optimize images** — Use WebP format, set explicit `width` and `height`
2. **Self-host fonts** — Avoid Google Fonts' render-blocking requests
3. **Lazy load below-fold images** — Our components do this by default
4. **Minimize JavaScript** — Astro ships zero JS by default

## Structured Data

Add structured data to help Google understand your content:

- **Organization** — Company info, logo, social links
- **FAQ** — Makes your FAQ section eligible for rich snippets
- **Product** — For pricing pages with plan details
- **BreadcrumbList** — Helps with site navigation in search results

## Content Strategy

### Heading Hierarchy

Every page should have exactly **one `<h1>`** (your hero heading). Use `<h2>` for section titles and `<h3>` for subsections. Our components enforce this structure automatically.

### Internal Linking

Link between your pages naturally:

- Blog posts → relevant product pages
- Feature pages → pricing page
- About page → blog posts about company culture

### Image Alt Text

Every image in CloudCannon has an `image_alt` field. Use it! Describe what the image shows in 5-15 words. This helps:

- Screen readers (accessibility)
- Google Image Search
- Context when images fail to load

## Monitoring

After publishing, track your SEO performance with:

- **Google Search Console** — See which queries bring traffic
- **PageSpeed Insights** — Monitor Core Web Vitals
- **Ahrefs / Semrush** — Track keyword rankings (paid tools)

## Quick Checklist

- [ ] Every page has a unique title and meta description
- [ ] All images have descriptive alt text
- [ ] Headings follow a logical hierarchy (h1 → h2 → h3)
- [ ] Internal links connect related pages
- [ ] Page loads in under 2 seconds
- [ ] Site has a sitemap.xml
- [ ] Canonical URLs are set for important pages
- [ ] Open Graph images are configured for social sharing

---

*All of these settings are editable in CloudCannon's sidebar — no code changes needed. Just click the SEO panel on any page and fill in the fields.*
