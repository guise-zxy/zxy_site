import type { ProjectMeta } from "@/lib/types";

export const projectSummaries: ProjectMeta[] = [
  {
    slug: "ai-job-self-checker",
    title: "AI 求职自检官：面向大学生的岗位能力诊断与面试陪练工具",
    summary:
      "基于岗位 JD 和个人经历，帮助大学生完成能力匹配分析、简历补强和面试追问训练。",
    role: "产品设计 / AI 工作流设计 / 开发",
    order: 1,
    tags: ["AI-HR", "用户理解", "产品思维"],
    matchedAbilities: ["对 HR 有探索之心", "强自驱", "成就他人"],
    coverImage: "/images/projects/ai-job-self-checker.svg",
    proofIds: ["proof-job-checker-flow", "proof-job-checker-logic"],
    featured: true,
    status: "持续迭代中",
  },
  {
    slug: "rk-lightweight-stack",
    title: "基于 RK3588S 平台的 Linux 轻量化传输栈测试与优化",
    summary:
      "参与面向南方电网场景的 Linux 传输栈测试工作，负责环境搭建、运行测试、指标计算与团队推进。",
    role: "测试执行 / 流程沉淀 / 小组推进",
    order: 2,
    tags: ["Linux 测试", "项目推进", "文档沉淀"],
    matchedAbilities: ["正能量", "执行力", "成就他人"],
    coverImage: "/images/projects/rk-lightweight-stack.svg",
    proofIds: ["proof-rk-doc", "proof-rk-team"],
    featured: true,
    status: "已完成阶段复盘",
  },
  {
    slug: "sleep-aid-system",
    title: "基于日间光照感知与夜间环境联动的智能交互睡眠辅助系统",
    summary:
      "面向睡眠辅助场景，构建从白天光照感知到夜间卧室环境联动的嵌入式系统。",
    role: "项目负责人 / 系统设计 / 协同推进",
    order: 3,
    tags: ["嵌入式", "系统思维", "用户理解"],
    matchedAbilities: ["项目推进", "问题拆解", "用户理解"],
    coverImage: "/images/projects/sleep-aid-system.svg",
    proofIds: ["proof-sleep-architecture"],
    featured: true,
    status: "项目展示版",
  },
  {
    slug: "cpp-memory-pool",
    title: "C++ 高并发内存池",
    summary:
      "参考 tcmalloc 思路，实现面向多线程场景的内存池，用于理解内存分配、线程缓存和性能优化。",
    role: "独立学习 / 底层实现",
    order: 4,
    tags: ["C++", "高并发", "底层理解"],
    matchedAbilities: ["技术学习能力", "自驱学习", "代码能力"],
    coverImage: "/images/projects/cpp-memory-pool.svg",
    proofIds: ["proof-cpp-note"],
    featured: true,
    status: "学习型项目",
  },
];
