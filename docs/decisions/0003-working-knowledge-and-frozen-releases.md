# Decision 0003：工作知识与历史发布冻结边界

- 状态：已接受
- 接受日期：2026-09-07
- 适用范围：EMI Knowledge 持续建设与发布复现

## 背景

`knowledge/v0.1/` 保存使用 Knowledge Object Schema `0.1.0` 的当前知识对象。随着第二个专题加入，该目录会同时包含已形成完整知识链的对象，以及仍在建设下游 Control 和 Verification 的对象。

`v0.1.0` 发布早于 Topic 组合能力，原配置采用全目录输入。若每次从当前目录重新选择全部对象，后续新增对象会改变历史发布内容，违背固定发布边界。

## 决定

1. 知识对象继续统一保存在 `knowledge/v0.1/{type}/`，目录版本表示 Knowledge Object Schema 版本。
2. 对象生命周期表示单个对象的审查状态；Topic 覆盖状态表示专题六类对象的建设进度，两者分别管理。
3. 仓库级知识校验检查 Schema、稳定 ID、文件位置、引用、状态关系、日期、确认关系、替代关系和敏感内容。仓库可以保存尚未形成完整下游链的专题对象。
4. 已批准 Topic 必须解析出全部为 `approved` 的完整知识链。完整链要求包括 Source、Provision、Requirement、Control 和 Verification 的连续关系。
5. `v0.2.0` 及后续发布必须通过 `topic_selection` 明确选择 Topic，再对解析结果执行完整链校验。
6. 已存在且没有 Topic 选择的历史发布使用其 `manifest.json` 中的对象 ID 作为兼容选择锁。重新生成时仍会从当前仓库读取这些对象并重新核对 Schema、关系和摘要。
7. 历史 Manifest 只固定对象集合。已固定对象发生内容变化、缺失、状态变化或关系断裂时，发布复现检查必须失败。
8. 新发布不再采用隐式全目录选择。

## 校验层次

```text
当前知识目录
  -> 仓库级结构与关系校验
  -> Topic 入口解析
  -> 已批准 Topic 的完整链校验
  -> Release Manifest 固定 Topic、对象修订与摘要
```

## 结果

第二专题可以按 `Source → Provision → Requirement`、`Decision → Control → Verification` 分阶段建设，每次提交仍能通过仓库检查。`v0.1.0` 继续保持固定对象集合和内容摘要；新对象只会进入显式选择它们的后续发布。
