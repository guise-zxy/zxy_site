import { profile } from "@/data/profile";
import { ExternalLinkButton } from "@/components/common/external-link-button";
import { ResumeButton } from "@/components/common/resume-button";
import { SectionTitle } from "@/components/layout/section-title";

type ContactSectionProps = {
  title: string;
  subtitle: string;
};

export function ContactSection({ title, subtitle }: ContactSectionProps) {
  return (
    <section className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] sm:px-8 sm:py-10">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <ResumeButton href={profile.resumeUrl} />
        <ExternalLinkButton href={profile.socialLinks.github} label="GitHub" />
        <ExternalLinkButton href={profile.socialLinks.gitee} label="Gitee" />
        <ExternalLinkButton
          href={`mailto:${profile.email}`}
          label="邮箱联系"
          subtle
        />
      </div>
    </section>
  );
}
