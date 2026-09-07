# DORA ICT 事件专题来源复核

| 项目 | 值 |
| --- | --- |
| 复核标识 | `DORA-ICT-INCIDENT-SOURCES-2026-09-07-R1` |
| 状态 | 已完成工程来源复核 |
| 复核日期 | 2026-09-07 |
| 工作语言 | English |
| 上游基线 | `DORA-SOURCES-2026-08-31-R2` |
| 适用专题 | DORA ICT 事件管理、分类与监管报告 |

## 1. 复核目标

本记录核对第二个 DORA 专题使用的法律文件、监管指引和 Malta 公开报送材料。它作为既有 [DORA 权威来源基线](dora-source-baseline.md) 的增量输入，不修改 `v0.1.0` 已固定的来源文件和内容摘要。

本轮只确认来源身份、版本、效力层级、适用日期、文件关系和公开操作入口。具体 Provision、Requirement、机构适用性和监管报告决定进入后续步骤。

## 2. 复核结论

1. `DORA-SOURCES-2026-08-31-R2` 登记的五份核心欧盟法律文件继续有效，英文工作文本的处理方式无需调整。
2. Regulation (EU) 2022/2554 和 Regulations (EU) 2024/1774、2024/1772、2025/301、2025/302 构成事件策略、检测、分类、报告内容、时限、模板和程序的主要法律来源。
3. `JC/GL/2024/34` 与重大 ICT 事件的年度成本和损失估算直接相关，作为事件专题的相邻监管来源保留。
4. MFSA 已公开 CRMS Circular、重大 ICT 事件报告流程和重大网络威胁通知流程，并通过 Licence Holder Portal 的 CRMS 提供操作入口。
5. MFSA 的重大 ICT 事件报告流程当前为 Version 3.00，发布日期为 2025-03-24，已经引用生效后的 Regulation (EU) 2025/301 报告时限。
6. MFSA 的 2025-01-17 CRMS Circular 发布时 Regulation (EU) 2025/301 尚未形成最终编号，正文仍有占位引用。当前报告内容和时限必须回到 Regulation (EU) 2025/301 及后续 Version 3.00 流程核对。
7. MFSA 持续更新的主题页面混有早期 FAQ 表述。法律文件身份、类型、生效日期和报告时限以 EUR-Lex 文本为准。
8. MFSA 公开材料提到重大支付运营或安全事件存在单独流程，但本轮未在当前公开主题页或官方搜索结果中定位到相应流程、模板和用户指南。该提交渠道保持待确认。

## 3. 欧盟法律文件

