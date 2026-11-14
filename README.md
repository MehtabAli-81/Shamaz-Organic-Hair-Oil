# SHAMAZ Organic Hair Growth Oil

A static, responsive Vite + React + Tailwind CSS storefront for SHAMAZ Organic Product’s 100 ml Hair Growth Oil. The page includes a Three.js / React Three Fiber product stage, the supplied studio images, product education, and WhatsApp ordering. It does not require a server, database, environment variables, or paid API keys.

## Requirements

- Node.js 20.19+ (Node 22 LTS recommended)
- npm 10.9.9 (pinned in `package.json` as the package manager)

## Run locally

```bash
npm ci
npm run dev
```

Open the local Vite URL printed in the terminal. To create and inspect the production build:

```bash
npm run build
npm run preview
```

The static output is written to `dist/`. The app uses `/images/...` root-relative asset URLs and Vite's root base, and includes a local fallback for product images and an image-based hero fallback for browsers without WebGL.

## Product assets

The four supplied studio photographs live under `public/images/`:

- `product-hero.jpg` — bottle and carton together
- `bottle-front.jpg` — front bottle label
- `box-front.jpg` — outer carton
- `bottle-back.jpg` — ingredient and use label

`bottle-label-front.png` is a local crop derived from the supplied front photograph for the 3D cylinder label texture. `bottle-label-back.png` contains the 14-ingredient rear label, `box-front-texture.png` provides the 3D carton face, and `travertine-texture.jpg` maps onto the pedestal. `shamaz-mark.svg` is the local favicon/brand mark. All runtime textures are stored in `public/images/`; no remote asset service is required.

## GitHub repository setup

Create an empty GitHub repository, then from this project directory:

```bash
git init
git add .
git commit -m "Build SHAMAZ botanical storefront"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the example remote with your own repository URL. If the project is already inside a repository, use that repository's remote instead of running `git init` or adding a second remote.

## Deploy to Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Import the GitHub repository.
3. Keep the framework preset as **Vite** (or **Other** if auto-detection is unavailable).
4. Set the build command to `npm run build` and the output directory to `dist`.
5. Choose **Deploy**. Future pushes to the connected branch can trigger deployments.

## Deploy to Netlify

1. Sign in to Netlify and choose **Add new site → Import an existing project**.
2. Connect the GitHub repository.
3. Set the build command to `npm run build` and publish directory to `dist`.
4. Choose **Deploy site**. Future pushes to the connected branch can trigger deployments.

## GitHub Pages note

The Vite base is `/` so the required `/images/...` root-relative paths work on a root-domain/custom-domain deployment. For a GitHub Pages project hosted under `https://ACCOUNT.github.io/REPOSITORY/`, change `base` in `vite.config.js` to `'/REPOSITORY/'` and adjust the requested root-relative asset-path convention accordingly; use a custom domain at the origin root if the `/images/...` paths must remain unchanged.

## Ordering

All order links go directly to `https://wa.me/923003023106` with a URL-encoded prefilled message. The calculator uses the selected quantity, computes `quantity × Rs. 1,000`, and includes the name, city, and delivery address. No payment is collected on the website; delivery and payment details are confirmed in WhatsApp.
