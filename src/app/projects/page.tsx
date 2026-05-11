import { projectSummaries } from "@/data/projects";
import { ProjectCard } from "@/components/cards/project-card";
import { SectionTitle } from "@/components/layout/section-title";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "项目经历总览｜zxy",
  description:
    "按与腾讯 HR / AI-HR 岗位的相关性排序，展示 zxy 的项目经历与能力证据。",
  pathname: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Projects"
        title="项目经历总览"
        subtitle="所有项目顺序都经过重新编排，优先展示最能证明我适合腾讯 HR / AI-HR 方向的经历。"
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
    </div>
  );
}
