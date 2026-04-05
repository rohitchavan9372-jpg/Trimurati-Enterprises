export const dynamic = "force-static";

import { materialServicePages, services, siteConfig } from "@/data/site";

export default function sitemap() {
  const staticRoutes = ["", "/about", "/services", "/contact"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: service.slug === "hard-rock-control-blasting" ? 0.9 : 0.7
  }));

  const materialServiceRoutes = materialServicePages.map((service) => ({
    url: `${siteConfig.url}/services/materials/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: service.children?.length ? 0.75 : 0.65
  }));

  return [...staticRoutes, ...serviceRoutes, ...materialServiceRoutes];
}
