# Docs 目录

本目录保存人员可读的知识说明和治理记录。机器可读事实保存在 [`knowledge/`](../knowledge/README.md)，固定发布保存在 [`releases/`](../releases/)；文档不能绕过知识对象状态直接成为产品规则。

## 目录职责

| 目录 | 内容 |
| --- | --- |
| [`emi-payments/`](emi-payments/README.md) | EMI 牌照、电子货币和支付服务领域地图与专题说明。 |
| [`dora/`](dora/README.md) | DORA 领域地图及已建设专题说明。 |
| [`gdpr/`](gdpr/README.md) | GDPR 和 Malta 数据保护领域地图与专题说明。 |
| [`aml-cft/`](aml-cft/README.md) | AML/CFT 领域地图与专题说明。 |
| [`restrictive-measures/`](restrictive-measures/README.md) | Restrictive Measures 领域地图与专题说明。 |
| [`sources/`](sources/) | 权威来源基线和逐专题来源复核，记录版本、效力、日期、文件关系和未决问题。 |
| [`decisions/`](decisions/) | 仓库级设计决定；文件使用四位编号和短名称，例如 `0003-working-knowledge-and-frozen-releases.md`。 |
| [`model/`](model/) | 知识对象、Topic、Skill、模板或场景模型的人员说明。 |
| [`releases/`](releases/) | 每个固定版本的范围、统计、摘要、复现命令、限制和发布结论。 |
| [`acceptance/`](acceptance/) | 人员、Agent、产品和跨领域场景的独立工程验收记录。 |

## 文件规则

- 领域全景文件使用 `<domain>-landscape.md`，说明法规结构、主题、适用路径和覆盖状态。
- 专题说明使用 `<domain>/topics/<topic>.md`，并与 `knowledge/topics/<domain>/<topic>.yaml` 使用相同文件主名。
- 来源基线使用 `<domain>-source-baseline.md`；专题增量复核使用 `<domain>-<topic>-source-review.md`。
- 发布和验收文件使用完整发布版本 `vMAJOR.MINOR.PATCH.md`。
- 历史发布已经固定的文件路径和内容不移动；新文件遵循当前规则增量创建。

法规事实、工程推导和待确认内容必须分开表达。专题说明只能引用经过复核的来源，不能替代 Source、Provision、Requirement、Control 或 Verification 对象。
