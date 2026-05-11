import { homeSections, homeHero } from "@/data/site";
import { projectSummaries } from "@/data/projects";
import { proofs } from "@/data/proofs";
import { getThinkingEntries } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import { AbilityOverviewSection } from "@/components/home/ability-overview-section";
import { ContactSection } from "@/components/home/contact-section";
import { FeaturedProjectsSection } from "@/components/home/featured-projects-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProofPreviewSection } from "@/components/home/proof-preview-section";
import { ThinkingPreviewSection } from "@/components/home/thinking-preview-section";

export const metadata = createMetadata({
  title: "zxy｜AI-HR 方向个人能力展示站",
  description:
    "展示 zxy 在 AI-HR、技术实践、项目推进、组织协作和个人思考方面的能力证据。",
  pathname: "/",
});

export default async function HomePage() {
  const thinkingEntries = await getThinkingEntries();

  return (
    <div className="space-y-16">
      <HeroSection {...homeHero} />
      <AbilityOverviewSection {...homeSections.abilities} />
      <FeaturedProjectsSection
        {...homeSections.projects}
        projects={projectSummaries.filter((project) => project.featured)}
      />
      <ThinkingPreviewSection
        {...homeSections.thinking}
        posts={thinkingEntries.slice(0, 3).map((entry) => ({
          slug: entry.slug,
          ...entry.frontmatter,
        }))}
      />
      <ProofPreviewSection
        {...homeSections.proof}
        items={proofs.slice(0, 3)}
      />
      <ContactSection {...homeSections.contact} />
    </div>
  );
}
