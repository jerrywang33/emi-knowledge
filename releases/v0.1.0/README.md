# EMI Knowledge v0.1｜DORA ICT 变更管理

- 版本：`v0.1.0`
- 发布级别：`engineering_baseline`
- 版本日期：`2026-09-02`
- 内容摘要：`572112de29790efa365b5fd25b764ada419fde99c34ee59e38be881dfb88f3e7`

本文件由受控知识对象生成。发布级别只说明来源与工程知识经过当前范围的审查，不提供具体机构法律适用性、合规状态或生产控制认证。

## 范围

- 包含：DORA 及相关正式文件的来源基线和全景目录。
- 包含：电子货币机构完整 ICT 风险管理框架下的 ICT 变更管理知识链。
- 包含：获得 EMD2 Article 9(1) 豁免的电子货币机构简化框架路径。
- 包含：来源、条款、要求、工程决定、控制、验证和证据要求之间的可追溯关系。
- 排除：任何具体电子货币机构的法律适用性或合规结论。
- 排除：机构内部政策、监管往来、风险接受、生产配置和实际证据。
- 排除：DORA 其他主题的逐条完整知识链，以及 GDPR、AML/CFT、制裁和 EMD2 详细知识。

## 内容统计

| 类型 | 数量 |
| --- | ---: |
| source | 3 |
| provision | 20 |
| requirement | 15 |
| decision | 3 |
| control | 8 |
| verification | 8 |

## 来源

| ID | 文件 | 来源层级 |
| --- | --- | --- |
| `src-eu-reg-2022-2554` | [Regulation (EU) 2022/2554](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng) | `binding_law` |
| `src-eu-reg-2024-1774` | [Commission Delegated Regulation (EU) 2024/1774](https://eur-lex.europa.eu/eli/reg_del/2024/1774/2024-06-25/eng) | `binding_law` |
| `src-mfsa-ict-change-management-2026` | [ICT Change Management under the Digital Operational Resilience Act](https://www.mfsa.mt/publication/ict-change-management-under-the-digital-operational-resilience-act-dora/) | `official_information` |

## 要求、控制与验证

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

## 待机构确认

| 对象 | 状态 | 路径 | 内容 |
| --- | --- | --- | --- |
| `ctl-change-fallback-recovery` | `institution_defined` | `implementation_rules.fallback-test.parameters.fallback-test-depth-rule` | The consuming institution must set fallback-test-depth-rule. |
| `ctl-change-governance` | `institution_defined` | `implementation_rules.management-approval.parameters.authorised-management-role` | The consuming institution must set authorised-management-role. |
| `ctl-change-security-impact` | `institution_defined` | `implementation_rules.major-change-risk-assessment.parameters.major-change-criteria` | The consuming institution must set major-change-criteria. |
| `ctl-change-security-test-gate` | `institution_defined` | `implementation_rules.risk-based-test-depth.parameters.test-depth-rule` | The consuming institution must set test-depth-rule. |
| `ctl-emergency-change` | `institution_defined` | `implementation_rules.post-implementation-review.parameters.maximum-post-review-delay` | The consuming institution must set maximum-post-review-delay. |
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

## 已知限制

- 当前深度知识链只覆盖 DORA ICT 变更管理。
- 公开来源不能确定具体机构是否获得 EMD2 Article 9(1) 豁免。
- 机构角色、重大变更标准、测试深度、回退测试深度和紧急复核时限需要使用方确认。
- 证据来源系统和保存期限需要使用方结合适用规则及内部政策确认。
- 发布内容尚未使用真实机构流程、系统和运行证据完成业务验收。
- 工程审查不构成法律意见、监管批准、合规认证或生产就绪结论。

## 审查记录

- 审查角色：`emi_knowledge_engineering_maintainer`
- 审查日期：`2026-09-02`
- 审查范围：核对来源定位、模型字段、跨对象关系、工程控制、检查方法、证据模板、机器文件 Schema 和发布可重复性；未执行具体机构法律审查。

