# Viva Landscape & Design — Internal Sales Catalog

Internal sales reference tool for the Viva Landscape & Design team.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Layout shell |
| `styles.css` | All visual styling (CSS variables for branding) |
| `content.js` | All content data — edit this to update services, FAQs, gallery |
| `app.js` | Rendering logic and interactions |

## Running Locally

Open `index.html` directly in a browser. No server or build step required.

## Updating Content

1. Open `content.js`
2. Find the service object you want to update
3. Edit text, options, FAQs, or image paths
4. Refresh the browser

## Adding Images

1. Place images in the `/assets/` folder
2. In `content.js`, update `image` values with relative paths (e.g. `"./assets/my-photo.jpg"`)

## Deployment

Deployed as a static site on Vercel. No build step configured.
