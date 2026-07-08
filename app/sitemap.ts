import type { MetadataRoute } from "next";
import { SITE } from "@/lib/utils";
import { getAllPostSlugs } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/about",
    "/contact",
    "/quote",
    "/privacy",
    "/blog",
    "/services/general-liability",
    "/services/workers-compensation",
    "/services/commercial-auto",
    "/services/surety-bonds",
    "/services/equipment-insurance",
    "/services/umbrella-coverage",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const posts = getAllPostSlugs().map((slug) => ({
    url: `${SITE.url}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...posts];
}
