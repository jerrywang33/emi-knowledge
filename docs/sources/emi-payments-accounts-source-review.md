# 客户与账户：来源核对记录

| 项目 | 值 |
| --- | --- |
| 记录标识 | `EMI-PAYMENTS-ACCOUNT-SOURCES-2026-09-08-R1` |
| 核对日期 | 2026-09-08 |
| 状态 | 作者已完成下述有限范围的资料读取；全文与适用性缺口保留，待维护者审阅，未批准 |
| 对应说明 | [客户与账户](../emi-payments/customers-and-accounts.md)，修订 1 |
| 使用范围 | EU 概念与远程开户工程讨论，拟用于 Malta EMI 学习；未完成具体机构或 Malta 实施审查 |

## 1. 材料与读取范围

| 编号 | 来源与版本 | 实际取得的内容 | 使用限制 |
| --- | --- | --- | --- |
| R1 | [EMD2，02009L0110-20180113](https://eur-lex.europa.eu/eli/dir/2009/110/2018-01-13/eng)，2018-01-13 合并文本 | EUR-Lex 官方页面的检索返回包含 Article 2(2) 定义及版本信息。 | 只转述电子货币定义要素；未完整下载、逐条复核或完成法律适用性判断。 |
| R2 | [PSD2，02015L2366-20250117](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02015L2366-20250117)，2025-01-17 合并文本 | 官方页面检索返回中的 Article 4(12) 和 Article 55(1)-(2)；另取得合并文本页的版本与修订信息。 | 只用于支付账户概念与合同终止事项的定位；不从部分条款给出完整关闭期限、费用或例外规则。 |
| R3 | [EBA/Rep/2024/08：Report on virtual IBANs](https://www.eba.europa.eu/sites/default/files/2024-05/612f03de-965a-4157-b638-1b4c5b081f87/EBA%20Report%20on%20virtual%20IBANs.pdf)，May 2024 | 完整取得 PDF，阅读首页、摘要、背景及第 2.1 节，PDF pp. 1-7。 | 2024 年的调查报告与建议，包含当时的解释分歧；不作为当前统一定义或某个商业模式已合法获准的证明。 |
| R4 | [EBA/GL/2022/15：远程客户开户指引最终报告](https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2022/EBA-GL-2022-15%20GL%20on%20remote%20customer%20onboarding/1043884/Guidelines%20on%20the%20use%20of%20Remote%20Customer%20Onboarding%20Solutions.pdf)，22/11/2022 | 完整取得 PDF；阅读封面、目录、背景及指引 pp. 9-18，重点为第 5-9、23-32 段。第 3 节列明 2023-10-02 开始适用。 | 指引面向其定义范围内的主管机关及信贷和金融机构，关注远程初始 CDD；本轮未完成完整 CDD、持续监控、外包及 Malta 实施核对。 |
| R5 | [GDPR，02016R0679-20160504](https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04)，2016-05-04 合并文本；另查[原法案 Article 17](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng/) | 官方页面检索返回的 Article 5、6、17 部分条款，包括删除条件及法律义务所必要处理的例外定位。 | 不声称读取完整条文、全部修订或例外；不指定保留期限，也未完成生物特征、自动化决定和成员国规则评估。 |

R1、R2、R5 的标准 HTML/PDF 请求多次返回访问验证页或 HTTP 202 空响应。上述“检索返回”指搜索工具从官方页面返回的可见条款内容，区别于完整下载原文。没有对空响应计算并保存为法规摘要，没有把检索片段标成全文复核通过。建立正式知识链前需要补齐可恢复的原始输入、完整上下文及现行状态核对。合并文本用于查阅，正式法律依据还需核对所关联的 Official Journal 法案及修订。

R3 的[发布说明](https://www.eba.europa.eu/publications-and-media/press-releases/eba-finds-divergences-issuance-and-regulation-virtual-ibans-across-eu-identifies-issues-and-provides)日期为 2024-05-24。报告第 2.1 节提到当时仍在推进的 AMLR；本轮仅使用其业务安排与风险观察，未将该历史时间状态复制为 2026 年结论。AMLR、PSD3/PSR 与相关实施材料的当前状态另行完整复核。

R4 的[EBA 资料页](https://www.eba.europa.eu/legacy/regulation-and-policy/regulatory-activities/anti-money-laundering-and-countering-financing-4)检索结果列出应用日期和合规表入口；本轮没有读取合规表，不能据此声称 Malta 主管机关已确认何种具体实施。PDF 的历史引用也不自动代表被引用文件今天仍按原范围适用。

## 2. PDF 身份与定位

两个 EBA PDF 经官方 URL 获取，在内存中校验文件头并计算完整响应 SHA-256，以 `pypdf` 提取指定页文字。未保存全文到仓库，未作页面布局或图示核验，也未阅读报告全部章节。

| 输入 | 字节数 | 页数 | SHA-256 |
| --- | ---: | ---: | --- |
| R3 vIBAN 报告 | 585401 | 30 | `a299d8a7c16234c3b48e6546dbc13da3329afe988dca1f8fdd42fa9b4a8fb45c` |
| R4 远程开户最终报告 | 416699 | 45 | `a8d23dd230bb95dd32a575165ab8829cfb16ad04c77eacb3d1a60b30532c0e0b` |

页码均为从 1 开始的 PDF 页序。

| 定位 | 支持本稿的有限内容 |
| --- | --- |
| R3 摘要 p. 3、第 2.1 节 pp. 6-7 | vIBAN 与主账户、实际持有人及最终使用者之间有不同安排，标识外观不能替代账户关系核实。未逐个评审六种业务模式。 |
| R4 指引范围和实施 pp. 10-11 | 远程开户、初始 CDD、适用机构及实施日期；不能当作所有账户状态的统一规范。 |
| R4 第 9 段 p. 12 | 政策明确可远程开户的客户和产品、自动与人工步骤、首笔交易前的初始 CDD 控制。 |
| R4 第 23-26 段 p. 16 | 识别材料、质量、中断和记录要求；不据此决定某家供应商已经满足要求。 |
| R4 第 29-32 段 p. 17 | 法人、代表的合法授权、受益所有人及业务关系目的的信息职责。 |

## 3. 与已有文档的关系

固定沿用 Git `41aa576` 中的[支付处理与异常修订 2](../emi-payments/payment-processing-and-exceptions.md)和[账务与对账修订 1](../emi-payments/accounting-and-reconciliation.md)，以及它们各自的来源和案例记录。本轮不修改这六份文件；它们的待审阅状态、检查输入摘要和未决事项继续有效，不继承任何不存在的人工批准。

本文的状态拆分、操作权限、重复申请、回调版本、限制解除、关闭任务和历史标识关联属于作者工程建议。引用来源没有批准这些设计，也没有给出本文完整状态机。当前无对应的已批准 EMI & Payments、AML/CFT、Restrictive Measures 或 GDPR Topic，不使用 DORA 控制补充客户准入的法律依据。

## 4. 仍需补齐

- R1、R2、R5 的完整官方输入、条款上下文、修订及适用状态核对；R3、R4 后续变化及主管机关实施。
- Malta 的相关金融机构、支付、AML/CFT、制裁和数据保护规则，以及所选账户与客户关系的法律性质。
- 实际机构、产品和合同、核验与开户渠道、代表授权、筛查与限制、终止和数据处理规则。
- 维护者审阅、独立使用、真实系统验证，以及正式知识链与发布范围确认。

问题按[正文 ACCOUNT-Q1 至 ACCOUNT-Q6](../emi-payments/customers-and-accounts.md#9-待确认事项)继续维护。作者完成有限范围读取不代表来源缺口已经关闭；固定发布保持 `v0.3.0`。
