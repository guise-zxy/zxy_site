import { getThinkingEntries } from "@/lib/content";
import { ThinkingCard } from "@/components/cards/thinking-card";
import { SectionTitle } from "@/components/layout/section-title";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "我的 HR / AI / 产品思考｜zxy",
  description:
    "围绕 AI-HR、岗位理解、产品观察、组织协作与求职成长的持续思考记录。",
  pathname: "/thinking",
});

export default async function ThinkingPage() {
  const entries = await getThinkingEntries();

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Thinking"
        title="我的 HR / AI / 产品思考"
        subtitle="这些文章不是为了堆内容，而是为了证明我会持续判断、持续复盘，并认真理解自己为什么想做 AI-HR。"
      />
      <div className="grid gap-6 xl:grid-cols-3">
        {entries.map((entry) => (
          <ThinkingCard
            key={entry.slug}
            slug={entry.slug}
            {...entry.frontmatter}
          />
        ))}
      </div>
    </div>
  );
}
