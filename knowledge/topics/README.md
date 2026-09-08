# Topic 目录

本目录按独立知识链保存 Topic Manifest。Topic 用入口 Requirement 和补充上下文对象组合全局知识对象，并记录范围、来源复核、覆盖状态和待确认问题。

| 目录 | 知识链 |
| --- | --- |
| [`emi-payments/`](emi-payments/README.md) | EMI 牌照、电子货币和支付服务。 |
| [`dora/`](dora/README.md) | DORA 数字运营韧性。 |
| [`gdpr/`](gdpr/README.md) | GDPR 和 Malta 数据保护。 |
| [`aml-cft/`](aml-cft/README.md) | AML/CFT。 |
| [`restrictive-measures/`](restrictive-measures/README.md) | 欧盟和 Malta Restrictive Measures。 |

Manifest 路径使用 `<domain>/<topic>.yaml`，对象 `id` 使用 `<domain>-<topic>`。`domain`、目录名和 ID 前缀必须一致。领域 README 只说明边界，不参与 Topic 解析；YAML 文件必须通过 Topic Schema、引用、批准状态和知识链完整性检查。
