# DORA ICT 业务连续性、备份与恢复专题来源复核

| 项目 | 值 |
| --- | --- |
| 复核标识 | `DORA-ICT-CONTINUITY-SOURCES-2026-09-07-R1` |
| 状态 | 已完成工程来源复核 |
| 复核日期 | 2026-09-07 |
| 工作语言 | English |
| 上游基线 | `DORA-SOURCES-2026-08-31-R2` |
| 适用专题 | DORA ICT 业务连续性、备份与恢复 |

## 1. 复核目标

本记录核对第三个 DORA 专题使用的欧盟法律文件和 Malta 公开监管材料。它作为既有 [DORA 权威来源基线](dora-source-baseline.md) 的增量输入，不修改 `v0.1.0` 或 `v0.2.0` 已固定的来源文件、知识对象和内容摘要。

本轮确认来源身份、版本、效力层级、适用日期、文件关系和专题边界。具体 Provision、Requirement、机构适用性、恢复参数和工程控制进入后续步骤。

## 2. 复核结论

1. `DORA-SOURCES-2026-08-31-R2` 登记的 Regulation (EU) 2022/2554 和 Commission Delegated Regulation (EU) 2024/1774 继续构成本专题的主要法律来源。
2. 完整 ICT 风险管理框架的主链为 DORA Articles 11 和 12，以及 Regulation (EU) 2024/1774 Articles 24 至 26。
3. 简化 ICT 风险管理框架的主链为 DORA Article 16(1)(f) 至 (h)，以及 Regulation (EU) 2024/1774 Articles 39 和 40。
4. DORA Articles 8、13 和 14 分别提供资产与依赖识别、经验学习和危机沟通的直接依赖。已有相同语义的受控对象应优先复用。
5. DORA Article 11(6) 和 Regulation (EU) 2024/1774 Articles 25、40 直接针对业务连续性计划、响应恢复计划和备份还原措施的测试，纳入本专题。
6. DORA Chapter IV Articles 24 至 27 的通用数字运营韧性测试和 TLPT 保持为独立后续专题。
7. MFSA 2026 年授权观察直接记录 BIA、ICT 业务连续性计划、响应恢复计划和备份还原方法的常见申请缺口，适合作为 Malta 监督背景，不能单独支持欧盟法律义务。
8. MFSA 2020 年 Technology Arrangements Guidance 自 2025-01-17 起不再适用于 DORA 范围内的 Authorised Persons，本专题不得用它补充或扩大 DORA 要求。
9. 本轮没有识别出专门细化本专题的新 DORA Level 2 法律文件，也没有定位到 MFSA 当前公开的独立 ICT 业务连续性操作指南。

## 3. 欧盟法律文件

