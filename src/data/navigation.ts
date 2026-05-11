import type { NavigationItem } from "@/lib/types";

export const navigationItems: NavigationItem[] = [
  { label: "首页", href: "/" },
  { label: "腾讯 HR 匹配", href: "/tencent-hr" },
  { label: "项目", href: "/projects" },
  { label: "思考", href: "/thinking" },
  { label: "证明材料", href: "/proof" },
  { label: "关于我", href: "/about" },
];

export const footerLinks: NavigationItem[] = [
  { label: "项目总览", href: "/projects" },
  { label: "Thinking", href: "/thinking" },
  { label: "证明材料", href: "/proof" },
  { label: "关于我", href: "/about" },
];
