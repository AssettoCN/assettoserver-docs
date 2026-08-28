---
title: 用户组
description: AssettoServer 用户组说明
---

# 用户组
AssettoServer 通过用户组来管理用户权限。用户组通常是一个包含 SteamID 列表的文本文件，例如 `admins.txt`。  
默认定义了三个用户组（`default_admins`、`default_blacklist`、`default_whitelist`），分别指向 `admins.txt`、`blacklist.txt` 和 `whitelist.txt`。某些插件（例如 [ReservedSlotsPlugin](../plugins/PatreonReservedSlotsPlugin.mdx)）会使用自己的用户组来管理权限。

## 添加本地用户组
要创建一个新的基于文件的用户组，只需将其添加到 `extra_cfg.yml`：
```yaml title="extra_cfg.yml (AssettoServer)"
UserGroups:
  default_admins: admins.txt
  default_blacklist: blacklist.txt
  default_whitelist: whitelist.txt
# highlight-next-line
  my_group: my_group.txt
```

现在，`my_group` 组就可以在插件配置中使用了。

## 通过 AssettoServer Hub 同步用户组
用户组可以通过 AssettoServer Hub 同步到多个游戏服务器。

### Hub 设置
在 Hub 的 `configuration.yml` 中添加一个新的基于文件的用户组：
```yaml title="configuration.yml (AssettoServer Hub)"
FileBasedUserGroups:
  - Name: my_group
    Path: my_group.txt
```

### 游戏服务器设置
指定用户组时，在 `extra_cfg.yml` 中的用户组名称前加上 `+` 前缀，例如 `+my_group`。这样 [PatreonHubPlugin](../plugins/PatreonHubPlugin.mdx) 就会从 AssettoServer Hub 加载该用户组。

### 示例

#### 同步黑名单
```yaml title="configuration.yml (AssettoServer Hub)"
FileBasedUserGroups:
  - Name: blacklist
    Path: blacklist.txt
```

```yaml title="extra_cfg.yml (AssettoServer)"
BlacklistUserGroup: +blacklist
```

#### 同步白名单
```yaml title="configuration.yml (AssettoServer Hub)"
FileBasedUserGroups:
  - Name: whitelist
    Path: whitelist.txt
```

```yaml title="extra_cfg.yml (AssettoServer)"
WhitelistUserGroup: +whitelist
```

#### 同步预留槽位
```yaml title="configuration.yml (AssettoServer Hub)"
FileBasedUserGroups:
  - Name: reserved
    Path: reserved.txt
```

```yaml title="extra_cfg.yml (AssettoServer, under !PatreonReservedSlotsConfiguration)"
ReservedEntryListSlotsUserGroup: +reserved
# and/or
ReservedSlotsUserGroup: +reserved
```
