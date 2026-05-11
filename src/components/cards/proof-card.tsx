import Image from "next/image";

import type { ProofItem } from "@/lib/types";
import { Tag } from "@/components/common/tag";

export function ProofCard({
  image,
  title,
  ability,
  description,
  relatedProject,
}: ProofItem) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]">
      <Image
        src={image}
        alt={title}
        width={900}
        height={600}
        className="h-48 w-full object-cover"
        unoptimized
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {ability.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
        {relatedProject ? (
          <p className="mt-4 text-sm text-slate-500">关联项目：{relatedProject}</p>
        ) : null}
      </div>
    </article>
  );
}
