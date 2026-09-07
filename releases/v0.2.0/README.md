# EMI Knowledge v0.2｜DORA ICT 变更与事件管理

- 版本：`v0.2.0`
- 发布级别：`engineering_baseline`
- 版本日期：`2026-09-07`
- 内容摘要：`5c8c30cbba76bcfbece378b48427d8d02d97384b12799113b8c3051f7c0557bd`

本文件由受控知识对象生成。发布级别只说明来源与工程知识经过当前范围的审查，不提供具体机构法律适用性、合规状态或生产控制认证。

## 专题

| ID | 标题 | 修订 |
| --- | --- | ---: |
| `dora-ict-change-management` | DORA ICT change management | 1 |
| `dora-ict-incident-management-reporting` | DORA ICT incident management, classification, and regulatory reporting | 7 |

## 范围

- 包含：DORA ICT 变更管理完整知识链，包括完整与简化 ICT 风险管理框架路径。
- 包含：DORA ICT 事件发现、记录、响应、恢复、分类、沟通、复盘和趋势分析知识链。
- 包含：重大 ICT 事件三阶段报告、法定时限、内容、重分类、安全提交、外包和汇总报告控制。
- 包含：重大网络威胁分类与自愿通知路径，以及 EMI 支付相关运营或安全事件的 Chapter III 范围。
- 包含：年度重大事件成本与损失估算，以及 Malta 已公开确认的 MFSA CRMS 报送路径。
- 排除：任何具体电子货币机构的法律适用性、事件分类、报告决定或合规结论。
- 排除：Agent 自动批准分类、自动作出自愿通知决定或自动向主管机关提交材料。
- 排除：机构内部政策、监管往来、客户数据、生产日志、凭据、真实报告和实际证据。
- 排除：业务连续性、韧性测试和 ICT 第三方风险的独立完整专题，以及其他法规领域的详细知识链。

## 内容统计

| 类型 | 数量 |
| --- | ---: |
| source | 10 |
| provision | 115 |
| requirement | 81 |
| decision | 8 |
| control | 21 |
| verification | 21 |

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

- 公开来源不能确定具体 EMI 的 EMD2 Article 9(1) 豁免状态及完整或简化框架适用结论。
- Malta 非 ICT 重大支付运营或安全事件的当前流程、模板和提交入口仍待权威材料确认。
- MFSA 对 DORA Article 11(10) 年度成本与损失估算的请求条件和传输方式仍需在具体请求中确认。
- MFSA Portal 用户指南和动态模板需要使用方在执行时核对当前版本、下载时间和内容摘要。
- 机构角色、内部严重程度、告警和升级目标、系统、渠道、权限、参考年度及证据保存期限需要使用方确认。
- 发布内容尚未使用真实 EMI 组织、系统、事件、监管报告和运行证据完成业务验收。
- 工程审查不构成法律意见、监管批准、合规认证或生产就绪结论。

## 审查记录

- 审查角色：`emi_knowledge_engineering_maintainer`
- 审查日期：`2026-09-07`
- 审查范围：核对两个专题的来源定位、对象状态、知识链覆盖、工程决定、控制、验证、证据要求、上下文边界、机器文件 Schema 和发布可重复性；未执行具体机构法律审查或真实监管报送。
