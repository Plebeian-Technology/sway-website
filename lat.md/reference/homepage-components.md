---
lat:
  mode: reference
---

# Homepage components

Sections of `index.html` in page order, with the class that styles each in `assets/css/style.css`.

## Header

Shared by every page.

- Class `site-header`. Logo link, then a nav with How it works, Bill of the Month, Privacy, a GitHub icon and the Open Sway button.
- Nav links on subpages point to `/#how`, `/#bill` and `/#privacy`.

## Hero

Headline "Remember in November."

- Class `hero`. Two-column grid that collapses under 440px per column.
- Headline size `clamp(46px, 5.8vw, 86px)`.
- Actions: Open Sway button and a GitHub source link.

## How it works

Id `how`. Four steps in an auto-fit grid.

- Class `how`, step cards `step`.
- Steps: Vote, Engage, Compare, Share.

## Bill of the Month

Id `bill`. Full-width sky band.

- Class `bill`. Ballot box art on the left, text and check list on the right.
- Links to the choosing page.

## Liberty band

Full-bleed pink band with the Statue of Liberty image.

- Class `liberty`. Image `liberty__art` spans 100% of the viewport.
- Copy `liberty__copy` is absolutely positioned over the left on desktop.
- Under 760px the copy is static and sits above the image, and the image is cropped to a 1:1 square anchored right bottom (`object-fit: cover`).
- Rationale: [[full-bleed-liberty-band]].

## Features

Two articles: Add your city and Private (id `privacy`).

- Class `features`, article `feature`. Flag and lock art are 200px square.
- Add your city carries the `stat` block with the 89,004 figure.

## Closing call to action

Class `cta`. Headline "This month's bill is waiting." and an Open Sway button.

## Footer

Shared by every page.

- Class `site-footer`. Organization block, Policies links, Follow along links, legal line.
- Policies: terms, privacy, organization content policy, choosing the Bill of the Month.
