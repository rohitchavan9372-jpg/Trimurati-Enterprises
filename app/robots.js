export const dynamic = "force-static";

import { siteConfig } from "@/data/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteConfig.url}/sitemap.xml`
  };
}
