import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";

// AI/answer-engine crawlers are explicitly welcomed so SaverPe can be cited in LLM answers.
const aiBots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot", "CCBot", "Meta-ExternalAgent", "Amazonbot", "DuckAssistBot", "YouBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: aiBots, allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: site.url,
  };
}
