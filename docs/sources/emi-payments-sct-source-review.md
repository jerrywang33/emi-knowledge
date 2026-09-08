# 普通 SEPA 转账业务说明：来源核对记录

| 项目 | 值 |
| --- | --- |
| 记录标识 | `EMI-PAYMENTS-SCT-SOURCES-2026-09-08-R1` |
| 核对日期 | 2026-09-08 |
| 状态 | Agent 已核对下列文件身份及指定章节，待维护者复核 |
| 适用范围 | [支付处理与异常](../emi-payments/payment-processing-and-exceptions.md)的普通 SCT 学习样例 |
| 工作语言 | English；业务说明为中文转述与工程建议 |

本次用户确认的是学习范围。来源核对不构成对具体 EMI 的方案参与资格、监管适用性、合同或生产实现的批准。以下编号用于本记录内定位，尚未登记为正式 Source 或 Topic 对象。

## 1. 来源清单

| 编号 | 官方来源与版本 | 本轮检查范围 | 使用边界 |
| --- | --- | --- | --- |
| S0 | [EPC SCT 当前规则入口](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) | 当前版本说明与配套文件链接 | 官方网页，用于核对版本；网页会更新。 |
| S1 | [EPC125-05：2025 SCT Rulebook v1.1](https://www.europeanpaymentscouncil.eu/document-library/rulebooks/2025-sepa-credit-transfer-rulebook-version-11) | 1.4、1.5；第 3 章；4.2、4.3、4.4 | EPC 方案规则。正文日期和生效日期均为 2025-10-05；网页版本栏为 2025-10-06，分别记录。 |
| S2 | [EPC135-18：SCT R-transactions 原因码指引 v6.0](https://www.europeanpaymentscouncil.eu/document-library/guidance-documents/guidance-reason-codes-sepa-credit-transfer-r-transactions) | 第 1、2 节；第 3 节的原因码表结构与使用限制 | EPC 原因码指引，发布日期 2024-11-28；官网说明覆盖 2025 SCT 规则。未逐项建立原因码映射。 |
| S3 | [EPC131-17：SCT / SCT Inst Clarification Paper v4.0](https://www.europeanpaymentscouncil.eu/document-library/guidance-documents/clarification-paper-sepa-credit-transfer-and-sepa-instant) | 2.9；3.1、3.2 | EPC 补充说明，本轮只使用 SCT 相关内容。PDF 日期 2025-10-05，网页版本栏为 2025-10-06。 |
| S4 | [EPC115-06：2025 SCT Inter-PSP IG v1.0](https://www.europeanpaymentscouncil.eu/document-library/implementation-guidelines/sepa-credit-transfer-inter-psp-implementation-1) | 仅核对官方入口与版本说明 | 已定位，尚未逐字段复核；不能据此宣称 ISO 20022 接口映射已完成。 |

S0 在核对日列示的当前规则为 2025 SCT Rulebook v1.1。S1 的 1.4、1.5 节分别说明参与者承诺遵守方案规则，以及方案与基础设施的区分。因此本样例不指定具体清算设施，也不把 EPC 规则直接标成欧盟法规。

## 2. 本次读取文件的摘要

摘要由官方 PDF 的完整下载字节计算，供后续核对来源是否变化。只保存链接、摘要和必要转述，PDF 全文未提交到仓库。文件摘要证明本次读取的字节身份，审查结论另行记录。

| 文件 | 字节数 | SHA-256 |
| --- | ---: | --- |
| [S1 PDF](https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2025-09/EPC125-05%202025%20SCT%20Rulebook%20version%201.1.pdf) | 1768537 | `2440a89b09fc8799fe6d5cb7a065577c2cf9166d947dfa5550e5e8c2b1c354ea` |
| [S2 PDF](https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2024-11/EPC135-18%20v6.0%20Guidance%20on%20Reason%20Codes%20for%20SCT%20R-transactions.pdf) | 421150 | `42450af5cdb176dc814be58505458df1b2568b780b6fac755ddb39d9779d2ea5` |
| [S3 PDF](https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2025-10/EPC131-17%20v4.0%20Clarification%20Paper%20SCT%20and%20SCT%20Inst%20scheme%20rulebooks.pdf) | 779856 | `5942a0a2fc4b2374f7e2dc2cac98ef63406b8ecde739849b44920a83c0c090ec` |

## 3. 正文与来源的对应关系

页码采用 PDF 阅读器从 1 开始的页序。

| 正文内容 | 主要定位 | 核对结果 |
| --- | --- | --- |
| 角色、PSP 和清算接入的区别 | S1 第 3 章，pp. 23-25 | 已阅读；机构实际扮演的角色待确认。 |
| 普通处理流程 | S1 4.3.1，pp. 28-29 | 已阅读；不据此定义某家 PSP 的 API 或内部账务科目。 |
| Reject 与 Return | S1 4.3.2.1、4.3.2.2，pp. 29-30 | 已阅读；正文只做流程区别，不提供完整时限计算。 |
| Recall 与 RFRO | S1 4.3.2.3、4.3.2.4，pp. 31-37；S3 2.9，pp. 11-12 | 已阅读；不同发起条件、答复和资金结果需要分别处理。 |
| SCT Inquiry | S1 4.4，pp. 38-43；S3 3.2，pp. 17-19 | 已阅读与正文有关的未到账调查、答复说明；费用与补偿未纳入。 |
| 收款后自愿转回 | S3 3.1，p. 17 | 已阅读；正文与 Return、Recall 答复分别说明。 |
| 原因码解释 | S2 第 1-3 节，pp. 2-4 | 已阅读用途、表结构和限制；完整代码表复核留待后续。 |
| 超时、幂等、记录关联和修复建议 | 本仓库作者的工程分析 | 单独标为建议；需要实际渠道契约和测试验证。 |

## 4. 本轮未完成的工作

- 维护者对本记录和业务说明的逐节复核。
- EMD2、PSD2、SEPA Regulation 及其修订、Malta 规则的专题适用性复核；包括 SCA、收款人验证（VoP）、授权、执行时限与退款责任等边界。
- AML/CFT、制裁、资金转移信息、数据保护和客户资金保护的完整交叉映射。
- 具体 PSP、方案参与方式、清算接入、接口状态、原因码及消息字段的逐项映射。
- 截止时间、营业日历、费用和各类异常时限的可执行规则；缺少这些内容不能用于生产时限判断。
- 将新增 EPC 来源及要求纳入六类知识对象、批准 Topic 和固定发布。

后续发现来源更新时增加新核对记录，保留本次文件摘要和所依据的章节；不覆盖历史发布。当前业务说明仍为待审查草案。
