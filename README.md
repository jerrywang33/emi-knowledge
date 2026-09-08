# EMI Knowledge｜面向欧洲 EMI 的法规、业务与技术知识库

EMI Knowledge 当前固定发布为 DORA `v0.3.0` 工程基线，包含 ICT 变更管理，ICT 事件管理、分类与监管报告，以及 ICT 业务连续性、备份与恢复三条完整知识链。当前内容不提供具体机构的法律适用性或合规结论。

当前建设范围、步骤和完成条件见 [Roadmap](roadmap/README.md)。

当前固定发布为 [`v0.3.0`](releases/v0.3.0/README.md)，版本范围和限制见[发布记录](docs/releases/v0.3.0.md)，三类使用结果见[独立使用验收](docs/acceptance/v0.3.0.md)。[`v0.1.0`](docs/releases/v0.1.0.md) 和 [`v0.2.0`](docs/releases/v0.2.0.md) 继续作为历史固定版本保留。

---

## EMI Knowledge 是什么

EMI Knowledge 是面向欧洲 EMI 展业的共享专家知识库。它将欧盟法规、技术标准、监管指引、成员国规则，以及经过确认的业务和技术决定，整理成有来源、有版本、有适用范围、有确认状态并且能够相互追溯的知识，供人、Agent 和其他产品共同使用。

其中，监管要求及其业务和技术控制按照一条能够持续维护和检查的知识链组织：

```text
权威来源
  → 条款
  → 监管要求
  → 适用范围
  → 人工解释与决定
  → 控制目标
  → 业务规则与技术控制
  → 检查和测试
  → 证据要求
```

EMI Knowledge 主要包含：

- EMI 业务概念、参与角色、正常流程、资金与记录关系、异常处理和设计方法。
- 法规、监管资料及其精确条款、版本、生效时间和来源。
- 司法辖区、牌照主体、业务活动、产品和时间维度上的适用范围。
- 结构化知识地图，以及法规要求与业务、系统、数据、权限和运维控制之间的关系。
- 经过确认的业务规则、技术控制和仍需人工判断的问题。
- 可复用的 Skills、任务模板、检查清单、测试用例和证据模板。
- 面向人员阅读、Agent 上下文和产品集成的不同发布结果。

EMI Knowledge 不代替法律、合规、业务或管理机构作出适用性判断和风险决定。未经确认的解释不能作为既定事实发布，Agent 生成的内容不能因为写入知识库就自动成为权威知识。

## 为什么单独建设

欧洲 EMI 的很多要求最终需要通过系统实现。DORA 的 ICT 风险和业务连续性、GDPR 的个人数据保护、AML/CFT 与制裁框架下的客户识别和交易监控，以及客户资金保护、账务和支付规则，都会落实到架构、数据、权限、流程、测试和日常运维中。

但法规原文不能直接当作技术需求使用。从外部规则到系统实现，中间至少要完成适用性判断、人工解释、控制设计、业务规则、技术实现和验证证据的转换。当前这些知识通常分散在法规文件、监管沟通、内部制度、项目文档和少数专家经验中，存在几个直接问题：

- 同一条规则在不同国家、主体、产品和时间下可能有不同适用结果。
- 法规要求与系统控制、测试和证据之间缺少稳定关联。
- 人、Agent 和产品各自维护一套内容，容易出现版本不一致。
- 法规或内部决定变化后，难以判断哪些规则、系统和测试受到影响。
- Agent 容易把来源事实、工程推导和未经确认的解释混在一起。

因此，EMI Knowledge 独立于具体研发任务和 Agent Runtime 建设。它负责把知识维护好并按版本发布，使同一份经过治理的知识可以被多个团队、多个 Agent 和多个产品重复使用。

## 知识如何组织

知识链中的每类内容承担不同职责：