| 来源 | 当前状态与英文版本 | 专题用途 | 对象处理 |
| --- | --- | --- | --- |
| [Regulation (EU) 2022/2554](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)；CELEX `32022R2554` | EUR-Lex 显示 in force；当前已识别勘误不影响 English | Articles 8、11 至 14、16；识别、连续性、响应恢复、备份还原、学习、沟通及简化框架 | 复用 `src-eu-reg-2022-2554` |
| [Commission Delegated Regulation (EU) 2024/1774](https://eur-lex.europa.eu/eli/reg_del/2024/1774/2024-06-25/eng)；CELEX `02024R1774-20240625` | EUR-Lex 显示 in force；使用包含 2025-05-15 English 勘误的合并文本 | Articles 1、24 至 26、39、40；比例原则、完整框架和简化框架下的连续性与恢复细则 | 复用 `src-eu-reg-2024-1774` 并新增必要 Provision |

Regulation (EU) 2024/1774 的 2025-05-15 English 勘误修正 Article 22(1)(d) 的交叉引用，没有改变 Articles 24 至 26、39 或 40。本专题继续使用现有 Source 对象记录的合并英文文本，不因内容未变化而增加 Source 修订。

## 4. 完整框架来源链

未获得 EMD2 Article 9(1) 豁免的 EMI 按完整 ICT 风险管理框架处理本专题：

```text
Regulation (EU) 2022/2554
  Article 8             职能、资产、流程和第三方依赖识别
  Article 11(1)-(8)     连续性政策、BIA、计划、测试、危机管理和记录
  Article 12(1)-(4),
            (6)-(7)     备份、隔离、冗余、恢复目标、完整性和对账
  Articles 13-14        经验学习和危机沟通
          |
          v
Delegated Regulation (EU) 2024/1774
  Article 24(1)         ICT 业务连续性政策组成
  Article 25(1)-(2),
            (5)         连续性计划测试及缺陷处理
  Article 26            ICT 响应与恢复计划及中断场景
```

以下专属条款不进入 EMI 专题入口：

- DORA Article 11(9) 只针对 central securities depositories。
- DORA Article 12(3) 中针对 central counterparties 和 data reporting service providers 的附加要求不适用于 EMI。
- DORA Article 12(5) 只针对 central securities depositories。
- Regulation (EU) 2024/1774 Article 24(2) 至 (4) 分别针对 central counterparties、central securities depositories 和 trading venues。
- Regulation (EU) 2024/1774 Article 25(3) 和 (4) 分别针对 central counterparties 和 central securities depositories。

DORA Article 11(10) 和 (11) 的重大 ICT 事件年度成本与损失估算已经由事件专题建模。它们不作为连续性专题入口，必要时可通过共享对象提供上下文。

## 5. 简化框架来源链

获得 EMD2 Article 9(1) 豁免并因此属于 DORA Article 16(1) 的 EMI 按简化 ICT 风险管理框架处理本专题：

```text
Regulation (EU) 2022/2554
  Article 16(1)(f)      关键或重要职能连续性、响应恢复、备份还原
  Article 16(1)(g)      定期测试计划、措施和控制有效性
  Article 16(1)(h)      将测试和事件分析结论纳入风险评估
          |
          v
Delegated Regulation (EU) 2024/1774
  Article 39            连续性计划、恢复目标、场景、依赖和更新
  Article 40            年度及重大变更测试、缺陷和管理层报告
```

简化框架没有直接套用 DORA Articles 5 至 15 或 Regulation (EU) 2024/1774 Articles 24 至 26。内容相似时仍需保留各自的法规入口和适用分支，不能用完整框架条款填补简化框架要求。

## 6. 测试边界

本专题纳入以下测试：

- ICT 业务连续性计划及 ICT 响应与恢复计划至少每年测试，以及支持关键或重要职能的 ICT 系统发生实质变化时测试。
- 危机沟通计划测试。
- BIA 和 ICT 风险评估驱动的严重但可信中断场景。
- 适用时对 ICT 第三方服务、供应商破产或失败及其司法辖区政治风险的场景测试。
- 非 microenterprise 的主基础设施向冗余能力、备份和冗余设施切换场景。
- 对人员、ICT 第三方、ICT 系统和 ICT 服务响应能力的验证。
- 简化框架下至少每年开展备份和还原测试，以及业务连续性计划重大变更后的测试。
- 测试结果记录、缺陷分析、整改和管理层报告。

以下内容留给 DORA 数字运营韧性测试专题：

- DORA Article 24 的整体数字运营韧性测试计划和风险方法。
- DORA Article 25 列举的 ICT 工具和系统测试类型。
- DORA Articles 26、27 及 Regulation (EU) 2025/1190 下的 TLPT 选择、范围、执行和测试人员要求。

## 7. Malta 公开监管材料

### 7.1 纳入的监督背景

| 来源 | 日期和状态 | 专题用途 | 后续处理 |
| --- | --- | --- | --- |
| [General Observations on Digital Operational Resilience in Authorisation Applications Received in 2025](https://www.mfsa.mt/wp-content/uploads/2026/06/General-Observations-on-Digital-Operational-Resilience-in-Authorisation-Applications-Received-in-2025.pdf) | MFSA Circular，文件日期 2026-06-09；MFSA 介绍页面发布于 2026-07-08 | 记录面向 DORA 范围内当前和未来申请人的监督观察；重点包括 BIA、连续性计划、响应恢复计划、备份还原及严重中断场景的常见缺口 | 新增 `regulator_guidance` / `supervisory_guidance` Source；仅使用 `supporting_context` 关系 |

该 Circular 明确引用 DORA Articles 11、12 和 Regulation (EU) 2024/1774 Articles 24 至 26，并说明申请材料需要结合申请人的实际业务和风险状况。它没有改变这些欧盟法律条款的适用条件，也没有提供通用于所有 EMI 的恢复参数。

### 7.2 排除的历史指引

[MFSA 2024-03-26 Circular](https://www.mfsa.mt/wp-content/uploads/2024/03/Update-on-the-Guidance-on-Technology-Arrangements-ICT-and-Security-Risk-Management-and-Outsourcing-Arrangements.pdf) 明确说明，2020 年发布的 Guidance on Technology Arrangements, ICT and Security Risk Management, and Outsourcing Arrangements 自 DORA 适用日 2025-01-17 起不再适用于 DORA 范围内的 Authorised Persons。

因此，本专题不将该历史 Guidance 的备份、灾难恢复或测试表述转换为 Requirement、Control 或 Verification。它只能用于解释来源排除原因。

## 8. 待确认事项

1. 计划申请 Malta EMI 牌照时适用的 AX05、Minimum Requirements Guidelines 及 Addendum 当前版本、提交范围和公开保存边界，需要在真实申请任务中向 MFSA 或有权顾问确认。
2. MFSA 是否针对 EMI 的 BIA、ICT 业务连续性计划、响应恢复计划或恢复证据规定了当前 Circular 之外的专用模板、提交入口或审查要求，需要在真实申请任务中确认。
3. 具体机构是否获得 EMD2 Article 9(1) 豁免，以及由此选择完整框架或简化框架，必须由机构事实和有权人员确认。

## 9. 后续建模约束

- 法规原文中的 `critical or important function` 保持为来源定义，不在公共知识中生成机构职能清单。
- RTO、RPO、备份频率、最大可容忍中断、升级时限、计划启动阈值和恢复完成标准由精确来源支持或保持 `institution_defined`。
- `microenterprise` 条件与 EMD2 Article 9(1) 豁免分开表达，不能从机构规模自动推导简化框架。
- 第三方服务失败、人员或场地不可用、网络与电力中断等场景只进入连续性与恢复所需范围，不提前完成第三方风险专题。
- 设计存在、计划测试通过、生产恢复成功和机构合规状态必须作为不同结论处理。
- MFSA Circular 只形成 `supporting_context`，不能成为欧盟层 Requirement 的唯一直接依据。

## 10. 复核结果

本次工程来源复核确认两份欧盟法律来源可以继续复用，并识别一份新的 MFSA 监督背景材料。下一步按照完整框架、简化框架、共享依赖和排除条款建立 Topic 清单与覆盖矩阵，再决定需要新增和复用的知识对象。
