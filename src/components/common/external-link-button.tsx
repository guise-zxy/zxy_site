import { ArrowUpRight } from "lucide-react";

type ExternalLinkButtonProps = {
  href: string;
  label: string;
  subtle?: boolean;
};

export function ExternalLinkButton({
  href,
  label,
  subtle = false,
}: ExternalLinkButtonProps) {
  return (
    <a
      className={
        subtle
          ? "inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
          : "inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-700 transition hover:border-sky-300 hover:bg-sky-50"
      }
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}
