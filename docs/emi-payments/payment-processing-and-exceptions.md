# 支付处理与异常：普通 SEPA 转账

- 文档标识：`EMI-PAYMENTS-SCT-GUIDE-01`
- 修订：1，2026-09-08
- 状态：学习草案，待维护者逐节复核，未批准发布
- 来源：[本专题来源核对记录](../sources/emi-payments-sct-source-review.md)

本文用一笔普通 SEPA 欧元转账（SCT）说明支付怎样处理、记录如何关联，以及遇到异常时需要先查清什么。用户已确认学习范围；机构实际产品、PSP 和清算接入方式尚未确定。

## 1. 范围与阅读方式

样例限于 EU/EEA 内、无换汇的单笔电子发起普通 SCT，从付款侧观察处理过程。不包含 SCT Inst、卡支付、直接借记、批量支付、PISP 接入和具体清算设施的操作细节。

正文分为三种内容：

- **来源说明**：带官方文件定位，用于理解方案术语与流程。
- **工程建议**：本仓库提出的记录与处理方法，供后续设计、评审和测试。
- **待确认事项**：需要产品、业务、合规、财务或渠道资料才能确定，正文不代填。

开户、客户授权、SCA、收款人验证（VoP）、AML/CFT、制裁、客户资金保护及数据保护仍是依赖。本轮未复核这些依赖的完整适用性；学习范围的排除项不代表实际产品可以省略相应检查。

## 2. 先认识参与方

