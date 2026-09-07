# DORA ICT 事件管理、分类与监管报告专题

| 项目 | 值 |
| --- | --- |
| 专题标识 | `dora-ict-incident-management-reporting` |
| 状态 | 评审中，完整知识链已建立 |
| 目标发布 | `v0.2.0` |
| 来源复核 | [`DORA-ICT-INCIDENT-SOURCES-2026-09-07-R1`](../../sources/dora-ict-incidents-source-review.md) |
| 机器清单 | [`knowledge/topics/dora/ict-incident-management-reporting.yaml`](../../../knowledge/topics/dora/ict-incident-management-reporting.yaml) |

## 1. 要解决的问题

本专题需要把事件从首次发现到关闭后的改进连接成一条可追溯知识链：

```text
发现与记录
  -> 处置与内部升级
  -> 分类与重大性判断
  -> 客户沟通与监管报告
  -> 更新、恢复与关闭
  -> 根因分析、复核和证据留存
```

知识链为人员、Agent 和产品提供可核对的法规要求、控制和验证依据。具体事件是否达到重大标准、是否提交自愿通知、由谁批准以及采用哪些内部目标，均需在机构任务中依据事实和权限作出决定。

## 2. 三条处理路径

| 路径 | 触发与性质 | 本专题处理方式 |
| --- | --- | --- |
| 重大 ICT 事件 | 达到 DORA 与 Regulation (EU) 2024/1772 的分类条件后触发强制报告 | 建立完整的分类、三阶段报告、更新、重分类、客户沟通和证据链 |
| 重大网络威胁 | 达到重大网络威胁标准后，由金融机构决定是否自愿通知 | 将分类标准、通知字段和机构决定点分开记录 |
| 支付相关运营或安全事件 | DORA Article 23 将 Chapter III 扩展至 EMI 的相关事件，其中事件可能与 ICT 无关 | 建立独立适用路径；Malta 的非 ICT 提交入口保持待确认 |

## 3. 条款覆盖矩阵

状态含义：`纳入` 表示已进入本专题并按拆分说明建立 Provision 和必要的 Requirement；`上下文` 表示保留条款定位或关系，不直接生成 EMI Requirement；`待确认` 表示来源或适用路径仍需补充确认。

### 3.1 DORA 与事件管理措施

| 来源位置 | 覆盖内容 | 状态 | 拆分说明 |
| --- | --- | --- | --- |
| DORA Articles 2(1)(d)、3(8)-(13)、64 | EMI 范围、事件与威胁定义、适用日期 | 纳入 | 范围、定义和时间分别保存，已有对象优先复用 |
| DORA Articles 6(5)、10、11(1)-(2)、12-14 | 重大事件后的框架复核、检测、恢复、复盘、学习和沟通 | 纳入 | 只覆盖事件流程的直接依赖，不展开相邻专题全部要求 |
| DORA Articles 11(10)-(11) | 重大事件年度成本与损失汇总、主管机关按请求获取及 ESA 指引 | 纳入 | 请求条件、microenterprise 范围和估算方法分开处理 |
| DORA Article 17 | 记录、管理、跟踪、分类、职责、沟通、升级、响应和根因处理 | 纳入 | 按可以独立执行和验证的义务拆分 |
| DORA Article 18(1)-(2) | 事件分类标准和重大网络威胁评估 | 纳入 | 与 2024/1772 的计算方法和阈值建立直接关系 |
| DORA Article 18(3)-(4) | ESA 报告与技术标准授权 | 上下文 | 支持配套法规关系，不生成 EMI 直接义务 |
| DORA Article 19(1)-(5) | 强制报告、自愿通知、客户沟通、三阶段报告和报告任务外包 | 纳入 | 每条义务、条件与责任边界分别建模 |
| DORA Articles 19(6)-(8)、20-21 | 主管机关分发、统计、报告集中化评估和二级法规授权 | 上下文 | 保留与报告信息和配套法规的关系 |
| DORA Article 22 | 主管机关确认与反馈；金融机构继续对事件处理和后果负责 | 纳入 | 主管机关动作保留为上下文，金融机构责任形成直接要求 |
| DORA Article 23 | EMI 的支付相关运营或安全事件路径 | 纳入 | ICT 与非 ICT 场景保持可区分，Malta 渠道另行确认 |
| DORA Article 46 | EMI 主管机关定位 | 上下文 | 与 Malta 主管机关和提交路径关联 |
| Regulation (EU) 2024/1774 Articles 22-23 | 完整框架的事件政策、联系人、机制、证据、重复事件分析、检测、告警和日志 | 纳入 | Article 22(d) 使用合并 2025-05-15 English 勘误的文本 |
| Regulation (EU) 2024/1774 Articles 31(1)(e)、31(3)-(4)、34(f)-(i)、41 | 简化框架的事件后评估、威胁监控、触发标准、日志及复核报告 | 纳入 | 按简化框架适用条件保存；相邻安全措施只保留直接依赖 |

