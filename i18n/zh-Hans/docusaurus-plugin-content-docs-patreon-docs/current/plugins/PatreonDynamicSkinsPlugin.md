---
description: 允许玩家动态更换涂装
draft: true
---

# PatreonDynamicSkinsPlugin
允许玩家在不退出游戏的情况下更换涂装（skin）。涂装将从远程服务器下载，无需安装在客户端上。

::::note

需要强制最低 CSP 版本 0.1.77 (1937)，并且在 `extra_cfg.yml` 中设置 `EnableClientMessages: true`！

::::

::::note

该插件在没有连接 AssettoServer Hub 的情况下无法工作！

::::

## 限制
* 车辆涂装一旦更换，该车辆的 CSP 颜色更改功能就会失效。
* 涂装 .dds 文件名区分大小写，**必须**与纹理槽位的大小写完全一致！  
  例如，如果纹理槽位名为 `Metal_Detail.dds`，而某个涂装应用的纹理名为 `metal_detail.dds`，那么在下一次更换涂装后，该纹理将无法被正确重置。

## 配置
在 `extra_cfg.yml` 中启用该插件
```yaml title="extra_cfg.yml"
EnablePlugins:
  - PatreonDynamicSkinsPlugin
```
无需在 `extra_cfg.yml` 中进行其他针对该插件的配置。

## Hub 配置
所有涂装及其下载地址的列表存储在 AssettoServer Hub 中。  
tbd
