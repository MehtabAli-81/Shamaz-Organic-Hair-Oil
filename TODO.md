# SHAMAZ Website Outcomes

## Static, repository-ready Vite website and supplied assets — Complete
- Use Vite + React + Tailwind CSS as a 100% static client-side web app with zero backend servers, zero environment variables required, and zero paid external API keys.
- Store all product images, label textures, and icons inside `/public/images/` and reference them via root-relative `/images/...` paths with clean `onError` fallback handling so images do not break on Vercel, Netlify, or GitHub Pages.
- Deliver a clean, modular folder structure (`src/components/`, `src/data/`, `public/images/`, `package.json`, `vite.config.js`) and a complete `README.md` with Git push and Vercel/Netlify one-click deployment steps, so `npm run build` succeeds with zero TypeScript or bundler errors.
- Extract the four studio product photos from the ZIP and name them `product-hero.jpg`, `bottle-front.jpg`, `box-front.jpg`, and `bottle-back.jpg` inside `public/images/`.

## SHAMAZ product, offer, and visual identity — Complete
- Brand Name: SHAMAZ Organic Product. Product: 100 ml Organic Hair Growth Oil (rich dark-amber herbal oil in a sleek bottle with a sage-green and white botanical label and matching outer box, referencing the uploaded product images).
- Display Original Price Rs. 1,200 with a clean strikethrough and Special Launch Discount Price Rs. 1,000 only, plus Save Rs. 200 / 17% OFF launch badge.
- Use WhatsApp order number `923003023106` and display format `0300-3023106`.
- Use deep botanical sage green (`#4F6F64`), warm cream/ivory (`#FAF8F4`), rich golden-amber highlights (`#C88A2E`), and elegant serif + clean sans-serif typography.

## Cinematic 3D product stage and editorial photo gallery — Complete
- Render an interactive 3D studio bottle and sage-green box of SHAMAZ Hair Growth Oil (100 ml) floating above a warm travertine stone pedestal with studio rim lighting, floating golden oil droplets, and smooth mouse/touch parallax tilt.
- Map the uploaded SHAMAZ bottle label texture onto the 3D cylinder mesh cleanly, with a lightweight CSS/Framer Motion fallback if WebGL is unavailable on older mobile browsers.
- As the user scrolls down the page, smoothly rotate and zoom the 3D bottle—tilting to showcase the front botanical emblem, rotating to reveal the ingredients back label, and orbiting surrounding 3D botanical elements (rosemary sprigs, black seeds/kalonji, hibiscus petals, and golden oil drops).
- Showcase the uploaded studio product mockups in high-resolution responsive cards so visitors clearly see the physical packaging.

## Responsive page sections and product education — Complete
- Include a sticky glassmorphic navbar with a minimal SHAMAZ botanical logo on the left, smooth-scroll links (Benefits, 14 Herbs, How to Use, Order Now), and a glowing green “Order on WhatsApp” CTA button on the right.
- Include a cinematic hero with the headline “Pure Herbal Power for Stronger, Thicker, Faster-Growing Hair.” and subheadline “Infused with 14 cold-pressed oils and Ayurvedic herbs — 100% chemical-free formula.” Add a launch price card showing Rs. 1,200 → Rs. 1,000 (Limited Launch Offer), quantity selection (1 Bottle, 2 Bottles, 3 Bottles), and a primary “Order Now via WhatsApp” button.
- Include four interactive benefit cards with smooth reveal animations: Stops Hair Fall; Stimulates Scalp Circulation; Repairs Split Ends; Restores Natural Shine.
- Include interactive ingredient cards for all 14 formula items: Coconut Oil, Argan Oil, Rosemary Essential Oil, Castor Oil, Vitamin E Oil, Olive Oil, Aloe Vera Extract, Bhringraj, Hibiscus, Nettle Leaf, Black Seeds (Kalonji), Nagarmotha Root Extract, Flaxseed Oil, and Fenugreek Seeds (Methi).
- Include a three-step “How to Use” guide: 1. Massage into scalp, 2. Apply to hair ends to prevent split ends, 3. Leave overnight & wash with mild shampoo.

## WhatsApp conversion and order calculator — Complete
- Include interactive quick-order calculator inputs for Full Name, City & Delivery Address, and Quantity (live-calculating Quantity × Rs. 1,000).
- Clicking “Complete Order on WhatsApp” opens `https://wa.me/923003023106?text=...` in a new tab (`target="_blank" rel="noopener noreferrer"`) with a URL-encoded pre-filled message: “Assalam-o-Alaikum! I want to order SHAMAZ Organic Hair Growth Oil (100 ml) at the Launch Discount Price of Rs. 1,000.\n• Quantity: [Selected Qty]\n• Total Amount: Rs. [Calculated Total]\n• Name: [Customer Name]\n• Address: [Customer Address]”.
- Ensure every “Order Now” button across the site (Hero, Navbar, Benefits, and Sticky Mobile Bar) triggers this direct `https://wa.me/923003023106` link reliably with zero dead buttons.
- Include a persistent floating WhatsApp icon in the bottom-right corner (0300-3023106) plus a sticky mobile bottom bar displaying ~~Rs. 1,200~~ Rs. 1,000 | Order on WhatsApp.
