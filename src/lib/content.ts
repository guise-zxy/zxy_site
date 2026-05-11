import { cache } from "react";
import matter from "gray-matter";
import { promises as fs } from "node:fs";
import path from "node:path";

import type {
  ProjectFrontmatter,
  ThinkingFrontmatter,
} from "@/lib/types";

const contentRoot = path.join(process.cwd(), "src", "content");

async function readDirectoryFiles(directory: string) {
  const fullDirectory = path.join(contentRoot, directory);
  const files = await fs.readdir(fullDirectory);

  return files.filter((file) => file.endsWith(".mdx"));
}

async function readMdxFile<T>(directory: string, slug: string) {
  const fullPath = path.join(contentRoot, directory, `${slug}.mdx`);
  const file = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(file);

  return {
    slug,
    frontmatter: data as T,
    content,
  };
}

export const getProjectEntries = cache(async () => {
  const files = await readDirectoryFiles("projects");
  const entries = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      return readMdxFile<ProjectFrontmatter>("projects", slug);
    }),
  );

  return entries.sort((a, b) => a.frontmatter.order - b.frontmatter.order);
});

export const getProjectEntry = cache(async (slug: string) => {
  try {
    return await readMdxFile<ProjectFrontmatter>("projects", slug);
  } catch {
    return null;
  }
});

export const getThinkingEntries = cache(async () => {
  const files = await readDirectoryFiles("thinking");
  const entries = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      return readMdxFile<ThinkingFrontmatter>("thinking", slug);
    }),
  );

  return entries.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
});

export const getThinkingEntry = cache(async (slug: string) => {
  try {
    return await readMdxFile<ThinkingFrontmatter>("thinking", slug);
  } catch {
    return null;
  }
});
