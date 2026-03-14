# AbsorbX.

Decarbonise with biochar – source premium biochar for agriculture and construction.

Built with **Next.js 14** (React) from the Figma design.

## Setup

```bash
npm install
```

## Run

**Development** (with hot reload):

```bash
npm run dev
```

Then open **http://localhost:3000** in your browser (if that port is in use, try 3001, 3002, … e.g. **http://localhost:3007**).

**Important:** Open the **root URL** (e.g. `http://localhost:3007/`). Do **not** open `index.html` or `/index.html` — that is old static HTML. The live app with all updates is the Next.js React app at `/`.

**Production build:**

```bash
npm run build
npm start
```

## Project structure

- `app/` – Next.js App Router: `layout.js`, `page.js`, `globals.css`
- `components/` – React components: Header, Hero, FeatureSection, ExploreSection, ProductCard, Filters, Footer
- `lib/assets.js` – Figma asset URLs (replace with local files in `public/` if needed)

## License

MIT
