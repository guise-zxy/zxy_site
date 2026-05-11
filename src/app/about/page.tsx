import { profile } from "@/data/profile";
import { ExternalLinkButton } from "@/components/common/external-link-button";
import { ResumeButton } from "@/components/common/resume-button";
import { Tag } from "@/components/common/tag";
import { SectionTitle } from "@/components/layout/section-title";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "关于我｜zxy",
  description:
    "了解 zxy 的背景、能力标签、联系方式与持续探索 AI-HR 的原因。",
  pathname: "/about",
});

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-[32px] border border-slate-200 bg-white px-6 py-10 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] sm:px-8">
        <SectionTitle
          eyebrow="About"
          title="关于我"
          subtitle={profile.shortBio}
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {profile.aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-slate-950">能力标签</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.skillTags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <ResumeButton href={profile.resumeUrl} />
              <ExternalLinkButton href={profile.socialLinks.github} label="GitHub" />
              <ExternalLinkButton href={profile.socialLinks.gitee} label="Gitee" />
              <ExternalLinkButton
                href={profile.socialLinks.xiaohongshu}
                label="小红书"
                subtle
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] sm:px-8">
        <h2 className="text-2xl font-semibold text-slate-950">联系方式</h2>
        <p className="mt-4 text-base leading-8 text-slate-600">
          邮箱：<a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-500">{profile.contactNote}</p>
      </section>
    </div>
  );
}
