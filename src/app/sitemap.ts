import type { MetadataRoute } from "next";

import { projectSummaries } from "@/data/projects";
import { getThinkingEntries } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getSiteUrl();
  const thinkingEntries = await getThinkingEntries();

  const staticRoutes = [
    "",
    "/tencent-hr",
    "/projects",
    "/thinking",
    "/proof",
    "/about",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route || "/"}`,
    lastModified: new Date(),
  }));

  const projectEntries = projectSummaries.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  const thinkingPages = thinkingEntries.map((entry) => ({
    url: `${baseUrl}/thinking/${entry.slug}`,
    lastModified: new Date(entry.frontmatter.date),
  }));

  return [...staticEntries, ...projectEntries, ...thinkingPages];
}
