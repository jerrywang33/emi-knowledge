# Skills 目录

本目录保存可复用的专家工作方法。Skill 描述任务如何选择固定知识版本、收集输入、执行分析、保留人工决定并生成结构化结果；具体 Agent Runtime 的加载和权限适配由使用方负责。

```text
skills/<domain>/<skill-id>/
  skill.yaml
  instructions.md
  input.schema.json
  output.schema.json
  tests/
```

| 文件 | 用途 |
| --- | --- |
| `skill.yaml` | 保存稳定 ID、版本、领域、知识 Topic、所需权限、人工确认点和输入输出文件引用。 |
| `instructions.md` | 保存与 Runtime 无关的执行步骤、失败处理和禁止事项。 |
| `input.schema.json` | 校验 Skill 可以接收的数据结构，阻止缺少上下文或混入未声明字段。 |
| `output.schema.json` | 校验候选结果、引用、待确认项和状态，不允许只输出无法追溯的自然语言结论。 |
| `tests/` | 保存脱敏输入、固定断言和失败用例；不保存客户或生产数据。 |

领域目录使用 `emi-payments`、`dora`、`gdpr`、`aml-cft` 和 `restrictive-measures`。当前目录只建立 Skill 文件契约和领域边界；首个 Skill 实施前需要先确认 Skill Schema，并提供真实使用方和自动化测试。

Skill 可以引用 Source、Requirement、Control、Verification 和模板 ID，不复制这些对象正文，也不能批准法律适用性、风险接受、外部报告或生产操作。
