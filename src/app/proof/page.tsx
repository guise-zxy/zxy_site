import { proofs } from "@/data/proofs";
import { ProofCard } from "@/components/cards/proof-card";
import { SectionTitle } from "@/components/layout/section-title";
import { createMetadata } from "@/lib/seo";

const categories = ["项目证明", "比赛证明", "文档证明", "表达证明", "学习证明"] as const;

export const metadata = createMetadata({
  title: "证明材料｜zxy",
  description:
    "用证书、项目截图、文档和结构化说明证明 zxy 的经历真实存在，并明确它们对应的能力。",
  pathname: "/proof",
});

export default function ProofPage() {
  return (
    <div className="space-y-12">
      <SectionTitle
        eyebrow="Evidence"
        title="证明材料"
        subtitle="这里不只堆图片。每一张图都会明确说明：它证明了什么能力、对应哪个项目、为什么值得被看见。"
      />

      {categories.map((category) => {
        const items = proofs.filter((proof) => proof.category === category);
        if (items.length === 0) {
          return null;
        }

        return (
          <section key={category} className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-950">{category}</h2>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => (
                <ProofCard key={item.id} {...item} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
