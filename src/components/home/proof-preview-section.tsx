import { SectionTitle } from "@/components/layout/section-title";
import { ProofCard } from "@/components/cards/proof-card";
import type { ProofItem } from "@/lib/types";

type ProofPreviewSectionProps = {
  title: string;
  subtitle: string;
  items: ProofItem[];
};

export function ProofPreviewSection({
  title,
  subtitle,
  items,
}: ProofPreviewSectionProps) {
  return (
    <section className="space-y-8">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="grid gap-6 xl:grid-cols-3">
        {items.map((item) => (
          <ProofCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
