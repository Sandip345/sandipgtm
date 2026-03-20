# Personal Website (Astro + Tailwind)

This is a modern, component-based rewrite of your previous static site.

## What's included
- **Astro** pages + layouts
- **Tailwind CSS** for styling
- **Markdown content collections**:
  - `src/content/projects/*.md`
  - `src/content/news/*.md`
- Your existing uploads are kept at `public/images/uploads` so the old Markdown image links keep working.
- Your resume PDF is copied to `public/Sandip_Gautam_Grad_Resume.pdf`

## Run in GitHub Codespaces
1. Open the repo in **Codespaces**
2. In the terminal:
   ```bash
   npm install
   npm run dev
   ```
3. Open the forwarded port **4321** (Codespaces will show a popup, or use the `PORTS` tab)

## Edit content
- Add a new project: create a new Markdown file in `src/content/projects/`
- Add a news post: create a new Markdown file in `src/content/news/`

## Deploy
- Netlify / Cloudflare Pages / GitHub Pages all work.
- Build command: `npm run build`
- Output: `dist/`

## Notes
- Update social links in `src/components/Footer.astro`
- Update your name/branding in `src/components/Header.astro`
