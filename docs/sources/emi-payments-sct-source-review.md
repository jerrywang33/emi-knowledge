# 普通 SEPA 转账业务说明：来源核对记录

| 项目 | 值 |
| --- | --- |
| 记录标识 | `EMI-PAYMENTS-SCT-SOURCES-2026-09-08-R2` |
| 核对日期 | 2026-09-08 |
| 状态 | Agent 已复查指定章节和 PDF 摘要，待维护者集中复核；未批准 |
| 适用范围 | [支付处理与异常](../emi-payments/payment-processing-and-exceptions.md)的普通 SCT 学习样例 |
| 工作语言 | English；业务说明为中文转述与工程建议 |

本次用户确认的是学习范围。来源核对不构成对具体 EMI 的方案参与资格、监管适用性、合同或生产实现的批准。以下编号用于本记录内定位，尚未登记为正式 Source 或 Topic 对象。

R2 配套业务说明修订 2；R1 及初稿保留在 Git 提交 `f3993f1`。本轮来源文件未变化，补充阅读范围与转述随本记录升版，人工审阅状态仍为待审阅。

## 1. 来源清单

| 编号 | 官方来源与版本 | 本轮检查范围 | 使用边界 |
| --- | --- | --- | --- |
| S0 | [EPC SCT 当前规则入口](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) | 当前版本说明与配套文件链接 | 官方网页，用于核对版本；网页会更新。 |
| S1 | [EPC125-05：2025 SCT Rulebook v1.1](https://www.europeanpaymentscouncil.eu/document-library/rulebooks/2025-sepa-credit-transfer-rulebook-version-11) | 1.4、1.5；第 3 章；4.2、4.3、4.4 | EPC 方案规则。正文日期和生效日期均为 2025-10-05；网页版本栏为 2025-10-06，分别记录。 |
| S2 | [EPC135-18：SCT R-transactions 原因码指引 v6.0](https://www.europeanpaymentscouncil.eu/document-library/guidance-documents/guidance-reason-codes-sepa-credit-transfer-r-transactions) | 第 1、2 节；第 3 节的原因码表结构与使用限制 | EPC 原因码指引，发布日期 2024-11-28；官网说明覆盖 2025 SCT 规则。未逐项建立原因码映射。 |
| S3 | [EPC131-17：SCT / SCT Inst Clarification Paper v4.0](https://www.europeanpaymentscouncil.eu/document-library/guidance-documents/clarification-paper-sepa-credit-transfer-and-sepa-instant) | 2.9-2.12；3.1、3.2 | EPC 补充说明，本轮只使用 SCT 相关内容。PDF 日期 2025-10-05，网页版本栏为 2025-10-06。2.10 仅用于识别客户退款与召回取回的区别，不代替 PSD2 专题审查。 |
| S4 | [EPC115-06：2025 SCT Inter-PSP IG v1.0](https://www.europeanpaymentscouncil.eu/document-library/implementation-guidelines/sepa-credit-transfer-inter-psp-implementation-1) | 仅核对官方入口与版本说明 | 已定位，尚未逐字段复核；不能据此宣称 ISO 20022 接口映射已完成。 |

S0 在核对日列示的当前规则为 2025 SCT Rulebook v1.1。S1 的 1.4、1.5 节分别说明参与者承诺遵守方案规则，以及方案与基础设施的区分。因此本样例不指定具体清算设施，也不把 EPC 规则直接标成欧盟法规。

## 2. 本次读取文件的摘要

摘要由官方 PDF 的完整下载字节计算，供后续核对来源是否变化。只保存链接、摘要和必要转述，PDF 全文未提交到仓库。文件摘要证明本次读取的字节身份，审查结论另行记录。

R2 于核对日重新获取 S1、S2、S3 的官方 PDF，在内存中检查 PDF 文件头并计算 SHA-256；字节数及摘要与 R1 一致。正文复查使用下表文件，未把官网“当前版本”声明当作对其他日期的保证。

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
| Recall 与 RFRO | S1 4.3.2.3、4.3.2.4，pp. 31-37；S3 2.9，pp. 11-13 | 已复查；正文补充重复发起限制、原交易回溯条件和无答复跟进。 |
| Recall / RFRO 起算与跟进 | S3 2.11、2.12，pp. 13-14；S1 4.3.2.3、4.3.2.4 | 已阅读；区分原交易执行日、扣款日与收款方 PSP 收到请求的时间；未实现营业日历、时区或截止时间计算。状态查询的 ISO 消息名已定位，未建立字段映射。 |
| 客户退款与渠道取回 | S3 2.10，p. 13 | 已阅读先行退款背景；正文提示分别记录，未将 PSD2 的摘引扩展成机构退款时限、例外或科目规则。 |
| SCT Inquiry | S1 4.4，pp. 38-43；S3 3.2，pp. 17-19 | 已阅读与正文有关的未到账调查、答复说明；费用与补偿未纳入。 |
| 收款后自愿转回 | S3 3.1，p. 17 | 已阅读；正文与 Return、Recall 答复分别说明。 |
| 原因码解释 | S2 第 1-3 节，pp. 2-4 | 已阅读用途、表结构和限制；完整代码表复核留待后续。 |
| 超时、幂等、记录关联和修复建议 | 本仓库作者的工程分析 | 单独标为建议；需要实际渠道契约和测试验证。 |

## 4. 本轮检查结论与缺口

作者已对照所列章节检查业务说明中的角色、异常区别和新增召回跟进说明；10 个合成案例的回答及修改记录见[案例与文档检查结果](../emi-payments/payment-processing-and-exceptions-cases.md)。该记录由同一作者 Agent 编写，不构成独立审阅或外部系统测试。

以下公开知识工作仍可继续开展，不需要先取得机构私有资料：

- EMD2、PSD2、SEPA Regulation 及其修订、Malta 规则的版本与一般适用条件的来源复核；包括 SCA、收款人验证（VoP）、授权、执行时限与退款责任等边界。
- AML/CFT、制裁、资金转移信息、数据保护和客户资金保护的完整交叉映射。
- EPC 接口指引与完整原因码映射，以及正常执行、Reject、Return、Inquiry 和费用的详细来源整理。本轮只补充与案例直接相关的 Recall / RFRO 条件。
- 普通 SCT 正式知识链的范围设计、六类对象建模和发布检查方案。

以下工作需要机构或维护者输入：

- 维护者对本记录、业务说明修订 2 和案例记录的集中审阅；用户暂停逐节走读不表示已批准这些内容。
- 实际产品、PSP、参与与接入安排，以及所用渠道公开和私有契约的版本选择。
- 科目与记账时点、客户责任、权限、营业日历、截止时间、费用和客户沟通等机构规则；公开来源不能替机构作出选择。
- 独立使用检查、真实渠道验证和最终发布批准。缺少这些内容不能用于生产判断。

后续发现来源更新时增加新核对记录，保留本次文件摘要和所依据的章节；不覆盖历史发布。当前交付为待集中审阅的业务说明，固定发布继续为 `v0.3.0`。
