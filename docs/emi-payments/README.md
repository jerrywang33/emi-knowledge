# EMI & Payments 文档

本目录保存 EMI 业务概念、流程与设计说明，以及牌照、电子货币和支付服务的监管专题文档，供人员和 Agent 阅读。V1.0 范围包括客户与账户、资金流转、支付、账务与对账，以及牌照与治理、资本、客户资金保护、电子货币发行与赎回、代理与分销、外包与跨境展业、SCA、欺诈、退款、投诉和报告。

## 文件组织

- 业务概念、流程和设计说明直接放在本目录，文件名使用业务主题的英文短名称。业务说明可以关联多个领域的知识对象，不要求与单个 Topic 一一对应。
- 计划中的领域全景文件为 `emi-payments-landscape.md`，用于说明领域范围、业务专题和相关法规之间的关系。
- 受控 Topic 的配套说明进入 [`topics/`](topics/README.md)，继续与 `knowledge/topics/emi-payments/` 中的 Manifest 一一对应。
- 来源基线和逐专题来源复核统一保存在 [`docs/sources/`](../sources/)。法规结论引用知识对象，避免在业务文档中单独维护另一套规则。

## 首批业务专题

| 专题 | 说明内容 |
| --- | --- |
| 客户与账户 | 客户、账户和钱包的概念与关系；开户、启用、限制和关闭的步骤、记录及异常。 |
| 电子货币与资金流转 | 充值、发行、支付和赎回的过程；客户余额、业务记录与外部资金的对应关系。 |
| [支付处理与异常](payment-processing-and-exceptions.md) | 普通 SCT 集中审阅稿；正常流程、异常与记录建议、10 个案例回答和缺口清单。作者自查已完成，待维护者审阅。 |
| [账务与对账](accounting-and-reconciliation.md) | 订单、分录、明细账、总账和外部流水的关系；完整性、匹配、余额、差异与更正，附 8 个案例及作者检查记录。待维护者审阅。 |

## 业务说明的内容

每份业务说明包含以下内容，深度由已确认的业务范围决定：

1. **范围与状态**：适用产品、渠道、参与机构、地区、来源版本、审查状态和排除项。
2. **概念与参与方**：术语含义、角色职责及相互关系。
3. **正常流程**：每一步的输入、动作、输出、状态和需要保留的记录。
4. **资金与记录关系**：说明业务状态、余额、账务和外部记录如何对应，列出仍待确认的时点与处理方式。
5. **异常处理**：异常如何发现，哪些事实需要查询或核实，有哪些处理选择、限制、授权和后续检查。
6. **相关要求**：引用相关领域的 Requirement、Control、Verification 和适用 Decision，保留适用条件。
7. **依据与待确认问题**：区分来源事实、通用解释、设计建议和已确认规则，记录假设、取舍及未解决的问题。

业务概念和流程可以先用 Markdown 讲清楚，正文不要求逐段拆成知识对象。涉及监管义务的结论使用经过复核的权威来源；涉及具体渠道行为的说明核对对应官方规则或公开接口文档。缺少依据的内容保持待确认，不推定统一的支付状态、记账时点、重试或退款规则。

`skills/` 引用这些说明组织专家任务步骤，`templates/` 定义输入与输出格式，`scenarios/` 使用具体案例检验理解和组合结果。实际机构规则、客户数据和运行记录保存在私有环境。

## 当前状态与顺序

四个业务专题的范围已确认，“支付处理与异常”和“账务与对账”已形成待集中审阅的说明。正文区分来源说明、工程建议和待确认事项；DORA 引用继续使用固定 `v0.3.0`，不因新增业务说明扩大已批准控制的范围。

| 文件 | 职责与当前版本 |
| --- | --- |
| [payment-processing-and-exceptions.md](payment-processing-and-exceptions.md) | 业务说明修订 2；保存流程、异常、工程建议和唯一的 SCT-Q1 至 SCT-Q6 缺口清单。 |
| [payment-processing-and-exceptions-cases.md](payment-processing-and-exceptions-cases.md) | 案例记录修订 1；保存 10 个案例回答、正文修改原因和作者文档检查结果，不作为独立验收记录。 |
| [emi-payments-sct-source-review.md](../sources/emi-payments-sct-source-review.md) | 来源记录 R2；保存官方文件、版本、章节、PDF 摘要、核对范围和来源缺口。 |
| [accounting-and-reconciliation.md](accounting-and-reconciliation.md) | 账务与对账修订 1；说明记录、余额、对账流程和差异，维护 RECON-Q1 至 RECON-Q6。 |
| [accounting-and-reconciliation-cases.md](accounting-and-reconciliation-cases.md) | 案例记录修订 1；保存 8 个案例回答、5 组可复算的合成数值与作者检查结果。 |
| [emi-payments-reconciliation-source-review.md](../sources/emi-payments-reconciliation-source-review.md) | 来源记录 R1；保存 EPC 客户报告和 ACCA 教学资料的身份、范围、限制及所沿用的固定输入。 |

普通 SCT 修订 2 与原案例、来源记录保持不变。账务与对账本轮完成写作、8 个案例的作者文本检查和 5 组数值复算；两份说明均待集中审阅。维护者批准、独立人员或 Agent 使用检查，以及真实渠道和账务验证仍未完成，不能以文档或算术检查代替。

客户与账户、电子货币与资金流转尚未开始；后续业务专题、渠道校准和其他领域的实施顺序另行安排。当前计划和输入见 [V1.0 Roadmap](../../roadmap/v1.0/README.md)。

当前尚无已批准的 EMI & Payments Topic，业务说明不进入现有 JSON 发布。监管全景与受控专题仍按其范围完成 EMD2、PSD2、Malta Financial Institutions Act/FIR 及相关迁移状态的来源复核后建设。
