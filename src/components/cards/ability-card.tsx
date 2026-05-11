import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { AbilityItem } from "@/lib/types";
import { Tag } from "@/components/common/tag";

type AbilityCardProps = AbilityItem;

export function AbilityCard({
  title,
  description,
  experience,
  relatedProjects,
  tags,
  href,
}: AbilityCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]">
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      <p className="mt-5 text-sm leading-7 text-slate-700">{experience}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
        {relatedProjects.map((project) => (
          <span key={project} className="rounded-full bg-slate-100 px-3 py-1">
            {project}
          </span>
        ))}
      </div>
      {href ? (
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-700"
        >
          查看相关页面
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </article>
  );
}
