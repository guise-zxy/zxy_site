export type AbilityItem = {
  slug: string;
  title: string;
  description: string;
  experience: string;
  relatedProjects: string[];
  tags: string[];
  href?: string;
};

export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  order: number;
  tags: string[];
  matchedAbilities: string[];
  coverImage: string;
  proofIds: string[];
  featured: boolean;
  status?: string;
};

export type ThinkingCategory =
  | "AI-HR"
  | "岗位理解"
  | "产品观察"
  | "项目复盘"
  | "组织协作"
  | "求职成长";

export type ThinkingMeta = {
  slug: string;
  title: string;
  summary: string;
  category: ThinkingCategory;
  date: string;
  readTime: string;
  featured: boolean;
};

export type ProofCategory =
  | "项目证明"
  | "比赛证明"
  | "文档证明"
  | "表达证明"
  | "学习证明";

export type ProofItem = {
  id: string;
  title: string;
  image: string;
  ability: string[];
  description: string;
  relatedProject?: string;
  category: ProofCategory;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type TimelineItem = {
  title: string;
  body: string;
};

export type ProjectFrontmatter = {
  title: string;
  summary: string;
  role: string;
  order: number;
  tags: string[];
  matchedAbilities: string[];
  coverImage: string;
};

export type ThinkingFrontmatter = {
  title: string;
  summary: string;
  category: ThinkingCategory;
  date: string;
  readTime: string;
  featured: boolean;
};
