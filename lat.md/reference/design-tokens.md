---
lat:
  mode: reference
---

# Design tokens

Custom properties declared on `:root` in `assets/css/style.css`. Every color and font in the stylesheet reads from them.

## Colors

Hex values and where each color appears.

| Token | Value | Use |
| --- | --- | --- |
| `--navy` | `#2F4B68` | Headings, links, primary buttons, step rules, footer background |
| `--ink` | `#1B2B3D` | Body text, Bill of the Month headline, Liberty button |
| `--muted` | `#46586D` | Step text, statistic caption |
| `--pink` | `#E29A9A` | Liberty band background |
| `--sky` | `#99DDFF` | Bill of the Month band background |
| `--mist` | `#F1F8FC` | How it works and closing call to action backgrounds |
| `--rule` | `#D6E7F2` | Hairlines between sections and under the header |
| `--footer-link` | `#CDEEFF` | Footer links, footer focus outline, legal line |
| `--footer-rule` | `#4A6684` | Footer divider |
| `--white` | `#FFFFFF` | Page background, text on navy and ink |

## Fonts

Two families, each with a fallback stack.

| Token | Family | Fallbacks |
| --- | --- | --- |
| `--font-display` | Ultra | Rockwell Extra Bold, Rockwell, Georgia, serif |
| `--font-text` | Public Sans | system UI sans-serif stack |

## Layout

Shared width and gutter.

| Token | Value |
| --- | --- |
| `--page-max` | `1200px` |
| `--gutter` | `max(20px, 4vw)` |