### 3.2 分类与重大性

| 来源位置 | 覆盖内容 | 状态 | 拆分说明 |
| --- | --- | --- | --- |
| Regulation (EU) 2024/1772 Articles 1-7 | 客户、交易、声誉、持续时间、地域、数据、关键服务和经济影响的计算方法 | 纳入 | 每种分类标准形成独立可引用 Provision |
| Regulation (EU) 2024/1772 Article 8(1) | 重大事件组合判断 | 纳入 | 关键服务条件和阈值组合保持来源表达 |
| Regulation (EU) 2024/1772 Article 8(2) | 重复事件合并判断和每月评估 | 纳入 | 保存 6 个月、同一明显根因、合并阈值和排除条件 |
| Regulation (EU) 2024/1772 Article 9 | 各项重大性阈值 | 纳入 | 法定数值单独保存，不混入机构内部阈值 |
| Regulation (EU) 2024/1772 Article 10 | 重大网络威胁标准 | 纳入 | 与自愿通知决定分开建模 |
| Regulation (EU) 2024/1772 Articles 11-12 | 其他成员国相关性和主管机关间共享详情 | 上下文 | 主管机关承担直接动作，相关信息可支持跨境影响报告字段 |

### 3.3 报告内容、时限和程序

| 来源位置 | 覆盖内容 | 状态 | 拆分说明 |
| --- | --- | --- | --- |
| Regulation (EU) 2025/301 Article 1 | 三阶段报告通用信息 | 纳入 | 通用字段作为一个稳定字段组处理 |
| Regulation (EU) 2025/301 Articles 2-4 | 初始通知、中间报告和最终报告专属信息 | 纳入 | 每个报告阶段建立独立字段组和完整性要求 |
| Regulation (EU) 2025/301 Article 5 | 三阶段时限、延误说明、周末及银行假日条件 | 纳入 | 法定时限、例外和主管机关决定条件分别保存 |
| Regulation (EU) 2025/301 Article 6 | 重大网络威胁自愿通知内容 | 纳入 | 只在机构选择通知后适用 |
| Regulation (EU) 2025/302 Articles 1-5 | 模板使用、完整准确、估算、联合提交、重复事件、安全通道和重分类 | 纳入 | Articles 1-5 按程序动作拆分，Annex 字段按语义组映射 |
| Regulation (EU) 2025/302 Articles 6-7 | 报告外包通知和第三方汇总提交 | 纳入 | 保存前置通知、责任与汇总提交条件 |
| Regulation (EU) 2025/302 Article 8 | 重大网络威胁通知模板和准确性 | 纳入 | 与 2025/301 Article 6 的内容要求关联 |
| Regulation (EU) 2025/302 Annexes I-II | 重大事件模板、数据字典和说明 | 纳入 | 按报告阶段及字段语义分组，避免逐个单元建对象 |
| Regulation (EU) 2025/302 Annexes III-IV | 重大网络威胁模板、数据字典和说明 | 纳入 | 作为自愿通知路径的字段组 |

### 3.4 Malta 操作路径

| 来源 | 覆盖内容 | 状态 | 拆分说明 |
| --- | --- | --- | --- |
| MFSA CRMS Circular，2025-01-17 | CRMS 上线、DORA 范围和 Malta 报送入口 | 纳入 | 只作为主管机关公开信息和渠道背景 |
| MFSA Major ICT-Related Incident Reporting Process v3.00 | CRMS 报告流程和 Malta 当前操作时限说明 | 纳入 | 欧盟法提供义务和时限的直接依据 |
| MFSA Major ICT Incident User Guidelines | Portal 权限、上传、补交、沟通和撤回操作 | 待确认 | Source 建模取决于稳定版本与 Control 的操作粒度 |
| MFSA Significant Cyber Threat Notification Process v1.00 | 自愿通知范围和 CRMS 路径 | 纳入 | 与强制事件报告分开 |
| MFSA Significant Cyber Threat User Guidelines | Portal 操作步骤 | 待确认 | Source 建模取决于稳定版本与 Control 的操作粒度 |
| MFSA 非 ICT 支付相关重大事件材料 | DORA Article 23 在 Malta 的独立流程、模板和入口 | 待确认 | 当前公开入口尚未定位到可确认材料 |
| MFSA 动态 Excel 模板 | 实际提交文件 | 上下文 | 任务执行时记录下载时间、SHA-256 和渠道，不把动态文件固化进发布包 |

