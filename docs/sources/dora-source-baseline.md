# DORA 权威来源基线

| 项目 | 值 |
| --- | --- |
| 基线标识 | `DORA-SOURCES-2026-08-31-R2` |
| 前序基线 | `DORA-SOURCES-2026-08-31` |
| 状态 | 已人工复核，供 v0.1 建设使用 |
| 获取日期 | 2026-08-31 |
| 复核日期 | 2026-08-31 |
| 复核角色 | 仓库维护者 |
| 司法辖区 | 欧盟、Malta |
| 工作语言 | English |
| 当前用途 | v0.1 DORA 全景目录和 ICT 变更管理知识链的来源输入 |

本文件记录 DORA v0.1 已核对的官方来源、版本、效力层级和文件关系。R2 收录全景目录阶段补充核对的当前 FIR/03 和 `EBA/GL/2025/02`。当前内容只确认来源事实，不给出具体 EMI 机构的适用性、合规状态或工程控制结论。

## 1. 使用规则

1. 欧盟法律文件以 Official Journal 中的正式文本为基准，使用 ELI 作为稳定链接，使用 CELEX 作为文件标识。
2. EUR-Lex 合并文本用于阅读和定位。涉及版本复现时，同时记录原始 Official Journal 文本和影响所用语言的勘误。
3. 本基线固定使用英文。某项勘误只影响其他语言时，保留关系记录，不把它合并进英文参考文本。
4. 欧盟法律文件、ESA 与 EBA 监管指引、Malta 法律、MFSA 规则和 MFSA 说明材料分别分类。
5. “有效”只表示官方来源在获取日显示为 in force 或 applicable，不表示它适用于任何具体机构、业务或场景。
6. 每次正式发布都要重新核对状态、勘误、替代文件和链接。本文件的获取日期不能代替持续更新。

