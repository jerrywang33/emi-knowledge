# EMI Knowledge v0.3｜DORA ICT 变更、事件与业务连续性

- 版本：`v0.3.0`
- 发布级别：`engineering_baseline`
- 版本日期：`2026-09-07`
- 内容摘要：`6adba77ba28d33c8d7ed02b13848b3bb9114f6b13209fe274bb76c53c6dbdad4`

本文件由受控知识对象生成。发布级别只说明来源与工程知识经过当前范围的审查，不提供具体机构法律适用性、合规状态或生产控制认证。

## 专题

| ID | 标题 | 修订 |
| --- | --- | ---: |
| `dora-ict-business-continuity-backup-recovery` | DORA ICT business continuity, backup, and recovery | 3 |
| `dora-ict-change-management` | DORA ICT change management | 1 |
| `dora-ict-incident-management-reporting` | DORA ICT incident management, classification, and regulatory reporting | 7 |

## 范围

- 包含：DORA ICT 变更管理完整知识链，包括完整与简化 ICT 风险管理框架路径。
- 包含：DORA ICT 事件发现、记录、响应、恢复、分类、沟通、复盘和监管报告知识链。
- 包含：完整与简化框架下的 ICT 业务连续性、BIA、响应恢复、备份还原和恢复目标知识链。
- 包含：严重中断及第三方依赖场景、计划启动、危机沟通、恢复完整性、计划测试、切换和缺陷整改控制。
- 包含：Malta 已公开确认的事件报送路径和 2026 年 DORA 授权申请监督观察。
- 排除：任何具体电子货币机构的法律适用性、事件分类、灾难声明、恢复接受、风险接受或合规结论。
- 排除：Agent 自动批准框架分支、计划启动、外部通信、监管提交、恢复完成或整改关闭。
- 排除：机构内部政策、监管往来、客户数据、生产配置、日志、凭据、真实计划和实际证据。
- 排除：DORA Chapter IV 通用数字运营韧性测试和 TLPT，以及 Chapter V ICT 第三方风险的独立完整专题。
- 排除：GDPR、AML/CFT、制裁、EMD2 业务要求及其他法规领域的详细知识链。

## 内容统计

| 类型 | 数量 |
| --- | ---: |
| source | 11 |
| provision | 153 |
| requirement | 104 |
| decision | 12 |
| control | 31 |
| verification | 31 |

## 来源

