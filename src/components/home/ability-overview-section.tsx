import { abilities } from "@/data/abilities";
import { AbilityCard } from "@/components/cards/ability-card";
import { SectionTitle } from "@/components/layout/section-title";

type AbilityOverviewSectionProps = {
  title: string;
  subtitle: string;
};

export function AbilityOverviewSection({
  title,
  subtitle,
}: AbilityOverviewSectionProps) {
  return (
    <section className="space-y-8">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="grid gap-6 lg:grid-cols-2">
        {abilities.map((ability) => (
          <AbilityCard key={ability.slug} {...ability} />
        ))}
      </div>
    </section>
  );
}
