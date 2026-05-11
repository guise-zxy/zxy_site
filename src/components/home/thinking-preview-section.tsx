import { SectionTitle } from "@/components/layout/section-title";
import { ThinkingCard } from "@/components/cards/thinking-card";
import type { ThinkingMeta } from "@/lib/types";

type ThinkingPreviewSectionProps = {
  title: string;
  subtitle: string;
  posts: Array<ThinkingMeta & { slug: string }>;
};

export function ThinkingPreviewSection({
  title,
  subtitle,
  posts,
}: ThinkingPreviewSectionProps) {
  return (
    <section className="space-y-8">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="grid gap-6 xl:grid-cols-3">
        {posts.map((post) => (
          <ThinkingCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
}