| ID | 文件 | 来源层级 |
| --- | --- | --- |
| `src-esa-jc-gl-2024-34` | [Joint Guidelines on the estimation of aggregated annual costs and losses caused by major ICT-related incidents](https://www.eba.europa.eu/activities/single-rulebook/regulatory-activities/operational-resilience/joint-guidelines-estimation-aggregated-annual-costs-and-losses-caused-major-ict-related-incidents) | `regulatory_guideline` |
| `src-eu-reg-2022-2554` | [Regulation (EU) 2022/2554](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng) | `binding_law` |
| `src-eu-reg-2024-1772` | [Commission Delegated Regulation (EU) 2024/1772](https://eur-lex.europa.eu/eli/reg_del/2024/1772/oj/eng) | `binding_law` |
| `src-eu-reg-2024-1774` | [Commission Delegated Regulation (EU) 2024/1774](https://eur-lex.europa.eu/eli/reg_del/2024/1774/2024-06-25/eng) | `binding_law` |
| `src-eu-reg-2025-301` | [Commission Delegated Regulation (EU) 2025/301](https://eur-lex.europa.eu/eli/reg_del/2025/301/oj/eng) | `binding_law` |
| `src-eu-reg-2025-302` | [Commission Implementing Regulation (EU) 2025/302](https://eur-lex.europa.eu/eli/reg_impl/2025/302/oj/eng) | `binding_law` |
| `src-mfsa-crms-circular-2025` | [Cyber Reporting Management System (CRMS)](https://www.mfsa.mt/wp-content/uploads/2025/01/Cyber-Reporting-Management-System-CRMS.pdf) | `official_information` |
| `src-mfsa-dora-authorisation-observations-2026` | [General Observations on Digital Operational Resilience in Authorisation Applications Received in 2025](https://www.mfsa.mt/wp-content/uploads/2026/06/General-Observations-on-Digital-Operational-Resilience-in-Authorisation-Applications-Received-in-2025.pdf) | `supervisory_guidance` |
| `src-mfsa-ict-change-management-2026` | [ICT Change Management under the Digital Operational Resilience Act](https://www.mfsa.mt/publication/ict-change-management-under-the-digital-operational-resilience-act-dora/) | `official_information` |
| `src-mfsa-major-ict-incident-process-2025` | [Major ICT-Related Incident Reporting Process](https://www.mfsa.mt/wp-content/uploads/2022/10/Major-ICT-Related-Incident-Reporting-Process.pdf) | `supervisory_guidance` |
| `src-mfsa-significant-cyber-threat-process-2025` | [Significant Cyber Threat Notification Process](https://www.mfsa.mt/wp-content/uploads/2025/01/Significant-Cyber-Threat-Notification-Process.pdf) | `supervisory_guidance` |

## 要求、控制与验证

### `req-aggregated-reporting-individual-impact-report` Provide an individual impact report after an aggregated submission

When the competent authority requests information about an institution-specific impact after an aggregated major-incident submission, an electronic money institution shall provide an individual notification or report.

适用分支：全部

依据：

- `prv-its-2025-302-art-7` Article 7，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-outsourced-aggregated-reporting` Govern outsourced and aggregated incident reporting
- `ver-outsourced-aggregated-reporting` Verify outsourced and aggregated incident reporting；证据模板：`outsourcing-and-authority-notices`、`aggregation-and-individual-response`。

### `req-continuity-proportionate-arrangements` Apply proportionality to ICT continuity arrangements

An electronic money institution shall develop and implement the ICT continuity policies, procedures, protocols, tools and simplified-framework arrangements applicable to it by taking account of its size, overall risk profile, and the nature, scale and complexity of its services, activities and operations, including the impact of ICT risk and disruption on data and operational continuity and availability.

适用分支：全部

依据：

- `prv-rts-2024-1774-art-1-continuity` Article 1，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-continuity-bia-dependency` Govern continuity scope, dependencies, and business impact analysis
- `ver-continuity-bia-dependency` Verify continuity scope, dependencies, and BIA inputs；证据模板：`function-dependency-inventory`、`approved-bia-and-proportionality`。
- `ctl-continuity-policy-governance` Govern ICT continuity policies, plans, roles, and audit
- `ver-continuity-policy-governance` Verify continuity policy, governance, access, and audit；证据模板：`continuity-policy-package`、`conditional-audit-record`。

### `req-final-report-deadline` Submit the final report within one month

An electronic money institution shall submit the final report no later than one month after the intermediate report or, where an updated intermediate report was submitted, no later than one month after the latest updated intermediate report.

适用分支：全部

依据：

- `prv-rts-2025-301-art-5-1-c` Article 5(1)(c)，关系 `direct_basis`，来源 `src-eu-reg-2025-301`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-regulatory-report-workflow` Control regulatory report stages and deadlines
- `ver-regulatory-report-workflow` Verify regulatory report stages and deadlines；证据模板：`statutory-deadline-ledger`、`stage-and-exception-record`。

### `req-full-annual-cost-loss-adjustments` Recognise earlier-estimate adjustments in the current reference year

An electronic money institution should include an adjustment to costs or losses from a previously submitted annual estimate in the estimate for the reference year in which the adjustment is made.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-jc-gl-2024-34-paragraphs-8-9` Title III, paragraphs 8-9，关系 `direct_basis`，来源 `src-esa-jc-gl-2024-34`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-annual-incident-cost-loss` Estimate and report annual major-incident costs and losses
- `ver-annual-incident-cost-loss` Verify annual major-incident cost and loss estimates；证据模板：`annual-estimate-reconciliation`、`annual-cost-loss-report`。

### `req-full-annual-cost-loss-data-basis` Base estimates on financial or supervisory records

An electronic money institution should base annual incident cost, loss and recovery estimates on amounts and accounting provisions reflected in its financial statements or applicable supervisory reporting for the reference year, using other available data and information to the extent possible when accurate values are unavailable.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-jc-gl-2024-34-paragraphs-8-9` Title III, paragraphs 8-9，关系 `direct_basis`，来源 `src-esa-jc-gl-2024-34`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-annual-incident-cost-loss` Estimate and report annual major-incident costs and losses
- `ver-annual-incident-cost-loss` Verify annual major-incident cost and loss estimates；证据模板：`annual-estimate-reconciliation`、`annual-cost-loss-report`。

### `req-full-annual-cost-loss-estimation` Estimate and aggregate gross amounts and recoveries sequentially

For each included major incident, an electronic money institution should estimate gross costs and losses using the prescribed cost types, estimate financial recoveries separately, and then aggregate gross costs and losses and recoveries across all included incidents.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-jc-gl-2024-34-paragraph-7` Title III, paragraph 7，关系 `direct_basis`，来源 `src-esa-jc-gl-2024-34`。
- `prv-rts-2024-1772-art-7` Article 7，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-its-2025-302-annex-i-ii-final` Annexes I-II, field group 4，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-annual-incident-cost-loss` Estimate and report annual major-incident costs and losses
- `ver-annual-incident-cost-loss` Verify annual major-incident cost and loss estimates；证据模板：`annual-estimate-reconciliation`、`annual-cost-loss-report`。

### `req-full-annual-cost-loss-incident-population` Include every major incident with reference-year financial impact

A requested annual estimate should include every incident classified as major for which the institution submitted a final report in the reference year and every incident with a final report submitted in an earlier reference year that had a quantifiable financial impact in the current reference year.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-jc-gl-2024-34-paragraph-6` Title III, paragraph 6，关系 `direct_basis`，来源 `src-esa-jc-gl-2024-34`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-annual-incident-cost-loss` Estimate and report annual major-incident costs and losses
- `ver-annual-incident-cost-loss` Verify annual major-incident cost and loss estimates；证据模板：`annual-estimate-reconciliation`、`annual-cost-loss-report`。

### `req-full-annual-cost-loss-reference-year` Use one completed reference-year basis consistently

For requested annual cost and loss estimates, a non-microenterprise electronic money institution using the full ICT risk management framework should select either the completed calendar year or its completed accounting year with finalised financial statements, apply that basis consistently to future estimates and exclude costs and losses falling outside the selected reference year.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-jc-gl-2024-34-paragraph-5` Title III, paragraph 5，关系 `direct_basis`，来源 `src-esa-jc-gl-2024-34`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-annual-incident-cost-loss` Estimate and report annual major-incident costs and losses
- `ver-annual-incident-cost-loss` Verify annual major-incident cost and loss estimates；证据模板：`annual-estimate-reconciliation`、`annual-cost-loss-report`。

### `req-full-annual-cost-loss-reference-year-change` Change the reference-year basis only after notice and non-objection

A non-microenterprise electronic money institution using the full ICT risk management framework may change its annual cost and loss reference-year basis after notifying the competent authority, provided that the authority does not object within two months after receiving the notification.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-jc-gl-2024-34-paragraph-5` Title III, paragraph 5，关系 `direct_basis`，来源 `src-esa-jc-gl-2024-34`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-annual-incident-cost-loss` Estimate and report annual major-incident costs and losses
- `ver-annual-incident-cost-loss` Verify annual major-incident cost and loss estimates；证据模板：`annual-estimate-reconciliation`、`annual-cost-loss-report`。

### `req-full-annual-cost-loss-report-detail` Submit annual totals and per-incident cost and recovery details

An electronic money institution should use the Joint Guidelines Annex template to submit reference-year totals and a per-incident breakdown of gross costs and losses and financial recoveries, identifying each item with the same incident reference used in its final incident report.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-jc-gl-2024-34-paragraphs-10-11` Title III, paragraphs 10-11，关系 `direct_basis`，来源 `src-esa-jc-gl-2024-34`。
- `prv-jc-gl-2024-34-annex` Annex，关系 `direct_basis`，来源 `src-esa-jc-gl-2024-34`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-annual-incident-cost-loss` Estimate and report annual major-incident costs and losses
- `ver-annual-incident-cost-loss` Verify annual major-incident cost and loss estimates；证据模板：`annual-estimate-reconciliation`、`annual-cost-loss-report`。

### `req-full-annual-cost-loss-report-on-request` Report annual major-incident costs and losses on request

Upon a competent authority's request, a non-microenterprise electronic money institution using the full ICT risk management framework shall report an estimate of its aggregated annual costs and losses caused by major ICT-related incidents.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-11-10` Article 11(10)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-11-11` Article 11(11)，关系 `supporting_context`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-annual-incident-cost-loss` Estimate and report annual major-incident costs and losses
- `ver-annual-incident-cost-loss` Verify annual major-incident cost and loss estimates；证据模板：`annual-estimate-reconciliation`、`annual-cost-loss-report`。

### `req-full-annual-incident-findings-report` Report incident-derived findings to the management body annually

Senior ICT staff of an electronic money institution using the full ICT risk management framework shall report incident-derived ICT risk assessment findings and recommendations to the management body at least annually.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-13-3-5` Article 13(3)-(5)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-trend-management-reporting` Analyse recurring incidents and report findings to management
- `ver-incident-trend-management-reporting` Verify recurring-incident analysis and management reporting；证据模板：`recurring-incident-analysis`、`annual-management-report`。

### `req-full-anomaly-record-protection` Protect anomaly records and capture required timestamps and type

An electronic money institution using the full ICT risk management framework shall protect anomaly records from tampering and unauthorised access at rest, in transit and where relevant in use, and shall log the occurrence time, detection time and type of each detected anomaly.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-23-3-4` Article 23(3)-(4)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-governance-records` Govern incident scope, ownership, records, and evidence
- `ver-incident-governance-records` Verify incident governance, records, and evidence handling；证据模板：`governed-incident-case`、`governance-and-retention-record`。

### `req-full-backup-restoration-policy` Maintain backup, restoration, and recovery policies and procedures

An electronic money institution using the full ICT risk management framework shall document backup policies and procedures that define the data scope and minimum backup frequency according to information criticality or data confidentiality, together with restoration and recovery procedures and methods designed to restore ICT systems and data with minimum downtime, disruption and loss.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-12-1` Article 12(1)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-dora-authorisation-rts-continuity-findings` Chapter II observations on Articles 24 to 26 of Commission Delegated Regulation (EU) 2024/1774，关系 `supporting_context`，来源 `src-mfsa-dora-authorisation-observations-2026`。

控制和检查：

- `ctl-continuity-backup-restoration` Operate secure backup, restoration, and recovery controls
- `ver-continuity-backup-restoration` Verify secure backup and restoration capability；证据模板：`backup-configuration-and-execution`、`backup-restore-test`。

### `req-full-change-approval-independence` Keep ICT change approval independent

An electronic money institution using the full ICT risk management framework shall use mechanisms that keep change approval functions independent from functions responsible for requesting and implementing changes.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-17-1-b` Article 17(1)(b)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-rts-2024-1774-art-17-1` Article 17(1)，关系 `scope_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-change-management-lifecycle` Body paragraphs 2-3，关系 `supporting_context`，来源 `src-mfsa-ict-change-management-2026`。

控制和检查：

- `ctl-change-role-separation` Enforce independence of ICT change approval
- `ver-change-role-separation` Verify ICT change approval independence；证据模板：`role-record`、`approval-audit-log`。

### `req-full-change-controlled-lifecycle` Operate a documented and controlled ICT change lifecycle

An electronic money institution using the full ICT risk management framework shall implement documented, risk-based ICT change management policies, procedures, and controls as part of overall change management so every ICT system change is recorded, tested, assessed, approved, implemented, and verified in a controlled manner.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-9-4-e` Article 9(4)(e)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-change-management-lifecycle` Body paragraphs 2-3，关系 `supporting_context`，来源 `src-mfsa-ict-change-management-2026`。

控制和检查：

- `ctl-change-lifecycle-workflow` Enforce the controlled ICT change lifecycle
- `ver-change-lifecycle-workflow` Verify controlled ICT change lifecycle gates；证据模板：`lifecycle-record`、`lifecycle-audit-log`。

### `req-full-change-details` Document and communicate change details

An electronic money institution using the full ICT risk management framework shall document and communicate each change's purpose and scope, implementation timeline, and expected outcomes.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-17-1-d` Article 17(1)(d)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-rts-2024-1774-art-17-1` Article 17(1)，关系 `scope_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-change-management-lifecycle` Body paragraphs 2-3，关系 `supporting_context`，来源 `src-mfsa-ict-change-management-2026`。

控制和检查：

- `ctl-change-planning-record` Record change responsibilities, plans, and expected outcomes
- `ver-change-planning-record` Verify change planning, responsibilities, and communication；证据模板：`change-plan`、`communication-record`。

### `req-full-change-fallback` Define change fall-back, abort, and recovery arrangements

An electronic money institution using the full ICT risk management framework shall identify fall-back procedures and responsibilities, including arrangements for aborting changes and recovering from changes that were not implemented successfully.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-17-1-e` Article 17(1)(e)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-rts-2024-1774-art-17-1` Article 17(1)，关系 `scope_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-material-change-expectations` Material change considerations，关系 `supporting_context`，来源 `src-mfsa-ict-change-management-2026`。

控制和检查：

- `ctl-change-fallback-recovery` Prepare and verify change fall-back and recovery
- `ver-change-fallback-recovery` Verify change fall-back and recovery readiness；证据模板：`fallback-plan`、`fallback-test-report`。

### `req-full-change-management-approval` Obtain appropriate management approval for the change process

An electronic money institution using the full ICT risk management framework shall have its ICT change management process approved by appropriate lines of management.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-9-4-change-approval` Article 9(4), second subparagraph，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-material-change-expectations` Material change considerations，关系 `supporting_context`，来源 `src-mfsa-ict-change-management-2026`。

控制和检查：

- `ctl-change-governance` Govern and approve the ICT change management process
- `ver-change-governance` Verify ICT change governance and process approval；证据模板：`process-approval`、`change-protocol`。

### `req-full-change-roles-and-quality` Assign roles for planning, transition, testing, and quality assurance

An electronic money institution using the full ICT risk management framework shall clearly describe roles and responsibilities that ensure changes are specified and planned, an adequate transition is designed, changes are tested and finalised in a controlled manner, and quality assurance is effective.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-17-1-c` Article 17(1)(c)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-rts-2024-1774-art-17-1` Article 17(1)，关系 `scope_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-material-change-expectations` Material change considerations，关系 `supporting_context`，来源 `src-mfsa-ict-change-management-2026`。

控制和检查：

- `ctl-change-planning-record` Record change responsibilities, plans, and expected outcomes
- `ver-change-planning-record` Verify change planning, responsibilities, and communication；证据模板：`change-plan`、`communication-record`。

### `req-full-change-security-impact` Assess change impact on ICT security measures

An electronic money institution using the full ICT risk management framework shall identify each change's potential impact on existing ICT security measures and assess whether additional ICT security measures are required.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-17-1-h` Article 17(1)(h)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-rts-2024-1774-art-17-1` Article 17(1)，关系 `scope_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-material-change-expectations` Material change considerations，关系 `supporting_context`，来源 `src-mfsa-ict-change-management-2026`。

控制和检查：

- `ctl-change-security-impact` Assess change risk and impact on ICT security controls
- `ver-change-security-impact` Verify ICT security impact and major-change risk assessment；证据模板：`security-impact-assessment`、`major-change-risk-assessment`。

### `req-full-change-security-verification` Verify ICT security requirements for every change

An electronic money institution using the full ICT risk management framework shall include verification that ICT security requirements have been met for every change to software, hardware, firmware components, systems, or security parameters.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-17-1-a` Article 17(1)(a)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-rts-2024-1774-art-17-1` Article 17(1)，关系 `scope_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-change-security-test-gate` Gate production changes on security requirements and testing
- `ver-change-security-test-gate` Verify security requirements and tests before production change；证据模板：`security-test-report`、`production-approval`。

### `req-full-change-specific-protocols` Maintain specific ICT change protocols

An electronic money institution using the full ICT risk management framework shall maintain specific protocols for its ICT change management process.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-9-4-change-approval` Article 9(4), second subparagraph，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-change-management-lifecycle` Body paragraphs 2-3，关系 `supporting_context`，来源 `src-mfsa-ict-change-management-2026`。

控制和检查：

- `ctl-change-governance` Govern and approve the ICT change management process
- `ver-change-governance` Verify ICT change governance and process approval；证据模板：`process-approval`、`change-protocol`。

### `req-full-continuity-activation-records` Retain accessible records of continuity-plan activation

An electronic money institution using the full ICT risk management framework shall keep readily accessible records of activities before and during a disruption event when its ICT business continuity or ICT response and recovery plans are activated.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-11-7-8` Article 11(7)-(8)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-continuity-activation-communication` Control plan activation, crisis communication, and activity records
- `ver-continuity-activation-communication` Verify plan activation, crisis communication, and chronology；证据模板：`plan-activation-chronology`、`crisis-communication-record`。

### `req-full-continuity-business-impact-analysis` Conduct a business impact analysis for severe ICT disruption

An electronic money institution using the full ICT risk management framework shall conduct a business impact analysis of severe business disruptions using quantitative and qualitative criteria, internal and external data and scenario analysis as appropriate; the analysis shall assess criticality and the impact on functions, supporting processes, third-party dependencies, information assets and interdependencies and shall drive ICT asset and service alignment and redundancy.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-11-5` Article 11(5)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-22` Article 3(22)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-dora-authorisation-continuity-findings` Executive Summary and Chapter II observations on ICT business continuity，关系 `supporting_context`，来源 `src-mfsa-dora-authorisation-observations-2026`。

控制和检查：

- `ctl-continuity-bia-dependency` Govern continuity scope, dependencies, and business impact analysis
- `ver-continuity-bia-dependency` Verify continuity scope, dependencies, and BIA inputs；证据模板：`function-dependency-inventory`、`approved-bia-and-proportionality`。
- `ctl-continuity-recovery-objectives-capacity` Govern recovery objectives and supporting capacity
- `ver-continuity-recovery-objectives-capacity` Verify recovery objectives and supporting capacity；证据模板：`recovery-target-register`、`recovery-capacity-test`。

### `req-full-continuity-function-dependency-inventory` Maintain the continuity function, asset, and dependency inventory

An electronic money institution using the full ICT risk management framework shall identify, classify and document ICT-supported business functions, their roles, information and ICT assets, configurations, interdependencies and relevant ICT third-party dependencies; it shall map critical assets and keep the classification and inventories current, including at least annual review and updates following major changes.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-8-1` Article 8(1)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-8-4-6` Article 8(4)-(6)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-22` Article 3(22)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-dora-authorisation-continuity-findings` Executive Summary and Chapter II observations on ICT business continuity，关系 `supporting_context`，来源 `src-mfsa-dora-authorisation-observations-2026`。

控制和检查：

- `ctl-continuity-bia-dependency` Govern continuity scope, dependencies, and business impact analysis
- `ver-continuity-bia-dependency` Verify continuity scope, dependencies, and BIA inputs；证据模板：`function-dependency-inventory`、`approved-bia-and-proportionality`。

### `req-full-continuity-test-frequency` Test continuity and recovery plans at required intervals

An electronic money institution using the full ICT risk management framework shall test its ICT business continuity and ICT response and recovery plans for ICT systems supporting all functions at least yearly and after substantive changes to ICT systems supporting critical or important functions, and shall test its crisis communication plans.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-11-6-a-b` Article 11(6), first subparagraph, points (a)-(b)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-22` Article 3(22)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-continuity-testing-switchover` Execute governed continuity, restoration, and switchover tests
- `ver-continuity-testing-switchover` Verify continuity test scheduling, execution, and switchover；证据模板：`continuity-test-register-and-plan`、`continuity-and-switchover-test-report`。

### `req-full-continuity-test-remediation` Review continuity arrangements and remediate test deficiencies

An electronic money institution using the full ICT risk management framework shall document continuity-test results, analyse and address identified deficiencies, report them to the management body, and regularly review its ICT business continuity policy and response and recovery plans using test, audit and supervisory findings; it shall continuously incorporate lessons from real incidents and continuity or recovery challenges into ICT risk assessment and relevant framework reviews and report resulting findings and recommendations to the management body at least annually.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-11-6-scenarios-review` Article 11(6), second and third subparagraphs，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-rts-2024-1774-art-25-5` Article 25(5)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-13-3-5` Article 13(3)-(5)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-continuity-findings-improvement` Remediate continuity findings and update risk and plans
- `ver-continuity-findings-improvement` Verify continuity finding remediation and feedback；证据模板：`continuity-finding-register`、`continuity-improvement-and-closure`。

### `req-full-continuity-test-scenarios` Test severe disruption scenarios and recovery capability

An electronic money institution using the full ICT risk management framework shall base continuity testing on its BIA and ICT risk assessment, use severe but plausible scenarios reflected in its plans, cover applicable third-party ICT services, challenge plan and communication assumptions, and verify the response ability of people, providers, systems and services; its scenarios shall address relevant cyber, infrastructure, function, provider, premises, communications, staffing, environmental, physical, insider, geopolitical and power disruptions, with the source-defined switchover test condition applied to entities other than microenterprises.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-11-6-scenarios-review` Article 11(6), second and third subparagraphs，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-rts-2024-1774-art-25-1` Article 25(1)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-rts-2024-1774-art-25-2` Article 25(2)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-rts-2024-1774-art-26-2` Article 26(2)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-dora-authorisation-rts-continuity-findings` Chapter II observations on Articles 24 to 26 of Commission Delegated Regulation (EU) 2024/1774，关系 `supporting_context`，来源 `src-mfsa-dora-authorisation-observations-2026`。

控制和检查：

- `ctl-continuity-scenario-third-party` Govern severe-disruption and third-party continuity scenarios
- `ver-continuity-scenario-third-party` Verify disruption scenario and third-party coverage；证据模板：`continuity-scenario-catalogue`、`third-party-scenario-assessment`。
- `ctl-continuity-testing-switchover` Execute governed continuity, restoration, and switchover tests
- `ver-continuity-testing-switchover` Verify continuity test scheduling, execution, and switchover；证据模板：`continuity-test-register-and-plan`、`continuity-and-switchover-test-report`。

### `req-full-crisis-communication` Maintain crisis and stakeholder communication arrangements

An electronic money institution using the full ICT risk management framework shall maintain crisis communication plans and internal and external communication policies for responsible disclosure of at least major ICT-related incidents or vulnerabilities as appropriate, distinguish response staff from staff who need information, and assign at least one person to implement the incident communication strategy and public and media function.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-14-1-3` Article 14(1)-(3)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-communications` Coordinate incident escalation and stakeholder communications
- `ver-incident-communications` Verify incident escalation and stakeholder communications；证据模板：`communication-plan-and-assessment`、`communication-delivery-log`。

### `req-full-crisis-management-function` Operate a crisis management function when plans are activated

Where an electronic money institution using the full ICT risk management framework is not a microenterprise, it shall maintain a crisis management function that, upon activation of ICT business continuity or response and recovery plans, defines clear procedures for internal and external crisis communication in accordance with DORA Article 14.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-11-7-8` Article 11(7)-(8)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-14-1-3` Article 14(1)-(3)，关系 `supporting_context`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-continuity-activation-communication` Control plan activation, crisis communication, and activity records
- `ver-continuity-activation-communication` Verify plan activation, crisis communication, and chronology；证据模板：`plan-activation-chronology`、`crisis-communication-record`。

### `req-full-critical-function-continuity-plans` Maintain plans that preserve critical or important functions

An electronic money institution using the full ICT risk management framework shall implement documented arrangements, plans, procedures and mechanisms that ensure continuity of critical or important functions and shall put in place, maintain and periodically test ICT business continuity plans, with particular attention to functions supported through ICT third-party arrangements and severe business disruptions.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-11-2-a` Article 11(2)(a)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-11-4` Article 11(4)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-rts-2024-1774-art-24-1-b-i-iii` Article 24(1)(b)(i)-(iii)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-3-22` Article 3(22)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-dora-authorisation-continuity-findings` Executive Summary and Chapter II observations on ICT business continuity，关系 `supporting_context`，来源 `src-mfsa-dora-authorisation-observations-2026`。

控制和检查：

- `ctl-continuity-plan-lifecycle` Maintain executable continuity and recovery plans
- `ver-continuity-plan-lifecycle` Verify continuity and recovery plan executability；证据模板：`controlled-continuity-plan-set`、`plan-execution-test`。
- `ctl-continuity-testing-switchover` Execute governed continuity, restoration, and switchover tests
- `ver-continuity-testing-switchover` Verify continuity test scheduling, execution, and switchover；证据模板：`continuity-test-register-and-plan`、`continuity-and-switchover-test-report`。

### `req-full-emergency-change-post-review` Review and approve emergency changes after implementation

An electronic money institution using the full ICT risk management framework shall document, re-evaluate, assess, and approve emergency changes after implementation, including workarounds and patches.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-17-1-g` Article 17(1)(g)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-rts-2024-1774-art-17-1` Article 17(1)，关系 `scope_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-emergency-change` Control emergency changes before and after implementation
- `ver-emergency-change` Verify emergency change safeguards and post-implementation review；证据模板：`emergency-change-record`、`emergency-post-review`。

### `req-full-emergency-change-safeguards` Apply adequate safeguards to emergency changes

An electronic money institution using the full ICT risk management framework shall maintain procedures, protocols, and tools that manage emergency changes with adequate safeguards.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-17-1-f` Article 17(1)(f)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-rts-2024-1774-art-17-1` Article 17(1)，关系 `scope_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-emergency-change` Control emergency changes before and after implementation
- `ver-emergency-change` Verify emergency change safeguards and post-implementation review；证据模板：`emergency-change-record`、`emergency-post-review`。

### `req-full-framework-review-after-major-incident` Review and improve the full framework after a major incident

After a major ICT-related incident, an electronic money institution using the full ICT risk management framework shall review the documented framework, continuously improve it from implementation and monitoring lessons, and submit the review report to the competent authority on request.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-6-5` Article 6(5)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-10` Article 3(10)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-post-incident-review-learning` Complete post-incident review and apply lessons
- `ver-post-incident-review-learning` Verify post-incident review and learning；证据模板：`post-incident-review`、`improvement-and-risk-record`。

### `req-full-ict-business-continuity-policy` Maintain a governed ICT business continuity policy

An electronic money institution using the full ICT risk management framework shall maintain a comprehensive ICT business continuity policy integrated with overall business continuity and informed by the BIA; the policy shall define objectives, scope, limitations, timeframe, plan activation and deactivation criteria, governance, roles, escalation, resources, recovery objectives, severe-disruption planning, risk-based priorities, response and recovery plan lifecycle, effectiveness review and communication alignment.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-11-1` Article 11(1)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-rts-2024-1774-art-24-1-a` Article 24(1)(a)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-rts-2024-1774-art-24-1-b-i-iii` Article 24(1)(b)(i)-(iii)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-rts-2024-1774-art-24-1-b-iv-vi` Article 24(1)(b)(iv)-(vi)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-dora-authorisation-continuity-findings` Executive Summary and Chapter II observations on ICT business continuity，关系 `supporting_context`，来源 `src-mfsa-dora-authorisation-observations-2026`。

控制和检查：

- `ctl-continuity-policy-governance` Govern ICT continuity policies, plans, roles, and audit
- `ver-continuity-policy-governance` Verify continuity policy, governance, access, and audit；证据模板：`continuity-policy-package`、`conditional-audit-record`。

### `req-full-ict-response-recovery-plans` Maintain executable ICT response and recovery plans

An electronic money institution using the full ICT risk management framework shall implement BIA-informed ICT response and recovery plans that define activation, deactivation, exceptions, authorised roles, recovery actions, accessible instructions, short- and long-term and partial-recovery options, recovery objectives and successful-execution criteria; the plans shall include alternatives when primary recovery is not feasible and continuity measures for failures of relevant third-party ICT services.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-11-3` Article 11(3)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-rts-2024-1774-art-26-1` Article 26(1)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-rts-2024-1774-art-26-3-4` Article 26(3)-(4)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-11-2-b-e` Article 11(2)(b)-(e)，关系 `supporting_context`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-dora-authorisation-continuity-findings` Executive Summary and Chapter II observations on ICT business continuity，关系 `supporting_context`，来源 `src-mfsa-dora-authorisation-observations-2026`。
- `prv-mfsa-dora-authorisation-rts-continuity-findings` Chapter II observations on Articles 24 to 26 of Commission Delegated Regulation (EU) 2024/1774，关系 `supporting_context`，来源 `src-mfsa-dora-authorisation-observations-2026`。

控制和检查：

- `ctl-continuity-plan-lifecycle` Maintain executable continuity and recovery plans
- `ver-continuity-plan-lifecycle` Verify continuity and recovery plan executability；证据模板：`controlled-continuity-plan-set`、`plan-execution-test`。
- `ctl-continuity-recovery-integrity` Gate recovery on service security and data integrity
- `ver-continuity-recovery-integrity` Verify recovery security, integrity, reconciliation, and acceptance；证据模板：`recovery-gate-record`、`recovery-reconciliation-report`。
- `ctl-continuity-scenario-third-party` Govern severe-disruption and third-party continuity scenarios
- `ver-continuity-scenario-third-party` Verify disruption scenario and third-party coverage；证据模板：`continuity-scenario-catalogue`、`third-party-scenario-assessment`。

### `req-full-incident-alerting-and-prioritisation` Trigger, alert and prioritise incident response

An electronic money institution using the full ICT risk management framework shall implement layered detection controls with defined response-triggering thresholds, automatically alert responsible staff, and prioritise alerts so incidents can be managed within institution-defined expected resolution times inside and outside working hours.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-10-2` Article 10(2)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-rts-2024-1774-art-23-2-c-d` Article 23(2)(c)-(d)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-detection-alerting` Detect, log, triage, and alert on incident indicators
- `ver-incident-detection-alerting` Test incident detection, logging, triage, and alerting；证据模板：`monitoring-configuration`、`detection-test-results`。

### `req-full-incident-detection-and-monitoring` Detect anomalies and incidents from relevant monitoring inputs

An electronic money institution using the full ICT risk management framework shall assign clear detection and response roles and operate regularly tested mechanisms with sufficient resources that promptly detect anomalies, network performance issues, ICT-related incidents and potential material single points of failure by monitoring relevant logs, business and ICT information, user reports, cyber threats and third-party provider incident notifications, with alerting tools covering at least assets supporting critical or important functions.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-10-1` Article 10(1)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-10-3` Article 10(3)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-rts-2024-1774-art-23-1-2-a-b` Article 23(1)-(2)(a)-(b)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-detection-alerting` Detect, log, triage, and alert on incident indicators
- `ver-incident-detection-alerting` Test incident detection, logging, triage, and alerting；证据模板：`monitoring-configuration`、`detection-test-results`。

### `req-full-incident-evidence-retention` Retain ICT incident evidence securely for a justified period

An electronic money institution using the full ICT risk management framework shall retain all ICT-related incident evidence securely for no longer than necessary for its collection purpose, using a period proportionate to affected-function, process and asset criticality and consistent with recurring-incident assessment and applicable Union-law retention requirements.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-22-d` Article 22(d), including the 2025-05-15 corrigendum，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-governance-records` Govern incident scope, ownership, records, and evidence
- `ver-incident-governance-records` Verify incident governance, records, and evidence handling；证据模板：`governed-incident-case`、`governance-and-retention-record`。

### `req-full-incident-lessons-risk-assessment` Incorporate incident lessons into ICT risk assessment

An electronic money institution using the full ICT risk management framework shall continuously incorporate lessons from real incidents and continuity or recovery challenges into ICT risk assessment and relevant framework reviews and shall analyse incident frequency, type, magnitude, evolution and patterns over time.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-13-3-5` Article 13(3)-(5)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-post-incident-review-learning` Complete post-incident review and apply lessons
- `ver-post-incident-review-learning` Verify post-incident review and learning；证据模板：`post-incident-review`、`improvement-and-risk-record`。

### `req-full-incident-policy` Maintain a documented and supported ICT incident policy

An electronic money institution using the full ICT risk management framework shall document its ICT-related incident management process in an incident policy, maintain relevant internal and external ICT operations security contacts, and operate technical, organisational and operational mechanisms that support the process and prompt anomaly detection.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-22-a-c` Article 22(a)-(c)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-governance-records` Govern incident scope, ownership, records, and evidence
- `ver-incident-governance-records` Verify incident governance, records, and evidence handling；证据模板：`governed-incident-case`、`governance-and-retention-record`。

### `req-full-incident-response-recovery-arrangements` Maintain documented incident response and recovery arrangements

An electronic money institution using the full ICT risk management framework shall maintain documented arrangements that rapidly resolve every ICT-related incident, immediately activate suitable containment and recovery plans, estimate preliminary impact, damage and loss, and provide updated internal, external and regulatory communication.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-11-2-b-e` Article 11(2)(b)-(e)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-8` Article 3(8)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-response-recovery` Contain incidents and restore services securely
- `ver-incident-response-recovery` Verify incident containment and secure restoration；证据模板：`response-and-recovery-timeline`、`secure-restoration-test`。

### `req-full-incident-response-trigger-criteria` Consider all prescribed incident response trigger criteria

An electronic money institution using the full ICT risk management framework shall consider indications of malicious activity or compromise, data losses across availability, authenticity, integrity and confidentiality, adverse transaction or operational impact, ICT system or network unavailability, and affected-service criticality when triggering incident detection and response.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-23-5-6` Article 23(5)-(6)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-detection-alerting` Detect, log, triage, and alert on incident indicators
- `ver-incident-detection-alerting` Test incident detection, logging, triage, and alerting；证据模板：`monitoring-configuration`、`detection-test-results`。

### `req-full-post-incident-review` Review a major incident that disrupted core activities

After a major ICT-related incident disrupts core activities, an electronic money institution using the full ICT risk management framework shall review the disruption causes and required improvements and assess procedure adherence and action effectiveness across alert response, impact and severity assessment, forensics where appropriate, escalation and communication.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-13-2` Article 13(2)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-10` Article 3(10)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-post-incident-review-learning` Complete post-incident review and apply lessons
- `ver-post-incident-review-learning` Verify post-incident review and learning；证据模板：`post-incident-review`、`improvement-and-risk-record`。

### `req-full-recovery-data-integrity-reconciliation` Verify and reconcile data integrity during recovery

During recovery from an ICT-related incident, an electronic money institution using the full ICT risk management framework shall perform the checks, multiple checks and reconciliations needed to maintain the highest level of data integrity, including when reconstructing data from external stakeholders and reconciling data across systems.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-12-7` Article 12(7)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-continuity-recovery-integrity` Gate recovery on service security and data integrity
- `ver-continuity-recovery-integrity` Verify recovery security, integrity, reconciliation, and acceptance；证据模板：`recovery-gate-record`、`recovery-reconciliation-report`。

### `req-full-recovery-objectives` Set and govern recovery time and recovery point objectives

An electronic money institution using the full ICT risk management framework shall determine recovery time and recovery point objectives for each function according to its criticality and potential market impact, align ICT and overall business continuity plans to those objectives, and set objectives that preserve agreed service levels under extreme scenarios.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-12-6` Article 12(6)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-rts-2024-1774-art-24-1-b-i-iii` Article 24(1)(b)(i)-(iii)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-3-22` Article 3(22)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-dora-authorisation-rts-continuity-findings` Chapter II observations on Articles 24 to 26 of Commission Delegated Regulation (EU) 2024/1774，关系 `supporting_context`，来源 `src-mfsa-dora-authorisation-observations-2026`。

控制和检查：

- `ctl-continuity-recovery-objectives-capacity` Govern recovery objectives and supporting capacity
- `ver-continuity-recovery-objectives-capacity` Verify recovery objectives and supporting capacity；证据模板：`recovery-target-register`、`recovery-capacity-test`。

### `req-full-redundant-ict-capacity` Maintain or assess redundant ICT capacity

An electronic money institution using the full ICT risk management framework and not qualifying as a microenterprise shall maintain redundant ICT capacity with resources, capabilities and functions adequate for its business needs; a microenterprise shall assess its need for redundant ICT capacity according to its risk profile.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-12-4` Article 12(4)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-continuity-recovery-objectives-capacity` Govern recovery objectives and supporting capacity
- `ver-continuity-recovery-objectives-capacity` Verify recovery objectives and supporting capacity；证据模板：`recovery-target-register`、`recovery-capacity-test`。

### `req-full-response-recovery-plan-independent-audit` Independently audit response and recovery plans when required

Where the electronic money institution using the full ICT risk management framework is not a microenterprise, its ICT response and recovery plans shall be subject to independent internal audit review.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-11-3` Article 11(3)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-continuity-policy-governance` Govern ICT continuity policies, plans, roles, and audit
- `ver-continuity-policy-governance` Verify continuity policy, governance, access, and audit；证据模板：`continuity-policy-package`、`conditional-audit-record`。

### `req-full-secure-segregated-backup-restoration` Secure, segregate, activate, and test backup restoration

An electronic money institution using the full ICT risk management framework shall maintain backup systems that can be activated under approved procedures without compromising network, system or data security; it shall periodically test backup, restoration and recovery procedures and, when restoring through its own systems, use physically and logically segregated systems protected from unauthorised access and ICT corruption that enable timely restoration.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-dora-art-12-2` Article 12(2)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-12-3-first-subparagraph` Article 12(3), first subparagraph，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-dora-authorisation-rts-continuity-findings` Chapter II observations on Articles 24 to 26 of Commission Delegated Regulation (EU) 2024/1774，关系 `supporting_context`，来源 `src-mfsa-dora-authorisation-observations-2026`。

控制和检查：

- `ctl-continuity-backup-restoration` Operate secure backup, restoration, and recovery controls
- `ver-continuity-backup-restoration` Verify secure backup and restoration capability；证据模板：`backup-configuration-and-execution`、`backup-restore-test`。

### `req-full-significant-and-recurring-incident-analysis` Analyse significant and recurring incident patterns

An electronic money institution using the full ICT risk management framework shall operate mechanisms that analyse significant or recurring ICT-related incidents and patterns in their number and occurrence.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-22-e` Article 22(e)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-trend-management-reporting` Analyse recurring incidents and report findings to management
- `ver-incident-trend-management-reporting` Verify recurring-incident analysis and management reporting；证据模板：`recurring-incident-analysis`、`annual-management-report`。

### `req-incident-classification-assessment` Assess every prescribed ICT incident classification criterion

An electronic money institution shall classify each ICT-related incident and determine its impact by applying the prescribed calculation methods for affected clients, financial counterparts and transactions, reputational impact, duration and service downtime, geographical spread, data losses, affected-service criticality and economic impact, using permitted estimates where actual values cannot yet be determined.

适用分支：全部

依据：

- `prv-dora-art-18-1` Article 18(1)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-rts-2024-1772-art-1` Article 1，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-rts-2024-1772-art-2` Article 2，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-rts-2024-1772-art-3` Article 3，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-rts-2024-1772-art-4` Article 4，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-rts-2024-1772-art-5` Article 5，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-rts-2024-1772-art-6` Article 6，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-rts-2024-1772-art-7` Article 7，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-dora-art-3-8` Article 3(8)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-classification` Classify incidents and significant cyber threats
- `ver-incident-classification` Verify incident and significant-threat classification；证据模板：`classification-assessment`、`classification-history`。

### `req-incident-communications-and-escalation` Plan incident communication and management escalation

An electronic money institution shall maintain incident communication, client-notification, counterpart-information and internal-escalation arrangements and shall report at least major ICT-related incidents to senior management and explain their impact, response and resulting additional controls to the management body.

适用分支：全部

依据：

- `prv-dora-art-17-3-d-e` Article 17(3)(d)-(e)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-10` Article 3(10)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-communications` Coordinate incident escalation and stakeholder communications
- `ver-incident-communications` Verify incident escalation and stakeholder communications；证据模板：`communication-plan-and-assessment`、`communication-delivery-log`。

### `req-incident-early-warning-and-classification` Use early warning and classify ICT-related incidents

An electronic money institution shall use early warning indicators and procedures that identify, track, log, categorise and classify ICT-related incidents by priority, severity and affected-service criticality under the DORA classification criteria.

适用分支：全部

依据：

- `prv-dora-art-17-3-a-b` Article 17(3)(a)-(b)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-8` Article 3(8)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-detection-alerting` Detect, log, triage, and alert on incident indicators
- `ver-incident-detection-alerting` Test incident detection, logging, triage, and alerting；证据模板：`monitoring-configuration`、`detection-test-results`。

### `req-incident-management-process` Operate an ICT-related incident management process

An electronic money institution shall define, establish and implement a process that detects, manages and notifies ICT-related incidents.

适用分支：全部

依据：

- `prv-dora-art-17-1` Article 17(1)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-8` Article 3(8)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-governance-records` Govern incident scope, ownership, records, and evidence
- `ver-incident-governance-records` Verify incident governance, records, and evidence handling；证据模板：`governed-incident-case`、`governance-and-retention-record`。

### `req-incident-recording-and-root-cause-follow-up` Record incidents and threats and complete root-cause follow-up

An electronic money institution shall record every ICT-related incident and significant cyber threat and operate consistent, integrated monitoring, handling and follow-up procedures that identify, document and address root causes to prevent recurrence.

适用分支：全部

依据：

- `prv-dora-art-17-2` Article 17(2)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-8` Article 3(8)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-13` Article 3(13)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-governance-records` Govern incident scope, ownership, records, and evidence
- `ver-incident-governance-records` Verify incident governance, records, and evidence handling；证据模板：`governed-incident-case`、`governance-and-retention-record`。
- `ctl-post-incident-review-learning` Complete post-incident review and apply lessons
- `ver-post-incident-review-learning` Verify post-incident review and learning；证据模板：`post-incident-review`、`improvement-and-risk-record`。

### `req-incident-response-and-secure-restoration` Mitigate incident impact and restore secure service

An electronic money institution shall establish ICT-related incident response procedures that mitigate impact and return affected services to an operational and secure state in a timely manner.

适用分支：全部

依据：

- `prv-dora-art-17-3-f` Article 17(3)(f)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-8` Article 3(8)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-response-recovery` Contain incidents and restore services securely
- `ver-incident-response-recovery` Verify incident containment and secure restoration；证据模板：`response-and-recovery-timeline`、`secure-restoration-test`。

### `req-incident-roles-and-responsibilities` Assign roles for incident types and scenarios

An electronic money institution shall assign the roles and responsibilities activated for each relevant ICT-related incident type and scenario.

适用分支：全部

依据：

- `prv-dora-art-17-3-c` Article 17(3)(c)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-governance-records` Govern incident scope, ownership, records, and evidence
- `ver-incident-governance-records` Verify incident governance, records, and evidence handling；证据模板：`governed-incident-case`、`governance-and-retention-record`。

### `req-initial-notification-deadline` Meet both initial-notification time limits

When an ICT-related incident is classified as major no later than 24 hours after awareness, an electronic money institution shall submit the initial notification as early as possible, no later than four hours after classification and no later than 24 hours after becoming aware of the incident.

适用分支：全部

依据：

- `prv-rts-2025-301-art-5-1-a` Article 5(1)(a)，关系 `direct_basis`，来源 `src-eu-reg-2025-301`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-regulatory-report-workflow` Control regulatory report stages and deadlines
- `ver-regulatory-report-workflow` Verify regulatory report stages and deadlines；证据模板：`statutory-deadline-ledger`、`stage-and-exception-record`。

### `req-intermediate-report-deadline-and-updates` Submit and update the intermediate report on time

An electronic money institution shall submit an intermediate report no later than 72 hours after the initial notification even if incident status or handling has not changed, and shall submit an updated intermediate report without undue delay after prescribed changes or requests and in every case when regular activities have recovered.

适用分支：全部

依据：

- `prv-dora-art-19-4` Article 19(4)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-rts-2025-301-art-5-1-b` Article 5(1)(b)，关系 `direct_basis`，来源 `src-eu-reg-2025-301`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-regulatory-report-workflow` Control regulatory report stages and deadlines
- `ver-regulatory-report-workflow` Verify regulatory report stages and deadlines；证据模板：`statutory-deadline-ledger`、`stage-and-exception-record`。

### `req-joint-report-stage-submission` Combine report stages only when completion and deadlines permit

An electronic money institution may submit two or all three major-incident report stages together only when regular activities have recovered or root-cause analysis is complete and every deadline applicable to the combined stages is met.

适用分支：全部

依据：

- `prv-its-2025-302-art-2` Article 2，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-regulatory-report-workflow` Control regulatory report stages and deadlines
- `ver-regulatory-report-workflow` Verify regulatory report stages and deadlines；证据模板：`statutory-deadline-ledger`、`stage-and-exception-record`。

### `req-late-classification-initial-deadline` Report within four hours after a late major classification

When an ICT-related incident is classified as major more than 24 hours after the electronic money institution became aware of it, the institution shall submit the initial notification within four hours after classification.

适用分支：全部

依据：

- `prv-rts-2025-301-art-5-2` Article 5(2)，关系 `direct_basis`，来源 `src-eu-reg-2025-301`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-regulatory-report-workflow` Control regulatory report stages and deadlines
- `ver-regulatory-report-workflow` Verify regulatory report stages and deadlines；证据模板：`statutory-deadline-ledger`、`stage-and-exception-record`。

### `req-major-ict-incident-regulatory-reporting` Report every major ICT-related incident

An electronic money institution shall report every ICT-related incident classified as major to its relevant competent authority, submit the prescribed initial notification and reports with information sufficient to assess significance and possible cross-border impact, and use alternative notification means when technical impossibility prevents submission of the initial-notification template.

适用分支：全部

依据：

- `prv-dora-art-19-1` Article 19(1)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-10` Article 3(10)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-regulatory-report-workflow` Control regulatory report stages and deadlines
- `ver-regulatory-report-workflow` Verify regulatory report stages and deadlines；证据模板：`statutory-deadline-ledger`、`stage-and-exception-record`。
- `ctl-regulatory-reporting-trigger` Determine and initiate regulatory reporting paths
- `ver-regulatory-reporting-trigger` Verify regulatory reporting initiation decisions；证据模板：`reportability-assessment`、`voluntary-notification-decision`。
- `ctl-secure-regulatory-submission` Authorise and transmit regulatory incident submissions securely
- `ver-secure-regulatory-submission` Verify secure and authorised regulatory submission；证据模板：`submission-authorisation-and-route`、`authority-submission-receipt`。

### `req-major-incident-client-notification` Notify clients whose financial interests are affected

As soon as it becomes aware that a major ICT-related incident affects clients' financial interests, an electronic money institution shall inform those clients without undue delay and explain the measures taken to mitigate the adverse effects.

适用分支：全部

依据：

- `prv-dora-art-19-3` Article 19(3)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-10` Article 3(10)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-communications` Coordinate incident escalation and stakeholder communications
- `ver-incident-communications` Verify incident escalation and stakeholder communications；证据模板：`communication-plan-and-assessment`、`communication-delivery-log`。

### `req-major-incident-determination` Apply the DORA major-incident combination rule

An electronic money institution shall treat an ICT-related incident as major when it affects a critical service and either involves successful malicious and unauthorised system access that may result in data loss or meets at least two of the other prescribed client, counterpart, transaction, reputation, duration, downtime, geographical, data-loss or economic-impact materiality thresholds.

适用分支：全部

依据：

- `prv-rts-2024-1772-art-8-1` Article 8(1)，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-rts-2024-1772-art-9-1` Article 9(1)，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-rts-2024-1772-art-9-2` Article 9(2)，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-rts-2024-1772-art-9-3` Article 9(3)，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-rts-2024-1772-art-9-4` Article 9(4)，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-rts-2024-1772-art-9-5` Article 9(5)，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-rts-2024-1772-art-9-6` Article 9(6)，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-dora-art-3-10` Article 3(10)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-classification` Classify incidents and significant cyber threats
- `ver-incident-classification` Verify incident and significant-threat classification；证据模板：`classification-assessment`、`classification-history`。

### `req-major-incident-final-content` Complete the required final-report fields

In a final report, an electronic money institution shall provide the prescribed incident-resolution and root-cause information, permanent corrective actions, procedural and control changes, lessons learned, applicable resolution-authority impact, direct and indirect costs and losses, financial recoveries and recurring-incident information, following the template's field conditions and formats.

适用分支：全部

依据：

- `prv-rts-2025-301-art-4` Article 4，关系 `direct_basis`，来源 `src-eu-reg-2025-301`。
- `prv-its-2025-302-art-1` Article 1，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-its-2025-302-annex-i-ii-final` Annexes I-II, field group 4，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-regulatory-report-content` Validate regulatory report content and templates
- `ver-regulatory-report-content` Verify regulatory report content and template integrity；证据模板：`official-template-snapshot`、`report-content-validation`。

### `req-major-incident-initial-content` Complete the required initial-notification fields

In an initial notification, an electronic money institution shall provide the prescribed incident reference, detection and major-classification times, description, classification criteria, impacted Member States, discovery method, available origin information, business-continuity activation, applicable reclassification information and other available relevant information, following the template's field conditions and formats.

适用分支：全部

依据：

- `prv-rts-2025-301-art-2` Article 2，关系 `direct_basis`，来源 `src-eu-reg-2025-301`。
- `prv-its-2025-302-art-1` Article 1，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-its-2025-302-annex-i-ii-general-initial` Annexes I-II, field groups 1 and 2，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-regulatory-report-content` Validate regulatory report content and templates
- `ver-regulatory-report-content` Verify regulatory report content and template integrity；证据模板：`official-template-snapshot`、`report-content-validation`。

### `req-major-incident-intermediate-content` Complete the required intermediate-report fields

In an intermediate report, an electronic money institution shall provide the prescribed occurrence and recovery times, classification impacts and thresholds, incident type and applicable threat techniques, affected functions, processes, infrastructure and third parties, client financial-interest impact, other authority notifications, temporary recovery actions and applicable indicators of compromise, following the template's field conditions and formats.

适用分支：全部

依据：

- `prv-rts-2025-301-art-3` Article 3，关系 `direct_basis`，来源 `src-eu-reg-2025-301`。
- `prv-its-2025-302-art-1` Article 1，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-its-2025-302-annex-i-ii-intermediate` Annexes I-II, field group 3，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-regulatory-report-content` Validate regulatory report content and templates
- `ver-regulatory-report-content` Verify regulatory report content and template integrity；证据模板：`official-template-snapshot`、`report-content-validation`。

### `req-major-incident-reclassification-notification` Notify the authority of a major-to-non-major reclassification

If further assessment concludes that a previously reported ICT-related incident never met the major-incident criteria and thresholds, an electronic money institution shall notify the competent authority that it has reclassified the incident as non-major using the prescribed report-type and other-information fields.

适用分支：全部

依据：

- `prv-its-2025-302-art-5` Article 5，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-regulatory-report-workflow` Control regulatory report stages and deadlines
- `ver-regulatory-report-workflow` Verify regulatory report stages and deadlines；证据模板：`statutory-deadline-ledger`、`stage-and-exception-record`。

### `req-major-incident-report-general-content` Provide the required general information at every report stage

At every major-incident reporting stage, an electronic money institution shall use the prescribed template and instructions and provide complete and accurate general information identifying the submission, affected institution, submitting entity, any entities covered by an aggregated report, authority contacts, applicable parent undertaking and reporting currency.

适用分支：全部

依据：

- `prv-rts-2025-301-art-1` Article 1，关系 `direct_basis`，来源 `src-eu-reg-2025-301`。
- `prv-its-2025-302-art-1` Article 1，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-its-2025-302-annex-i-ii-general-initial` Annexes I-II, field groups 1 and 2，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-regulatory-report-content` Validate regulatory report content and templates
- `ver-regulatory-report-content` Verify regulatory report content and template integrity；证据模板：`official-template-snapshot`、`report-content-validation`。

### `req-major-incident-report-sequence` Maintain the major-incident report sequence

For a reportable major ICT-related incident, an electronic money institution shall submit an initial notification, an intermediate report and further updates when prescribed, and a final report after root-cause analysis is complete and actual impact figures are available to replace estimates, regardless of whether mitigation measures have been fully implemented.

适用分支：全部

依据：

- `prv-dora-art-19-4` Article 19(4)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-10` Article 3(10)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-regulatory-report-workflow` Control regulatory report stages and deadlines
- `ver-regulatory-report-workflow` Verify regulatory report stages and deadlines；证据模板：`statutory-deadline-ledger`、`stage-and-exception-record`。

### `req-major-incident-secure-submission` Use the competent authority's secure reporting channel

An electronic money institution shall submit major-incident notifications and reports through the competent authority's secure electronic channel; if it cannot use that channel, it shall inform the authority through another secure means agreed with the authority and, when required, resubmit through the authority channel once available.

适用分支：全部

依据：

- `prv-its-2025-302-art-4` Article 4，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-secure-regulatory-submission` Authorise and transmit regulatory incident submissions securely
- `ver-secure-regulatory-submission` Verify secure and authorised regulatory submission；证据模板：`submission-authorisation-and-route`、`authority-submission-receipt`。

### `req-malta-major-ict-crms-submission` Submit Malta major ICT incident reports through CRMS

An MFSA Authorised Person that is an electronic money institution shall submit every major ICT-related incident notification and report to the MFSA through CRMS within the Licence Holder Portal using the provided template.

适用分支：全部

依据：

- `prv-mfsa-crms-dora-reporting-channel` Cyber Reporting Management System, DORA reporting paragraphs，关系 `direct_basis`，来源 `src-mfsa-crms-circular-2025`。
- `prv-mfsa-major-process-crms-submission` The Reporting Process, submission channel，关系 `direct_basis`，来源 `src-mfsa-major-ict-incident-process-2025`。
- `prv-mfsa-major-process-scope` Scope and Applicability，关系 `scope_basis`，来源 `src-mfsa-major-ict-incident-process-2025`。
- `prv-mfsa-major-process-report-stages` The Reporting Process, three-tier reporting，关系 `supporting_context`，来源 `src-mfsa-major-ict-incident-process-2025`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-secure-regulatory-submission` Authorise and transmit regulatory incident submissions securely
- `ver-secure-regulatory-submission` Verify secure and authorised regulatory submission；证据模板：`submission-authorisation-and-route`、`authority-submission-receipt`。

### `req-malta-parallel-incident-notifications` Preserve Malta incident notifications owed to other authorities

An MFSA Authorised Person that is an electronic money institution shall continue to meet any incident-notification obligation owed to another competent authority unless DORA specifically supersedes that obligation.

适用分支：全部

依据：

- `prv-mfsa-major-process-parallel-obligations` The Reporting Process, other notification obligations，关系 `direct_basis`，来源 `src-mfsa-major-ict-incident-process-2025`。
- `prv-mfsa-major-process-scope` Scope and Applicability，关系 `scope_basis`，来源 `src-mfsa-major-ict-incident-process-2025`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-communications` Coordinate incident escalation and stakeholder communications
- `ver-incident-communications` Verify incident escalation and stakeholder communications；证据模板：`communication-plan-and-assessment`、`communication-delivery-log`。

### `req-malta-significant-threat-crms-submission` Submit a chosen Malta significant-threat notification through CRMS

When an MFSA Authorised Person that is an electronic money institution chooses to notify a significant cyber threat, it shall submit the notification to the MFSA through CRMS within the Licence Holder Portal using the provided template.

适用分支：全部

依据：

- `prv-mfsa-crms-dora-reporting-channel` Cyber Reporting Management System, DORA reporting paragraphs，关系 `direct_basis`，来源 `src-mfsa-crms-circular-2025`。
- `prv-mfsa-threat-process-voluntary-scope` Introduction, voluntary scope，关系 `direct_basis`，来源 `src-mfsa-significant-cyber-threat-process-2025`。
- `prv-dora-art-19-2` Article 19(2), first subparagraph，关系 `supporting_context`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-secure-regulatory-submission` Authorise and transmit regulatory incident submissions securely
- `ver-secure-regulatory-submission` Verify secure and authorised regulatory submission；证据模板：`submission-authorisation-and-route`、`authority-submission-receipt`。

### `req-outsourced-reporting-responsibility` Retain responsibility for outsourced reporting and incident handling

An electronic money institution may outsource incident reporting in accordance with applicable Union and national sectoral law, and shall remain fully responsible for meeting its reporting requirements and for handling the incident and its consequences, including after supervisory feedback.

适用分支：全部

依据：

- `prv-dora-art-19-5` Article 19(5)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-22-1-responsibility` Article 22(1), second subparagraph，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-outsourced-aggregated-reporting` Govern outsourced and aggregated incident reporting
- `ver-outsourced-aggregated-reporting` Verify outsourced and aggregated incident reporting；证据模板：`outsourcing-and-authority-notices`、`aggregation-and-individual-response`。

### `req-payment-incident-chapter-three-application` Apply DORA Chapter III to EMI payment-related incidents

An electronic money institution shall apply the DORA Chapter III incident-management, classification and reporting requirements to its operational or security payment-related incidents and major operational or security payment-related incidents, including incidents that are not ICT-related.

适用分支：全部

依据：

- `prv-dora-art-23` Article 23，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-9` Article 3(9)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-11` Article 3(11)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-governance-records` Govern incident scope, ownership, records, and evidence
- `ver-incident-governance-records` Verify incident governance, records, and evidence handling；证据模板：`governed-incident-case`、`governance-and-retention-record`。
- `ctl-regulatory-reporting-trigger` Determine and initiate regulatory reporting paths
- `ver-regulatory-reporting-trigger` Verify regulatory reporting initiation decisions；证据模板：`reportability-assessment`、`voluntary-notification-decision`。
- `ctl-secure-regulatory-submission` Authorise and transmit regulatory incident submissions securely
- `ver-secure-regulatory-submission` Verify secure and authorised regulatory submission；证据模板：`submission-authorisation-and-route`、`authority-submission-receipt`。

### `req-recurring-incident-monthly-assessment` Assess recurring non-major incidents collectively each month

Each month, a non-microenterprise electronic money institution using the full ICT risk management framework shall determine whether incidents that were individually non-major occurred at least twice within six months, share the same apparent root cause and collectively meet the major-incident rule, in which case it shall treat them as one major incident.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-rts-2024-1772-art-8-2` Article 8(2)，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-dora-art-3-10` Article 3(10)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-trend-management-reporting` Analyse recurring incidents and report findings to management
- `ver-incident-trend-management-reporting` Verify recurring-incident analysis and management reporting；证据模板：`recurring-incident-analysis`、`annual-management-report`。

### `req-recurring-incidents-aggregated-reporting` Report collectively major recurring incidents in aggregated form

A non-microenterprise electronic money institution using the full ICT risk management framework shall provide information in aggregated form when recurring incidents that were individually non-major cumulatively meet the prescribed conditions for one major ICT-related incident.

适用分支：`dora_full_ict_risk_management`

依据：

- `prv-rts-2024-1772-art-8-2` Article 8(2)，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-its-2025-302-art-3` Article 3，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-outsourced-aggregated-reporting` Govern outsourced and aggregated incident reporting
- `ver-outsourced-aggregated-reporting` Verify outsourced and aggregated incident reporting；证据模板：`outsourcing-and-authority-notices`、`aggregation-and-individual-response`。

### `req-report-delay-notification` Notify and explain a reporting delay by the deadline

If an electronic money institution cannot submit an initial notification, intermediate report or final report within its applicable time limit, it shall inform the competent authority without undue delay and no later than that time limit and explain the reasons for the delay.

适用分支：全部

依据：

- `prv-rts-2025-301-art-5-3` Article 5(3)，关系 `direct_basis`，来源 `src-eu-reg-2025-301`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-regulatory-report-workflow` Control regulatory report stages and deadlines
- `ver-regulatory-report-workflow` Verify regulatory report stages and deadlines；证据模板：`statutory-deadline-ledger`、`stage-and-exception-record`。

### `req-reporting-outsourcing-notification` Notify the authority when reporting is outsourced or resumed internally

An electronic money institution that outsources major-incident reporting shall inform its competent authority as soon as the arrangement is concluded and before the first outsourced submission, provide the reporting third party's name, contact details and identification code, and inform the authority as soon as the arrangement ends.

适用分支：全部

依据：

- `prv-its-2025-302-art-6` Article 6，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-outsourced-aggregated-reporting` Govern outsourced and aggregated incident reporting
- `ver-outsourced-aggregated-reporting` Verify outsourced and aggregated incident reporting；证据模板：`outsourcing-and-authority-notices`、`aggregation-and-individual-response`。

### `req-significant-cyber-threat-classification` Apply all significant-cyber-threat classification conditions

An electronic money institution shall classify a cyber threat as significant only when it could affect critical or important functions or specified external parties, has a high probability of materialisation after considering the prescribed risk, vulnerability, threat-actor, persistence and incident-history factors, and could meet the critical-services criterion, the clients-counterparts-transactions threshold or the geographical-spread threshold.

适用分支：全部

依据：

- `prv-dora-art-18-2` Article 18(2)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-rts-2024-1772-art-10` Article 10，关系 `direct_basis`，来源 `src-eu-reg-2024-1772`。
- `prv-dora-art-3-12` Article 3(12)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-13` Article 3(13)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-classification` Classify incidents and significant cyber threats
- `ver-incident-classification` Verify incident and significant-threat classification；证据模板：`classification-assessment`、`classification-history`。

### `req-significant-threat-client-protection-information` Give potentially affected clients threat-protection information

Where applicable, an electronic money institution shall inform clients potentially affected by a significant cyber threat of appropriate protection measures they may take.

适用分支：全部

依据：

- `prv-dora-art-19-3` Article 19(3)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-12` Article 3(12)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-communications` Coordinate incident escalation and stakeholder communications
- `ver-incident-communications` Verify incident escalation and stakeholder communications；证据模板：`communication-plan-and-assessment`、`communication-delivery-log`。

### `req-significant-threat-notification-content` Complete the significant-cyber-threat notification accurately

When choosing to notify a significant cyber threat, an electronic money institution shall use the prescribed template and instructions and provide complete and accurate entity, contact, timing, threat-description, status, change, potential-impact, hypothetical major-classification, prevention-action, other-notification, indicator-of-compromise and other available relevant information.

适用分支：全部

依据：

- `prv-rts-2025-301-art-6` Article 6，关系 `direct_basis`，来源 `src-eu-reg-2025-301`。
- `prv-its-2025-302-art-8` Article 8，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-its-2025-302-annex-iii-iv` Annexes III-IV，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-regulatory-report-content` Validate regulatory report content and templates
- `ver-regulatory-report-content` Verify regulatory report content and template integrity；证据模板：`official-template-snapshot`、`report-content-validation`。

### `req-significant-threat-voluntary-notification` Voluntarily notify a relevant significant cyber threat

An electronic money institution may voluntarily notify its relevant competent authority of a significant cyber threat when it considers the threat relevant to the financial system, service users or clients.

适用分支：全部

依据：

- `prv-dora-art-19-2` Article 19(2), first subparagraph，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-12` Article 3(12)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-regulatory-reporting-trigger` Determine and initiate regulatory reporting paths
- `ver-regulatory-reporting-trigger` Verify regulatory reporting initiation decisions；证据模板：`reportability-assessment`、`voluntary-notification-decision`。

### `req-simplified-change-controlled-lifecycle` Operate a controlled ICT change procedure under the simplified framework

An exempted electronic money institution using the simplified ICT risk management framework shall develop, document, and implement an ICT change management procedure so every ICT system change is recorded, tested, assessed, approved, implemented, and verified in a controlled manner with adequate safeguards for digital operational resilience.

适用分支：`dora_simplified_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-38-2` Article 38(2)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-change-management-lifecycle` Body paragraphs 2-3，关系 `supporting_context`，来源 `src-mfsa-ict-change-management-2026`。

控制和检查：

- `ctl-change-fallback-recovery` Prepare and verify change fall-back and recovery
- `ver-change-fallback-recovery` Verify change fall-back and recovery readiness；证据模板：`fallback-plan`、`fallback-test-report`。
- `ctl-change-lifecycle-workflow` Enforce the controlled ICT change lifecycle
- `ver-change-lifecycle-workflow` Verify controlled ICT change lifecycle gates；证据模板：`lifecycle-record`、`lifecycle-audit-log`。

### `req-simplified-change-security-testing-plan` Cover change controls in the ICT security testing plan

An exempted electronic money institution using the simplified ICT risk management framework shall establish and implement an ICT security testing plan that validates the effectiveness of ICT security measures under Articles 37 and 38 and considers threats and vulnerabilities identified through its simplified ICT risk management framework.

适用分支：`dora_simplified_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-36-1` Article 36(1)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-change-security-test-gate` Gate production changes on security requirements and testing
- `ver-change-security-test-gate` Verify security requirements and tests before production change；证据模板：`security-test-report`、`production-approval`。

### `req-simplified-continuity-alternatives-communication-updates` Maintain simplified recovery alternatives, communication, and plan updates

An exempted electronic money institution using the simplified ICT risk management framework shall include alternative options where short-term recovery may not be feasible, internal and external communication and escalation arrangements, and updates to its continuity plans driven by incident and test lessons, new risks and threats, changed recovery objectives, and major organisational or supporting-asset changes.

适用分支：`dora_simplified_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-39-2-h-j` Article 39(2)(h)-(j)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-continuity-activation-communication` Control plan activation, crisis communication, and activity records
- `ver-continuity-activation-communication` Verify plan activation, crisis communication, and chronology；证据模板：`plan-activation-chronology`、`crisis-communication-record`。
- `ctl-continuity-plan-lifecycle` Maintain executable continuity and recovery plans
- `ver-continuity-plan-lifecycle` Verify continuity and recovery plan executability；证据模板：`controlled-continuity-plan-set`、`plan-execution-test`。

### `req-simplified-continuity-findings-risk-assessment` Apply simplified continuity and incident findings to ICT risk assessment

An exempted electronic money institution using the simplified ICT risk management framework shall implement relevant operational conclusions from continuity tests and post-incident analysis in its ICT risk assessment process and develop risk-appropriate awareness and resilience training where needed.

适用分支：`dora_simplified_ict_risk_management`

依据：

- `prv-dora-art-16-1-h` Article 16(1), second subparagraph, point (h)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-continuity-findings-improvement` Remediate continuity findings and update risk and plans
- `ver-continuity-findings-improvement` Verify continuity finding remediation and feedback；证据模板：`continuity-finding-register`、`continuity-improvement-and-closure`。

### `req-simplified-continuity-plan-governance` Govern simplified-framework ICT business continuity plans

An exempted electronic money institution using the simplified ICT risk management framework shall develop its ICT business continuity plans from analysis of severe disruption exposures, potential impacts and scenarios affecting ICT assets supporting critical or important functions, including cyber-attack; the management body shall approve the plans, which shall be documented, readily accessible during an emergency or crisis and supported by sufficient execution resources.

适用分支：`dora_simplified_ict_risk_management`

依据：

- `prv-dora-art-16-1-f` Article 16(1), second subparagraph, point (f)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-rts-2024-1774-art-39-1` Article 39(1)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-rts-2024-1774-art-39-2-a-c` Article 39(2)(a)-(c)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-3-22` Article 3(22)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-continuity-plan-lifecycle` Maintain executable continuity and recovery plans
- `ver-continuity-plan-lifecycle` Verify continuity and recovery plan executability；证据模板：`controlled-continuity-plan-set`、`plan-execution-test`。
- `ctl-continuity-policy-governance` Govern ICT continuity policies, plans, roles, and audit
- `ver-continuity-policy-governance` Verify continuity policy, governance, access, and audit；证据模板：`continuity-policy-package`、`conditional-audit-record`。
- `ctl-continuity-scenario-third-party` Govern severe-disruption and third-party continuity scenarios
- `ver-continuity-scenario-third-party` Verify disruption scenario and third-party coverage；证据模板：`continuity-scenario-catalogue`、`third-party-scenario-assessment`。

### `req-simplified-continuity-recovery-backup` Define simplified-framework recovery and backup measures

An exempted electronic money institution using the simplified ICT risk management framework shall establish planned recovery levels and timeframes for functions and key dependencies, define plan activation conditions and continuity and recovery actions, identify restoration measures for critical or important functions and their supporting processes, information assets and interdependencies, and define backup scope and minimum frequency according to function criticality, including measures that mitigate failures of critical third-party providers.

适用分支：`dora_simplified_ict_risk_management`

依据：

- `prv-dora-art-16-1-f` Article 16(1), second subparagraph, point (f)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-rts-2024-1774-art-39-2-d-g` Article 39(2)(d)-(g) and final subparagraph，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-3-22` Article 3(22)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-continuity-backup-restoration` Operate secure backup, restoration, and recovery controls
- `ver-continuity-backup-restoration` Verify secure backup and restoration capability；证据模板：`backup-configuration-and-execution`、`backup-restore-test`。
- `ctl-continuity-recovery-objectives-capacity` Govern recovery objectives and supporting capacity
- `ver-continuity-recovery-objectives-capacity` Verify recovery objectives and supporting capacity；证据模板：`recovery-target-register`、`recovery-capacity-test`。
- `ctl-continuity-scenario-third-party` Govern severe-disruption and third-party continuity scenarios
- `ver-continuity-scenario-third-party` Verify disruption scenario and third-party coverage；证据模板：`continuity-scenario-catalogue`、`third-party-scenario-assessment`。

### `req-simplified-continuity-test-frequency` Test simplified continuity plans at required intervals

An exempted electronic money institution using the simplified ICT risk management framework shall regularly test its continuity, response, recovery, backup and restoration plans and measures and the effectiveness of the prescribed controls; it shall test continuity-plan scenarios at least annually for backup and restore procedures and upon every major change to the business continuity plan.

适用分支：`dora_simplified_ict_risk_management`

依据：

- `prv-dora-art-16-1-g` Article 16(1), second subparagraph, point (g)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-rts-2024-1774-art-40-1` Article 40(1)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-continuity-testing-switchover` Execute governed continuity, restoration, and switchover tests
- `ver-continuity-testing-switchover` Verify continuity test scheduling, execution, and switchover；证据模板：`continuity-test-register-and-plan`、`continuity-and-switchover-test-report`。

### `req-simplified-continuity-test-outcomes` Demonstrate viability and remediate simplified continuity-test deficiencies

An exempted electronic money institution using the simplified ICT risk management framework shall use continuity-plan testing to demonstrate that it can sustain business viability until critical operations are re-established and to identify deficiencies; it shall document test results and analyse, address and report identified deficiencies to the management body.

适用分支：`dora_simplified_ict_risk_management`

依据：

- `prv-dora-art-16-1-g` Article 16(1), second subparagraph, point (g)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-rts-2024-1774-art-40-2-3` Article 40(2)-(3)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-continuity-findings-improvement` Remediate continuity findings and update risk and plans
- `ver-continuity-findings-improvement` Verify continuity finding remediation and feedback；证据模板：`continuity-finding-register`、`continuity-improvement-and-closure`。
- `ctl-continuity-testing-switchover` Execute governed continuity, restoration, and switchover tests
- `ver-continuity-testing-switchover` Verify continuity test scheduling, execution, and switchover；证据模板：`continuity-test-register-and-plan`、`continuity-and-switchover-test-report`。

### `req-simplified-framework-review-after-major-incident` Review and improve the simplified framework after a major incident

After a major ICT-related incident, an exempted electronic money institution using the simplified ICT risk management framework shall review the documented framework in compliance with supervisory instructions, continuously improve it from implementation and monitoring lessons, and submit the review report to the competent authority on request.

适用分支：`dora_simplified_ict_risk_management`

依据：

- `prv-dora-art-16-2` Article 16(2)，关系 `direct_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-3-10` Article 3(10)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-post-incident-review-learning` Complete post-incident review and apply lessons
- `ver-post-incident-review-learning` Verify post-incident review and learning；证据模板：`post-incident-review`、`improvement-and-risk-record`。

### `req-simplified-incident-alert-thresholds` Set incident response alert thresholds and criteria

An exempted electronic money institution using the simplified ICT risk management framework shall set alert thresholds and criteria that trigger and initiate ICT-related incident response processes.

适用分支：`dora_simplified_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-31-3-4` Article 31(3)-(4)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-detection-alerting` Detect, log, triage, and alert on incident indicators
- `ver-incident-detection-alerting` Test incident detection, logging, triage, and alerting；证据模板：`monitoring-configuration`、`detection-test-results`。

### `req-simplified-incident-review-report-content` Include incidents and root causes in an incident-triggered review report

When an ICT risk management framework review was initiated following ICT-related incidents, an exempted electronic money institution using the simplified framework shall state that reason in the review report and list every such incident with its related root-cause analysis.

适用分支：`dora_simplified_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-41-2-c-ii` Article 41(2)(c)(ii)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-post-incident-review-learning` Complete post-incident review and apply lessons
- `ver-post-incident-review-learning` Verify post-incident review and learning；证据模板：`post-incident-review`、`improvement-and-risk-record`。

### `req-simplified-incident-risk-assessment` Assess ICT risk after every major incident

An exempted electronic money institution using the simplified ICT risk management framework shall identify and assess ICT and information security risks after every major ICT-related incident.

适用分支：`dora_simplified_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-31-1-e-incident` Article 31(1)(e), major-incident clause，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-3-10` Article 3(10)，关系 `definition_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-post-incident-review-learning` Complete post-incident review and apply lessons
- `ver-post-incident-review-learning` Verify post-incident review and learning；证据模板：`post-incident-review`、`improvement-and-risk-record`。

### `req-simplified-major-change-risk-assessment` Assess ICT risk arising from major changes

An exempted electronic money institution using the simplified ICT risk management framework shall identify and assess ICT and information security risks resulting from any major change in ICT systems, ICT services, processes, or procedures.

适用分支：`dora_simplified_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-31-1-e` Article 31(1)(e)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-mfsa-material-change-expectations` Material change considerations，关系 `supporting_context`，来源 `src-mfsa-ict-change-management-2026`。

控制和检查：

- `ctl-change-security-impact` Assess change risk and impact on ICT security controls
- `ver-change-security-impact` Verify ICT security impact and major-change risk assessment；证据模板：`security-impact-assessment`、`major-change-risk-assessment`。

### `req-simplified-production-change-test-approval` Test and approve ICT systems before production changes

An exempted electronic money institution using the simplified ICT risk management framework shall test and approve ICT systems before introducing changes to the production environment.

适用分支：`dora_simplified_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-37-b` Article 37(b)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-change-security-test-gate` Gate production changes on security requirements and testing
- `ver-change-security-test-gate` Verify security requirements and tests before production change；证据模板：`security-test-report`、`production-approval`。

### `req-simplified-security-event-logging` Log access, operations, traffic and change events

For every ICT asset, an exempted electronic money institution using the simplified ICT risk management framework shall log logical and physical access, ICT operations, system and network traffic, and ICT change events at a level of detail aligned with the log purpose and use of the producing asset.

适用分支：`dora_simplified_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-34-f-i` Article 34(f)-(i)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-detection-alerting` Detect, log, triage, and alert on incident indicators
- `ver-incident-detection-alerting` Test incident detection, logging, triage, and alerting；证据模板：`monitoring-configuration`、`detection-test-results`。

### `req-simplified-security-monitoring` Monitor anomalies, threats, leakage, malware and vulnerabilities

An exempted electronic money institution using the simplified ICT risk management framework shall monitor and analyse anomalous activity for critical or important ICT operations, monitor current cyber-threat information, and identify information leakage, malicious code, other security threats, public software and hardware vulnerabilities and corresponding updates.

适用分支：`dora_simplified_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-34-f-i` Article 34(f)-(i)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-detection-alerting` Detect, log, triage, and alert on incident indicators
- `ver-incident-detection-alerting` Test incident detection, logging, triage, and alerting；证据模板：`monitoring-configuration`、`detection-test-results`。

### `req-simplified-threat-monitoring` Monitor relevant threats and vulnerabilities continuously

An exempted electronic money institution using the simplified ICT risk management framework shall continuously monitor threats and vulnerabilities relevant to critical or important functions and their information and ICT assets and regularly review risk scenarios affecting those functions.

适用分支：`dora_simplified_ict_risk_management`

依据：

- `prv-rts-2024-1774-art-31-3-4` Article 31(3)-(4)，关系 `direct_basis`，来源 `src-eu-reg-2024-1774`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-16-1-simplified-entities` Article 16(1), first subparagraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-incident-detection-alerting` Detect, log, triage, and alert on incident indicators
- `ver-incident-detection-alerting` Test incident detection, logging, triage, and alerting；证据模板：`monitoring-configuration`、`detection-test-results`。

### `req-third-party-aggregated-reporting` Permit third-party aggregated reporting only under all conditions

An outsourced reporting provider may submit one aggregated notification or report for a provider-originated or provider-caused major ICT-related incident affecting multiple financial entities only when it provides the relevant ICT service to multiple entities or a group, each covered entity classifies the incident as major, all covered entities are in one Member State and supervised by the same competent authority, and that authority explicitly permits aggregation for the entity type.

适用分支：全部

依据：

- `prv-its-2025-302-art-7` Article 7，关系 `direct_basis`，来源 `src-eu-reg-2025-302`。
- `prv-dora-art-19-5` Article 19(5)，关系 `supporting_context`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-outsourced-aggregated-reporting` Govern outsourced and aggregated incident reporting
- `ver-outsourced-aggregated-reporting` Verify outsourced and aggregated incident reporting；证据模板：`outsourcing-and-authority-notices`、`aggregation-and-individual-response`。

### `req-weekend-bank-holiday-reporting-extension` Apply the conditional weekend and bank-holiday extension

When a major-incident reporting deadline falls on a weekend or bank holiday in its Member State, an electronic money institution may submit by noon on the next working day, subject to the prescribed exclusions for initial and intermediate reports and any prospective competent-authority decision notified to the institution.

适用分支：全部

依据：

- `prv-rts-2025-301-art-5-4-6` Article 5(4)-(6)，关系 `direct_basis`，来源 `src-eu-reg-2025-301`。
- `prv-dora-art-2-1-d` Article 2(1)(d)，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。
- `prv-dora-art-64-application` Article 64, second paragraph，关系 `scope_basis`，来源 `src-eu-reg-2022-2554`。

控制和检查：

- `ctl-regulatory-report-workflow` Control regulatory report stages and deadlines
- `ver-regulatory-report-workflow` Verify regulatory report stages and deadlines；证据模板：`statutory-deadline-ledger`、`stage-and-exception-record`。

## 待机构确认

| 对象 | 状态 | 路径 | 内容 |
| --- | --- | --- | --- |
| `ctl-annual-incident-cost-loss` | `institution_defined` | `implementation_rules.applicability-and-request-gate.parameters.competent-authority-request-route` | The consuming institution must set competent-authority-request-route. |
| `ctl-annual-incident-cost-loss` | `institution_defined` | `implementation_rules.consistent-reference-year.parameters.selected-reference-year-basis` | The consuming institution must set selected-reference-year-basis. |
| `ctl-change-fallback-recovery` | `institution_defined` | `implementation_rules.fallback-test.parameters.fallback-test-depth-rule` | The consuming institution must set fallback-test-depth-rule. |
| `ctl-change-governance` | `institution_defined` | `implementation_rules.management-approval.parameters.authorised-management-role` | The consuming institution must set authorised-management-role. |
| `ctl-change-security-impact` | `institution_defined` | `implementation_rules.major-change-risk-assessment.parameters.major-change-criteria` | The consuming institution must set major-change-criteria. |
| `ctl-change-security-test-gate` | `institution_defined` | `implementation_rules.risk-based-test-depth.parameters.test-depth-rule` | The consuming institution must set test-depth-rule. |
| `ctl-continuity-activation-communication` | `institution_defined` | `implementation_rules.activation-authority-and-routing.parameters.activation-authority` | The consuming institution must set activation-authority. |
| `ctl-continuity-activation-communication` | `institution_defined` | `implementation_rules.activation-authority-and-routing.parameters.escalation-path` | The consuming institution must set escalation-path. |
| `ctl-continuity-activation-communication` | `institution_defined` | `implementation_rules.activation-chronology.parameters.activation-record-system` | The consuming institution must set activation-record-system. |
| `ctl-continuity-activation-communication` | `institution_defined` | `implementation_rules.activation-chronology.parameters.authorised-record-access` | The consuming institution must set authorised-record-access. |
| `ctl-continuity-activation-communication` | `institution_defined` | `implementation_rules.activation-chronology.parameters.record-retention-period` | The consuming institution must set record-retention-period. |
| `ctl-continuity-activation-communication` | `institution_defined` | `implementation_rules.controlled-communications.parameters.communication-channels` | The consuming institution must set communication-channels. |
| `ctl-continuity-activation-communication` | `institution_defined` | `implementation_rules.controlled-communications.parameters.communication-matrix` | The consuming institution must set communication-matrix. |
| `ctl-continuity-activation-communication` | `institution_defined` | `implementation_rules.controlled-communications.parameters.message-approval-role` | The consuming institution must set message-approval-role. |
| `ctl-continuity-activation-communication` | `institution_defined` | `implementation_rules.crisis-coordination.parameters.crisis-contact-methods` | The consuming institution must set crisis-contact-methods. |
| `ctl-continuity-activation-communication` | `institution_defined` | `implementation_rules.crisis-coordination.parameters.crisis-role-roster` | The consuming institution must set crisis-role-roster. |
| `ctl-continuity-backup-restoration` | `institution_defined` | `implementation_rules.backup-security-and-separation.parameters.backup-access-policy` | The consuming institution must set backup-access-policy. |
| `ctl-continuity-backup-restoration` | `institution_defined` | `implementation_rules.backup-security-and-separation.parameters.backup-integrity-controls` | The consuming institution must set backup-integrity-controls. |
| `ctl-continuity-backup-restoration` | `institution_defined` | `implementation_rules.backup-security-and-separation.parameters.segregation-design` | The consuming institution must set segregation-design. |
| `ctl-continuity-backup-restoration` | `institution_defined` | `implementation_rules.controlled-backup-activation.parameters.restoration-authorised-roles` | The consuming institution must set restoration-authorised-roles. |
| `ctl-continuity-backup-restoration` | `institution_defined` | `implementation_rules.controlled-backup-activation.parameters.restoration-procedure` | The consuming institution must set restoration-procedure. |
| `ctl-continuity-backup-restoration` | `institution_defined` | `implementation_rules.restoration-test-and-currency.parameters.restore-test-environment` | The consuming institution must set restore-test-environment. |
| `ctl-continuity-backup-restoration` | `institution_defined` | `implementation_rules.restoration-test-and-currency.parameters.restore-test-scope` | The consuming institution must set restore-test-scope. |
| `ctl-continuity-backup-restoration` | `institution_defined` | `implementation_rules.risk-based-backup-policy.parameters.backup-frequency` | The consuming institution must set backup-frequency. |
| `ctl-continuity-backup-restoration` | `institution_defined` | `implementation_rules.risk-based-backup-policy.parameters.backup-lifecycle-retention` | The consuming institution must set backup-lifecycle-retention. |
| `ctl-continuity-backup-restoration` | `institution_defined` | `implementation_rules.risk-based-backup-policy.parameters.backup-scope` | The consuming institution must set backup-scope. |
| `ctl-continuity-bia-dependency` | `institution_defined` | `implementation_rules.business-impact-analysis.parameters.bia-approval-role` | The consuming institution must set bia-approval-role. |
| `ctl-continuity-bia-dependency` | `institution_defined` | `implementation_rules.business-impact-analysis.parameters.impact-criteria` | The consuming institution must set impact-criteria. |
| `ctl-continuity-bia-dependency` | `institution_defined` | `implementation_rules.business-impact-analysis.parameters.impact-tolerances` | The consuming institution must set impact-tolerances. |
| `ctl-continuity-bia-dependency` | `institution_defined` | `implementation_rules.function-dependency-register.parameters.criticality-method` | The consuming institution must set criticality-method. |
| `ctl-continuity-bia-dependency` | `institution_defined` | `implementation_rules.function-dependency-register.parameters.inventory-source-systems` | The consuming institution must set inventory-source-systems. |
| `ctl-continuity-bia-dependency` | `institution_defined` | `implementation_rules.proportionality-record.parameters.proportionality-approval-role` | The consuming institution must set proportionality-approval-role. |
| `ctl-continuity-findings-improvement` | `institution_defined` | `implementation_rules.evidence-based-closure.parameters.closure-approval-role` | The consuming institution must set closure-approval-role. |
| `ctl-continuity-findings-improvement` | `institution_defined` | `implementation_rules.evidence-based-closure.parameters.retest-depth` | The consuming institution must set retest-depth. |
| `ctl-continuity-findings-improvement` | `institution_defined` | `implementation_rules.governed-finding-record.parameters.finding-record-system` | The consuming institution must set finding-record-system. |
| `ctl-continuity-findings-improvement` | `institution_defined` | `implementation_rules.governed-finding-record.parameters.finding-severity-method` | The consuming institution must set finding-severity-method. |
| `ctl-continuity-findings-improvement` | `institution_defined` | `implementation_rules.management-reporting.parameters.management-report-format` | The consuming institution must set management-report-format. |
| `ctl-continuity-findings-improvement` | `institution_defined` | `implementation_rules.management-reporting.parameters.reporting-timing` | The consuming institution must set reporting-timing. |
| `ctl-continuity-findings-improvement` | `institution_defined` | `implementation_rules.risk-and-plan-feedback.parameters.feedback-assessment-owner` | The consuming institution must set feedback-assessment-owner. |
| `ctl-continuity-findings-improvement` | `institution_defined` | `implementation_rules.risk-and-plan-feedback.parameters.material-update-criteria` | The consuming institution must set material-update-criteria. |
| `ctl-continuity-plan-lifecycle` | `institution_defined` | `implementation_rules.authorised-activation-lifecycle.parameters.activation-authority` | The consuming institution must set activation-authority. |
| `ctl-continuity-plan-lifecycle` | `institution_defined` | `implementation_rules.authorised-activation-lifecycle.parameters.activation-criteria` | The consuming institution must set activation-criteria. |
| `ctl-continuity-plan-lifecycle` | `institution_defined` | `implementation_rules.authorised-activation-lifecycle.parameters.deactivation-criteria` | The consuming institution must set deactivation-criteria. |
| `ctl-continuity-plan-lifecycle` | `institution_defined` | `implementation_rules.plan-change-inputs.parameters.material-plan-change-criteria` | The consuming institution must set material-plan-change-criteria. |
| `ctl-continuity-plan-lifecycle` | `institution_defined` | `implementation_rules.plan-coverage-and-versions.parameters.plan-owner-mapping` | The consuming institution must set plan-owner-mapping. |
| `ctl-continuity-plan-lifecycle` | `institution_defined` | `implementation_rules.plan-coverage-and-versions.parameters.plan-repository` | The consuming institution must set plan-repository. |
| `ctl-continuity-plan-lifecycle` | `institution_defined` | `implementation_rules.recovery-options-and-success.parameters.degraded-operation-criteria` | The consuming institution must set degraded-operation-criteria. |
| `ctl-continuity-plan-lifecycle` | `institution_defined` | `implementation_rules.recovery-options-and-success.parameters.recovery-acceptance-role` | The consuming institution must set recovery-acceptance-role. |
| `ctl-continuity-plan-lifecycle` | `institution_defined` | `implementation_rules.recovery-options-and-success.parameters.recovery-success-criteria` | The consuming institution must set recovery-success-criteria. |
| `ctl-continuity-policy-governance` | `institution_defined` | `implementation_rules.approval-access-and-resources.parameters.approval-authority` | The consuming institution must set approval-authority. |
| `ctl-continuity-policy-governance` | `institution_defined` | `implementation_rules.approval-access-and-resources.parameters.emergency-access-method` | The consuming institution must set emergency-access-method. |
| `ctl-continuity-policy-governance` | `institution_defined` | `implementation_rules.approval-access-and-resources.parameters.resource-adequacy-criteria` | The consuming institution must set resource-adequacy-criteria. |
| `ctl-continuity-policy-governance` | `institution_defined` | `implementation_rules.branch-and-scope.parameters.framework-branch-approver` | The consuming institution must set framework-branch-approver. |
| `ctl-continuity-policy-governance` | `institution_defined` | `implementation_rules.branch-and-scope.parameters.framework-branch-evidence` | The consuming institution must set framework-branch-evidence. |
| `ctl-continuity-policy-governance` | `institution_defined` | `implementation_rules.independent-audit-routing.parameters.independent-audit-function` | The consuming institution must set independent-audit-function. |
| `ctl-continuity-policy-governance` | `institution_defined` | `implementation_rules.independent-audit-routing.parameters.microenterprise-status-evidence` | The consuming institution must set microenterprise-status-evidence. |
| `ctl-continuity-recovery-integrity` | `institution_defined` | `implementation_rules.integrity-and-reconciliation.parameters.reconciliation-rules` | The consuming institution must set reconciliation-rules. |
| `ctl-continuity-recovery-integrity` | `institution_defined` | `implementation_rules.integrity-and-reconciliation.parameters.reconciliation-tolerances` | The consuming institution must set reconciliation-tolerances. |
| `ctl-continuity-recovery-integrity` | `institution_defined` | `implementation_rules.residual-risk-disposition.parameters.degraded-operation-limits` | The consuming institution must set degraded-operation-limits. |
| `ctl-continuity-recovery-integrity` | `institution_defined` | `implementation_rules.residual-risk-disposition.parameters.residual-risk-approval-role` | The consuming institution must set residual-risk-approval-role. |
| `ctl-continuity-recovery-integrity` | `institution_defined` | `implementation_rules.staged-recovery-gates.parameters.recovery-acceptance-roles` | The consuming institution must set recovery-acceptance-roles. |
| `ctl-continuity-recovery-integrity` | `institution_defined` | `implementation_rules.staged-recovery-gates.parameters.recovery-gate-criteria` | The consuming institution must set recovery-gate-criteria. |
| `ctl-continuity-recovery-objectives-capacity` | `institution_defined` | `implementation_rules.capacity-traceability.parameters.capacity-evidence-sources` | The consuming institution must set capacity-evidence-sources. |
| `ctl-continuity-recovery-objectives-capacity` | `institution_defined` | `implementation_rules.capacity-traceability.parameters.minimum-operating-duration` | The consuming institution must set minimum-operating-duration. |
| `ctl-continuity-recovery-objectives-capacity` | `institution_defined` | `implementation_rules.extreme-scenario-alignment.parameters.extreme-scenario-set` | The consuming institution must set extreme-scenario-set. |
| `ctl-continuity-recovery-objectives-capacity` | `institution_defined` | `implementation_rules.extreme-scenario-alignment.parameters.residual-risk-approval-role` | The consuming institution must set residual-risk-approval-role. |
| `ctl-continuity-recovery-objectives-capacity` | `institution_defined` | `implementation_rules.microenterprise-capacity-branch.parameters.microenterprise-status-evidence` | The consuming institution must set microenterprise-status-evidence. |
| `ctl-continuity-recovery-objectives-capacity` | `institution_defined` | `implementation_rules.microenterprise-capacity-branch.parameters.redundancy-assessment-approver` | The consuming institution must set redundancy-assessment-approver. |
| `ctl-continuity-recovery-objectives-capacity` | `institution_defined` | `implementation_rules.recovery-target-approval.parameters.recovery-target-approval-role` | The consuming institution must set recovery-target-approval-role. |
| `ctl-continuity-recovery-objectives-capacity` | `institution_defined` | `implementation_rules.recovery-target-approval.parameters.recovery-targets` | The consuming institution must set recovery-targets. |
| `ctl-continuity-scenario-third-party` | `institution_defined` | `implementation_rules.governed-scenario-catalogue.parameters.scenario-catalogue-owner` | The consuming institution must set scenario-catalogue-owner. |
| `ctl-continuity-scenario-third-party` | `institution_defined` | `implementation_rules.governed-scenario-catalogue.parameters.scenario-review-trigger` | The consuming institution must set scenario-review-trigger. |
| `ctl-continuity-scenario-third-party` | `institution_defined` | `implementation_rules.relevance-and-plausibility.parameters.scenario-approval-role` | The consuming institution must set scenario-approval-role. |
| `ctl-continuity-scenario-third-party` | `institution_defined` | `implementation_rules.relevance-and-plausibility.parameters.scenario-selection-criteria` | The consuming institution must set scenario-selection-criteria. |
| `ctl-continuity-scenario-third-party` | `institution_defined` | `implementation_rules.scenario-assumption-challenge.parameters.assumption-review-role` | The consuming institution must set assumption-review-role. |
| `ctl-continuity-scenario-third-party` | `institution_defined` | `implementation_rules.third-party-failure-scenarios.parameters.critical-provider-scope` | The consuming institution must set critical-provider-scope. |
| `ctl-continuity-scenario-third-party` | `institution_defined` | `implementation_rules.third-party-failure-scenarios.parameters.provider-test-interface` | The consuming institution must set provider-test-interface. |
| `ctl-continuity-testing-switchover` | `institution_defined` | `implementation_rules.capability-and-duration.parameters.recovery-test-criteria` | The consuming institution must set recovery-test-criteria. |
| `ctl-continuity-testing-switchover` | `institution_defined` | `implementation_rules.capability-and-duration.parameters.required-operating-duration` | The consuming institution must set required-operating-duration. |
| `ctl-continuity-testing-switchover` | `institution_defined` | `implementation_rules.conditional-switchover.parameters.microenterprise-status-evidence` | The consuming institution must set microenterprise-status-evidence. |
| `ctl-continuity-testing-switchover` | `institution_defined` | `implementation_rules.conditional-switchover.parameters.switchover-test-scope` | The consuming institution must set switchover-test-scope. |
| `ctl-continuity-testing-switchover` | `institution_defined` | `implementation_rules.controlled-test-design.parameters.test-abort-criteria` | The consuming institution must set test-abort-criteria. |
| `ctl-continuity-testing-switchover` | `institution_defined` | `implementation_rules.controlled-test-design.parameters.test-approval-role` | The consuming institution must set test-approval-role. |
| `ctl-continuity-testing-switchover` | `institution_defined` | `implementation_rules.controlled-test-design.parameters.test-environment` | The consuming institution must set test-environment. |
| `ctl-emergency-change` | `institution_defined` | `implementation_rules.post-implementation-review.parameters.maximum-post-review-delay` | The consuming institution must set maximum-post-review-delay. |
| `ctl-incident-communications` | `institution_defined` | `implementation_rules.affected-client-notification.parameters.approved-client-communication-channels` | The consuming institution must set approved-client-communication-channels. |
| `ctl-incident-communications` | `institution_defined` | `implementation_rules.affected-client-notification.parameters.client-impact-assessment-owner` | The consuming institution must set client-impact-assessment-owner. |
| `ctl-incident-communications` | `institution_defined` | `implementation_rules.crisis-communication-arrangements.parameters.authorised-public-communication-role` | The consuming institution must set authorised-public-communication-role. |
| `ctl-incident-communications` | `institution_defined` | `implementation_rules.crisis-communication-arrangements.parameters.crisis-communication-plan` | The consuming institution must set crisis-communication-plan. |
| `ctl-incident-communications` | `institution_defined` | `implementation_rules.internal-escalation.parameters.internal-escalation-matrix` | The consuming institution must set internal-escalation-matrix. |
| `ctl-incident-communications` | `institution_defined` | `implementation_rules.internal-escalation.parameters.management-body-reporting-route` | The consuming institution must set management-body-reporting-route. |
| `ctl-incident-communications` | `institution_defined` | `implementation_rules.parallel-obligation-register.parameters.external-notification-obligation-register` | The consuming institution must set external-notification-obligation-register. |
| `ctl-incident-detection-alerting` | `institution_defined` | `implementation_rules.alert-thresholds-and-priority.parameters.expected-resolution-targets` | The consuming institution must set expected-resolution-targets. |
| `ctl-incident-detection-alerting` | `institution_defined` | `implementation_rules.alert-thresholds-and-priority.parameters.out-of-hours-escalation-route` | The consuming institution must set out-of-hours-escalation-route. |
| `ctl-incident-detection-alerting` | `institution_defined` | `implementation_rules.alert-thresholds-and-priority.parameters.response-alert-thresholds` | The consuming institution must set response-alert-thresholds. |
| `ctl-incident-detection-alerting` | `institution_defined` | `implementation_rules.monitoring-input-coverage.parameters.mechanism-test-frequency` | The consuming institution must set mechanism-test-frequency. |
| `ctl-incident-detection-alerting` | `institution_defined` | `implementation_rules.monitoring-input-coverage.parameters.monitoring-coverage-register` | The consuming institution must set monitoring-coverage-register. |
| `ctl-incident-detection-alerting` | `institution_defined` | `implementation_rules.simplified-event-logging.parameters.simplified-logging-standard` | The consuming institution must set simplified-logging-standard. |
| `ctl-incident-governance-records` | `institution_defined` | `implementation_rules.evidence-retention.parameters.incident-evidence-retention-schedule` | The consuming institution must set incident-evidence-retention-schedule. |
| `ctl-incident-governance-records` | `institution_defined` | `implementation_rules.policy-roles-and-contacts.parameters.approved-incident-role-map` | The consuming institution must set approved-incident-role-map. |
| `ctl-incident-governance-records` | `institution_defined` | `implementation_rules.policy-roles-and-contacts.parameters.contact-register-owner` | The consuming institution must set contact-register-owner. |
| `ctl-incident-governance-records` | `institution_defined` | `implementation_rules.protected-chronology.parameters.incident-record-system` | The consuming institution must set incident-record-system. |
| `ctl-incident-governance-records` | `institution_defined` | `implementation_rules.protected-chronology.parameters.integrity-protection-method` | The consuming institution must set integrity-protection-method. |
| `ctl-incident-response-recovery` | `institution_defined` | `implementation_rules.containment-and-recovery-activation.parameters.containment-and-recovery-playbooks` | The consuming institution must set containment-and-recovery-playbooks. |
| `ctl-incident-response-recovery` | `institution_defined` | `implementation_rules.response-status-updates.parameters.material-update-criteria` | The consuming institution must set material-update-criteria. |
| `ctl-incident-response-recovery` | `institution_defined` | `implementation_rules.secure-restoration-gate.parameters.secure-restoration-criteria` | The consuming institution must set secure-restoration-criteria. |
| `ctl-outsourced-aggregated-reporting` | `institution_defined` | `implementation_rules.third-party-aggregation-gate.parameters.authority-aggregation-permission-record` | The consuming institution must set authority-aggregation-permission-record. |
| `ctl-post-incident-review-learning` | `institution_defined` | `implementation_rules.root-cause-and-effectiveness-review.parameters.post-incident-review-criteria` | The consuming institution must set post-incident-review-criteria. |
| `ctl-post-incident-review-learning` | `institution_defined` | `implementation_rules.root-cause-and-effectiveness-review.parameters.review-completion-target` | The consuming institution must set review-completion-target. |
| `ctl-regulatory-report-content` | `institution_defined` | `implementation_rules.controlled-template-version.parameters.official-template-source-register` | The consuming institution must set official-template-source-register. |
| `ctl-regulatory-report-workflow` | `institution_defined` | `implementation_rules.weekend-and-bank-holiday-rule.parameters.competent-authority-extension-decision-register` | The consuming institution must set competent-authority-extension-decision-register. |
| `ctl-regulatory-report-workflow` | `institution_defined` | `implementation_rules.weekend-and-bank-holiday-rule.parameters.member-state-business-calendar` | The consuming institution must set member-state-business-calendar. |
| `ctl-regulatory-reporting-trigger` | `institution_defined` | `implementation_rules.mandatory-major-incident-path.parameters.competent-authority-routing-register` | The consuming institution must set competent-authority-routing-register. |
| `ctl-regulatory-reporting-trigger` | `institution_defined` | `implementation_rules.payment-incident-path.parameters.payment-incident-authority-route` | The consuming institution must set payment-incident-authority-route. |
| `ctl-regulatory-reporting-trigger` | `institution_defined` | `implementation_rules.voluntary-significant-threat-decision.parameters.voluntary-notification-decision-role` | The consuming institution must set voluntary-notification-decision-role. |
| `ctl-secure-regulatory-submission` | `institution_defined` | `implementation_rules.authority-channel-routing.parameters.approved-regulatory-channel-register` | The consuming institution must set approved-regulatory-channel-register. |
| `ctl-secure-regulatory-submission` | `institution_defined` | `implementation_rules.secure-fallback-and-resubmission.parameters.authority-agreed-secure-fallbacks` | The consuming institution must set authority-agreed-secure-fallbacks. |
| `ctl-secure-regulatory-submission` | `institution_defined` | `implementation_rules.submission-authorisation.parameters.authorised-submission-role` | The consuming institution must set authorised-submission-role. |
| `ctl-secure-regulatory-submission` | `institution_defined` | `implementation_rules.submission-authorisation.parameters.submission-access-policy` | The consuming institution must set submission-access-policy. |
| `ver-annual-incident-cost-loss` | `institution_defined` | `evidence_requirements.annual-cost-loss-report.retention_period` | The consuming institution must set the retention period for annual-cost-loss-report. |
| `ver-annual-incident-cost-loss` | `institution_defined` | `evidence_requirements.annual-cost-loss-report.source_system` | The consuming institution must map the source system for annual-cost-loss-report. |
| `ver-annual-incident-cost-loss` | `institution_defined` | `evidence_requirements.annual-estimate-reconciliation.retention_period` | The consuming institution must set the retention period for annual-estimate-reconciliation. |
| `ver-annual-incident-cost-loss` | `institution_defined` | `evidence_requirements.annual-estimate-reconciliation.source_system` | The consuming institution must map the source system for annual-estimate-reconciliation. |
| `ver-change-fallback-recovery` | `institution_defined` | `evidence_requirements.fallback-plan.retention_period` | The consuming institution must set the retention period for fallback-plan. |
| `ver-change-fallback-recovery` | `institution_defined` | `evidence_requirements.fallback-plan.source_system` | The consuming institution must map the source system for fallback-plan. |
| `ver-change-fallback-recovery` | `institution_defined` | `evidence_requirements.fallback-test-report.retention_period` | The consuming institution must set the retention period for fallback-test-report. |
| `ver-change-fallback-recovery` | `institution_defined` | `evidence_requirements.fallback-test-report.source_system` | The consuming institution must map the source system for fallback-test-report. |
| `ver-change-governance` | `institution_defined` | `evidence_requirements.change-protocol.retention_period` | The consuming institution must set the retention period for change-protocol. |
| `ver-change-governance` | `institution_defined` | `evidence_requirements.change-protocol.source_system` | The consuming institution must map the source system for change-protocol. |
| `ver-change-governance` | `institution_defined` | `evidence_requirements.process-approval.retention_period` | The consuming institution must set the retention period for process-approval. |
| `ver-change-governance` | `institution_defined` | `evidence_requirements.process-approval.source_system` | The consuming institution must map the source system for process-approval. |
| `ver-change-lifecycle-workflow` | `institution_defined` | `evidence_requirements.lifecycle-audit-log.retention_period` | The consuming institution must set the retention period for lifecycle-audit-log. |
| `ver-change-lifecycle-workflow` | `institution_defined` | `evidence_requirements.lifecycle-audit-log.source_system` | The consuming institution must map the source system for lifecycle-audit-log. |
| `ver-change-lifecycle-workflow` | `institution_defined` | `evidence_requirements.lifecycle-record.retention_period` | The consuming institution must set the retention period for lifecycle-record. |
| `ver-change-lifecycle-workflow` | `institution_defined` | `evidence_requirements.lifecycle-record.source_system` | The consuming institution must map the source system for lifecycle-record. |
| `ver-change-planning-record` | `institution_defined` | `evidence_requirements.change-plan.retention_period` | The consuming institution must set the retention period for change-plan. |
| `ver-change-planning-record` | `institution_defined` | `evidence_requirements.change-plan.source_system` | The consuming institution must map the source system for change-plan. |
| `ver-change-planning-record` | `institution_defined` | `evidence_requirements.communication-record.retention_period` | The consuming institution must set the retention period for communication-record. |
| `ver-change-planning-record` | `institution_defined` | `evidence_requirements.communication-record.source_system` | The consuming institution must map the source system for communication-record. |
| `ver-change-role-separation` | `institution_defined` | `evidence_requirements.approval-audit-log.retention_period` | The consuming institution must set the retention period for approval-audit-log. |
| `ver-change-role-separation` | `institution_defined` | `evidence_requirements.approval-audit-log.source_system` | The consuming institution must map the source system for approval-audit-log. |
| `ver-change-role-separation` | `institution_defined` | `evidence_requirements.role-record.retention_period` | The consuming institution must set the retention period for role-record. |
| `ver-change-role-separation` | `institution_defined` | `evidence_requirements.role-record.source_system` | The consuming institution must map the source system for role-record. |
| `ver-change-security-impact` | `institution_defined` | `evidence_requirements.major-change-risk-assessment.retention_period` | The consuming institution must set the retention period for major-change-risk-assessment. |
| `ver-change-security-impact` | `institution_defined` | `evidence_requirements.major-change-risk-assessment.source_system` | The consuming institution must map the source system for major-change-risk-assessment. |
| `ver-change-security-impact` | `institution_defined` | `evidence_requirements.security-impact-assessment.retention_period` | The consuming institution must set the retention period for security-impact-assessment. |
| `ver-change-security-impact` | `institution_defined` | `evidence_requirements.security-impact-assessment.source_system` | The consuming institution must map the source system for security-impact-assessment. |
| `ver-change-security-test-gate` | `institution_defined` | `evidence_requirements.production-approval.retention_period` | The consuming institution must set the retention period for production-approval. |
| `ver-change-security-test-gate` | `institution_defined` | `evidence_requirements.production-approval.source_system` | The consuming institution must map the source system for production-approval. |
| `ver-change-security-test-gate` | `institution_defined` | `evidence_requirements.security-test-report.retention_period` | The consuming institution must set the retention period for security-test-report. |
| `ver-change-security-test-gate` | `institution_defined` | `evidence_requirements.security-test-report.source_system` | The consuming institution must map the source system for security-test-report. |
| `ver-continuity-activation-communication` | `institution_defined` | `evidence_requirements.crisis-communication-record.retention_period` | The consuming institution must set the retention period for crisis-communication-record. |
| `ver-continuity-activation-communication` | `institution_defined` | `evidence_requirements.crisis-communication-record.source_system` | The consuming institution must map the source system for crisis-communication-record. |
| `ver-continuity-activation-communication` | `institution_defined` | `evidence_requirements.plan-activation-chronology.retention_period` | The consuming institution must set the retention period for plan-activation-chronology. |
| `ver-continuity-activation-communication` | `institution_defined` | `evidence_requirements.plan-activation-chronology.source_system` | The consuming institution must map the source system for plan-activation-chronology. |
| `ver-continuity-backup-restoration` | `institution_defined` | `evidence_requirements.backup-configuration-and-execution.retention_period` | The consuming institution must set the retention period for backup-configuration-and-execution. |
| `ver-continuity-backup-restoration` | `institution_defined` | `evidence_requirements.backup-configuration-and-execution.source_system` | The consuming institution must map the source system for backup-configuration-and-execution. |
| `ver-continuity-backup-restoration` | `institution_defined` | `evidence_requirements.backup-restore-test.retention_period` | The consuming institution must set the retention period for backup-restore-test. |
| `ver-continuity-backup-restoration` | `institution_defined` | `evidence_requirements.backup-restore-test.source_system` | The consuming institution must map the source system for backup-restore-test. |
| `ver-continuity-bia-dependency` | `institution_defined` | `evidence_requirements.approved-bia-and-proportionality.retention_period` | The consuming institution must set the retention period for approved-bia-and-proportionality. |
| `ver-continuity-bia-dependency` | `institution_defined` | `evidence_requirements.approved-bia-and-proportionality.source_system` | The consuming institution must map the source system for approved-bia-and-proportionality. |
| `ver-continuity-bia-dependency` | `institution_defined` | `evidence_requirements.function-dependency-inventory.retention_period` | The consuming institution must set the retention period for function-dependency-inventory. |
| `ver-continuity-bia-dependency` | `institution_defined` | `evidence_requirements.function-dependency-inventory.source_system` | The consuming institution must map the source system for function-dependency-inventory. |
| `ver-continuity-findings-improvement` | `institution_defined` | `evidence_requirements.continuity-finding-register.retention_period` | The consuming institution must set the retention period for continuity-finding-register. |
| `ver-continuity-findings-improvement` | `institution_defined` | `evidence_requirements.continuity-finding-register.source_system` | The consuming institution must map the source system for continuity-finding-register. |
| `ver-continuity-findings-improvement` | `institution_defined` | `evidence_requirements.continuity-improvement-and-closure.retention_period` | The consuming institution must set the retention period for continuity-improvement-and-closure. |
| `ver-continuity-findings-improvement` | `institution_defined` | `evidence_requirements.continuity-improvement-and-closure.source_system` | The consuming institution must map the source system for continuity-improvement-and-closure. |
| `ver-continuity-plan-lifecycle` | `institution_defined` | `evidence_requirements.controlled-continuity-plan-set.retention_period` | The consuming institution must set the retention period for controlled-continuity-plan-set. |
| `ver-continuity-plan-lifecycle` | `institution_defined` | `evidence_requirements.controlled-continuity-plan-set.source_system` | The consuming institution must map the source system for controlled-continuity-plan-set. |
| `ver-continuity-plan-lifecycle` | `institution_defined` | `evidence_requirements.plan-execution-test.retention_period` | The consuming institution must set the retention period for plan-execution-test. |
| `ver-continuity-plan-lifecycle` | `institution_defined` | `evidence_requirements.plan-execution-test.source_system` | The consuming institution must map the source system for plan-execution-test. |
| `ver-continuity-policy-governance` | `institution_defined` | `evidence_requirements.conditional-audit-record.retention_period` | The consuming institution must set the retention period for conditional-audit-record. |
| `ver-continuity-policy-governance` | `institution_defined` | `evidence_requirements.conditional-audit-record.source_system` | The consuming institution must map the source system for conditional-audit-record. |
| `ver-continuity-policy-governance` | `institution_defined` | `evidence_requirements.continuity-policy-package.retention_period` | The consuming institution must set the retention period for continuity-policy-package. |
| `ver-continuity-policy-governance` | `institution_defined` | `evidence_requirements.continuity-policy-package.source_system` | The consuming institution must map the source system for continuity-policy-package. |
| `ver-continuity-recovery-integrity` | `institution_defined` | `evidence_requirements.recovery-gate-record.retention_period` | The consuming institution must set the retention period for recovery-gate-record. |
| `ver-continuity-recovery-integrity` | `institution_defined` | `evidence_requirements.recovery-gate-record.source_system` | The consuming institution must map the source system for recovery-gate-record. |
| `ver-continuity-recovery-integrity` | `institution_defined` | `evidence_requirements.recovery-reconciliation-report.retention_period` | The consuming institution must set the retention period for recovery-reconciliation-report. |
| `ver-continuity-recovery-integrity` | `institution_defined` | `evidence_requirements.recovery-reconciliation-report.source_system` | The consuming institution must map the source system for recovery-reconciliation-report. |
| `ver-continuity-recovery-objectives-capacity` | `institution_defined` | `evidence_requirements.recovery-capacity-test.retention_period` | The consuming institution must set the retention period for recovery-capacity-test. |
| `ver-continuity-recovery-objectives-capacity` | `institution_defined` | `evidence_requirements.recovery-capacity-test.source_system` | The consuming institution must map the source system for recovery-capacity-test. |
| `ver-continuity-recovery-objectives-capacity` | `institution_defined` | `evidence_requirements.recovery-target-register.retention_period` | The consuming institution must set the retention period for recovery-target-register. |
| `ver-continuity-recovery-objectives-capacity` | `institution_defined` | `evidence_requirements.recovery-target-register.source_system` | The consuming institution must map the source system for recovery-target-register. |
| `ver-continuity-scenario-third-party` | `institution_defined` | `evidence_requirements.continuity-scenario-catalogue.retention_period` | The consuming institution must set the retention period for continuity-scenario-catalogue. |
| `ver-continuity-scenario-third-party` | `institution_defined` | `evidence_requirements.continuity-scenario-catalogue.source_system` | The consuming institution must map the source system for continuity-scenario-catalogue. |
| `ver-continuity-scenario-third-party` | `institution_defined` | `evidence_requirements.third-party-scenario-assessment.retention_period` | The consuming institution must set the retention period for third-party-scenario-assessment. |
| `ver-continuity-scenario-third-party` | `institution_defined` | `evidence_requirements.third-party-scenario-assessment.source_system` | The consuming institution must map the source system for third-party-scenario-assessment. |
| `ver-continuity-testing-switchover` | `institution_defined` | `evidence_requirements.continuity-and-switchover-test-report.retention_period` | The consuming institution must set the retention period for continuity-and-switchover-test-report. |
| `ver-continuity-testing-switchover` | `institution_defined` | `evidence_requirements.continuity-and-switchover-test-report.source_system` | The consuming institution must map the source system for continuity-and-switchover-test-report. |
| `ver-continuity-testing-switchover` | `institution_defined` | `evidence_requirements.continuity-test-register-and-plan.retention_period` | The consuming institution must set the retention period for continuity-test-register-and-plan. |
| `ver-continuity-testing-switchover` | `institution_defined` | `evidence_requirements.continuity-test-register-and-plan.source_system` | The consuming institution must map the source system for continuity-test-register-and-plan. |
| `ver-emergency-change` | `institution_defined` | `evidence_requirements.emergency-change-record.retention_period` | The consuming institution must set the retention period for emergency-change-record. |
| `ver-emergency-change` | `institution_defined` | `evidence_requirements.emergency-change-record.source_system` | The consuming institution must map the source system for emergency-change-record. |
| `ver-emergency-change` | `institution_defined` | `evidence_requirements.emergency-post-review.retention_period` | The consuming institution must set the retention period for emergency-post-review. |
| `ver-emergency-change` | `institution_defined` | `evidence_requirements.emergency-post-review.source_system` | The consuming institution must map the source system for emergency-post-review. |
| `ver-incident-classification` | `institution_defined` | `evidence_requirements.classification-assessment.retention_period` | The consuming institution must set the retention period for classification-assessment. |
| `ver-incident-classification` | `institution_defined` | `evidence_requirements.classification-assessment.source_system` | The consuming institution must map the source system for classification-assessment. |
| `ver-incident-classification` | `institution_defined` | `evidence_requirements.classification-history.retention_period` | The consuming institution must set the retention period for classification-history. |
| `ver-incident-classification` | `institution_defined` | `evidence_requirements.classification-history.source_system` | The consuming institution must map the source system for classification-history. |
| `ver-incident-communications` | `institution_defined` | `evidence_requirements.communication-delivery-log.retention_period` | The consuming institution must set the retention period for communication-delivery-log. |
| `ver-incident-communications` | `institution_defined` | `evidence_requirements.communication-delivery-log.source_system` | The consuming institution must map the source system for communication-delivery-log. |
| `ver-incident-communications` | `institution_defined` | `evidence_requirements.communication-plan-and-assessment.retention_period` | The consuming institution must set the retention period for communication-plan-and-assessment. |
| `ver-incident-communications` | `institution_defined` | `evidence_requirements.communication-plan-and-assessment.source_system` | The consuming institution must map the source system for communication-plan-and-assessment. |
| `ver-incident-detection-alerting` | `institution_defined` | `evidence_requirements.detection-test-results.retention_period` | The consuming institution must set the retention period for detection-test-results. |
| `ver-incident-detection-alerting` | `institution_defined` | `evidence_requirements.detection-test-results.source_system` | The consuming institution must map the source system for detection-test-results. |
| `ver-incident-detection-alerting` | `institution_defined` | `evidence_requirements.monitoring-configuration.retention_period` | The consuming institution must set the retention period for monitoring-configuration. |
| `ver-incident-detection-alerting` | `institution_defined` | `evidence_requirements.monitoring-configuration.source_system` | The consuming institution must map the source system for monitoring-configuration. |
| `ver-incident-governance-records` | `institution_defined` | `evidence_requirements.governance-and-retention-record.retention_period` | The consuming institution must set the retention period for governance-and-retention-record. |
| `ver-incident-governance-records` | `institution_defined` | `evidence_requirements.governance-and-retention-record.source_system` | The consuming institution must map the source system for governance-and-retention-record. |
| `ver-incident-governance-records` | `institution_defined` | `evidence_requirements.governed-incident-case.retention_period` | The consuming institution must set the retention period for governed-incident-case. |
| `ver-incident-governance-records` | `institution_defined` | `evidence_requirements.governed-incident-case.source_system` | The consuming institution must map the source system for governed-incident-case. |
| `ver-incident-response-recovery` | `institution_defined` | `evidence_requirements.response-and-recovery-timeline.retention_period` | The consuming institution must set the retention period for response-and-recovery-timeline. |
| `ver-incident-response-recovery` | `institution_defined` | `evidence_requirements.response-and-recovery-timeline.source_system` | The consuming institution must map the source system for response-and-recovery-timeline. |
| `ver-incident-response-recovery` | `institution_defined` | `evidence_requirements.secure-restoration-test.retention_period` | The consuming institution must set the retention period for secure-restoration-test. |
| `ver-incident-response-recovery` | `institution_defined` | `evidence_requirements.secure-restoration-test.source_system` | The consuming institution must map the source system for secure-restoration-test. |
| `ver-incident-trend-management-reporting` | `institution_defined` | `evidence_requirements.annual-management-report.retention_period` | The consuming institution must set the retention period for annual-management-report. |
| `ver-incident-trend-management-reporting` | `institution_defined` | `evidence_requirements.annual-management-report.source_system` | The consuming institution must map the source system for annual-management-report. |
| `ver-incident-trend-management-reporting` | `institution_defined` | `evidence_requirements.recurring-incident-analysis.retention_period` | The consuming institution must set the retention period for recurring-incident-analysis. |
| `ver-incident-trend-management-reporting` | `institution_defined` | `evidence_requirements.recurring-incident-analysis.source_system` | The consuming institution must map the source system for recurring-incident-analysis. |
| `ver-outsourced-aggregated-reporting` | `institution_defined` | `evidence_requirements.aggregation-and-individual-response.retention_period` | The consuming institution must set the retention period for aggregation-and-individual-response. |
| `ver-outsourced-aggregated-reporting` | `institution_defined` | `evidence_requirements.aggregation-and-individual-response.source_system` | The consuming institution must map the source system for aggregation-and-individual-response. |
| `ver-outsourced-aggregated-reporting` | `institution_defined` | `evidence_requirements.outsourcing-and-authority-notices.retention_period` | The consuming institution must set the retention period for outsourcing-and-authority-notices. |
| `ver-outsourced-aggregated-reporting` | `institution_defined` | `evidence_requirements.outsourcing-and-authority-notices.source_system` | The consuming institution must map the source system for outsourcing-and-authority-notices. |
| `ver-post-incident-review-learning` | `institution_defined` | `evidence_requirements.improvement-and-risk-record.retention_period` | The consuming institution must set the retention period for improvement-and-risk-record. |
| `ver-post-incident-review-learning` | `institution_defined` | `evidence_requirements.improvement-and-risk-record.source_system` | The consuming institution must map the source system for improvement-and-risk-record. |
| `ver-post-incident-review-learning` | `institution_defined` | `evidence_requirements.post-incident-review.retention_period` | The consuming institution must set the retention period for post-incident-review. |
| `ver-post-incident-review-learning` | `institution_defined` | `evidence_requirements.post-incident-review.source_system` | The consuming institution must map the source system for post-incident-review. |
| `ver-regulatory-report-content` | `institution_defined` | `evidence_requirements.official-template-snapshot.retention_period` | The consuming institution must set the retention period for official-template-snapshot. |
| `ver-regulatory-report-content` | `institution_defined` | `evidence_requirements.official-template-snapshot.source_system` | The consuming institution must map the source system for official-template-snapshot. |
| `ver-regulatory-report-content` | `institution_defined` | `evidence_requirements.report-content-validation.retention_period` | The consuming institution must set the retention period for report-content-validation. |
| `ver-regulatory-report-content` | `institution_defined` | `evidence_requirements.report-content-validation.source_system` | The consuming institution must map the source system for report-content-validation. |
| `ver-regulatory-report-workflow` | `institution_defined` | `evidence_requirements.stage-and-exception-record.retention_period` | The consuming institution must set the retention period for stage-and-exception-record. |
| `ver-regulatory-report-workflow` | `institution_defined` | `evidence_requirements.stage-and-exception-record.source_system` | The consuming institution must map the source system for stage-and-exception-record. |
| `ver-regulatory-report-workflow` | `institution_defined` | `evidence_requirements.statutory-deadline-ledger.retention_period` | The consuming institution must set the retention period for statutory-deadline-ledger. |
| `ver-regulatory-report-workflow` | `institution_defined` | `evidence_requirements.statutory-deadline-ledger.source_system` | The consuming institution must map the source system for statutory-deadline-ledger. |
| `ver-regulatory-reporting-trigger` | `institution_defined` | `evidence_requirements.reportability-assessment.retention_period` | The consuming institution must set the retention period for reportability-assessment. |
| `ver-regulatory-reporting-trigger` | `institution_defined` | `evidence_requirements.reportability-assessment.source_system` | The consuming institution must map the source system for reportability-assessment. |
| `ver-regulatory-reporting-trigger` | `institution_defined` | `evidence_requirements.voluntary-notification-decision.retention_period` | The consuming institution must set the retention period for voluntary-notification-decision. |
| `ver-regulatory-reporting-trigger` | `institution_defined` | `evidence_requirements.voluntary-notification-decision.source_system` | The consuming institution must map the source system for voluntary-notification-decision. |
| `ver-secure-regulatory-submission` | `institution_defined` | `evidence_requirements.authority-submission-receipt.retention_period` | The consuming institution must set the retention period for authority-submission-receipt. |
| `ver-secure-regulatory-submission` | `institution_defined` | `evidence_requirements.authority-submission-receipt.source_system` | The consuming institution must map the source system for authority-submission-receipt. |
| `ver-secure-regulatory-submission` | `institution_defined` | `evidence_requirements.submission-authorisation-and-route.retention_period` | The consuming institution must set the retention period for submission-authorisation-and-route. |
| `ver-secure-regulatory-submission` | `institution_defined` | `evidence_requirements.submission-authorisation-and-route.source_system` | The consuming institution must map the source system for submission-authorisation-and-route. |

## 已知限制

- 公开来源不能确定具体 EMI 的 EMD2 Article 9(1) 豁免状态、DORA microenterprise 状态及完整或简化框架适用结论。
- 关键或重要职能、BIA 结论、RTO、RPO、备份频率、启动阈值、恢复架构、测试参数、验收标准和风险接受需要机构确认。
- Malta EMI 申请使用的 AX05、Minimum Requirements Guidelines、Addendum 及可能存在的连续性材料模板需要在真实任务中核对当前版本和提交范围。
- Malta 非 ICT 重大支付运营或安全事件流程、年度成本损失请求方式及 MFSA 动态报送材料仍需在执行时核对。
- 机构角色、系统、渠道、权限、证据来源和保存期限需要使用方确认。
- 发布内容尚未使用真实 EMI 组织、系统、连续性计划、灾备配置、演练、事件和运行证据完成业务验收。
- 工程审查不构成法律意见、监管批准、合规认证或生产就绪结论。

## 审查记录

- 审查角色：`emi_knowledge_engineering_maintainer`
- 审查日期：`2026-09-07`
- 审查范围：核对三个专题的来源定位、对象状态、独立与组合闭包、完整和简化框架边界、工程决定、控制、验证、证据要求、机器文件 Schema 和发布可重复性；未执行具体机构法律审查、真实连续性演练或监管报送。
