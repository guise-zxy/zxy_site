import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Tag } from "@/components/common/tag";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  tags: string[];
  quickFacts: string[];
};

export function HeroSection({
  eyebrow,
  title,
  intro,
  primaryCta,
  secondaryCta,
  tags,
  quickFacts,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white px-6 py-10 shadow-[0_24px_80px_-50px_rgba(14,165,233,0.45)] sm:px-8 sm:py-12 lg:px-12 lg:py-16">
      <div className="absolute inset-y-0 right-0 hidden w-[38%] bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.14),_transparent_72%)] lg:block" />

      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.28fr)_minmax(320px,0.72fr)] lg:items-center lg:gap-12">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
            >
              {secondaryCta.label}
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        <aside className="mx-auto w-full max-w-[392px] rounded-[28px] border border-sky-100 bg-linear-to-b from-sky-50/90 to-white p-6 shadow-[0_20px_45px_-35px_rgba(14,116,225,0.35)] lg:mx-0 lg:justify-self-end">
          <p className="text-sm font-semibold text-slate-950">
            面试官 10 秒内应该看到什么
          </p>
          <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
            {quickFacts.map((fact) => (
              <li
                key={fact}
                className="rounded-2xl border border-white/90 bg-white px-4 py-3 shadow-[0_12px_24px_-22px_rgba(15,23,42,0.35)]"
              >
                {fact}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
