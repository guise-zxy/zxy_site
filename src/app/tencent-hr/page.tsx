import Link from "next/link";

import { abilities } from "@/data/abilities";
import { jdMatches } from "@/data/jd-matches";
import { projectSummaries } from "@/data/projects";
import { tencentHrPageContent } from "@/data/site";
import { AbilityCard } from "@/components/cards/ability-card";
import { JDMatchCard } from "@/components/cards/jd-match-card";
import { ProjectCard } from "@/components/cards/project-card";
import { SectionTitle } from "@/components/layout/section-title";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "我为什么适合腾讯 HR 日常实习｜zxy",
  description:
    "从腾讯 HR 能力模型、AI-HR 岗位理解、项目经历和个人思考出发，展示 zxy 与腾讯 HR 日常实习岗位的匹配度。",
  pathname: "/tencent-hr",
});

export default function TencentHrPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-[32px] border border-slate-200 bg-white px-6 py-10 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] sm:px-8">
        <SectionTitle
          eyebrow="Tencent HR Fit"
          title={tencentHrPageContent.title}
          subtitle="这不是泛泛投递说明，而是一页把岗位理解、能力模型、项目证据和 AI-HR 判断连接起来的定向表达。"
        />
        <div className="mt-8 grid gap-4">
          {tencentHrPageContent.intro.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          title="腾讯 HR 能力模型匹配"
          subtitle="我希望面试官看到的不只是“做过项目”，而是这些项目如何映射到 HR 岗位真正看重的能力。"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {abilities.map((ability) => (
            <AbilityCard key={ability.slug} {...ability} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          title="两类岗位 JD 的匹配分析"
          subtitle="同一套经历，在不同岗位关键词下会呈现不同价值。我刻意把两类方向拆开来讲。"
        />
        <div className="grid gap-6 xl:grid-cols-2">
          {jdMatches.map((match) => (
            <JDMatchCard key={match.slug} {...match} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          title="我的项目证据"
          subtitle="项目排序与讲述逻辑都服务于“为什么适合腾讯 HR / AI-HR”，而不是单纯展示技术栈。"
        />
        <div className="grid gap-6 xl:grid-cols-2">
          {projectSummaries.map((project) => (
            <ProjectCard
              key={project.slug}
              {...project}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-10 sm:px-8">
        <SectionTitle
          title="我的 AI-HR 思考"
          subtitle="我更倾向于把 AI-HR 理解为“帮助 HR 更好地理解人、匹配人、支持人成长”的能力增强，而不是简单替代。"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white bg-white p-6">
            <p className="text-lg font-semibold text-slate-950">
              我关心的核心问题
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              人如何被理解、匹配、成长和激发；AI 如何帮助 HR 在招聘、评估、体验和协作上提升效率与判断质量。
            </p>
          </div>
          <div className="rounded-3xl border border-white bg-white p-6">
            <p className="text-lg font-semibold text-slate-950">
              我能切入的方式
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              用技术背景做问题拆解，用项目经验做推进和沉淀，用内容表达把场景理解讲清楚。
            </p>
          </div>
        </div>
        <Link
          href="/thinking"
          className="mt-6 inline-flex text-sm font-semibold text-sky-700"
        >
          查看我的 Thinking 文章
        </Link>
      </section>

      <section className="space-y-8">
        <SectionTitle
          title={tencentHrPageContent.contributionTitle}
          subtitle="如果加入团队，我希望先从具体、细致、可交付的工作做起，再逐步把自己的技术与 AI 理解接到业务场景里。"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {tencentHrPageContent.contributions.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
