import Link from "next/link";

import { footerLinks } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-slate-950">zxy</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
            一个有技术背景、理解人和组织问题、能主动推进项目，并持续探索 AI-HR
            方向的候选人。
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-950">站点导航</p>
          <div className="mt-4 flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 transition hover:text-slate-950"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-950">联系</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <a href={`mailto:${profile.email}`} className="hover:text-slate-950">
              {profile.email}
            </a>
            <a href={profile.socialLinks.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.socialLinks.gitee} target="_blank" rel="noreferrer">
              Gitee
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
