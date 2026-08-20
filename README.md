# Hair Lab Co. — Barber Studio Website

Production site for **Hair Lab Co.** (Manama · Est. 1979). Monochrome editorial brand,
built as a modern React app with the 21st.dev flip-disk (split-flap) board integrated.

## Stack
- **React 19 + TypeScript** (Vite)
- **Tailwind CSS v3**
- **shadcn-style structure** (`@/components/ui`, `@/lib/utils`, `components.json`, path alias `@ -> src`)
- **lucide-react** icons
- 21st.dev component: `src/components/ui/flip-disk-matrix.tsx`

## Run it
```bash
npm install
npm run dev        # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```
Requires Node 18+.

## Deploy
- **Vercel:** import the repo, framework preset **Vite**, build `npm run build`, output `dist`.
- **Netlify / any static host:** deploy the `dist/` folder.

## The 21st.dev component
Lives at `src/components/ui/flip-disk-matrix.tsx` (kept in `/components/ui` per shadcn
convention so the CLI and imports resolve). Themed to the brand (mono, no lime accent)
and extended with props:

| prop | type | default | notes |
|------|------|---------|-------|
| `controls` | boolean | `true` | show the built-in mode switcher + text input |
| `words` | string[] | – | cycle words on the board (forces text display) |
| `interval` | number | `2.6` | seconds between word changes |
| `defaultMode` | "time" \| "text" \| "wave" \| "noise" | `"time"` | mode when no `words` |

Used on the site as: `<FlipDiskMatrix controls={false} words={["HAIR","SHAVE","GROOM","1979"]} />`
A full interactive demo is in `src/components/ui/flip-disk-matrix.demo.tsx`.

## Swap in real assets
- **Photos:** replace the Unsplash IDs in `src/App.tsx` (`img(...)` helper + `services`/`gallery` arrays) with the shop's own images.
- **Logo:** `src/components/Emblem.tsx` is an SVG recreation of the badge. Drop in the real logo file if preferred.
- **Address:** set the exact street address in the Visit section of `src/App.tsx`.

Made by hubofecom.
