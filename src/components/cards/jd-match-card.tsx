import { Tag } from "@/components/common/tag";

type JDMatchCardProps = {
  title: string;
  description: string;
  keywords: string[];
  evidence: string[];
};

export function JDMatchCard({
  title,
  description,
  keywords,
  evidence,
}: JDMatchCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]">
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {keywords.map((keyword) => (
          <Tag key={keyword}>{keyword}</Tag>
        ))}
      </div>
      <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
        {evidence.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
