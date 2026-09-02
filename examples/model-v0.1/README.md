# v0.1 知识模型示例

本目录用于检查 `KNOWLEDGE-MODEL-V0.1-RC1` 和 [JSON Schema](../../schemas/v0.1/knowledge-object.schema.json) 的表达能力。每个 JSON 文件保存一个对象，内容覆盖六类核心对象和以下三项 ICT 变更管理要求：

1. Regulation (EU) 2024/1774 Article 17(1)(a)：验证 ICT 安全要求是否得到满足。
2. Regulation (EU) 2024/1774 Article 17(1)(b)：保持变更批准职能与申请、实施职能独立。
3. Regulation (EU) 2024/1774 Article 17(1)(g)：紧急变更实施后完成记录、重新评估、评定和批准。

Article 17(1)(b) 进一步关联一个实施决定、一个控制和一个验证对象，用来检查从来源到证据要求的完整关系。Article 17(1)(a) 和 (g) 当前只检查 `Requirement` 的拆分与适用范围表达。

这些文件属于模型夹具，不进入知识发布。法规摘要、工程控制和适用范围需要在第 5 步重新审查后才能成为正式知识候选内容。

## 对象清单

```text
sources/
  src-eu-reg-2022-2554.json
  src-eu-reg-2024-1774.json
provisions/
  prv-eu-reg-2022-2554-art-64-2.json
  prv-eu-reg-2024-1774-art-17-1.json
  prv-eu-reg-2024-1774-art-17-1-a.json
  prv-eu-reg-2024-1774-art-17-1-b.json
  prv-eu-reg-2024-1774-art-17-1-g.json
requirements/
  req-change-security-requirements-verification.json
  req-change-approval-independence.json
  req-emergency-change-post-implementation-review.json
decisions/
  dec-change-role-separation-baseline.json
controls/
  ctl-change-role-separation.json
verifications/
  ver-change-role-separation.json
```
