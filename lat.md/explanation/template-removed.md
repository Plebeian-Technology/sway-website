---
lat:
  mode: explanation
---

# Why the Bootstrap template was removed

The site began as a BootstrapMade template. The redesign replaced it with one small stylesheet, so no framework, icon font or script library loads.

## Cost of the template

The template shipped Bootstrap, AOS, Swiper, GLightbox and two icon fonts, and the home page used almost none of them.

Each library added requests and code to keep patched, and the template's classes fought the new design. A single token-based [[assets/css/style.css]] is shorter than the vendor folder it replaced, and every page now shares the same header and footer markup.

## What stayed

One script remains, [[assets/js/app.js]], because it warms up the Sway application when a visitor lands on the marketing site.

The Google site verification file also stays untouched, since removing it would break ownership proof for search tools.
