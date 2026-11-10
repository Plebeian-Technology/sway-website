---
lat:
  mode: explanation
---

# Full-bleed Liberty band

The "Make them hear you" panel runs the Statue of Liberty illustration edge to edge, with no gap between the statue and the page edge.

## Why the image breaks out of the page column

Side padding would leave a strip of pink between the artwork and the screen edge, and the owner asked for none.

The section therefore sits outside the centered column, and the image fills the full viewport width. The headline, text and button are laid over the pink area on the left, inside a centered column so they still align with the rest of the page.

## Why the copy stacks on small screens

Overlaid text needs the empty pink area, and a narrow screen shrinks that area until the copy would cover the statue.

Below 760px the copy leaves the overlay and sits above the image on the same pink background. The image keeps its full width. See [[reference/homepage-components#Liberty band]] for the markup and the breakpoint.
