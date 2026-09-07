# 固定发布独立读取示例

该示例直接读取 EMI Knowledge 固定发布文件，不依赖 EMI Harness、Agent Runtime、数据库或网络服务。

按 Requirement 稳定标识查询完整关系：

```bash
npm run example:query -- req-full-change-controlled-lifecycle
npm run example:query -- req-full-recovery-objectives v0.3.0
```

示例先从目标发布的 Manifest 解析并加载公开 Schema，校验 `knowledge.json` 并锁定声明的发布版本，最后返回 Requirement、Provision、Source、Control、Verification、EvidenceRequirement 和相关 `unresolved_items`。省略版本时默认读取 `v0.1.0`；版本不匹配、Schema 失败、未知标识或目标类型错误会直接终止查询。