| 来源 | 当前状态与英文版本 | 专题用途 | 后续处理 |
| --- | --- | --- | --- |
| [Regulation (EU) 2022/2554](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)；CELEX `32022R2554` | EUR-Lex 显示 in force；2023 至 2025 年识别的 9 项勘误均不影响 English | Articles 3、10 至 14、17 至 23、46、64；主体范围、定义、事件流程和报告义务 | 复用 `src-eu-reg-2022-2554`，对象修订时更新获取日期 |
| [Commission Delegated Regulation (EU) 2024/1774](https://eur-lex.europa.eu/eli/reg_del/2024/1774/2024-06-25/eng)；CELEX `02024R1774-20240625` | EUR-Lex 显示 in force；使用合并 2025-05-15 English 勘误的文本 | 完整框架下的事件策略、检测、告警、日志和证据保存，以及简化框架中的相关事件触发与监控要求 | 复用 `src-eu-reg-2024-1774`，新增事件相关 Provision |
| [Commission Delegated Regulation (EU) 2024/1772](https://eur-lex.europa.eu/eli/reg_del/2024/1772/oj/eng)；CELEX `32024R1772` | EUR-Lex 显示 in force；2024-06-25 发布，2024-07-15 生效；未识别影响 English 的勘误 | 分类标准、重大性阈值、重复事件、重大网络威胁和报告详情 | 新增 Source，并按 Articles 1 至 12 拆分必要 Provision |
| [Commission Delegated Regulation (EU) 2025/301](https://eur-lex.europa.eu/eli/reg_del/2025/301/oj/eng)；CELEX `32025R0301` | EUR-Lex 显示 in force；2025-02-20 发布，2025-03-12 生效；2025-09-12 勘误只影响 French | 初始通知、中间报告、最终报告、重大网络威胁通知内容及时限 | 新增 Source，并按报告阶段与时限拆分 Provision |
| [Commission Implementing Regulation (EU) 2025/302](https://eur-lex.europa.eu/eli/reg_impl/2025/302/oj/eng)；CELEX `32025R0302` | EUR-Lex 显示 in force；2025-02-20 发布，2025-03-12 生效；2025-09-11 勘误只影响 French | 标准表单、联合提交、重复事件、安全电子渠道和外包报告程序 | 新增 Source，并按 Articles、Annex 和数据字段组拆分必要 Provision |

Directive (EU) 2022/2556 及其 Malta 转化材料用于核对 PSD2 事件报告路径的变化。该部分只支持制度衔接和 Malta 本地适用说明，不取代 DORA Article 23 的直接要求。

## 4. ESA 联合指引

[Joint Guidelines `JC/GL/2024/34`](https://www.eba.europa.eu/activities/single-rulebook/regulatory-activities/operational-resilience/joint-guidelines-estimation-aggregated-annual-costs-and-losses-caused-major-ict-related-incidents) 根据 DORA Article 11(11) 制定，适用日期为 2025-05-19。它规定重大 ICT 事件年度成本与损失的估算和提交方法，并与 2024/1772 的经济影响分类、Article 19(4)(c) 最终报告相连。

该指引在专题中的处理边界：

- 建立独立 Source，authority level 使用 `regulatory_guideline`。
- 只为 Article 11(10) 的记录和应主管机关要求提交估算建立 Requirement。
- microenterprise 排除、参考年度选择和后续变更通知必须保留原始适用条件。
- 不把主管机关可能提出的请求转换成无条件年度报送结论。

## 5. Malta 公开材料

### 5.1 固定文件

| 来源 | 版本或日期 | 可支持的内容 | 来源层级 |
| --- | --- | --- | --- |
| [Cyber Reporting Management System Circular](https://www.mfsa.mt/wp-content/uploads/2025/01/Cyber-Reporting-Management-System-CRMS.pdf) | 2025-01-17 | CRMS 入口、DORA 适用主体、重大 ICT 事件和重大网络威胁的 Malta 提交通道；它声明替代早期 `Reporting of Major ICT-Related Incidents` Circular | MFSA official information |
| [Major ICT-Related Incident Reporting Process](https://www.mfsa.mt/wp-content/uploads/2022/10/Major-ICT-Related-Incident-Reporting-Process.pdf) | Version 3.00，2025-03-24 | DORA 范围主体通过 CRMS 提交、三阶段报告及当前时限；对非 DORA 主体的 expectation basis 必须分开表达 | MFSA supervisory process |
| [User Guidelines for Submitting Major ICT-Related Incident Reports](https://www.mfsa.mt/wp-content/uploads/2022/10/User-Guidelines-for-Submitting-Major-ICT-Related-Incident-Reports.pdf) | 当前文件未显示稳定版本号；2026-09-07 获取 | Licence Holder Portal 登录、CRMS 权限、初始/中间/最终报告上传、补交、沟通和撤回操作 | MFSA operational guidance |
| [Significant Cyber Threat Notification Process](https://www.mfsa.mt/wp-content/uploads/2025/01/Significant-Cyber-Threat-Notification-Process.pdf) | Version 1.00，2025-01-17 | 自愿通知范围、分类入口和 CRMS 路径 | MFSA supervisory process |
| [User Guidelines for Submitting Significant Cyber Threat Notifications](https://www.mfsa.mt/wp-content/uploads/2025/01/User-Guidelines-for-Submitting-Significant-Cyber-Threat-Notifications.pdf) | 当前文件未显示稳定版本号；2026-09-07 获取 | Licence Holder Portal 和 CRMS 操作步骤 | MFSA operational guidance |

### 5.2 持续更新入口与模板

[MFSA Supervisory ICT Risk and Cybersecurity](https://www.mfsa.mt/our-work/supervisory-ict-risk-and-cybersecurity/) 是发现当前流程、模板和用户指南的官方入口。本轮获取日期为 2026-09-07。

页面链接的 Major ICT-Related Incident 和 Significant Cyber Threat Excel 模板属于动态操作材料。模板页面和文件未提供足以长期复现的公开版本号。后续使用规则为：

- 法定字段依据 Regulation (EU) 2025/302 的 Articles 和 Annex 建模。
- Malta 提交操作引用 MFSA 固定流程和用户指南。
- 实际任务使用 Excel 模板时记录下载时间、文件 SHA-256 和提交渠道。
- 发布版本不复制动态 Excel 文件，也不把某次下载内容当成永久有效模板。

## 6. Source 对象

事件专题使用以下 Source 入口。2026-09-07 已完成 2 个既有对象复用和 7 个新增对象建模：

| 处理 | Source ID | 内容 |
| --- | --- | --- |
| 复用 | `src-eu-reg-2022-2554` | DORA Level 1 |
| 复用 | `src-eu-reg-2024-1774` | 完整与简化 ICT 风险管理框架中的事件检测和响应要求 |
| 新增 | `src-eu-reg-2024-1772` | 事件分类和重大性阈值 RTS |
| 新增 | `src-eu-reg-2025-301` | 报告内容和时限 RTS |
| 新增 | `src-eu-reg-2025-302` | 报告模板和程序 ITS |
| 新增 | `src-esa-jc-gl-2024-34` | 年度成本与损失联合指引 |
| 新增 | `src-mfsa-crms-circular-2025` | Malta CRMS Circular |
| 新增 | `src-mfsa-major-ict-incident-process-2025` | Malta 重大 ICT 事件报告流程 Version 3.00 |
| 新增 | `src-mfsa-significant-cyber-threat-process-2025` | Malta 重大网络威胁通知流程 Version 1.00 |

用户指南是否进入正式知识图，由后续 Control 是否包含 Malta Portal 操作规则决定。动态 Excel 模板暂不建立 Source 对象。

## 7. 待确认问题

1. 确认 MFSA 针对 Article 23 非 ICT 重大支付运营或安全事件的当前流程、模板和提交入口。
2. 确认 Malta 主管机关何时要求 EMI 提交 Article 11(10) 年度成本与损失估算，以及具体传输方式。
3. 确认用户指南是否存在未显示在文件正文中的发布日期、版本号或替代关系。
4. 在建立 Provision 前核对 2025/302 Annex 的字段级拆分粒度，避免为每个表格单元创建低价值对象。
5. 在建立 Requirement 前分别处理强制重大事件报告、重大网络威胁自愿通知和支付相关事件三条路径。

## 8. 使用边界

本记录完成公开来源的工程核对，不构成法律意见或具体 EMI 的适用性结论。MFSA 页面和操作材料用于 Malta 监管背景及提交操作，欧盟义务继续由 DORA 和相关二级法规直接支持。公开来源存在冲突、遗留表述或缺失入口时，知识状态必须保持待确认。
