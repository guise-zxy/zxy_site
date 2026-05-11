import { Download } from "lucide-react";

type ResumeButtonProps = {
  href: string;
};

export function ResumeButton({ href }: ResumeButtonProps) {
  return (
    <a
      className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <Download className="h-4 w-4" />
      下载简历
    </a>
  );
}
