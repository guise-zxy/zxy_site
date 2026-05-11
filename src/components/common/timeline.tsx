import type { TimelineItem } from "@/lib/types";

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={item.title} className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
            {index < items.length - 1 ? (
              <span className="mt-2 h-full w-px bg-slate-200" />
            ) : null}
          </div>
          <div className="pb-2">
            <p className="text-sm font-semibold text-slate-950">{item.title}</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