**来源说明。** 主要角色是付款人、付款方支付服务商（Originator PSP）、收款方支付服务商（Beneficiary PSP）和收款人；清算与结算机制（CSM）及中间 PSP 支持服务商之间的处理。方案参与与清算接入分别确认。依据：[SCT Rulebook 第 3 章](https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2025-09/EPC125-05%202025%20SCT%20Rulebook%20version%201.1.pdf#page=23)。

**待确认。** EMI 在真实产品中承担哪个角色、由谁提供付款账户、谁加入方案、谁发送消息与处理异常，需要逐项记录。持有 EMI 牌照不能在本样例中被当作已完成这些安排的证明。

## 3. 正常流程

**来源说明。** 简化过程如下，依据：[SCT Rulebook 4.3.1](https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2025-09/EPC125-05%202025%20SCT%20Rulebook%20version%201.1.pdf#page=28)。

```text
付款人提交指令
  -> 付款方 PSP 检查指令
  -> 付款方 PSP 扣款并发送，经所选 CSM 处理与结算
  -> 收款方 PSP 入账并向收款人提供信息
```

**工程建议。** 记录每个阶段已经获得的事实，不用一个含义不明的“成功”代替全部结果：

| 观察位置 | 建议保存的事实 | 仍需核实的问题 |
| --- | --- | --- |
| 客户提交 | 请求标识、付款意图、金额币种、收款信息版本、授权与准入检查引用 | 请求能否进入执行流程？ |
| 本地受理 | 业务单号、检查结果、选定渠道、余额与账务处理引用 | 本地保存成功是否已经触发外部发送？ |
| 对外发送 | 每次发送的标识、内容摘要、发送时间、渠道答复和外部关联号 | 对方答复具体确认了哪一阶段？ |
| 外部处理 | 已核实的处理、结算或收款入账信息及其来源 | 哪些信息当前拿不到，如何查询？ |
| 后续核对 | 业务记录、账务记录与外部流水的对应关系及差异 | 记录是否完整，是否需要调查或修复？ |

客户界面的状态文案应对应可证明的阶段。具体渠道答复、结算确认和收款入账确认如何映射，保留到接口与业务规则评审时确定。

## 4. 异常术语要分开

**来源说明。** 下表用于分辨流程，不代替完整发起条件、时限和消息规则。

| 名称 | 基本含义 | 定位 |
| --- | --- | --- |
| Reject，拒绝 | PSP 间结算前，指令未被接受进入正常执行。 | [Rulebook 4.3.2.1](https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2025-09/EPC125-05%202025%20SCT%20Rulebook%20version%201.1.pdf#page=29) |
| Return，退回 | PSP 间结算后，收款方 PSP 无法正常执行并退回交易。 | [Rulebook 4.3.2.2](https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2025-09/EPC125-05%202025%20SCT%20Rulebook%20version%201.1.pdf#page=30) |
| Recall，召回 | 付款方 PSP 按规则限定的重复发送、技术错误或欺诈原因发起召回。 | [Clarification Paper 2.9](https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2025-10/EPC131-17%20v4.0%20Clarification%20Paper%20SCT%20and%20SCT%20Inst%20scheme%20rulebooks.pdf#page=11) |
| RFRO，付款人请求召回 | 付款人因其他原因请求取回已结算转账；成功取回取决于相关答复与收款人同意。 | [Rulebook 4.3.2.4](https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2025-09/EPC125-05%202025%20SCT%20Rulebook%20version%201.1.pdf#page=35) |
| SCT Inquiry，调查 | 处理未到账或起息日更正的调查；与发起资金退回分别处理。 | [Rulebook 4.4](https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2025-09/EPC125-05%202025%20SCT%20Rulebook%20version%201.1.pdf#page=38) |

收款人已经入账后自愿转回资金，按新的转账处理，不使用普通 Return。Recall / RFRO 的肯定答复有各自流程，不能与自愿发起的新转账混用。依据：[Clarification Paper 2.9、3.1](https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2025-10/EPC131-17%20v4.0%20Clarification%20Paper%20SCT%20and%20SCT%20Inst%20scheme%20rulebooks.pdf#page=11)。

原因码需要连同异常类型、发起方和原交易理解，并考虑来源明确列出的披露限制。原因码指引中的建议处理动作也需要结合实际条件判断。依据：[Reason Code Guidance 第 1-3 节](https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2024-11/EPC135-18%20v6.0%20Guidance%20on%20Reason%20Codes%20for%20SCT%20R-transactions.pdf#page=2)。

## 5. 系统中建议保留哪些记录

本节全部为**工程建议**，字段名用于讨论，不表示 EPC 字段、强制 Schema 或既定数据库设计。

| 记录 | 用途 |
| --- | --- |
| 业务支付记录 `payment_id` | 关联一次明确的付款意图、金额币种、参与方与输入版本。 |
| 提交尝试 `attempt_id` | 区分同一业务的每次对外通信，保留发送内容和结果；尝试次数与实际交易笔数分别统计。 |
| 外部关联号 `external_reference` | 按提供方和消息类型保存原值，用于查单和对账；不能假定任意外部字段全局唯一。 |
| 处理事件 `event_id` | 保存渠道来源、原始状态、事件时间、收到时间、关联对象与去重结果。 |
| 账务关联 `ledger_reference` | 关联预留、扣账、释放、退回或调整记录；是否采用预留、科目和记账时点由机构确认。 |
| 异常案件 `case_id` | 保存调查、召回、答复、资金结果、负责人、截止时间和决定依据。 |

建议分别记录通信结果、支付处理进度、账务处理情况和异常案件进度。例如“召回请求已发送”仅更新案件进度，不能直接产生“资金已取回”的账务事实。

资金记录应说明反映的是客户余额、内部账务还是 PSP 间资金变化。对账时核对记录之间的对应关系，避免把不同含义的余额混作一个数；本稿不规定统一余额公式、会计分录或客户资金保护处理。

## 6. 超时、重复与记录不一致怎么讨论

本节为**工程建议**，执行前需要渠道契约、权限与机构规则支持。

### 6.1 提交超时或结果未知

1. 保留原业务单号、发送尝试和内容摘要，核实超时发生在哪一段通信。
2. 检查是否已有可信的渠道关联号、查询结果、处理事件或对账记录，记录仍未知的部分。
3. 按渠道明确提供的查询或安全重试约定处理。未确认该约定时，不因超时换一个业务标识再次付款。
4. 为未解决事项指定负责人和跟进期限，必要时进入渠道调查与客户沟通。资金释放和客户处理遵循另行确认的规则，不用“未知”无限期搁置。

应用超时计时与方案业务期限分别管理。后续需要将业务起算点、营业日历、截止时间、异常时限和升级要求逐项核对；当前草案不用于计算这些期限。

### 6.2 重复提交与重复事件

同一业务标识和相同输入再次出现时，先返回或查询已有处理结果；同一标识对应不同金额或收款信息时，作为输入冲突处理。只有渠道契约明确支持时才按其约定重发，不把本地去重等同于外部一定只执行一次。

对重复通知，先确认是否为同一业务事件，再避免重复记账。新通知携带了更正信息时应保留差异并评估，不能仅凭相同业务单号丢弃。迟到事件按事实更新或进入冲突调查，不能只依收到顺序覆盖状态。

### 6.3 外部已处理，内部记录不一致

暂停针对该笔交易的无依据再次付款，先核对外部信息的含义、真实性及关联关系，再修复遗漏的本地记录。若已经形成两笔真实外部交易，不能通过删除内部记录把它们合成一笔，应分别跟踪处置与资金结果。

### 6.4 退回与召回的本地处理

异常案件至少区分请求、答复、资金变化和客户账务处理。发起操作前核对所用流程的资格与期限；收到答复后核对原交易、金额、已处理记录和资金结果，再依批准的账务规则处理。Agent 可以整理材料和提出候选操作，不获得外部发送、扣账或风险接受的默认权限。

## 7. 与现有知识的连接

以下为相关背景引用，固定依据是 [`v0.3.0` 知识包](../../releases/v0.3.0/knowledge.json)中的对象，修订均为 1。YAML 链接便于阅读，后续修改不能自动改变本稿的引用基线。

| 场景 | 已有对象 | 引用边界 |
| --- | --- | --- |
| 支付异常涉及运营或安全事件 | [req-payment-incident-chapter-three-application](../../knowledge/v0.1/requirements/req-payment-incident-chapter-three-application.yaml)、[ctl-incident-governance-records](../../knowledge/v0.1/controls/ctl-incident-governance-records.yaml)、[ver-incident-governance-records](../../knowledge/v0.1/verifications/ver-incident-governance-records.yaml) | 先按对象的事件范围判断；单笔 Reject 不自动等于重大监管报告事件。 |
| ICT 事件恢复后的数据核对 | [req-full-recovery-data-integrity-reconciliation](../../knowledge/v0.1/requirements/req-full-recovery-data-integrity-reconciliation.yaml)、[ctl-continuity-recovery-integrity](../../knowledge/v0.1/controls/ctl-continuity-recovery-integrity.yaml)、[ver-continuity-recovery-integrity](../../knowledge/v0.1/verifications/ver-continuity-recovery-integrity.yaml) | 保留完整框架与恢复场景条件，不将其作为所有日常支付对账的通用法规依据。 |
| 上述控制的设计理由 | [dec-incident-operational-baseline](../../knowledge/v0.1/decisions/dec-incident-operational-baseline.yaml)、[dec-continuity-recovery-design-baseline](../../knowledge/v0.1/decisions/dec-continuity-recovery-design-baseline.yaml) | 沿用对象的前提与待机构决定项，不据此批准新支付流程。 |

当前没有普通 SCT 的正式 Source、Provision、Requirement、Control 和 Verification 知识链。EPC 规则、支付法律义务、账务规则及跨领域控制映射仍需建设。本文的工程建议不计入已有批准控制的覆盖范围。

## 8. 走读用例

下列是用于检查说明是否清楚的合成案例和候选预期，不含真实客户数据。尚未用真实渠道、人员或 Agent 独立执行，也未形成 `scenarios/` 场景包。

| 编号 | 输入情形 | 走读时应回答的问题 |
| --- | --- | --- |
| SCT-01 | 一笔 100 EUR 请求，依次取得渠道受理、外部处理、收款信息和本地账务记录。 | 每份记录证明哪个阶段？关联是否一致？对外文案有没有超出证据？ |
| SCT-02 | 相同业务标识、相同输入连续提交两次。 | 如何找到已有尝试？有什么依据允许或禁止再次发送？ |
| SCT-03 | 相同业务标识第二次把金额改为 200 EUR。 | 能否识别输入冲突并保留两份输入，避免静默修改原指令？ |
| SCT-04 | 发送后超时，外部是否收到未知。 | 还缺什么事实？向谁查询？如何避免无依据新增付款和无限期悬置？ |
| SCT-05 | 同一渠道事件重复到达，随后又出现含义冲突的迟到事件。 | 哪些属于重复，哪些需要调查？账务如何避免再次应用同一结果？ |
| SCT-06 | 外部记录显示已处理，本地应用此前因异常标记失败。 | 如何核实外部记录、修复本地状态并避免再次付款？ |
| SCT-07 | 分别收到结算前拒绝与结算后退回信息。 | 能否分清异常流程、资金事实和本地后续处理，避免仅按“失败”统一退款？ |
| SCT-08 | 召回已发出，收到否定答复或暂未收到答复。 | 案件处于什么阶段？哪些查询、期限和授权尚需核对？为什么不能记为已取回？ |
| SCT-09 | 收款人已入账并自愿转回，另有一笔 RFRO 等待答复。 | 能否区分新的转账与召回相关流程，保留各自交易和案件关联？ |
| SCT-10 | 实际出现两笔外部付款，随后一笔相关资金转回通知重复到达。 | 能否分别保留两笔付款、一次真实资金转回及重复通知，避免重复调整余额？ |

## 9. 需要逐项确认

| 编号 | 待确认事项 | 需要的输入 |
| --- | --- | --- |
| SCT-Q1 | 实际产品、参与角色、PSP 和清算接入 | 产品范围、参与安排和相关合同；私有材料留在私有环境。 |
| SCT-Q2 | 状态、标识、查询、幂等和消息映射 | 具体渠道官方文档、接口契约与测试结果。 |
| SCT-Q3 | 客户余额、记账、释放、退回与差异调整 | 财务与业务确认的规则、权限和复核要求。 |
| SCT-Q4 | 适用检查与客户责任 | 对应司法辖区下的法律、合规和业务复核，包括授权、SCA、VoP、金融犯罪、数据保护与资金保护。 |
| SCT-Q5 | 执行与异常时限、费用和客户沟通 | 适用规则、产品合同、营业日历、渠道截止时间及升级安排。 |
| SCT-Q6 | 公共知识的正式发布方式 | 来源审查、必要知识对象、文档版本固定与使用验收。 |

下一轮先走读参与方和正常流程，确认术语、范围与记录关系，再逐项检查异常、工程建议和用例；维护者审查与真实使用结果另行记录。
