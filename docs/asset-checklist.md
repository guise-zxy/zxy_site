# 真实素材替换清单

当前站点结构已经支持直接替换真实素材。本清单用于你后续补充时快速定位。

## 简历

- 目标路径：`public/resume/resume.pdf`
- 操作方式：直接用真实 PDF 覆盖当前占位文件

## 项目封面

- `public/images/projects/ai-job-self-checker.svg`
  - 建议替换为：产品界面图、工作流图、能力诊断结构图
- `public/images/projects/rk-lightweight-stack.svg`
  - 建议替换为：测试现场图、环境图、结果图
- `public/images/projects/sleep-aid-system.svg`
  - 建议替换为：系统实物图、模块图、架构图
- `public/images/projects/cpp-memory-pool.svg`
  - 建议替换为：结构图、学习笔记图、性能结果图

## 证明材料

- `public/images/proof/rk-doc.svg`
  - 建议替换为：环境搭建文档截图 / 指标计算文档截图
- `public/images/proof/rk-team.svg`
  - 建议替换为：协作推进记录 / 任务截图
- `public/images/proof/job-checker-flow.svg`
  - 建议替换为：AI 工作流草图 / 过程图
- `public/images/proof/job-checker-logic.svg`
  - 建议替换为：岗位能力映射表 / 追问逻辑图
- `public/images/proof/sleep-architecture.svg`
  - 建议替换为：系统架构图 / 实物图
- `public/images/proof/cpp-note.svg`
  - 建议替换为：学习笔记图 / 性能结果图

## 联系方式与外链

修改文件：`src/data/profile.ts`

- `email`
- `github`
- `gitee`
- `xiaohongshu`

## 生产站点域名

如部署到 Vercel，请在项目环境变量中设置：

- `NEXT_PUBLIC_SITE_URL`

示例：

```txt
https://your-project-name.vercel.app
```
