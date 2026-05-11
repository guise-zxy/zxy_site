import type { AbilityItem } from "@/lib/types";

export const abilities: AbilityItem[] = [
  {
    slug: "positive-mindset",
    title: "正能量的心态",
    description:
      "我理解的正能量，不是简单情绪积极，而是在复杂任务中保持建设性心态，愿意把问题转化为行动。",
    experience:
      "在 RK3588S Linux 测试项目中，我从执行测试逐步转向主动整理流程、沉淀文档，并带动组员一起推进，避免问题只停留在抱怨层面。",
    relatedProjects: ["rk-lightweight-stack", "sleep-aid-system"],
    tags: ["建设性", "问题转行动", "团队推进"],
    href: "/tencent-hr",
  },
  {
    slug: "self-driven",
    title: "强自驱的能力",
    description:
      "我习惯在没有标准答案的任务中主动拆解问题，先理解目标，再拆模块、定节奏、查资料、做验证，最后沉淀成可复用的方法。",
    experience:
      "我主动开发 AI 求职自检官，研究岗位 JD、能力评分和面试追问流程，也主动搭建这个长期维护型个人网站来表达岗位匹配度。",
    relatedProjects: [
      "ai-job-self-checker",
      "sleep-aid-system",
      "cpp-memory-pool",
    ],
    tags: ["自驱", "问题拆解", "长期维护"],
    href: "/tencent-hr",
  },
  {
    slug: "enable-others",
    title: "成就他人的意愿",
    description:
      "我理解的成就他人，是把自己的经验整理成别人也能使用的方法，降低他人的理解和执行成本。",
    experience:
      "我输出环境搭建和指标计算文档，帮助组员更快进入测试状态；在 AI 求职自检官项目中，也尝试把岗位分析与面试追问工具化，帮助同学更清楚地认识自己。",
    relatedProjects: ["ai-job-self-checker", "rk-lightweight-stack"],
    tags: ["文档沉淀", "协作效率", "工具化"],
    href: "/proof",
  },
  {
    slug: "hr-exploration",
    title: "对 HR 有探索之心",
    description:
      "我对 HR 的兴趣，来自于“人如何被理解、匹配、成长和激发”这个问题。",
    experience:
      "我持续关注 AI 时代下 HR 职能的变化，尤其是 AI 在招聘筛选、岗位匹配、人才评估、员工体验和组织协作中的应用，并尝试把技术背景转化为场景理解能力。",
    relatedProjects: ["ai-job-self-checker"],
    tags: ["AI-HR", "岗位理解", "用户思维"],
    href: "/thinking",
  },
];
