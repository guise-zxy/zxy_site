import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ProjectMeta } from "@/lib/types";
import { Tag } from "@/components/common/tag";

export function ProjectCard({
  title,
  summary,
  role,
  tags,
  matchedAbilities,
  coverImage,
  href,
}: ProjectMeta & { href?: string }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]">
      <div className="border-b border-slate-100 bg-slate-50">
        <Image
          src={coverImage}
          alt={title}
          width={1200}
          height={675}
          className="h-52 w-full object-cover"
          unoptimized
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
        <p className="mt-2 text-sm font-medium text-sky-700">{role}</p>
        <p className="mt-4 text-sm leading-7 text-slate-600">{summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <p className="mt-5 text-sm text-slate-500">
          重点映射能力：{matchedAbilities.join(" / ")}
        </p>
        {href ? (
          <Link
            href={href}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-700"
          >
            查看项目详情
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : null}
      </div>
    </article>
  );
}