| 类型 | 保存的内容 | 必须回答的问题 |
| --- | --- | --- |
| **权威来源** | 发布机构、文件标识、版本或日期、原始链接、获取时间。 | 内容来自哪里，使用的是哪个版本？ |
| **条款** | 原文中的精确位置，以及在许可范围内保存的必要摘录或摘要。 | 哪一段原文支持后续结论？ |
| **监管要求** | 从条款中整理出的义务、限制、条件和期限。 | 规则要求什么，禁止什么？ |
| **适用范围** | 国家或地区、主体类型、牌照角色、业务活动、产品、数据和有效时间。 | 这项要求在什么条件下适用？ |
| **人工解释与决定** | 由有权人员确认的解释、选择、例外、理由和确认时间。 | 哪些结论不能仅由原文或 Agent 决定？ |
| **控制目标** | 为满足要求需要实现的可检查结果。 | 系统或流程必须达到什么状态？ |
| **业务与技术规则** | 业务流程、数据、权限、接口、配置、运维和异常处理要求。 | 控制具体如何实现？ |
| **检查和测试** | 检查清单、测试条件、预期结果和失败处理。 | 如何判断实现是否满足要求？ |
| **证据要求** | 需要保留的记录、报告、日志、审批和制品。 | 如何证明检查发生过并得到该结果？ |

上述九类内容是知识链中的信息职责。v0.1 使用 `Source`、`Provision`、`Requirement`、`Decision`、`Control` 和 `Verification` 六种核心对象承载这些信息；适用范围、实施规则和证据要求分别内嵌在 `Requirement`、`Control` 和 `Verification` 中。具体取舍见 [Decision 0001：v0.1 最小知识模型](docs/decisions/0001-v0.1-minimal-knowledge-model.md)。

受控知识对象必须使用稳定标识相互引用。来源事实、工程推导、待人工确认事项和已确认决定必须明确区分，不能只靠文字语气猜测其可信程度。

业务概念、完整流程和设计说明保存在领域文档中，并引用相关知识对象。通用业务说明不要求逐段拆成六类对象；涉及监管要求、正式控制和检查条件时，仍需关联经过审查的对象，避免重复维护规则。

知识的发布状态与内容的确认状态是两件事。例如，一个版本可以已经发布，但其中仍明确包含“需要在具体任务中确认”的事项；“已发布”不等于“适用于所有 EMI 项目”。

## 内容范围

项目计划逐步覆盖以下领域，不在初始化阶段一次性铺开：

| 领域 | 主要内容 |
| --- | --- |
| **EMI 与支付业务** | 牌照和治理、电子货币发行与赎回、客户资金保护、支付服务、账务与对账、投诉和运营要求。 |
| **ICT 风险与运营韧性** | ICT 风险管理、事件、业务连续性、恢复、测试、变更、第三方和证据，对应 DORA 及相关技术标准。 |
| **数据保护** | 处理目的和法律依据、数据最小化、访问控制、保留与删除、数据主体权利、跨境传输、事件处置。 |
| **AML/CFT 与制裁** | 客户识别、尽职调查、风险评级、持续监控、交易监控、可疑活动处理、名单筛查和记录保留。 |
| **成员国与机构规则** | 欧盟规则的成员国实施、主管机关要求，以及经过授权确认的机构内部政策和风险决定。 |
| **研发与验证方法** | 将监管要求转成 PRD、TRD、系统控制、测试和证据的 Skills、模板与检查规则。 |

