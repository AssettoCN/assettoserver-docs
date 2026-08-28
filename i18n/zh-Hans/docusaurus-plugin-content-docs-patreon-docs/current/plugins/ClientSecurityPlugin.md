---
description: 通过额外的检查提高作弊难度
---

# ClientSecurityPlugin
::::note

将 `MandatoryClientSecurityLevel` 设置为 1 时，要求强制最低 CSP 版本 0.2.0 (2651)！

::::

::::caution

该插件尚处于实验阶段，可能出现误判。

::::

该插件会进行一些额外的检查，让作弊或篡改游戏文件变得更难一些。  

## 配置
在 `extra_cfg.yml` 中启用该插件
```yaml title="extra_cfg.yml"
EnablePlugins:
  - ClientSecurityPlugin
```
在 `extra_cfg.yml` 中将 `MandatoryClientSecurityLevel` 设置为 1，可要求所有玩家通过这些安全检查。
