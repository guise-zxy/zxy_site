import { ProjectCard } from "@/components/cards/project-card";
import { SectionTitle } from "@/components/layout/section-title";
import type { ProjectMeta } from "@/lib/types";

type FeaturedProjectsSectionProps = {
  title: string;
  subtitle: string;
  projects: ProjectMeta[];
};

export function FeaturedProjectsSection({
  title,
  subtitle,
  projects,
}: FeaturedProjectsSectionProps) {
  return (
    <section className="space-y-8">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            {...project}
            href={`/projects/${project.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
