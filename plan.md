# SHAMAZ Organic Hair Growth Oil — Website Plan

## Scope and implementation

Build a production-ready, static Vite + React + Tailwind CSS storefront for SHAMAZ Organic Product’s 100 ml Hair Growth Oil. It will have no server, database, environment variables, or paid API dependency. The build will publish a Vite `dist/` directory and use only repository-local assets and root-relative `/images/...` paths.

The experience will include the complete brief: a sticky glass navigation bar; cinematic product hero with the exact headline and subheadline, Rs. 1,200 crossed out, Rs. 1,000 launch price, Rs. 200/17% saving, and one-to-three bottle quantity selection; four benefit cards; all 14 listed ingredients; a three-step use ritual; an editorial gallery for all four supplied product photographs; a live order calculator for customer name, city/address, quantity, and total; direct WhatsApp links on every order CTA; a persistent WhatsApp contact affordance; and a mobile purchase bar. The order number will be `923003023106` (displayed as `0300-3023106`). The order message will include the selected quantity, calculated total, name, and address, encoded into a WhatsApp URL. Fixed-price CTA links will also include a helpful prefilled message. Links will open in a new tab with `noopener noreferrer`.

The hero will use React Three Fiber / Three.js for a responsive, interactive studio diorama: procedural amber bottle, cap and matching sage carton meshes, a warm stone pedestal, studio lights, and restrained floating oil-drop / botanical accents. The product label texture will be derived from the supplied front bottle photo to preserve brand appearance; the supplied photos remain the source of truth and appear in the product gallery. Pointer/touch parallax and scroll progress will gently adjust the stage’s tilt/rotation, including a back-facing moment informed by the supplied back-label photo. If WebGL is unavailable or reduced motion is requested, a CSS/photo hero fallback will preserve a polished product presentation and all ordering behavior.

## Design direction

- **Design movement:** luxury botanical editorial, expressed through a cinematic studio still-life rather than a conventional boxed product grid.
- **Core principles:** product-first; calm botanical confidence; legible conversion; tactile, restrained motion.
- **Color philosophy:** warm ivory `#FAF8F4` gives the page an organic paper/stone foundation; deep sage `#4F6F64` anchors brand and calls to action; golden amber `#C88A2E` signals oil, value, and launch pricing.
- **Layout paradigm:** an asymmetrical hero with editorial copy opposite the 3D stage, followed by staggered full-width story sections and a purposeful gallery/ingredient rhythm.
- **Signature elements:** hairline botanical dividers; amber glints and glass/stone surfaces; a simple seed-and-leaf emblem.
- **Interaction philosophy:** motion reveals the object and its details without delaying the price or the order path. All controls remain usable with keyboard, touch, and reduced motion.
- **Animation:** slow product float, subtle pointer parallax, scroll-linked rotation/zoom, and short reveal transitions; honor `prefers-reduced-motion` and avoid motion that harms mobile performance.
- **Typography system:** an elegant high-contrast serif for expressive headlines and a crisp sans-serif for navigation, ingredient labels, pricing, and form controls.
- **Brand essence:** a premium herbal hair-oil ritual for people seeking a simple botanical care routine; considered, grounded, inviting.
- **Brand voice:** warm, assured, and direct. Example lines: “A slower ritual. A stronger-looking crown.” “Fourteen herbs, one considered daily ritual.”
- **Wordmark & logo:** custom text wordmark paired with a compact botanical seed/leaf line mark, built as an inline vector/CSS detail (no external icon service).
- **Signature brand color:** deep botanical sage `#4F6F64`.

## Project structure

- `index.html`, `vite.config.js`, `package.json`, and the lockfile: static app entry, Vite configuration, reproducible dependency install, and build scripts.
- `public/images/`: the four supplied files with the exact names `product-hero.jpg`, `bottle-front.jpg`, `box-front.jpg`, and `bottle-back.jpg`, plus any derived label texture needed by the 3D scene. All references will start with `/images/` and image elements will have resilient fallbacks.
- `public/manus-routes.json`: the single declared page route (`/`).
- `src/main.jsx`, `src/App.jsx`, `src/styles.css`: app bootstrap, page composition, responsive visual system.
- `src/components/`: reusable navbar, hero/3D stage, benefit, ingredient, gallery, ritual, calculator, WhatsApp CTA, and footer components.
- `src/data/product.js`: product facts, prices, ingredients, benefits, ritual copy, and shared WhatsApp/order URL helpers.
- `README.md`: local development, build, GitHub repository push, and Vercel/Netlify static deployment instructions.

## Build and delivery workflow

Use the flexible WebDev project as initialized. Before writing app source, register/confirm JavaScript diagnostics and prepare a valid static-build declaration; create `TODO.md` from the approved requirements; then implement the app and copy the supplied assets to their requested paths. Install pinned package dependencies, run the production build, resolve any diagnostics/build issues, start the configured development server for Preview, and confirm the route manifest and the finished responsive page. Save the finished source as a Manus checkpoint on the canonical remote. Publishing is separate from checkpointing; I will not switch on automatic publishing or claim the site is publicly deployed unless publication is explicitly configured and confirmed.
