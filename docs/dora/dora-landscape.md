# DORA 全景目录

| 项目 | 值 |
| --- | --- |
| 目录标识 | `DORA-LANDSCAPE-2026-08-31-DRAFT` |
| 状态 | 待人工复核 |
| 来源基线 | [`DORA-SOURCES-2026-08-31`](../sources/dora-source-baseline.md) |
| 获取日期 | 2026-08-31 |
| 司法辖区 | 欧盟、Malta |
| 工作语言 | English |
| 当前用途 | v0.1 DORA 主题导航和 ICT 变更管理知识链输入 |

本目录按照 Regulation (EU) 2022/2554 的正式结构整理 DORA 的主题、条款和配套文件，并单独标出 EMI 适用边界、Malta 国内层和当前覆盖缺口。目录只提供来源定位和关系导航，不代替条款原文、机构适用性判断或后续监管要求建模。

## 1. 阅读规则

1. DORA Article 标题保留 Official Journal 英文写法，中文内容只用于说明目录位置。
2. 具有约束力的欧盟法律、ESA 指引、Malta 法律、MFSA 规则和 MFSA 说明材料分层记录。
3. “授权关系”表示文件由对应 DORA 条款授权；“相关配套”表示文件细化或支持该主题；“目录关联”表示为了查找上下游主题建立的导航关系，不增加法律义务。
4. 主体是否属于 EMI、是否获得 EMD2 豁免、是否符合特定规模定义，以及具体要求如何适用，都需要机构事实支持。
5. 本目录使用已人工复核的 [DORA 权威来源基线](../sources/dora-source-baseline.md)。本步新发现但尚未进入来源基线的文件明确标记为待复核来源。
6. 法律结论以 [DORA Official Journal 文本](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng) 为准。[EBA Interactive Single Rulebook](https://www.eba.europa.eu/regulation-and-policy/single-rulebook/interactive-single-rulebook/17716) 只作为条款和配套材料导航工具。

## 2. DORA 总体结构

| Chapter | Articles | 主题 | 已识别的相关配套文件 |
| --- | --- | --- | --- |
| I | 1-4 | 一般规定、范围、定义、比例原则 | 无 |
| II | 5-16 | ICT 风险管理 | Regulation (EU) 2024/1774；`JC/GL/2024/34` 与 Article 11 关联 |
| III | 17-23 | ICT 事件管理、分类和报告 | Regulations (EU) 2024/1772、2025/301、2025/302 |
| IV | 24-27 | 数字运营韧性测试和 TLPT | Regulation (EU) 2025/1190 |
| V | 28-44 | ICT 第三方风险和关键服务商监督 | Regulations (EU) 2024/2956、2024/1773、2025/532、2024/1502、2025/295、2025/420、2024/1505；`JC/GL/2024/36` |
| VI | 45 | 网络威胁信息和情报共享 | 当前来源基线没有二级法规 |
| VII | 46-56 | 主管机关、合作、监督、处罚和数据保护 | Malta S.L. 330.20 提供国内主管机关和执行环境 |
| VIII | 57 | 授权行为 | 无 |
| IX | 58-64 | 复核、相关法规修订、生效和适用 | Directive (EU) 2022/2556 与金融领域指令的协调修订相关 |

上表中的 12 项 Commission delegated and implementing acts 与 2 项 ESA 联合指引均来自已确认来源基线。各文件的正式标题、CELEX、日期和勘误见 [DORA 权威来源基线](../sources/dora-source-baseline.md)。

## 3. EMI 适用边界

### 3.1 已确认的来源事实

| 事项 | 来源位置 | 目录结论 |
| --- | --- | --- |
| EMI 主体入口 | DORA Article 2(1)(d) | electronic money institutions 被列入适用实体，包括依据 Directive 2009/110/EC 获豁免的 electronic money institutions。 |
| EMI 定义 | DORA Article 3(38) | electronic money institution 引用 Directive 2009/110/EC Article 2(1) 的定义。 |
| 获豁免 EMI 定义 | DORA Article 3(39) | 指依据 Directive 2009/110/EC Article 9(1) 获得 waiver 的 EMI。 |
| DORA 明示排除 | DORA Article 2(3)(a)-(f) | 条款列出六类排除对象，没有将 EMI 作为一个整体类别排除；具体实体仍需按其法律身份核对。 |
| 成员国排除选项 | DORA Article 2(4) | 该选项针对 Directive 2013/36/EU Article 2(5)(4)-(23) 所列实体，需要按成员国决定核对。 |
| 比例原则 | DORA Article 4 | Chapter II，以及 Chapters III、IV 和 V Section I 中明确适用比例原则的要求，需要考虑规模、总体风险状况、服务和活动的性质、规模及复杂度。 |
| 简化框架 | DORA Article 16(1) | Articles 5-15 不适用于其中列明的实体，包括获 EMD2 豁免的 EMI；这些实体适用 Article 16 的简化 ICT 风险管理框架。 |
| Microenterprise | DORA Article 3(60) | 这是独立的规模定义。具体法律效果取决于引用该定义的条款，不能直接等同于 EMD2 豁免或 Article 16 简化框架。 |
| 支付相关事件 | DORA Article 23 | Chapter III 的要求也适用于涉及 EMI 的 operational or security payment-related incidents 和重大同类事件。 |
| EMI 主管机关类别 | DORA Article 46(b) | EMI 对应 Directive (EU) 2015/2366 Article 22 所指定的主管机关；Malta 的国内指定见 S.L. 330.20 Regulation 4。 |

Article 2(3) 的六类排除对象为：特定 AIF managers、特定 insurance and reinsurance undertakings、所运营 pension schemes 的成员总数不超过 15 的特定 institutions for occupational retirement provision、依据 Directive 2014/65/EU Articles 2 和 3 获豁免的自然人或法人、属于 microenterprise 或 SME 的特定 insurance intermediaries，以及特定 post office giro institutions。本目录记录这些类别，暂不对任何具体 EMI 机构作排除判断。

### 3.2 EMI 的两条 ICT 风险管理路径

```text
确认主体是 electronic money institution
  |
  +-- DORA Article 2(1)(d)
        |
        +-- 未依据 EMD2 Article 9(1) 获豁免
        |     |
        |     +-- DORA Articles 5-15
        |     +-- Regulation (EU) 2024/1774 Title II
        |     +-- ICT change: DORA Article 9(4)(e) + RTS Articles 15-17
        |
        +-- 已依据 EMD2 Article 9(1) 获豁免
              |
              +-- DORA Article 16
              +-- Regulation (EU) 2024/1774 Title III
              +-- ICT change: RTS Articles 37-38

两条路径继续结合 DORA Article 4、Chapters III-VI 和具体条款核对
```

这两条路径来自 DORA Article 16 和 Regulation (EU) 2024/1774 的正式结构。具体机构属于哪条路径，需要牌照与豁免事实支持。

## 4. 条款索引

### 4.1 Chapter I：General provisions

| Article | 正式标题 | 目录定位 |
| --- | --- | --- |
| 1 | Subject matter | DORA 的统一要求类别，以及与 Directive (EU) 2022/2555 的 sector-specific Union legal act 关系。 |
| 2 | Scope | 适用实体、排除对象和成员国排除选项；EMI 入口位于 Article 2(1)(d)。 |
| 3 | Definitions | ICT、事件、第三方、EMI 和规模等术语定义。 |
| 4 | Proportionality principle | Chapter II 及其他指定章节的比例原则入口。 |

### 4.2 Chapter II：ICT risk management

| Article | 正式标题 | 目录定位 | 相关配套 |
| --- | --- | --- | --- |
| 5 | Governance and organisation | 管理机构、内部治理和 ICT 风险责任。 | 2024/1774 |
| 6 | ICT risk management framework | ICT 风险管理框架、策略、复核和审计。 | 2024/1774 |
| 7 | ICT systems, protocols and tools | ICT 系统、协议和工具的总体要求。 | 2024/1774 |
| 8 | Identification | 业务职能、信息资产、ICT 资产、依赖和风险识别。 | 2024/1774 |
| 9 | Protection and prevention | ICT 安全政策、访问、变更等保护和预防措施；Article 9(4)(e) 是完整框架的 ICT 变更管理入口。 | 2024/1774 |
| 10 | Detection | 异常、网络性能问题和 ICT 事件的检测。 | 2024/1774 |
| 11 | Response and recovery | ICT 业务连续性、响应、恢复、危机管理以及成本和损失记录。 | 2024/1774；`JC/GL/2024/34` |
| 12 | Backup policies and procedures, restoration and recovery procedures and methods | 备份、恢复系统、恢复程序和数据完整性。 | 2024/1774 |
| 13 | Learning and evolving | 事件后复核、经验学习和韧性改进。 | 2024/1774 |
| 14 | Communication | 危机沟通和内外部沟通安排。 | 2024/1774 |
| 15 | Further harmonisation of ICT risk management tools, methods, processes and policies | Commission 细化完整 ICT 风险管理框架的授权入口。 | 2024/1774 Title II |
| 16 | Simplified ICT risk management framework | 特定实体的简化框架；包括获 EMD2 豁免的 EMI。 | 2024/1774 Title III |

### 4.3 Chapter III：ICT-related incident management, classification and reporting

| Article | 正式标题 | 目录定位 | 相关配套 |
| --- | --- | --- | --- |
| 17 | ICT-related incident management process | 事件记录、处理、跟踪和根因等事件管理过程。 | 无单独 Level 2 文件 |
| 18 | Classification of ICT-related incidents and cyber threats | 事件和网络威胁分类、重大性标准。 | 2024/1772 |
| 19 | Reporting of major ICT-related incidents and voluntary notification of significant cyber threats | 重大 ICT 事件报告和重大网络威胁自愿通知。 | 2025/301、2025/302 |
| 20 | Harmonisation of reporting content and templates | 报告内容、时限、表单、模板和程序的授权入口。 | 2025/301、2025/302 |
| 21 | Centralisation of reporting of major ICT-related incidents | 欧盟层面集中报告可行性安排。 | 无 |
| 22 | Supervisory feedback | 主管机关接收报告后的反馈和聚合分析。 | 无 |
| 23 | Operational or security payment-related incidents concerning credit institutions, payment institutions, account information service providers, and electronic money institutions | 将本章要求扩展到涉及 EMI 的支付相关运营或安全事件。 | 无 |

### 4.4 Chapter IV：Digital operational resilience testing

| Article | 正式标题 | 目录定位 | 相关配套 |
| --- | --- | --- | --- |
| 24 | General requirements for the performance of digital operational resilience testing | 韧性测试计划、风险方法、独立方、年度测试范围和缺陷修复。 | 无单独 Level 2 文件 |
| 25 | Testing of ICT tools and systems | 可采用的 ICT 工具和系统测试类型。 | 无单独 Level 2 文件 |
| 26 | Advanced testing of ICT tools, systems and processes based on TLPT | TLPT 的选择、范围、频率、实施和结果。 | 2025/1190 |
| 27 | Requirements for testers for the carrying out of TLPT | TLPT 内部或外部测试人员要求。 | 2025/1190 |

### 4.5 Chapter V：Managing of ICT third-party risk

| Article | 正式标题 | 目录定位 | 相关配套 |
| --- | --- | --- | --- |
| 28 | General principles | ICT 第三方风险责任、策略、信息登记册和合同政策。 | 2024/2956、2024/1773 |
| 29 | Preliminary assessment of ICT concentration risk at entity level | 签约前对集中风险和可替代性的评估。 | 无单独授权文件 |
| 30 | Key contractual provisions | ICT 服务合同中的关键条款和分包评估。 | 2025/532 |
| 31 | Designation of critical ICT third-party service providers | 关键 ICT 第三方服务商的认定。 | 2024/1502 |
| 32 | Structure of the Oversight Framework | Lead Overseer、Oversight Forum 及主管机关合作结构。 | `JC/GL/2024/36` |
| 33 | Tasks of the Lead Overseer | Lead Overseer 的评估和监督任务。 | 无单独授权文件 |
| 34 | Operational coordination between Lead Overseers | Lead Overseers 之间的协调。 | 无单独授权文件 |
| 35 | Powers of the Lead Overseer | 调查、检查、建议和其他监督权力。 | 无单独授权文件 |
| 36 | Exercise of the powers of the Lead Overseer outside the Union | 在欧盟外行使相关监督权力的条件。 | 无单独授权文件 |
| 37 | Request for information | Lead Overseer 请求信息的权力。 | 无单独授权文件 |
| 38 | General investigations | 一般调查安排。 | 无单独授权文件 |
| 39 | Inspections | 现场检查安排。 | 无单独授权文件 |
| 40 | Ongoing oversight | 持续监督、监督计划和建议。 | 无单独授权文件 |
| 41 | Harmonisation of conditions enabling the conduct of the oversight activities | 监督活动条件和 joint examination team 的细化授权。 | 2025/295、2025/420 |
| 42 | Follow-up by competent authorities | 主管机关对 Lead Overseer 建议的后续处理。 | 无单独授权文件 |
| 43 | Oversight fees | 关键 ICT 第三方服务商的监督费用。 | 2024/1505 |
| 44 | International cooperation | ESAs 与第三国监管和监督机关的合作。 | 无单独授权文件 |

Chapter V Section I 为 Articles 28-30，主要面向 financial entities 的 ICT 第三方风险管理。Section II 为 Articles 31-44，主要构成关键 ICT 第三方服务商的欧盟监督框架。目录使用方需要先区分这两个层次。

### 4.6 Chapter VI：Information-sharing arrangements

| Article | 正式标题 | 目录定位 | 相关配套 |
| --- | --- | --- | --- |
| 45 | Information-sharing arrangements on cyber threat information and intelligence | 金融实体之间共享网络威胁信息和情报的条件，以及参与和退出时对主管机关的通知。 | 当前来源基线没有二级法规 |

### 4.7 Chapters VII-IX：主管机关和最终条款

| Article | 正式标题 | 目录定位 |
| --- | --- | --- |
| 46 | Competent authorities | 各金融实体类别对应的主管机关；EMI 位于 Article 46(b)。 |
| 47 | Cooperation with structures and authorities established by Directive (EU) 2022/2555 | DORA 主管机关与 NIS2 结构和机关的合作。 |
| 48 | Cooperation between authorities | DORA 相关主管机关之间的合作。 |
| 49 | Financial cross-sector exercises, communication and cooperation | 跨金融部门演练、沟通和合作。 |
| 50 | Administrative penalties and remedial measures | 行政处罚、补救措施和主管机关权力。 |
| 51 | Exercise of the power to impose administrative penalties and remedial measures | 处罚和补救措施的适用因素。 |
| 52 | Criminal penalties | 成员国刑事处罚选择及其通知。 |
| 53 | Notification duties | 成员国对法律、主管机关和处罚制度的通知。 |
| 54 | Publication of administrative penalties | 行政处罚决定的公布。 |
| 55 | Professional secrecy | 专业保密。 |
| 56 | Data Protection | 主管机关和 ESAs 处理个人数据的边界。 |
| 57 | Exercise of the delegation | Commission 授权行为的程序。 |
| 58 | Review clause | Commission 对 DORA 指定事项的复核。 |
| 59 | Amendments to Regulation (EC) No 1060/2009 | 对信用评级机构法规的修订。 |
| 60 | Amendments to Regulation (EU) No 648/2012 | 对 EMIR 的修订。 |
| 61 | Amendments to Regulation (EU) No 909/2014 | 对 CSDR 的修订。 |
| 62 | Amendments to Regulation (EU) No 600/2014 | 对 MiFIR 的修订。 |
| 63 | Amendment to Regulation (EU) 2016/1011 | 对 Benchmark Regulation 的修订。 |
| 64 | Entry into force and application | 生效和适用；DORA 自 2025-01-17 起适用。 |

## 5. 核心主题之间的导航关系

以下关系用于查找上下游条款。标记为“目录关联”的关系需要在后续要求建模时逐项核对原文依据。

| 起点 | 相关主题 | 关系类型 | 用途 |
| --- | --- | --- | --- |
| Articles 5-6 | Articles 7-16 | 法规结构 | 从治理和风险框架进入识别、保护、检测、恢复、学习和沟通。 |
| Article 10 | Articles 17-23 | 目录关联 | 从异常和事件检测进入事件管理、分类和报告。 |
| Articles 11-12 | Articles 24-25 | 目录关联 | 从响应、恢复和备份进入韧性测试。 |
| Article 13 | Articles 17、22、24 | 目录关联 | 从事件、监督反馈和测试结果进入学习和改进主题。 |
| Articles 6、8 | Articles 28-30 | 法规与目录关联 | 将 ICT 第三方依赖放入 ICT 风险框架、资产和职能关系中查找。 |
| Articles 28-30 | Articles 31-44 | 法规结构 | 区分金融实体自身的第三方风险管理与关键服务商监督框架。 |
| Articles 10、18 | Article 45 | 目录关联 | 将网络威胁识别、分类和自愿信息共享放在同一查找路径中。 |
| Article 46 | Malta S.L. 330.20 | 国内实施关系 | 从欧盟主管机关条款进入 Malta 主管机关、监督和执行安排。 |

## 6. ICT 变更管理上下游

### 6.1 完整 ICT 风险管理框架

| 环节 | 来源位置 | 目录关系 |
| --- | --- | --- |
| 治理和责任 | DORA Articles 5-6 | 管理机构、ICT 风险框架和职责构成变更管理的治理环境。 |
| 资产、职能和依赖 | DORA Article 8；Regulation 2024/1774 Articles 4-5 | 用于定位变更涉及的 ICT 资产、业务职能和依赖。 |
| 保护和预防入口 | DORA Article 9(4)(e) | 明确要求 ICT change management policies、procedures and controls。 |
| ICT 项目 | Regulation 2024/1774 Article 15 | 项目治理、风险评估、里程碑、变更要求、测试和上线批准。 |
| 系统获取、开发和维护 | Regulation 2024/1774 Article 16 | 系统安全要求，以及首次使用和维护后的测试、批准。 |
| ICT 变更程序 | Regulation 2024/1774 Article 17 | 安全要求验证、职责独立、计划、测试、质量保证、记录、回退、紧急变更和实施后复核。 |
| 运行记录和检测 | DORA Article 10；Regulation 2024/1774 Article 8 | 变更日志、异常和事件检测的目录关联。 |
| 响应和恢复 | DORA Articles 11-12；Regulation 2024/1774 Article 17(1)(e) | 失败变更的中止、回退、恢复及更广泛连续性安排。 |
| 韧性测试 | DORA Articles 24-25 | 变更后的系统测试与整体韧性测试之间的目录关联。 |
| 第三方参与 | DORA Articles 28-30；Regulations 2024/1773、2025/532 | 外部 ICT 服务、合同、分包和依赖发生变化时的第三方风险查找路径。 |
| 学习和改进 | DORA Article 13 | 事件和测试结果反馈到策略、程序与控制的目录关联。 |

### 6.2 简化 ICT 风险管理框架

获 EMD2 Article 9(1) 豁免的 EMI 使用以下变更管理路径：

| 环节 | 来源位置 | 目录关系 |
| --- | --- | --- |
| 简化框架入口 | DORA Article 16 | Articles 5-15 由 Article 16 的简化框架替代。 |
| 系统获取、开发和维护 | Regulation 2024/1774 Article 37 | 采用风险方法管理系统获取、开发、维护、测试和生产变更。 |
| ICT 项目和变更 | Regulation 2024/1774 Article 38 | 项目全过程，以及变更的记录、测试、评估、批准、实施和验证。 |

第 5 步建立 ICT 变更管理知识链时，需要分别处理完整框架和简化框架。两条路径不能共用一个未声明适用条件的要求集合。

## 7. Malta 国内层

### 7.1 已进入来源基线的文件

| 文件和位置 | 主题 | 与 DORA 的关系 |
| --- | --- | --- |
| [S.L. 330.20](https://legislation.mt/eli/sl/330.20/eng) Regulation 1 | 名称、范围、冲突规则 | 实施 DORA 相关规定；与 DORA 冲突时 DORA 优先。 |
| S.L. 330.20 Regulation 3 | 适用范围 | 适用于 DORA Article 2(1) 的 financial entities；排除 DORA Article 2(3) 实体和 Malta Development Bank。 |
| S.L. 330.20 Regulation 4 | 主管机关 | 指定 MFSA，并记录事件报告、Oversight Forum、TLPT 任务委托等职责。 |
| S.L. 330.20 Regulation 5 | 合作和信息交换 | 处理重大 ICT 事件、重大网络威胁通知以及与 ECB、CSIRT 和其他机关的信息交换。 |
| S.L. 330.20 Regulation 6 | MFSA Rules | 授权 MFSA 为实施 DORA 发布 Rules。 |
| S.L. 330.20 Regulations 7-9 | 监督、处罚和公布 | 监督调查、纠正措施、行政处罚及其公布。 |
| S.L. 330.20 Regulations 10-11 | 申诉和犯罪 | Financial Services Tribunal 申诉路径及刑事责任。 |
| [Cap. 376](https://legislation.mt/eli/cap/376/eng) definition of “DORA Regulation” | 国内定义 | 将 DORA 及其后续 binding legal instruments、guidelines 和 measures 纳入定义。 |
| Cap. 376 Article 8B | 重要运营职能外包 | 包括 ICT systems 的重要运营职能外包；由 [Act XI of 2025](https://legislation.mt/eli/act/2025/11/eng) section 38 修订。 |
| Cap. 376 Article 11A | 运营和安全风险 | 针对 payment institutions、EMIs 和 AISPs，并明确不影响 DORA Chapter II 的适用；由 Act XI of 2025 section 39 修订。 |
| Cap. 376 Article 11B | 事件报告和欺诈统计 | 原有 paragraphs (1)-(5) 已由 Act XI of 2025 section 40 删除；现有 paragraph (6) 保留支付欺诈统计。 |
| [FIR/01/2025](https://www.mfsa.mt/wp-content/uploads/2025/10/Chapter-1-of-the-Financial-Institutions-Rulebook-FIR01.pdf) R1-2.2.2(ix) | 牌照申请 | 初步会议材料需要说明 internal system and IT/platform，包括申请人拟如何遵守 DORA。 |

### 7.2 本步新发现的待复核来源

[FIR/03/2025 version 6.00](https://www.mfsa.mt/wp-content/uploads/2025/11/MFSA-Chapter-3-of-the-Financial-Institutions-Rulebook-FIR03.pdf) 是当前适用于提供支付服务或发行电子货币的 financial institutions 的持续性 Rulebook Chapter。本目录已识别以下位置：

| 位置 | 内容定位 | 当前状态 |
| --- | --- | --- |
| R3-1.1.1 | FIR/03 对支付服务机构和 EMI 的范围入口。 | 待加入下一版来源基线 |
| R3-1.1.4(x) | 要求 Licence Holder 参考适用法律和监管要求，其中列出 DORA。 | 待加入下一版来源基线 |
| R3-2.10.1 | ICT and Cybersecurity Risk 部分明确要求 Licence Holder comply with DORA。 | 待加入下一版来源基线 |
| R3-2.10.2 | 引用 amended EBA/GL/2019/04。该指引的当前版本、适用对象和 DORA 后关系仍需单独核对。 | 待加入下一版来源基线 |

FIR/03 在第 2 步人工复核后才被本步识别，因此当前目录不把它写入已确认来源集合。下一版来源基线需要记录文件版本、发布日期、替代关系和 R3-2.10.2 所引用指引的状态。

## 8. 当前覆盖和缺口

| 内容 | 当前覆盖 | 后续处理 |
| --- | --- | --- |
| DORA Chapters I-IX | 已覆盖 9 个 Chapter 和 Articles 1-64 的标题与主题定位。 | 变更时重新核对 Official Journal。 |
| DORA 五个核心领域 | 已覆盖 ICT 风险、事件、韧性测试、第三方风险和信息共享。 | 第 5 步只对 ICT 变更管理做深度建模。 |
| Level 2 文件 | 12 项文件均已映射到授权条款和主题。 | 后续按具体要求建立精确引用。 |
| ESA 指引 | 2 项已确认指引映射到 Articles 11 和 32。 | 其他 Q&A、指引和 2026 年监督材料尚未建立完整目录。 |
| EMI 适用入口 | 已区分未获 EMD2 Article 9(1) 豁免与已获该豁免 EMI 的 ICT 风险管理路径。 | 具体机构事实和最终适用结论保持待确认。 |
| 比例原则和规模 | 已记录 Articles 3、4、16 的关系。 | 各具体条款中的 microenterprise 或比例安排尚未逐项索引。 |
| Malta 国内层 | 已定位 S.L. 330.20、Cap. 376 和 FIR/01 的相关位置。 | FIR/03 和 amended EBA/GL/2019/04 需要进入下一版来源基线。 |
| ICT 变更管理 | 已建立完整框架和简化框架的上下游目录。 | 要求、控制、检查和证据在第 5 步建立。 |
| Recitals 和 Article 3 全部定义 | 当前只索引与目录边界直接相关的内容。 | 有明确使用场景后再扩展，避免无差别复制法规。 |
| 其他成员国 | 当前只覆盖 Malta。 | 进入其他司法辖区时独立建立国内层。 |

本目录没有收录法规全文，没有逐条提取监管要求，没有建立工程控制，也没有判断任何具体 EMI 机构已经符合 DORA。

## 9. 待人工复核

进入 Roadmap 第 4 步前需要确认：

- 9 个 Chapter、64 个 Article 标题和主题定位准确。
- 12 项二级法规与 2 项 ESA 指引的映射没有遗漏或层级混淆。
- 未获 EMD2 Article 9(1) 豁免与已获该豁免 EMI 的两条路径表达准确。
- ICT 变更管理的直接条款和目录关联已经明确区分。
- Malta S.L. 330.20、Cap. 376、FIR/01 的条款位置准确。
- FIR/03 作为待复核来源进入下一版来源基线，并继续核对 amended EBA/GL/2019/04。
- 当前缺口能够支持 v0.1 继续进入知识模型与 Schema 设计。