## 4. 对象拆分规则

1. 一个 Provision 保存一个能够独立引用的条款位置或 Annex 字段组。
2. 一个 Requirement 表达一项可判断的义务、限制、条件、期限或自愿选择。
3. 法定分类阈值和报告时限保留来源数值；机构内部升级目标由 Decision 支持。
4. 主管机关承担的动作一般保留为上下文；金融机构必须准备、传递或处理的信息进入 Requirement。
5. Annex 按报告阶段和字段含义分组，不为每个表格单元建立对象。
6. 强制报告、自愿通知和 Article 23 支付事件使用独立入口，并复用共同的检测、记录、分类和证据对象。

## 5. 控制与验证设计

66 项入口 Requirement 分别由一个主 Control 直接实现，跨流程依赖使用 `supports` 关系补充。这样的划分可以明确主要责任和验证入口，同时保留检测、分类、报告、沟通和复盘之间的协作关系。

| Control | 直接实现的 Requirement | 主要结果 |
| --- | ---: | --- |
| `ctl-incident-governance-records` | 7 | 统一范围、职责、受保护事件记录、根因跟踪和证据保存。 |
| `ctl-incident-detection-alerting` | 8 | 监控输入、日志、触发条件、初步分级、告警和非工作时间响应。 |
| `ctl-incident-response-recovery` | 2 | 遏制、影响估算、恢复和安全恢复检查。 |
| `ctl-incident-classification` | 3 | 法定分类标准、重大事件组合规则和重大网络威胁判断。 |
| `ctl-regulatory-reporting-trigger` | 2 | 强制报告直接启动，自愿通知保留授权决定。 |
| `ctl-regulatory-report-workflow` | 9 | 三阶段报告、法定时限、更新、延误、例外和重分类。 |
| `ctl-regulatory-report-content` | 5 | 模板版本、阶段字段、准确性、估算标识和跨阶段一致性。 |
| `ctl-secure-regulatory-submission` | 3 | 授权提交、安全通道、MFSA CRMS、回执、备用路径和补交。 |
| `ctl-outsourced-aggregated-reporting` | 5 | 外包责任、主管机关通知、汇总条件和单体影响补充报告。 |
| `ctl-incident-communications` | 5 | 内部升级、管理层报告、客户通知、危机沟通和并行义务。 |
| `ctl-post-incident-review-learning` | 6 | 根因和有效性复核、风险与控制更新、完整或简化框架复核。 |
| `ctl-incident-trend-management-reporting` | 3 | 每月重复事件评估、趋势分析和年度管理机构报告。 |
| `ctl-annual-incident-cost-loss` | 8 | 按请求完成年度事件范围、成本损失、收回金额和 Annex 报告。 |

每个 Control 对应一个 Verification，共定义 26 类 EvidenceRequirement。5 个工程 Decision 确认通用实现方式，并将机构系统、人员角色、内部时限、模板来源、提交权限和保存期限保留为机构配置。外部提交需要机构授权角色操作，Agent 结论不能直接触发报送。

专题沿入口 Requirement 解析得到 204 个对象：9 个 Source、98 个 Provision、66 个 Requirement、5 个 Decision、13 个 Control 和 13 个 Verification。该闭包已经通过 Schema、引用、完整知识链和确定性解析检查。

## 6. 待确认问题

1. MFSA 针对非 ICT 重大支付运营或安全事件的当前流程、模板和提交入口。
2. MFSA 请求提交年度成本与损失估算的条件和传输方式。
3. 两份 MFSA Portal 用户指南的发布日期、版本号和替代关系。
4. 具体机构的 DORA 完整或简化框架路径、内部严重程度、角色、升级目标和保存期限。

## 7. 发布审查

Source、Provision、Requirement、Decision、Control、Verification 和 EvidenceRequirement 已经形成完整知识链，包含事件管理主干、完整与简化 ICT 风险管理分支、分类判断、三阶段报告、法定时限、自愿通知、安全提交、重分类、外包、Article 23 支付事件路径、年度成本与损失估算以及 Malta 已公开确认的 CRMS 路径。

下一步执行 `v0.2.0` 发布审查，固定两个专题和对象摘要，并完成人员、Agent 和产品三类使用验收。公开来源仍缺失的 Malta 操作信息继续保持待确认，并进入发布限制。
