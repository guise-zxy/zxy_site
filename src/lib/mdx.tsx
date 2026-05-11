import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type LinkLikeProps = ComponentPropsWithoutRef<"a">;
type HeadingTwoProps = ComponentPropsWithoutRef<"h2">;
type HeadingThreeProps = ComponentPropsWithoutRef<"h3">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type OrderedListProps = ComponentPropsWithoutRef<"ol">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type QuoteProps = ComponentPropsWithoutRef<"blockquote">;

export const mdxComponents = {
  h2: (props: HeadingTwoProps) => (
    <h2
      className="mt-12 text-2xl font-semibold tracking-tight text-slate-950"
      {...props}
    />
  ),
  h3: (props: HeadingThreeProps) => (
    <h3 className="mt-8 text-xl font-semibold text-slate-900" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="mt-4 text-base leading-8 text-slate-700" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700" {...props} />
  ),
  ol: (props: OrderedListProps) => (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700" {...props} />
  ),
  li: (props: ListItemProps) => <li className="leading-7" {...props} />,
  blockquote: (props: QuoteProps) => (
    <blockquote
      className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/70 px-5 py-4 text-slate-700"
      {...props}
    />
  ),
  a: ({ href = "#", ...props }: LinkLikeProps) => {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          className="font-medium text-sky-700 underline decoration-sky-200 underline-offset-4"
          href={href}
          target="_blank"
          rel="noreferrer"
          {...props}
        />
      );
    }

    return (
      <Link
        className="font-medium text-sky-700 underline decoration-sky-200 underline-offset-4"
        href={href}
        {...props}
      />
    );
  },
};