EUR-Lex 的 [legal notice](https://eur-lex.europa.eu/content/legal-notice/legal-notice.html) 说明了 Official Journal 正式版本与合并文本的使用边界。European Commission 的 [DORA implementing and delegated acts](https://finance.ec.europa.eu/regulation-and-supervision/financial-services-legislation/implementing-and-delegated-acts/digital-operational-resilience-regulation_en) 页面用于发现配套法规，具体记录仍回到 EUR-Lex 和 Official Journal 核对。

## 2. 欧盟核心法律文件

### 2.1 Regulation (EU) 2022/2554

- **正式名称**：[Regulation (EU) 2022/2554 of the European Parliament and of the Council of 14 December 2022 on digital operational resilience for the financial sector and amending Regulations (EC) No 1060/2009, (EU) No 648/2012, (EU) No 600/2014, (EU) No 909/2014 and (EU) 2016/1011](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)。
- **常用名称**：Digital Operational Resilience Act，DORA。
- **文件类型**：欧盟 Regulation，具有约束力并直接适用。
- **发布机构**：European Parliament、Council of the European Union。
- **标识**：CELEX `32022R2554`；ELI `http://data.europa.eu/eli/reg/2022/2554/oj`。
- **日期**：签署 2022-12-14；Official Journal 发布 2022-12-27；生效 2023-01-16；适用 2025-01-17。
- **状态**：EUR-Lex 在 2026-08-31 显示 in force。
- **EMI 相关来源位置**：Article 2(1)(d) 列出 electronic money institutions，包括 Directive 2009/110/EC Article 9(1) 所称的 exempted electronic money institutions。具体适用结果还要继续核对 Article 2 的完整范围、排除项和其他相关条款。
- **首条知识链位置**：Article 9(4)(e) 涉及 ICT change management policies、procedures and controls。

### 2.2 Directive (EU) 2022/2556

- **正式名称**：[Directive (EU) 2022/2556 of the European Parliament and of the Council of 14 December 2022 amending Directives 2009/65/EC, 2009/138/EC, 2011/61/EU, 2013/36/EU, 2014/59/EU, 2014/65/EU, (EU) 2015/2366 and (EU) 2016/2341 as regards digital operational resilience for the financial sector](https://eur-lex.europa.eu/eli/dir/2022/2556/oj/eng)。
- **文件类型**：欧盟 Directive，需要成员国转化为国内法。
- **发布机构**：European Parliament、Council of the European Union。
- **标识**：CELEX `32022L2556`；ELI `http://data.europa.eu/eli/dir/2022/2556/oj`。
- **日期**：签署 2022-12-14；Official Journal 发布 2022-12-27；生效 2023-01-16；转化期限和成员国措施适用日期为 2025-01-17。
- **状态**：EUR-Lex 在 2026-08-31 显示 in force。
- **EMI 关系**：该指令修改的 sectoral directives 包括 Directive (EU) 2015/2366，也就是 PSD2。Malta 转化措施需要单独记录，不能用 Directive 本身替代成员国法律核对。

## 3. DORA 二级法规

European Commission 在 2025-07-02 发布的 [full list](https://finance.ec.europa.eu/document/download/7a2d42d8-4b48-4e2e-9b4c-c4e9107686d1_en?filename=dora-level-2-measures-full_en.pdf) 列出 12 项 implementing and delegated acts。以下 12 项均已逐份回到 EUR-Lex 核对，2026-08-31 的法律状态均为 in force。

| DORA 授权依据 | CELEX | 正式文件 | 类型与主题 | 日期 |
| --- | --- | --- | --- | --- |
| Articles 15(4)、16(3) | `32024R1774` | [Commission Delegated Regulation (EU) 2024/1774 of 13 March 2024 supplementing Regulation (EU) 2022/2554 with regard to regulatory technical standards specifying ICT risk management tools, methods, processes, and policies and the simplified ICT risk management framework](https://eur-lex.europa.eu/eli/reg_del/2024/1774/oj/eng) | Delegated Regulation；ICT 风险管理框架和简化框架 | 采纳 2024-03-13；OJ 2024-06-25；生效 2024-07-15 |
| Article 18(4) | `32024R1772` | [Commission Delegated Regulation (EU) 2024/1772 of 13 March 2024 supplementing Regulation (EU) 2022/2554 with regard to regulatory technical standards specifying the criteria for the classification of ICT-related incidents and cyber threats, setting out materiality thresholds and specifying the details of reports of major incidents](https://eur-lex.europa.eu/eli/reg_del/2024/1772/oj/eng) | Delegated Regulation；事件和网络威胁分类、重大性阈值 | 采纳 2024-03-13；OJ 2024-06-25；生效 2024-07-15 |
| Article 20(3) | `32025R0301` | [Commission Delegated Regulation (EU) 2025/301 of 23 October 2024 supplementing Regulation (EU) 2022/2554 with regard to regulatory technical standards specifying the content and time limits for the initial notification of, and intermediate and final report on, major ICT-related incidents, and the content of the voluntary notification for significant cyber threats](https://eur-lex.europa.eu/eli/reg_del/2025/301/oj/eng) | Delegated Regulation；重大 ICT 事件报告内容和时限 | 采纳 2024-10-23；OJ 2025-02-20；生效 2025-03-12 |
| Article 20(4) | `32025R0302` | [Commission Implementing Regulation (EU) 2025/302 of 23 October 2024 laying down implementing technical standards for the application of Regulation (EU) 2022/2554 with regard to the standard forms, templates, and procedures for financial entities to report a major ICT-related incident and to notify a significant cyber threat](https://eur-lex.europa.eu/eli/reg_impl/2025/302/oj/eng) | Implementing Regulation；事件报告表单、模板和程序 | 采纳 2024-10-23；OJ 2025-02-20；生效 2025-03-12 |
| Article 26(11) | `32025R1190` | [Commission Delegated Regulation (EU) 2025/1190 of 13 February 2025 supplementing Regulation (EU) 2022/2554 with regard to regulatory technical standards specifying the criteria used for identifying financial entities required to perform threat-led penetration testing, the requirements and standards governing the use of internal testers, the requirements in relation to the scope, testing methodology and approach for each phase of the testing, results, closure and remediation stages and the type of supervisory and other relevant cooperation needed for the implementation of TLPT and for the facilitation of mutual recognition](https://eur-lex.europa.eu/eli/reg_del/2025/1190/oj/eng) | Delegated Regulation；threat-led penetration testing | 采纳 2025-02-13；OJ 2025-06-18；生效 2025-07-08 |
| Article 28(9) | `32024R2956` | [Commission Implementing Regulation (EU) 2024/2956 of 29 November 2024 laying down implementing technical standards for the application of Regulation (EU) 2022/2554 with regard to standard templates for the register of information](https://eur-lex.europa.eu/eli/reg_impl/2024/2956/oj/eng) | Implementing Regulation；ICT 第三方信息登记册模板 | 采纳 2024-11-29；OJ 2024-12-02；生效 2024-12-22 |
| Article 28(10) | `32024R1773` | [Commission Delegated Regulation (EU) 2024/1773 of 13 March 2024 supplementing Regulation (EU) 2022/2554 with regard to regulatory technical standards specifying the detailed content of the policy regarding contractual arrangements on the use of ICT services supporting critical or important functions provided by ICT third-party service providers](https://eur-lex.europa.eu/eli/reg_del/2024/1773/oj/eng) | Delegated Regulation；支持关键或重要职能的 ICT 第三方合同政策 | 采纳 2024-03-13；OJ 2024-06-25；生效 2024-07-15 |
| Article 30(5) | `32025R0532` | [Commission Delegated Regulation (EU) 2025/532 of 24 March 2025 supplementing Regulation (EU) 2022/2554 with regard to regulatory technical standards specifying the elements that a financial entity has to determine and assess when subcontracting ICT services supporting critical or important functions](https://eur-lex.europa.eu/eli/reg_del/2025/532/oj/eng) | Delegated Regulation；支持关键或重要职能的 ICT 分包 | 采纳 2025-03-24；OJ 2025-07-02；生效 2025-07-22 |
| Article 31(6) | `32024R1502` | [Commission Delegated Regulation (EU) 2024/1502 of 22 February 2024 supplementing Regulation (EU) 2022/2554 by specifying the criteria for the designation of ICT third-party service providers as critical for financial entities](https://eur-lex.europa.eu/eli/reg_del/2024/1502/oj/eng) | Delegated Regulation；关键 ICT 第三方服务商认定标准 | 采纳 2024-02-22；OJ 2024-05-30；生效 2024-06-19；Article 2(5)(b) 的 sub-criterion 1.4 从 2025-01-16 起适用 |
| Article 41(2) | `32025R0295` | [Commission Delegated Regulation (EU) 2025/295 of 24 October 2024 supplementing Regulation (EU) 2022/2554 with regard to regulatory technical standards on harmonisation of conditions enabling the conduct of the oversight activities](https://eur-lex.europa.eu/eli/reg_del/2025/295/oj/eng) | Delegated Regulation；关键 ICT 第三方监督活动条件 | 采纳 2024-10-24；OJ 2025-02-13；生效 2025-03-05 |
| Article 41(2) | `32025R0420` | [Commission Delegated Regulation (EU) 2025/420 of 16 December 2024 supplementing Regulation (EU) 2022/2554 with regard to regulatory technical standards to specify the criteria for determining the composition of the joint examination team ensuring a balanced participation of staff members from the ESAs and from the relevant competent authorities, their designation, tasks and working arrangements](https://eur-lex.europa.eu/eli/reg_del/2025/420/oj/eng) | Delegated Regulation；joint examination team | 采纳 2024-12-16；OJ 2025-03-24；生效 2025-04-13 |
| Article 43(2) | `32024R1505` | [Commission Delegated Regulation (EU) 2024/1505 of 22 February 2024 supplementing Regulation (EU) 2022/2554 by determining the amount of the oversight fees to be charged by the Lead Overseer to critical ICT third-party service providers and the way in which those fees are to be paid](https://eur-lex.europa.eu/eli/reg_del/2024/1505/oj/eng) | Delegated Regulation；关键 ICT 第三方监督费用 | 采纳 2024-02-22；OJ 2024-05-30；生效 2024-06-19 |

表中的日期是各二级法规自身的采纳、发布和生效日期。具体义务还要与 DORA 的适用日期、主体范围、比例原则和相关条款共同阅读。

## 4. 英文版本与勘误

### 4.1 英文参考文本集合

| 文件 | 本基线使用的英文文本 |
| --- | --- |
| Regulation (EU) 2022/2554 | 原始 Official Journal 英文文本。EUR-Lex 记录的 9 项勘误均限定于其他语言。 |
| Directive (EU) 2022/2556 | 原始 Official Journal 英文文本。已识别的勘误只影响 Hungarian。 |
| Delegated Regulation (EU) 2024/1774 | 原始英文文本加 2025-05-15 勘误。 |
| Implementing Regulation (EU) 2024/2956 | 原始英文文本加 2025-09-19 勘误。 |
| 其他 10 项二级法规 | 原始英文文本。已识别的相关勘误只影响 HR、FR 或 DE。 |

### 4.2 勘误关系

| 被修正文件 | 勘误 | 影响语言 | 英文基线处理 |
| --- | --- | --- | --- |
| Regulation (EU) 2022/2554 | `32022R2554R(01)` 至 `32022R2554R(09)`，发布日期从 2023-05-04 至 2025-11-21 | NL、ET、PL、FR、RO、SL、DE、BG、HR、LV、PT、HU；部分语言出现多次 | 不合并；没有一项影响 EN |
| Directive (EU) 2022/2556 | [2025-10-10 corrigendum](https://eur-lex.europa.eu/eli/dir/2022/2556/corrigendum/2025-10-10/oj)；CELEX `32022L2556R(01)` | HU | 不合并 |
| Delegated Regulation (EU) 2024/1774 | [2025-03-06 corrigendum](https://eur-lex.europa.eu/eli/reg_del/2024/1774/corrigendum/2025-03-06/oj)；CELEX `32024R1774R(01)` | HR | 不合并 |
| Delegated Regulation (EU) 2024/1774 | [2025-05-15 corrigendum](https://eur-lex.europa.eu/eli/reg_del/2024/1774/corrigendum/2025-05-15/oj/eng)；CELEX `32024R1774R(02)` | 包括 EN 在内的 24 种官方语言 | 合并；英文 Article 22(1)(d) 的交叉引用由 Article 15 改为 Article 8(2) of Regulation (EU) 2024/1772 |
| Implementing Regulation (EU) 2024/2956 | [2025-09-19 corrigendum](https://eur-lex.europa.eu/eli/reg_impl/2024/2956/corrigendum/2025-09-19/oj/eng)；CELEX `32024R2956R(01)` | 包括 EN 在内的 24 种官方语言 | 合并；修正登记册模板中的 column codes 和一个枚举编号 |
| Delegated Regulation (EU) 2025/301 | [2025-09-12 corrigendum](https://eur-lex.europa.eu/eli/reg_del/2025/301/corrigendum/2025-09-12/oj)；CELEX `32025R0301R(01)` | FR | 不合并 |
| Implementing Regulation (EU) 2025/302 | [2025-09-11 corrigendum](https://eur-lex.europa.eu/eli/reg_impl/2025/302/corrigendum/2025-09-11/oj)；CELEX `32025R0302R(01)` | FR | 不合并 |
| Delegated Regulation (EU) 2025/1190 | [2025-07-03 corrigendum](https://eur-lex.europa.eu/eli/reg_del/2025/1190/corrigendum/2025-07-03/oj)；CELEX `32025R1190R(01)` | DE | 不合并 |

截至 2026-08-31，没有在 EUR-Lex 关系记录中发现其余 7 项二级法规的勘误。该结果受获取日期和英文工作语言限制。

## 5. ESA 与 EBA 指引

### 5.1 DORA 下的 ESA 联合指引

以下文件属于 ESA Guidelines，和 Official Journal 中的 Regulation 分层记录。它们依据各 ESA Regulations 的 Article 16 发布，文件中的 comply-or-explain 机制和适用对象需要按指引原文处理。

| 标识 | 正式名称 | DORA 依据 | 状态和日期 | 官方入口 |
| --- | --- | --- | --- | --- |
| `JC/GL/2024/34` | Joint Guidelines on the estimation of aggregated annual costs and losses caused by major ICT-related incidents | Article 11(11) | Final；EBA 页面显示 applicable，application date 和 compliance deadline 均为 2025-05-19 | [EBA regulatory activity](https://www.eba.europa.eu/activities/single-rulebook/regulatory-activities/operational-resilience/joint-guidelines-estimation-aggregated-annual-costs-and-losses-caused-major-ict-related-incidents) |
| `JC/GL/2024/36` | Joint Guidelines on the oversight cooperation and information exchange between the ESAs and the competent authorities | Article 32(7) | 文件日期 2024-06-05；Final；application date 2025-01-17 | [EBA regulatory activity](https://www.eba.europa.eu/activities/single-rulebook/regulatory-activities/operational-resilience/joint-guidelines-oversight-cooperation-and-information-exchange-between-esas-and-competent?version=2024) |

### 5.2 EBA/GL/2025/02

- **正式名称**：[Guidelines amending Guidelines EBA/GL/2019/04 on ICT and security risk management](https://www.eba.europa.eu/sites/default/files/2025-02/23684f95-f669-4852-94a0-dac6c2ae67ad/Final%20report%20on%20amending%20GLs%20on%20ICT%20risk%20and%20security.pdf)。
- **文件类型**：EBA Guidelines；修订 `EBA/GL/2019/04`，与 DORA 二级法规和 ESA 联合指引分层记录。
- **标识和日期**：`EBA/GL/2025/02`；文件日期 2025-02-11；最迟自 2025-05-20 适用。当前状态和适用日期见 [EBA regulatory activity](https://www.eba.europa.eu/activities/single-rulebook/regulatory-activities/internal-governance/guidelines-ict-and-security-risk-management)。
- **适用对象来源位置**：修订文本 paragraph 10 将对象限定为 PSD2 Article 1(1)(a)、(b) 和 (d) 的 payment service providers，同时包括 PSD2 Articles 32、33 的豁免主体和 EMD2 Article 9 的豁免 EMI。
- **修订范围**：修订文本 paragraphs 8-12 将主题收窄至 payment service user relationship management，删除原指引的范围和定义，以及 paragraphs 1-91 对应的 Sections 3.1-3.7。当前保留内容为 Section 3.8、paragraphs 92-98，可通过 [EBA consolidated version](https://www.eba.europa.eu/sites/default/files/2026-05/c8fb6168-0aef-42f6-8da9-114a8baf21b9/Consolidated%20version%20of%20EBA%20ameding%20Guidelines%20on%20ICT%20and%20security%20risk%20management.pdf) 阅读。
- **DORA 关系**：修订后的指引补充 DORA 及相关 Regulatory Technical Standards 下的 ICT 风险管理措施，保留内容聚焦支付服务用户安全意识、功能和限额控制、交易提醒、安全更新及支持渠道。

以下页面只作为持续发现和导航入口：

- [EBA Operational resilience](https://www.eba.europa.eu/regulation-and-policy/operational-resilience)。
- [EBA DORA Interactive Single Rulebook](https://www.eba.europa.eu/regulation-and-policy/single-rulebook/interactive-single-rulebook/17716)。
- [European Commission Cyber resilience](https://finance.ec.europa.eu/digital-finance/cyber-resilience_en)。

Interactive Single Rulebook 提供文档化阅读能力，关键法律结论仍需回到 Official Journal 和 EUR-Lex 来源。

## 6. Malta 来源

### 6.1 具有约束力的法律和规则

| 来源 | 类型与状态 | 日期 | DORA 关系 |
| --- | --- | --- | --- |
| [S.L. 330.20, Malta Financial Services Authority Act (Digital Operational Resilience Act (DORA)) Regulations](https://legislation.mt/eli/sl/330.20/eng)；原始文件 [Legal Notice 166 of 2024](https://legislation.mt/eli/ln/2024/166/eng) | Malta subsidiary legislation；Legislation Malta 显示全部 in force | Government Gazette No. 21,285，2024-07-16；适用 2025-01-17 | 实施 DORA 的相关规定，处理 Malta 主管机关、监督和制裁等国内事项；文本明确 DORA Regulation 在冲突时优先 |
| [Various Financial Services Laws (Amendment) Act, 2025, Act XI of 2025](https://legislation.mt/eli/act/2025/11/eng) | Malta Act；修改包括 Financial Institutions Act, Cap. 376 在内的多项金融服务法律 | Government Gazette No. 21,439，2025-05-16；部分条款由 [L.N. 300 of 2025](https://legislation.mt/eli/ln/2025/300/eng) 指定于 2026-01-01 生效 | EUR-Lex 将其列为 Directive (EU) 2022/2556 的 Malta national transposition measure，NIM `72022L2556MLT_202502764` |
| [Financial Institutions Act, Cap. 376](https://legislation.mt/eli/cap/376/eng) | Malta primary legislation；Legislation Malta 显示 in force | 当前官方合并入口；页面记录 Act XI of 2025 的修改关系 | EMI 和 payment institution 的国内基础法律之一；具体 DORA 修改位置需在后续条款目录中核对 |
| Financial Institutions Rule FIR/01, published 2025-01-06 | MFSA Rule；EUR-Lex 记录的 Malta national transposition measure，NIM [`72022L2556MLT_202502756`](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=NIM:202502756) | 2025-01-06 | MFSA 当前 [Financial Institutions](https://www.mfsa.mt/our-work/financial-institutions/) 页面已将该版本列入 superseded FIRs；不能作为当前规则版本使用 |
| [Chapter 1 of the Financial Institutions Rulebook, FIR/01/2025](https://www.mfsa.mt/wp-content/uploads/2025/10/Chapter-1-of-the-Financial-Institutions-Rulebook-FIR01.pdf) | 当前 MFSA Rulebook Chapter 1 | MFSA 于 2025-10-14 发布当前 Chapter 1 | 当前授权规则入口；它与 2025-01-06 转化记录之间的替代和条款关系需要在后续 Malta 条款目录中继续核对 |
| [Chapter 3 of the Financial Institutions Rulebook, FIR/03](https://www.mfsa.mt/wp-content/uploads/2025/11/MFSA-Chapter-3-of-the-Financial-Institutions-Rulebook-FIR03.pdf) | 当前 MFSA Rulebook Chapter 3；Version 6.00 | MFSA 于 2025-11-20 发布修订版并说明自发布时适用，见 [publication circular](https://www.mfsa.mt/wp-content/uploads/2025/11/Circular-to-the-Industry-on-Publication-of-Chapter-3-of-the-Financial-Institutions-Rulebook.pdf) | R3-1.1.1 是支付服务机构和 EMI 的范围入口；R3-1.1.4(x) 列出 DORA；R3-2.10.1 要求遵守 DORA；R3-2.10.2 引用 amended EBA/GL/2019/04，即 `EBA/GL/2025/02` |

European Commission 的 [Directive (EU) 2022/2556 transposition tracker](https://finance.ec.europa.eu/regulation-and-supervision/financial-services-legislation/enforcement-and-infringements-banking-and-finance-law/monitoring-banking-and-finance-directives/digital-operational-resilience-financial-sector-directive_en) 在 2026-05-04 显示 Malta 已通报 full transposition，同时列出一项因未通报、延迟通报或通报不完整而仍 pending 的 non-communication infringement proceeding。本基线原样保留这两个状态，不据此推导 Malta 的最终转化充分性。

### 6.2 MFSA 公开监管材料

| 来源 | 发布日期 | 分类 | 使用边界 |
| --- | --- | --- | --- |
| [MFSA Supervisory ICT Risk and Cybersecurity](https://www.mfsa.mt/our-work/supervisory-ict-risk-and-cybersecurity/) | 持续更新页面；本次获取 2026-08-31 | MFSA 官方主题入口 | 用于发现 Malta 监管材料和理解监督主题，页面内容不能替代具体法律文件 |
| [ICT Change Management under the Digital Operational Resilience Act (DORA)](https://www.mfsa.mt/publication/ict-change-management-under-the-digital-operational-resilience-act-dora/) | 2026-04-07 | MFSA 官方说明材料 | 用于理解 MFSA 对 ICT 变更管理的公开说明；监管要求仍以 DORA 和相关二级法规为主要来源 |

## 7. ICT 变更管理首条来源链

v0.1 的首条深度知识链使用以下来源集合：

```text
Regulation (EU) 2022/2554
  Article 2(1)(d)      EMI 主体入口
  Article 9(4)(e)      ICT 变更管理的上位要求
          |
          v
Delegated Regulation (EU) 2024/1774
  Article 17           ICT 变更管理程序的细化要求

Malta 国内层
  S.L. 330.20          Malta 主管机关和国内实施环境
  MFSA article         ICT 变更管理的公开说明材料
```

Article 17 已识别的来源主题包括安全要求验证、批准与申请或实施职责的独立性、角色职责、计划和测试、质量保证、文档和沟通、回退与恢复、紧急变更、实施后复核，以及对现有 ICT 安全措施的影响。这里保留主题索引，第 5 步再拆分监管要求、适用条件、控制、检查和证据。

## 8. 复核结论和后续事项

已完成的来源核对：

- DORA 和 Directive (EU) 2022/2556 的官方标识、日期、状态和关系。
- European Commission 清单中的 12 项二级法规及其当前状态。
- 影响英文参考文本的勘误集合。
- 两项 ESA 联合指引及 `EBA/GL/2025/02` 的标识、状态、适用日期和文件关系。
- Malta 的 DORA subsidiary legislation、主要转化记录、当前 Financial Institutions Act、FIR/01 和 FIR/03 版本变化。
- ICT 变更管理首条来源链。

仓库维护者于 2026-08-31 确认了本基线及 R2 增量的来源标识、标题、日期、分类、链接和文件关系。Roadmap 第 2 步及其后续来源补充据此完成。

后续阶段继续处理：

- 在后续知识建模中继续核对 Malta Act XI of 2025、Cap. 376 和 Financial Institutions Rulebook 各条款的具体适用条件。
- 确认当前阶段是否需要纳入更多 MFSA circular、ESA Q&A 或 2026 年后续监督材料。
- 每次发布前重新检查来源状态、勘误、替代关系和链接。

本基线没有收录法规全文，没有形成机构适用性结论，也没有把 MFSA 说明材料提升为欧盟法律要求。知识 Schema、稳定来源 ID 和机器可读文件在 Roadmap 第 4 步设计。

## 9. R2 变更与复核记录

| 项目 | 值 |
| --- | --- |
| 增量标识 | `DORA-SOURCES-DELTA-2026-08-31-01` |
| 状态 | 已人工复核并并入 `DORA-SOURCES-2026-08-31-R2` |
| 获取日期 | 2026-08-31 |
| 复核日期 | 2026-08-31 |
| 复核角色 | 仓库维护者 |
| 发现步骤 | Roadmap 第 3 步，DORA 全景目录 |
| 增量原因 | 当前 FIR/03 直接引用 DORA 和 amended EBA/GL/2019/04，需要补齐 Malta 持续性规则及其上游 EBA 指引 |

本次复核确认：

- FIR/03 的版本、发布日期、替代关系和适用范围定位。
- `EBA/GL/2025/02` 的标识、适用日期、适用对象和保留条款。
- FIR/03 与 EBA 指引的文件层级，以及两者和 DORA 的关系。
- 全景目录对这两份来源的引用没有扩大其适用范围或效力。

前序基线 `DORA-SOURCES-2026-08-31` 通过 Git 历史继续保留，R2 作为当前已确认来源基线。
