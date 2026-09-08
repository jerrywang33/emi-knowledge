# Knowledge 目录

本目录保存 EMI Knowledge 的机器可读内容。核心知识对象与专题清单分开维护：

```text
knowledge/
  topics/
    emi-payments/
    dora/
      ict-change-management.yaml
      ict-incident-management-reporting.yaml
      ict-business-continuity-backup-recovery.yaml
    gdpr/
    aml-cft/
    restrictive-measures/
  v0.1/
    sources/
    provisions/
    requirements/
    decisions/
    controls/
    verifications/
```

## 核心知识对象

`v0.1/` 表示当前知识模型和 Schema 版本。六类对象按照类型保存，并通过稳定 ID 建立关系：

```text
Source <- Provision <- Requirement <- Control <- Verification
                              ^             ^
                              +-- Decision -+
```

同一对象只保存一份。对象修订号记录单项内容变化，Release Manifest 固定一次发布所使用的对象修订和文件摘要。

## 专题清单

`topics/<domain>/<topic-id>.yaml` 记录一个专题的范围、来源复核记录、入口 Requirement、补充上下文对象、覆盖状态和待确认问题。发布工具从入口 Requirement 沿知识关系解析专题所需对象。

专题清单用于选择和组合已有知识，不承载法规原文、监管要求或控制正文。草稿专题可以暂时没有入口 Requirement；进入发布候选前必须具有完整入口，并通过引用与知识链检查。

V1.0 使用五个 Topic 领域目录。Financial Crime 在产品范围中属于一个顶层领域，AML/CFT 与 Restrictive Measures 在知识层保持独立来源和处置链。

当前专题与目录状态：

| 领域或专题 | 状态 | 发布情况 |
| --- | --- | --- |
| EMI & Payments | 尚无 Topic | V1.0 规划范围 |
| DORA ICT 变更管理 | `approved` | 已进入 `v0.1.0`、`v0.2.0` 和 `v0.3.0` |
| DORA ICT 事件管理、分类与监管报告 | `approved` | 已进入 `v0.2.0` 和 `v0.3.0` |
| DORA ICT 业务连续性、备份与恢复 | `approved` | 已进入 `v0.3.0` |
| GDPR | 尚无 Topic | V1.0 规划范围 |
| AML/CFT | 尚无 Topic | V1.0 规划范围 |
| Restrictive Measures | 尚无 Topic | V1.0 规划范围 |

专题清单格式由 [`schemas/v0.1/topic-manifest.schema.json`](../schemas/v0.1/topic-manifest.schema.json) 校验，字段与对象解析方式见 [v0.1 专题清单模型](../docs/model/v0.1-topic-manifest.md)，目录与组合发布决定见 [Decision 0002](../docs/decisions/0002-dora-topic-index-and-release-composition.md)。

各领域目录中的 `README.md` 说明领域边界和当前状态，不进入 Topic 校验或发布。首个 Topic 只有在来源复核、范围和入口 Requirement 明确后才创建。
