# Knowledge objects using schema v0.1

本目录保存遵循 EMI Knowledge Schema `0.1.0` 的受控知识对象。对象按 `Source`、`Provision`、`Requirement`、`Decision`、`Control` 和 `Verification` 六种类型保存，通过稳定 ID 建立关系；专题范围由 [`knowledge/topics/`](../topics/) 中的清单选择。

当前目录中的首批已批准对象形成 DORA ICT 变更管理完整知识链，并已经固定在 `v0.1.0` 发布中。DORA ICT 事件管理、分类与监管报告对象在同一模型版本目录继续增加，发布版本通过 Topic 和 Release Manifest 显式选择对象。

## ICT 变更管理路径

| 路径 | EMI 条件 | 主要来源 |
| --- | --- | --- |
| 完整框架 | 未依据 Directive 2009/110/EC Article 9 获得豁免的 EMI | DORA Article 9(4)(e)；Regulation (EU) 2024/1774 Article 17(1) |
| 简化框架 | 依据 Directive 2009/110/EC Article 9 获得豁免的 EMI | DORA Article 16；Regulation (EU) 2024/1774 Articles 31、36、37 和 38 |

知识对象使用 `Source`、`Provision`、`Requirement`、`Decision`、`Control` 和 `Verification` 六种类型，字段规范见 [v0.1 知识模型](../../docs/model/v0.1-knowledge-model.md)。所有对象都必须通过 [JSON Schema](../../schemas/v0.1/knowledge-object.schema.json) 和跨对象校验后才能进入发布候选。

## 内容清单

| 对象 | 数量 | 当前内容 |
| --- | ---: | --- |
| Source | 10 | `v0.1.0` 的 3 个来源，以及事件专题新增的分类、报告、ESA 指引和 Malta 固定流程来源。 |
| Provision | 20 | EMI 范围、完整框架、简化框架、适用日期及主管机关说明定位。 |
| Requirement | 15 | 完整框架 11 项，简化框架 4 项。 |
| Decision | 3 | 通用工程控制采用的实施选择及其前提。 |
| Control | 8 | 治理、生命周期、安全测试、职责分离、计划记录、回退恢复、紧急变更和安全影响。 |
| Verification | 8 | 每个控制对应的检查方法，以及合计 16 个证据模板。 |

当前工作目录包含 64 个对象和 160 条受控关系。`v0.1.0` 固定知识图仍为 57 个对象和 147 条关系，其中 15 项 Requirement 均有 Control 承接，8 项 Control 均有 Verification 检查。MFSA 内容只以 `supporting_context` 关系提供主管机关说明背景，欧盟法律文件继续作为要求的直接依据。

当前目录允许保存其他专题正在建设的对象。仓库级校验负责对象本身和引用关系；完整链在已批准 Topic 及发布候选中检查。具体边界见 [Decision 0003](../../docs/decisions/0003-working-knowledge-and-frozen-releases.md)。

## 使用边界

本目录提供公开工程基线。具体 EMI 是否获得豁免、机构采用哪些系统和角色、参数取值、证据保存期限及风险接受决定需要在私有机构知识层确认。`lifecycle_status: approved` 表示对象完成工程审查，可以进入当前工程发布；该状态不构成法律意见、机构适用性决定或合规认证。
