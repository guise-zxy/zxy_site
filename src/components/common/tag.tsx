import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
