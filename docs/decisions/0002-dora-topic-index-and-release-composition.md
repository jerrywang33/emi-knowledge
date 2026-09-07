# Decision 0002：DORA 专题清单与组合发布

- 状态：已接受
- 接受日期：2026-09-07
- 适用范围：EMI Knowledge `v0.2` 及后续多专题建设

## 背景

`v0.1.0` 只包含 ICT 变更管理专题，六类知识对象直接保存在 `knowledge/v0.1/` 的类型目录中。第二个 DORA 专题加入后，需要明确每个专题的范围、建设状态和入口对象，同时保留来源、条款和控制在多个专题之间复用的能力。

知识对象已经通过稳定 ID 建立关系。按专题复制 Source、Provision 或 Control 会产生多个内容副本，后续修订容易出现差异。把所有对象移动到专题子目录也会让跨专题对象只能选择一个目录归属。

## 决定

1. `Source`、`Provision`、`Requirement`、`Decision`、`Control` 和 `Verification` 六类核心对象保持不变。
2. 知识对象继续保存在 `knowledge/v0.1/{type}/<id>.yaml`。`v0.1` 表示当前知识模型和 Schema 版本；对象修订号和发布版本继续独立管理。
3. 新增 `knowledge/topics/<domain>/<topic-id>.yaml`。专题清单记录范围、入口 Requirement、补充上下文对象和建设状态。
4. 专题清单通过稳定 ID 引用知识对象。发布工具从入口 Requirement 沿知识图解析 Source、Provision、Decision、Control 和 Verification；共享对象只保存一次。
5. 人员阅读材料保存在 `docs/<domain>/topics/`，说明来源边界、覆盖矩阵、拆分方法和待确认问题。Markdown 不承担机器选择发布内容的职责。
6. 每个发布版本明确选择一个或多个专题，并在 Manifest 中固定专题清单、对象修订和文件摘要。
7. `releases/v0.1.0/` 和 Git tag `v0.1.0` 保持冻结。第二专题完成后形成新的 `v0.2.0` 发布。

专题清单字段、批准条件和解析规则见 [v0.1 专题清单模型](../model/v0.1-topic-manifest.md)。`v0.2` 发布制品使用独立的 [release artifact Schema](../../schemas/v0.2/release-artifact.schema.json)，保留 `v0.1.0` 使用的 Schema 与生成结果。

## 目录

```text
knowledge/
  README.md
  topics/
    dora/
      ict-change-management.yaml
      ict-incident-management-reporting.yaml
  v0.1/
    sources/
    provisions/
    requirements/
    decisions/
    controls/
    verifications/

docs/
  dora/
    topics/
      ict-change-management.md
      ict-incident-management-reporting.md

roadmap/
  README.md
  v0.2-dora-ict-incidents.md
```

## 约束

- 专题清单不成为第七类核心知识对象，也不进入法规知识图的事实关系。
- 对象文件路径继续由对象类型和稳定 ID 决定，专题归属不写入路径。
- 一个 Requirement 可以作为多个专题入口，一个 Source、Provision、Decision、Control 或 Verification 可以被多个专题解析得到。
- 草稿专题可以尚未包含入口 Requirement；进入发布候选前必须至少包含一个入口 Requirement，并通过完整知识链检查。
- 专题说明、Roadmap 和发布清单不得填充未经机构确认的适用性、时限解释或内部处理参数。

## 结果

该结构保持现有知识模型稳定，并为多专题选择、覆盖检查和组合发布提供明确入口。新增专题需要增加一份清单和对应知识对象；共享内容继续通过已有稳定 ID 复用。
