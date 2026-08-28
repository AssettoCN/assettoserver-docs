---
title: 常见配置错误
---
存在某些常见的错误配置时，AssettoServer 会拒绝启动。你可以通过在 `extra_cfg.yml` 中设置相应的值来选择忽略这些错误。

## 缺少车辆校验和
当一个或多个车辆找不到 `data.acd` 时，就会显示此错误。需要 `data.acd` 的校验和（checksum）来防止玩家通过修改车辆数据作弊。

如果你想允许玩家修改车辆数据，就必须在 `extra_cfg.yml` 中进行如下设置以忽略此警告：
```yaml
IgnoreConfigurationErrors:
  MissingCarChecksums: true
```

:::note
设置 `MissingCarChecksums: true` 并不会禁用校验和，它只是允许服务器在部分校验和缺失时仍能启动。  
已存在的校验和仍会被服务器加载。
如果你的目的是彻底移除校验和，请阅读[这个 FAQ 小节](./faq.md#remove-checksums)
:::

## 缺少赛道参数
AssettoServer 的部分功能（如实时天气）需要用到赛道坐标和时区。服务器首次启动时，会从这里下载已知赛道参数列表：https://github.com/ac-custom-shaders-patch/acc-extension-config/blob/master/config/data_track_params.ini  
如果该文件中没有你的赛道的条目，就会显示此错误。正确的修复方式是向上面的仓库提交 Pull Request，然后删除 `cfg/data_track_params.ini`，强制 AssettoServer 重新下载该文件。

**如果想创建本地赛道参数数据而不是提交 Pull Request，请阅读[这个 FAQ 小节](./faq.md#adding-trackparams)。**

如果你想忽略此错误，请在 `extra_cfg.yml` 中进行如下设置：
```yaml
IgnoreConfigurationErrors:
  MissingTrackParams: true
```

:::caution
如果在缺少赛道参数的情况下启用了 WeatherFX，玩家与服务器之间的时间将无法同步。
:::

## 服务器详情设置错误
你在 Content Manager 的 `Server > Details > Mode to provide extra details` 中选择了 `Via ID in name (recommended)`。对 AssettoServer 而言这**不**是推荐做法，因为 AssettoServer 有自己的方式来确保服务器详情始终保持最新。

更多信息请参见[这个页面](./misc/server-details.md)。

如果你想忽略此错误，请在 `extra_cfg.yml` 中进行如下设置：
```yaml
IgnoreConfigurationErrors:
  WrongServerDetails: true
```

## 不安全的管理员白名单
`admins.txt` 中存在已列入白名单的管理员 SteamID，但 `extra_cfg.yml` 中的 `UseSteamAuth` 处于禁用状态。这是不安全的，因为玩家可以利用 SteamID 欺骗获取管理员权限。请启用 Steam 身份验证以防 SteamID 欺骗。

如果你想忽略此错误，请在 `extra_cfg.yml` 中进行如下设置：
```yaml
IgnoreConfigurationErrors:
  UnsafeAdminWhitelist: true
```

## 聊天菜单中缺少 CSP extra options
如果你在 `csp_extra_options.ini` 中添加了参数，却没有要求最低 CSP 版本，那么传送之类的功能就不会显示在聊天菜单中；但只要玩家安装的 CSP 版本支持，他们仍可以通过 comfy map 之类的应用进行传送。

为了让这些选项可以在聊天应用中选择，请按照[如何要求最低 CSP 版本的说明](./thebeginnersguide.md#requiring-csp-version)操作。
