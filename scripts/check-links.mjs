// Verifies every internal markdown/href link in content and app files resolves to a real route.
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const brands = JSON.parse(fs.readFileSync(path.join(root, "data/brands.json"), "utf8"));
const taxonomy = JSON.parse(fs.readFileSync(path.join(root, "data/taxonomy.json"), "utf8"));
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => (d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]));
const files = [...walk(path.join(root, "content")), ...walk(path.join(root, "app")), ...walk(path.join(root, "components"))].filter((f) => /\.(ts|tsx)$/.test(f));

const blogSlugs = new Set();
for (const f of walk(path.join(root, "content/blog"))) for (const m of fs.readFileSync(f, "utf8").matchAll(/^\s{4}slug: "([^"]+)"/gm)) blogSlugs.add(m[1]);

const valid = new Set(["/", "/brands", "/categories", "/occasions", "/blog", "/how-it-works", "/about-us", "/faq", "/contact-us", "/privacy-policy", "/terms-of-service", "/refund-policy", "/blog/rss.xml", "/llms.txt", "/llms-full.txt", "/sitemap.xml",
  ...brands.map((b) => `/brands/${b.slug}`), ...taxonomy.categories.map((c) => `/categories/${c.id}`), ...taxonomy.occasions.map((o) => `/occasions/${o.id}`), ...[...blogSlugs].map((s) => `/blog/${s}`),
  ...["gift-guides", "festivals-occasions", "gift-card-basics", "brand-spotlights", "smart-gifting", "corporate-gifting"].map((c) => `/blog/category/${c}`)]);

let bad = 0;
for (const f of files) {
  const src = fs.readFileSync(f, "utf8");
  for (const m of src.matchAll(/\]\((\/[^)\s#?]*)|href="(\/[^"#?]*)"/g)) {
    const link = (m[1] ?? m[2]).replace(/\/$/, "") || "/";
    if (!valid.has(link)) { bad++; console.log(`${path.relative(root, f)}: ${link}`); }
  }
}
console.log(`${blogSlugs.size} posts, ${bad} broken links`);
process.exit(bad ? 1 : 0);
