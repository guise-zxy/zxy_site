import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import { Tag } from "@/components/common/tag";
import { SectionTitle } from "@/components/layout/section-title";
import { getThinkingEntries, getThinkingEntry } from "@/lib/content";
import { mdxComponents } from "@/lib/mdx";
import { createMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type ThinkingDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const entries = await getThinkingEntries();
  return entries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: ThinkingDetailPageProps) {
  const { slug } = await params;
  const entry = await getThinkingEntry(slug);

  if (!entry) {
    return {};
  }

  return createMetadata({
    title: `${entry.frontmatter.title}｜zxy`,
    description: entry.frontmatter.summary,
    pathname: `/thinking/${slug}`,
  });
}

export default async function ThinkingDetailPage({
  params,
}: ThinkingDetailPageProps) {
  const { slug } = await params;
  const entry = await getThinkingEntry(slug);

  if (!entry) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <section className="rounded-[32px] border border-slate-200 bg-white px-6 py-10 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] sm:px-8">
        <Tag>{entry.frontmatter.category}</Tag>
        <SectionTitle
          title={entry.frontmatter.title}
          subtitle={entry.frontmatter.summary}
        />
        <div className="mt-5 flex items-center gap-3 text-sm text-slate-500">
          <span>{formatDate(entry.frontmatter.date)}</span>
          <span>·</span>
          <span>{entry.frontmatter.readTime}</span>
        </div>
      </section>

      <article className="prose-shell rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] sm:px-8">
        <MDXRemote source={entry.content} components={mdxComponents} />
      </article>
    </div>
  );
}
