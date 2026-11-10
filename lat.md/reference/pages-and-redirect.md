---
lat:
  mode: reference
---

# Pages and redirect

Every page the site serves and the one permanent redirect.

## Pages

Paths relative to the site root.

| Path | Purpose |
| --- | --- |
| `/` | Home page, `index.html` |
| `/html/tos.html` | Terms of service |
| `/html/privacy.html` | Privacy policy |
| `/html/organizations.html` | Organization content policy |
| `/html/choosing-the-bill-of-the-month.html` | How a Bill of the Month is chosen |
| `/google489e97deb221ceca.html` | Google site verification, untouched |

## Redirect

Defined in `_redirects` at the repository root, read by Cloudflare Pages.

| From | To | Status |
| --- | --- | --- |
| `/html/choosing-the-bill-of-the-week.html` | `/html/choosing-the-bill-of-the-month.html` | 301 |

## Shared assets

Files every page loads.

- `assets/css/style.css`, the only stylesheet.
- `assets/js/app.js`, loaded by the home page. It requests `https://sway.vote/up` to warm the app.
- Fonts from Google Fonts: Ultra and Public Sans.
