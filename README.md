# saverpe-web

See the workspace [README](../README.md) for setup, architecture, SEO and the Gemini image workflow, and [CONTENT-TODO.md](CONTENT-TODO.md) for pre-launch content checks.

```bash
cp .env.example .env.local
npm install
npm run dev
node scripts/check-links.mjs          # verify internal links
npm run build && node scripts/list-gemini-prompts.mjs   # refresh GEMINI-PROMPTS.md
```
