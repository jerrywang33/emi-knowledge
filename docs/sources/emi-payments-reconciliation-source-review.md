# 账务与对账：来源核对记录

| 项目 | 值 |
| --- | --- |
| 记录标识 | `EMI-PAYMENTS-RECON-SOURCES-2026-09-08-R1` |
| 核对日期 | 2026-09-08 |
| 状态 | 作者 Agent 已阅读指定范围，待维护者审阅，未批准 |
| 适用说明 | [账务与对账](../emi-payments/accounting-and-reconciliation.md)修订 1 |
| 工作语言 | English 来源，中文解释与工程建议 |

本轮来源用于业务学习及工程设计讨论。没有选择具体 EMI 的会计准则、账单协议、科目或记账时点；未建立正式知识对象或机构适用结论。以下编号仅在本记录内使用。

## 1. 公开来源

| 编号 | 来源与身份 | 已阅读范围 | 使用限制 |
| --- | --- | --- | --- |
| R1 | [EPC188-09 v5.0：客户报告建议](https://www.europeanpaymentscouncil.eu/document-library/guidance-documents/epc-recommendation-iso-20022-customer-reporting-scts-oct-inst) | 官方版本页；PDF 第 0、1 节，2.1 的开头及金额、引用、日期条目 | 只用于报告层次及范围说明，不提供完整消息映射或渠道契约。 |
| R2 | [ACCA：Computerised accounting systems - rationale for change](https://www.accaglobal.com/gb/en/student/exam-support-resources/foundation-level-study-resources/fa1/technical-articles/computerised-accounting-system.html) | 软件中的复式记账、分录、明细账户与总账、外部核对等段落 | 会计专业组织的教学材料，采用 2023 年起的考试背景；其集成或实时更新假设不适用于所有真实系统。 |
| R3 | [ACCA：Process for preparing financial statements](https://www.accaglobal.com/gb/en/student/exam-support-resources/foundation-level-study-resources/fa1/technical-articles/preparing-fin-statement.html) | 正文关于明细与外部来源核对、录入与时间差异、银行核对的说明，尤其第 3、4 点 | 教学流程，不采用其银行未集成等考试前提，也不代替 IFRS 或 Malta 会计要求。 |

R1 的官方版本页标注 v5.0、2025-04-25，生效日期为 2025-10-05。PDF 提取文本的首页页眉包含 2025-04-24，标题版本行及后续页眉为 2025-04-25；本记录保留该文本差异，不自行修正原文件。截图工具本轮未成功取得首页，未将文本核对表述为版面核验。

R2、R3 网页未见独立版本号或明确发布日期。本轮按 URL、标题、正文定位和核对日记录，不把页面导航中其他文章的日期当作本文日期。另行获取官方 HTML，确认包含相关正文并计算响应摘要；摘要包括导航等内容，不能当作正文版本号。网页全文未保存，正式知识链建设前仍需确定可恢复的来源版本保存方式。

| HTML 输入 | 字节数 | SHA-256 |
| --- | ---: | --- |
| R2 完整 HTML 响应 | 127836 | `aaa542714df95ce5cfb4bd60e2112637192329cdc19f86b947dc1aae0f5d6f1c` |
| R3 完整 HTML 响应 | 122922 | `5ccd69708a15a60808199c3d0d93bdc1c46dfbb9e1af2335d9e5dda353729760` |

## 2. PDF 身份与定位

R1 从官方 URL 完整获取，在内存中检查 PDF 文件头并计算 SHA-256。PDF 全文未保存到仓库。

| 文件 | 字节数 | SHA-256 |
| --- | ---: | --- |
| [EPC188-09 v5.0 PDF](https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2025-04/EPC188-09%20v5.0%20Recommendation%20on%20Customer%20Reporting%20SCTs%2C%20OCT%20Inst%20and%20SDDs.pdf) | 1197519 | `76c70c0c5b5f246e5345b243ad371738f8b34b39eb854accf59e1e5d95c5c53a` |

页码采用 PDF 阅读器从 1 开始的页序。

| 定位 | 核对结果 |
| --- | --- |
| 第 0、1.1 节，pp. 3-4 | 材料限于收款侧报告，未覆盖付款人侧、R-transactions 或 Inquiry；不能用来宣布出款对账接口已设计完成。 |
| 第 1.1 节，p. 4 | 文中列出 camt.052.001.08、camt.053.001.08、camt.054.001.08；本轮未声称它们是所有渠道的当前或强制版本。 |
| 第 1.2、2.1 节开头，pp. 4-5 | 材料是属性映射建议，报告层次和汇总展示与服务商及客户约定相关。 |
| 第 2.1 节，pp. 6、10-11 | 阅读金额、付款人引用、付款方 PSP 引用及结算日期的示例定位；未逐字段验证完整 camt 消息。 |

## 3. 沿用的仓库输入

| 输入 | 固定依据 | 引用边界 |
| --- | --- | --- |
| [支付处理与异常](../emi-payments/payment-processing-and-exceptions.md)修订 2 | Git `67d8c2f5c092b5ed9ca475b92a56ede022b28280`；SHA-256 `4521dab6dd1f12ea3e715bd0fbdc417a5a1d125453fde2853e495806f34099f6` | 沿用订单、事件、账务关联，以及客户退款和渠道取回的区别；仍为待维护者审阅的作者说明。 |
| [SCT 来源记录 R2](emi-payments-sct-source-review.md) | 同一提交；SHA-256 `00657ccadfcd2b17eadecdffcbd39d00e18f6e1f0e950d4846654a70c46a14db` | 可追溯原 EPC 文件与阅读范围；本轮不改写该记录或继承不存在的人工批准。 |
| 三个恢复完整性对象 | 固定 [`v0.3.0`](../../releases/v0.3.0/knowledge.json)，修订均为 1，标识见业务说明第 8 节 | 保留完整 ICT 风险框架和事件恢复场景条件；不作为日常对账或客户资金保护的通用法律依据。 |

本稿的去重、批次、差异分类、余额复算及更正流程属于作者工程分析，缺少具体渠道、财务规则和测试时不推定统一实现。来源材料也没有批准本文的 8 个合成案例。

## 4. 未完成的来源工作

- 维护者对来源、业务说明和案例的审阅，以及独立人员或 Agent 使用检查。
- 适用会计准则、Malta 会计要求、电子货币与客户资金保护要求的专题来源审查；不从日常对账推导资金保护足额结论。
- 实际银行或 PSP 的报告版本、账户视角、币种精度、时间口径、分页、更正、费用及完整性协议。
- camt 消息的完整字段与语义映射、付款人侧及 R-transactions 报告、其他币种和换汇处理。
- 机构对账频率、容差、账期、权限、数据保留、客户责任及核销规则。
- 网页来源版本固定、正式六类知识对象、受控 Topic 与发布方案。

本轮只保存公开资料定位、必要转述和自建案例；不复制教材、完整标准或真实账单。固定知识发布继续为 `v0.3.0`。
