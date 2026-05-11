import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ThinkingMeta } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { Tag } from "@/components/common/tag";

export function ThinkingCard({
  slug,
  title,
  summary,
  category,
  date,
  readTime,
}: ThinkingMeta & { slug: string }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]">
      <Tag>{category}</Tag>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{summary}</p>
      <div className="mt-5 flex items-center gap-3 text-sm text-slate-500">
        <span>{formatDate(date)}</span>
        <span>·</span>
        <span>{readTime}</span>
      </div>
      <Link
        href={`/thinking/${slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-700"
      >
        阅读文章
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
