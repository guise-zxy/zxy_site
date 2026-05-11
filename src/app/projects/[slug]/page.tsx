import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import { ProofCard } from "@/components/cards/proof-card";
import { Tag } from "@/components/common/tag";
import { SectionTitle } from "@/components/layout/section-title";
import { projectSummaries } from "@/data/projects";
import { proofs } from "@/data/proofs";
import { getProjectEntry } from "@/lib/content";
import { mdxComponents } from "@/lib/mdx";
import { createMetadata } from "@/lib/seo";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projectSummaries.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectSummaries.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return createMetadata({
    title: `${project.title}｜zxy`,
    description: project.summary,
    pathname: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectSummaries.find((item) => item.slug === slug);
  const entry = await getProjectEntry(slug);

  if (!project || !entry) {
    notFound();
  }

  const relatedProofs = proofs.filter((proof) => project.proofIds.includes(proof.id));

  return (
    <div className="space-y-12">
      <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]">
        <Image
          src={project.coverImage}
          alt={project.title}
          width={1600}
          height={900}
          className="h-64 w-full object-cover"
          unoptimized
        />
        <div className="grid gap-10 px-6 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <SectionTitle title={project.title} subtitle={project.summary} />
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <aside className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-slate-950">项目信息</p>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div>
                <p className="font-medium text-slate-950">角色</p>
                <p className="mt-1 leading-7">{project.role}</p>
              </div>
              <div>
                <p className="font-medium text-slate-950">映射能力</p>
                <p className="mt-1 leading-7">
                  {project.matchedAbilities.join(" / ")}
                </p>
              </div>
              <div>
                <p className="font-medium text-slate-950">状态</p>
                <p className="mt-1 leading-7">{project.status}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="prose-shell rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] sm:px-8">
          <MDXRemote source={entry.content} components={mdxComponents} />
        </article>
        <aside className="space-y-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]">
            <p className="text-sm font-semibold text-slate-950">为什么这个项目重要</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              它不只是证明我做过技术项目，更用于解释我如何理解用户、推进复杂任务、沉淀方法，并把能力映射到腾讯 HR / AI-HR 场景。
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]">
            <p className="text-sm font-semibold text-slate-950">相关证明材料</p>
            <div className="mt-5 space-y-4">
              {relatedProofs.map((proof) => (
                <div
                  key={proof.id}
                  className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600"
                >
                  <p className="font-medium text-slate-900">{proof.title}</p>
                  <p className="mt-1">{proof.description}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {relatedProofs.length > 0 ? (
        <section className="space-y-8">
          <SectionTitle
            title="相关证明材料"
            subtitle="这些材料用于补强项目真实性，也帮助面试官快速理解这段经历证明了什么能力。"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProofs.map((proof) => (
              <ProofCard key={proof.id} {...proof} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