首选来源是法规制定机构、主管机关和标准制定机构发布的正式材料。例如 [EUR-Lex](https://eur-lex.europa.eu/)、[European Banking Authority](https://www.eba.europa.eu/)、[European Data Protection Board](https://www.edpb.europa.eu/)、[MFSA](https://www.mfsa.mt/) 和 [FATF](https://www.fatf-gafi.org/)。二手文章可以帮助发现问题，但不能单独作为关键结论的依据。

当前已发布知识聚焦 [DORA](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R2554)，V1.0 建设已开始补充 EMI 与支付业务说明。DORA Article 2 将电子货币机构列入适用主体范围，并对 ICT 风险管理、事件、韧性测试、第三方风险和信息共享等领域作出规定。具体机构的适用结论仍需结合主体资格、规模、活动和相关例外逐项确认。

## V1.0 范围

V1.0 计划形成面向 Malta 母国 EMI、支持后续 EU/EEA 展业的核心监管与工程知识基线。范围按照四个顶层领域组织，其中 Financial Crime 分为两条独立知识链：

| 顶层领域 | 独立知识链 | V1.0 核心内容 |
| --- | --- | --- |
| **EMI & Payments** | EMI 与支付服务 | 客户与账户、资金流转、支付流程、账务与对账的业务知识；牌照范围、治理与适格性、初始资本和自有资金、客户资金保护、电子货币发行与赎回、代理与分销、外包与跨境展业、支付执行、SCA、欺诈、退款、投诉和监管报告。 |
| **DORA** | 数字运营韧性 | ICT 风险治理、资产识别与保护、事件管理与报告、业务连续性与恢复、变更管理、数字运营韧性测试与 TLPT 适用性、ICT 第三方登记册、合同、集中风险和退出安排。 |
| **GDPR** | 数据保护 | 数据角色与处理活动、处理依据、目的限制、数据最小化、透明度、数据主体权利、保留与删除、访问控制、DPIA、处理者、跨境传输和个人数据泄露。 |
| **Financial Crime** | AML/CFT | 业务风险评估、客户风险评级、CDD/EDD、受益所有人、PEP、资金与财富来源、持续监控、交易监控、可疑交易报告、禁止泄密、资金转移信息和记录保存。 |
| **Financial Crime** | Restrictive Measures | 风险暴露评估、名单来源与版本、客户和交易筛查、命中调查、资产冻结、禁止提供资金、主管机关报告、反规避和证据链。 |

### EMI 与支付业务知识

EMI & Payments 同时承担业务学习入口，说明客户如何开户、资金如何流转、支付如何处理，以及账务和对账如何配合。首批业务专题为：

| 专题 | 需要讲清楚的问题 |
| --- | --- |
| 客户与账户 | 客户、账户和钱包的含义与关系，开户、启用、限制和关闭的流程。 |
| 电子货币与资金流转 | 充值、发行、支付和赎回的业务过程，客户余额、业务记录与外部资金的关系。 |
| 支付处理与异常 | 参与方、正常处理步骤、状态与记录，以及重复请求、超时、结果未知、失败和退款的处理依据。 |
| 账务与对账 | 业务订单、交易流水、账务分录和外部账单的关系，以及重复、遗漏和金额差异的调查与处理。 |

首份[“支付处理与异常”业务说明](docs/emi-payments/payment-processing-and-exceptions.md)已形成修订 2 集中审阅稿，以普通 SEPA 欧元转账（SCT）为例，包含正常流程、异常区别、记录与处理建议和待确认清单。[来源核对记录 R2](docs/sources/emi-payments-sct-source-review.md)保存 EPC 文件版本、指定章节与 PDF 摘要；[10 个案例与文档检查结果](docs/emi-payments/payment-processing-and-exceptions-cases.md)分别记录事实、判断依据、建议与禁止动作，以及未决事项。

本轮正文整理和作者文档自查已完成，维护者审阅、独立使用检查及真实渠道验证尚未进行。真实 PSP、接入方式、账务规则和法律适用性仍需确认；公开知识缺口与机构输入分别维护在业务说明第 9 节。

业务说明放在现有 [`docs/emi-payments/`](docs/emi-payments/README.md) 中，关联各领域知识对象；受控 Topic 继续保存在 `knowledge/topics/`。当前草案未建立普通 SCT 的正式知识链，不进入现有 JSON 发布；固定版本继续为 `v0.3.0`。

### 法规边界

- EMI 与支付服务以现行 [EMD2](https://eur-lex.europa.eu/eli/dir/2009/110/oj/eng)、[PSD2](https://eur-lex.europa.eu/eli/dir/2015/2366/oj/eng) 及其配套规则为直接基线。PSD3/PSR 在完成立法、正式公布和适用状态核对前只进入迁移影响分析。
- DORA 在现有 ICT 变更、事件和业务连续性专题上继续补齐风险管理、韧性测试和 ICT 第三方风险等知识链。
- GDPR 以 [Regulation (EU) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)、相关 EDPB 材料和 Malta 数据保护规则构成分层来源。
- AML/CFT 同时管理现行欧盟与 Malta 制度，以及 [AMLR](https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng) 和 [AMLD6](https://eur-lex.europa.eu/eli/dir/2024/1640/oj/eng) 的迁移时间线；资金转移信息单独纳入 [Regulation (EU) 2023/1113](https://eur-lex.europa.eu/eli/reg/2023/1113/oj/eng)。
- Restrictive Measures 单独记录欧盟和成员国措施、EBA Guidelines、动态名单及主管机关流程，不使用 AML/CFT 结论代替冻结、禁止交易或外部报告决定。

### 横向维度

| 维度 | V1.0 处理方式 |
| --- | --- |
| **司法辖区** | 保存 EU 共同基线，以 Malta 作为首个母国监管层；其他成员国要求在具体展业国家确认后增加。 |
| **时间状态** | 区分现行适用、已公布尚未适用、立法提案、已替代和历史版本，不能把迁移目标提前发布为现行义务。 |
| **主体与活动** | 记录 EMI 类型、豁免状态、客户类型、支付服务、产品、渠道和展业国家；无法确定的事实保持待确认。 |
| **公开与私有** | 公共仓库保存法规和通用工程知识，机构政策、风险决定、监管往来和真实证据保存在独立私有知识层。 |
| **动态数据** | 制裁名单、高风险国家等高频变化数据通过受控来源和版本记录使用，不把仓库中的静态副本当作实时判断依据。 |

### V1.0 验收场景

1. 客户开户、KYC、制裁筛查和隐私告知。
2. 电子货币充值、发行、赎回和客户资金保护。
3. 支付发起、执行、失败、退款、欺诈和投诉。
4. 可疑交易或制裁命中的调查、授权决定和报告。
5. 数据主体请求、数据删除和个人数据泄露。
6. ICT 中断、第三方故障、恢复、事件分类和监管报告。

每个场景都必须形成 `Source → Provision → Requirement → Decision → Control → Verification → EvidenceRequirement` 完整知识链，能够由人员、Agent 和产品按同一固定版本使用，并明确保留机构参数、授权决定和真实运行结果。V1.0 发布前至少使用一个经过脱敏的真实 EMI 产品范围完成跨领域工程验收。

### 暂不纳入 V1.0

- Malta 以外所有 EU/EEA 成员国的完整本地规则；具体展业国家按照实际计划增量建设。
- MiCA 与加密资产、消费信贷、税务和 CESOP、卡组织私有规则等尚未进入已确认产品范围的领域。
- 实时制裁名单或其他外部动态数据的仓库内全量镜像。
- 具体机构的法律适用性、监管批准、风险接受、生产配置和合规状态结论。

## 谁来使用

同一条知识只维护一次，再根据使用方生成不同结果：

| 使用方 | 使用方式 | 不允许的方式 |
| --- | --- | --- |
| **业务、合规、风险和技术人员** | 阅读知识地图、核对来源、评审解释、设计控制和执行检查。 | 把通用说明直接当成具体机构的最终结论。 |
| **Agent** | 加载任务明确允许的知识、Skills、模板和检查规则。 | 自行选择未批准版本，或者把待确认事项改写成事实。 |
| **其他产品** | 通过稳定 Schema、版本化文件或后续接口查询和引用知识。 | 绕过版本与状态直接读取草稿作为生产规则。 |

面向阅读的 Markdown、面向机器的结构化文件和后续检索索引应由同一份受控内容生成或相互校验，不能分别维护三套事实。

## 公共知识与私有知识

本仓库是公开仓库，只保存可以公开共享的基础知识：

- 公开法规和监管资料的来源记录、结构化要求和通用控制映射。
- 不绑定具体机构的业务与技术规则、Skills、模板、检查清单和测试示例。
- Schema、校验工具、发布工具和脱敏示例。

以下内容不得提交到本仓库：

- MFSA 或其他主管机关与具体机构之间的非公开往来文件。
- 牌照申请材料、内部政策、风险接受、审计发现和机构特定监管解释。
- 客户、员工、合作方或交易数据，以及生产日志、凭据和环境配置。
- 其他受保密义务、知识产权或数据保护要求限制的内容。

这些内容应保存在独立的私有知识层。公共知识和私有知识可以在具体任务中共同使用，但必须保留各自的来源、权限和版本，不能为了使用方便将私有内容复制到公共仓库。

```text
公开权威资料 ──→ EMI Knowledge 公共知识 ──→ 人员、Agent 和产品

机构内部资料 ──→ 独立的私有知识层 ───────→ 机构和任务专用内容
```

## 知识治理

### 来源与适用性

- 每项关键结论必须能够回到精确来源，至少记录发布机构、文件标识、版本或日期、条款位置、原始链接和获取时间。
- 必须明确记录司法辖区、主体、业务、产品、数据和有效时间；适用范围不清楚时，状态应保持待确认。
- 欧盟规则、成员国实施、主管机关要求和机构内部决定分层记录，不能相互替代。
- 法规全文原则上保留权威链接和必要定位，不在没有明确授权或必要性的情况下复制整份文件。

### 确认与责任

- Agent 可以查找、整理、比较和提出修改建议，但不能批准自己的解释。
- 法律适用性、重大合规解释、例外和风险接受必须由具备权限的人员确认。
- 工程推导必须说明它依据哪些监管要求、采用了什么假设，以及仍有哪些待确认事项。
- 审查记录需要绑定具体内容版本；内容变化后，原确认不能自动沿用。

### 版本与变更

```text
草稿 → 审查 → 批准发布 → 被新版本替代或停止使用
```

- 已发布版本不可原地修改。纠错或规则变化必须产生新版本，并保留旧版本供历史任务复现。
- 发现新法规、监管更新或来源变化，只能创建待审查变更，不能自动覆盖已批准知识。
- 每次发布必须通过 Schema、引用完整性、链接关系和必要内容检查，并保存审查人与变更原因。
- 检索数据库、向量索引和缓存只提供可重新生成的读取能力，不作为知识事实来源。

## 外部系统接入

EMI Knowledge 通过稳定 Schema、版本化文件和后续接口发布知识。具体使用方通过各自的适配器选择、校验和转换已批准版本。核心知识模型不包含某个 Agent Runtime、工作流或目标产品的内部类型。

[EMI Harness](https://github.com/jerrywang33/emi-harness) 是一个后续使用方。它可以将 EMI Knowledge 的发布版本转换为某次研发任务的受控上下文，并负责该任务的权限、执行、验证和证据。转换过程必须保留来源标识、知识版本、内容摘要和待确认事项，也不能反向修改 EMI Knowledge 的发布状态。

## 建设原则

- **先有来源，再有结论**：没有可核对来源的关键规则不能进入正式发布版本。
- **事实与判断分开**：原文支持的事实、人工解释、工程推导和待确认事项分别记录。
- **适用范围必须明确**：通用知识不冒充具体国家、机构或产品的最终规则。
- **一次维护，多种使用**：人员文档、Agent 输入和产品数据来自同一份受控知识。
- **版本可以复现**：任何历史任务都能找到当时使用的知识内容和确认记录。
- **自动检查优先**：能由 Schema、引用检查和测试判断的问题，不交给 Agent 凭感觉判断。
- **公开与私有分离**：公共基础知识可以复用，机构秘密和个人数据始终留在受控私有环境。
- **从小闭环开始**：先跑通一条从来源到证据的完整链路，再扩展法规数量和技术能力。

## 第一阶段：DORA

第一阶段采用“DORA 全景目录 + ICT 变更管理完整知识链”。全景目录用于说明 DORA 的主题、文件和条款关系；ICT 变更管理用于跑通从权威来源到控制、检查和证据的完整过程。

`v0.2` 在现有方法上增加 DORA ICT 事件管理、分类与监管报告知识链。专题范围、实施步骤和完成条件见 [`v0.2 Roadmap`](roadmap/v0.2-dora-ict-incidents.md)，目录与发布方式见 [Decision 0002](docs/decisions/0002-dora-topic-index-and-release-composition.md)，来源核对结果和条款范围分别见 [`DORA-ICT-INCIDENT-SOURCES-2026-09-07-R1`](docs/sources/dora-ict-incidents-source-review.md)与[事件专题说明](docs/dora/topics/ict-incident-management-reporting.md)。

`v0.3` 已增加 DORA ICT 业务连续性、备份与恢复知识链，覆盖完整框架和简化框架下的 BIA、连续性计划、恢复目标、备份还原、计划启动、恢复演练和整改。DORA Chapter IV 的通用数字运营韧性测试及 TLPT 保持为后续独立专题。范围和完成结果见 [`v0.3 Roadmap`](roadmap/v0.3-dora-ict-business-continuity-backup-recovery.md)。

当前来源收集和版本核对结果见 [DORA 权威来源基线](docs/sources/dora-source-baseline.md)。`DORA-SOURCES-2026-08-31-R2` 已经人工复核，可作为 v0.1 后续知识建设的来源输入；具体机构适用性仍需单独判断。

DORA 的正式结构、主题、条款、配套文件和 EMI 适用路径见 [DORA 全景目录](docs/dora/dora-landscape.md)。`DORA-LANDSCAPE-2026-08-31` 已经人工复核，可作为知识模型与 Schema 设计输入。

首批权威资料包括：

- [Regulation (EU) 2022/2554，DORA](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R2554)。
- [Commission Delegated Regulation (EU) 2024/1774](https://eur-lex.europa.eu/eli/reg_del/2024/1774)，其中 Article 17 细化 ICT 变更管理程序。
- [MFSA：ICT Change Management under DORA](https://www.mfsa.mt/publication/ict-change-management-under-the-digital-operational-resilience-act-dora/)，作为 Malta 主管机关发布的说明材料记录，并与具有约束力的法规来源分层管理。

第一阶段形成以下基础能力：

1. DORA 官方来源清单及文件关系。
2. DORA 主题地图和明确的覆盖边界。
3. ICT 变更管理的条款、监管要求、适用条件和待确认事项。
4. 与要求逐项关联的治理措施、技术控制、检查清单、测试和证据模板。
5. 最小知识 Schema、引用校验、版本规则和发布检查。
6. 来自同一份受控内容的人员文档与机器可读文件。

第一阶段完成时，每项已发布要求都应能回到精确权威来源，明确适用边界和确认状态，关联可执行控制、检查方式与证据要求，并能够由人员、Agent 和其他产品按固定版本独立使用。

## 仓库结构

仓库按照受控知识、人员文档、可复用执行资源、验收场景和固定发布分层。六类知识对象保持全局唯一，领域通过 Topic 组合对象；同一项控制可以同时承接多个法规领域的 Requirement。

```text
emi-knowledge/
├── README.md
├── knowledge/
│   ├── README.md
│   ├── v0.1/
│   │   ├── sources/
│   │   ├── provisions/
│   │   ├── requirements/
│   │   ├── decisions/
│   │   ├── controls/
│   │   └── verifications/
│   └── topics/
│       ├── emi-payments/
│       ├── dora/
│       ├── gdpr/
│       ├── aml-cft/
│       └── restrictive-measures/
├── docs/
│   ├── emi-payments/
│   │   └── topics/
│   ├── dora/
│   │   └── topics/
│   ├── gdpr/
│   │   └── topics/
│   ├── aml-cft/
│   │   └── topics/
│   ├── restrictive-measures/
│   │   └── topics/
│   ├── sources/
│   ├── decisions/
│   ├── model/
│   ├── acceptance/
│   └── releases/
├── skills/
│   ├── emi-payments/
│   ├── dora/
│   ├── gdpr/
│   ├── aml-cft/
│   └── restrictive-measures/
├── templates/
│   ├── tasks/
│   ├── evidence/
│   └── deliverables/
├── scenarios/
├── roadmap/
│   └── v1.0/
├── schemas/
├── releases/
├── examples/
├── src/
└── tests/
```

### 内容目录

| 路径 | 文件职责 |
| --- | --- |
| [`knowledge/v0.1/`](knowledge/v0.1/README.md) | 保存当前 Schema `0.1.0` 的六类受控知识对象。每个 YAML 文件只保存一个对象，文件名必须等于对象稳定 ID。 |
| [`knowledge/v0.1/sources/`](knowledge/v0.1/sources/) | `src-*.yaml` 保存法规、监管材料和其他权威输入的发布机构、版本、效力、司法辖区、日期及官方地址。 |
| [`knowledge/v0.1/provisions/`](knowledge/v0.1/provisions/) | `prv-*.yaml` 保存来源中的精确条款位置和受控摘要。 |
| [`knowledge/v0.1/requirements/`](knowledge/v0.1/requirements/) | `req-*.yaml` 保存从 Provision 推导的监管要求、适用范围和确认状态。 |
| [`knowledge/v0.1/decisions/`](knowledge/v0.1/decisions/) | `dec-*.yaml` 保存经过确认的通用工程选择、理由、前提和替代关系。 |
| [`knowledge/v0.1/controls/`](knowledge/v0.1/controls/) | `ctl-*.yaml` 保存承接 Requirement 的业务或技术控制及实施规则。 |
| [`knowledge/v0.1/verifications/`](knowledge/v0.1/verifications/) | `ver-*.yaml` 保存 Control 的检查步骤、通过与失败条件、失败处理和 EvidenceRequirement。 |
| [`knowledge/topics/`](knowledge/topics/README.md) | 按五条独立知识链保存 Topic Manifest。`<domain>/<topic>.yaml` 只选择和组合知识对象，不复制对象正文。 |
| [`docs/`](docs/README.md) | 保存人员和 Agent 可阅读的业务概念、流程与设计说明，以及领域地图、专题说明、来源复核、设计决定、发布和验收记录。 |
| [`skills/`](skills/README.md) | 保存独立于具体 Agent Runtime 的可复用工作方法；Skill 必须绑定知识版本、输入输出和人工授权边界。 |
| [`templates/`](templates/README.md) | 保存任务、证据和交付物模板，只定义结构和必填内容，不保存真实机构数据或运行证据。 |
| [`scenarios/`](scenarios/README.md) | 保存经过脱敏的跨领域验收场景、输入和固定预期，用于验证人员、Agent 和产品的使用结果。 |

### 工程与发布目录

| 路径或文件 | 职责 |
| --- | --- |
| [`roadmap/`](roadmap/README.md) | 记录当前阶段、实施步骤和完成条件；[`roadmap/v1.0/`](roadmap/v1.0/README.md) 维护 V1.0 总体计划。 |
| [`schemas/`](schemas/) | 保存知识对象、Topic 和发布制品的 JSON Schema。目录版本表示 Schema 版本，与产品发布版本独立。 |
| [`releases/`](releases/) | 保存不可变发布。每个版本包含人员 `README.md`、产品 `knowledge.json`、Agent `agent-context.json`、输入与摘要 `manifest.json`、可重复生成配置 `release.config.json`。 |
| [`examples/`](examples/) | 保存知识模型示例和固定发布的独立读取示例，不作为正式知识或生产集成。 |
| [`src/`](src/) | 保存 TypeScript 加载、Schema 校验、知识图校验、Topic 解析、确定性发布、固定版本读取和 CLI 实现。 |
| [`tests/`](tests/) | 保存知识校验、Topic 闭包、发布复现和三类消费者契约测试。 |
| [`package.json`](package.json) | 固定 Node.js 要求、依赖和检查、校验、生成、查询命令。 |
| [`package-lock.json`](package-lock.json) | 锁定依赖解析结果，保证本地和 CI 安装一致。 |
| [`tsconfig.json`](tsconfig.json) | 定义 TypeScript 编译和类型检查规则。 |
| [`.gitignore`](.gitignore) | 排除依赖、本地环境和临时文件，避免它们进入公开知识版本。 |

### 实现与测试文件

| 文件 | 职责 |
| --- | --- |
| [`src/model.ts`](src/model.ts) | 定义六类知识对象、Topic、已加载文档和校验结果的 TypeScript 类型。 |
| [`src/loader.ts`](src/loader.ts) | 确定性遍历目录并解析 YAML、JSON 文件，报告读取和语法问题。 |
| [`src/schema-validator.ts`](src/schema-validator.ts) | 加载 JSON Schema，注册外部引用并执行单文件结构校验。 |
| [`src/graph-validator.ts`](src/graph-validator.ts) | 检查文件位置、全局 ID、类型化引用、状态、替代链、完整知识链和敏感内容。 |
| [`src/validation.ts`](src/validation.ts) | 组合加载、Schema 和知识图检查，形成仓库级校验结果。 |
| [`src/topic.ts`](src/topic.ts) | 加载和校验 Topic Manifest，并从入口 Requirement 解析确定性对象闭包。 |
| [`src/release.ts`](src/release.ts) | 按固定配置生成面向人员、Agent 和产品的发布文件及 Manifest。 |
| [`src/release-reader.ts`](src/release-reader.ts) | 校验并读取固定发布，提供关系查询和受约束 Agent 回答结构。 |
| [`src/stable-json.ts`](src/stable-json.ts) | 提供稳定 JSON 序列化，保证相同输入生成相同字节和摘要。 |
| [`src/cli.ts`](src/cli.ts) | 提供知识校验、Topic 校验和发布生成命令入口。 |
| [`tests/validation.test.ts`](tests/validation.test.ts) | 覆盖知识对象正常路径和 Schema、引用、状态、替代关系、敏感内容失败路径。 |
| [`tests/topic.test.ts`](tests/topic.test.ts) | 覆盖 Topic Manifest、对象闭包、领域隔离和批准状态检查。 |
| [`tests/release.test.ts`](tests/release.test.ts) | 覆盖确定性发布、历史版本复现、Topic 选择和发布拒绝条件。 |
| [`tests/consumer.test.ts`](tests/consumer.test.ts) | 覆盖人员、Agent 和产品读取同一固定事实及版本锁定。 |
| [`examples/model-v0.1/`](examples/model-v0.1/README.md) | 展示六类对象的最小合法文件组合。 |
| [`examples/consumer/`](examples/consumer/README.md) | 展示产品按 Requirement ID 和发布版本查询完整关系链。 |

新增目录必须同时具有明确职责和实际内容。历史发布引用的文件路径保持不变；目录调整不能破坏 `v0.1.0`、`v0.2.0` 和 `v0.3.0` 的确定性复现。

## 技术选择

- 知识正文优先使用 Markdown，结构化元数据优先使用 YAML 或 JSON，并由 JSON Schema 校验。
- 六类知识对象继续按类型保存；专题清单单独记录每个专题的范围、入口要求和建设状态。
- Git 保存版本、评审和变更历史；正式发布版本使用不可变标识和内容摘要。
- 校验、转换和发布工具使用 TypeScript，知识内容不依赖特定 Agent Runtime 或目标产品。
- 初始阶段不引入数据库、向量数据库或 RAG 服务。真实使用证明需要后再增加，并确保索引可以从仓库内容重新生成。
- 不创建空目录或占位代码。目录至少包含职责说明或经过检查的实际内容，规划中的文件在进入对应实施步骤后创建。

### 本地检查

项目使用 Node.js 22 或更高版本。安装固定依赖并执行全部工程检查：

```bash
npm ci
npm run check
npm run release:v0.1
npm run release:v0.2
npm run release:v0.3
npm run example:query -- req-full-recovery-objectives v0.3.0
```

`npm run check` 依次执行 TypeScript 类型检查、自动化测试、Schema 校验和跨对象知识图校验。任何未知字段、断裂引用、状态冲突、确认关系缺失、已批准专题的知识链缺口或已配置的敏感内容模式都会使命令失败。三个发布命令分别按固定配置重新生成对应版本，自动化测试逐字节检查生成结果与仓库版本一致。`npm run example:query` 展示产品如何锁定发布版本、从 Manifest 解析 Schema，并查询一条完整关系链。

专题清单同时进入 `npm run check`。它会检查清单 Schema、目录命名、入口引用、批准状态和解析结果；字段及组合发布规则见 [v0.1 专题清单模型](docs/model/v0.1-topic-manifest.md)。

当前知识目录可以包含仍在建设的专题对象。仓库检查验证对象结构和引用，已批准 Topic 与发布候选继续执行完整知识链检查。无 Topic 的历史发布通过已固定 Manifest 复现；规则见 [Decision 0003](docs/decisions/0003-working-knowledge-and-frozen-releases.md)。

## 当前状态

`v0.1.0` 已经完成 DORA 权威来源基线 R2、DORA 全景目录、v0.1 知识模型与 JSON Schema、包含 57 个对象的 ICT 变更管理完整知识链、TypeScript 校验与确定性发布工具，以及人员、Agent 和产品三类独立工程使用验收。

`v0.2.0` 固定两个 Topic、256 个对象和 679 条关系，并通过人员、Agent 和产品三类独立工程使用验收。事件专题包含 66 项入口 Requirement、13 项 Control、13 项 Verification 和 26 类证据要求，覆盖事件管理、分类、欧盟层监管报告、年度成本与损失估算以及 Malta 已公开确认的 CRMS 路径。

`v0.3.0` 已固定三个 Topic、342 个对象、945 条关系、62 类证据要求和 243 个明确待确认项，并通过人员、Agent 和产品三类独立工程使用验收。业务连续性专题包含 23 个入口 Requirement、10 个 Control、10 个 Verification 和 20 类证据要求；其独立闭包为 94 个对象，未改变 `v0.1.0` 和 `v0.2.0`。来源复核见 [`DORA-ICT-CONTINUITY-SOURCES-2026-09-07-R1`](docs/sources/dora-ict-business-continuity-source-review.md)，专题边界见[业务连续性、备份与恢复专题说明](docs/dora/topics/ict-business-continuity-backup-recovery.md)。

V1.0 的总体领域、知识链、验收场景和目录职责已经确定，实施顺序和下一个专题仍待讨论。真实 EMI 场景将用于校准知识内容、机构待定参数和三类使用方式；README 中列出的长期内容范围不表示相关知识适用于任何具体 EMI 机构、司法辖区或生产系统。

本项目提供工程化知识管理方法和公开参考内容，不构成法律意见、监管批准、合规认证或生产就绪声明。
