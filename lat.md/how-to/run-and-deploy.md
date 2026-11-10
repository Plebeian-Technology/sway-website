---
lat:
  mode: how-to
---

# Run and deploy the site

The site is static HTML, CSS and one script. There is no build step, so what is in the repository is what is served.

## Run the site locally

Serve the repository root so root-relative paths like `/assets/css/style.css` resolve.

1. Open a terminal in the repository root.
2. Run `python3 -m http.server 8000`, or `npx serve .`.
3. Open `http://localhost:8000/`.
4. Check the home page and one subpage such as `/html/tos.html`.

## Deploy to Cloudflare Pages

Cloudflare Pages deploys straight from the repository root with no build command.

1. Commit the change to a branch and push it.
2. In the Cloudflare Pages project, leave the build command empty and set the output directory to `/`.
3. Merge to `main`. Pages publishes the root, including `_redirects`.
4. Open the live site and confirm `/html/choosing-the-bill-of-the-week.html` redirects to the month page.
