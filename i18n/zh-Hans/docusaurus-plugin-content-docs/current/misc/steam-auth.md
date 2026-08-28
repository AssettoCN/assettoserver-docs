---
title: Linux 上的 Steam 身份验证
description: 如何在 Linux 上为 AssettoServer 安装 Steam 服务器 SDK 库。
---

在 Linux 上设置 Steam 身份验证可能有点让人困惑，但其实相当简单。由于原版 acServer 不带 Steam 身份验证功能，我们需要自行获取相关库文件。

所有发行版的操作方式应该一致，可能仅有细微差别。这里我们使用 Debian 12。

::::note
据报道，在 Ubuntu 上只需安装 SteamCMD，库文件就可能自动安装到正确的位置，但这一点尚需测试。
::::

## 第 1 步：安装 SteamCMD
每个发行版的安装方式都不同，请按照 [Valve 官方 Wiki](https://developer.valvesoftware.com/wiki/SteamCMD#Linux) 的说明操作。

## 第 2 步：获取库文件
使用 SteamCMD 可以抓取这些库并下载到我们的主目录。

运行以下命令即可：
```shell
steamcmd +force_install_dir ~/sdk_lin +login anonymous +app_update 1007 validate +quit
```

## 第 3 步：将库文件复制到正确位置
刚才下载内容的目录结构应如下所示。我们需要把 `Linux64` 目录下的二进制文件复制到 `~/.steam/sdk64`：

```
sdk_lin
├──Linux64
│  └──steamclient.so
├──SteamApps
│  └──<irrelevant files>
└──steamclient.so
```
可以看到有两个 `steamclient.so` 文件。我们需要的是 `Linux64` 目录中的那一个，把它复制到 `~/.steam/sdk64/steamclient.so`。

完成后，你应该就能通过 `extra_cfg.yml` 顺利启用 Steam 身份验证了。

### Bash 脚本
```shell
#! /bin/bash
steamcmd +force_install_dir ~/sdk_lin +login anonymous +app_update 1007 validate +quit
mkdir ~/.steam/sdk64
cp ~/sdk_lin/linux64/steamclient.so ~/.steam/sdk64/
```

### 常见问题
如果你遇到关于以下内容的错误：
```
/home/<user>/.steam/sdk64/steamclient.so: wrong ELF class: ELFCLASS32
```
说明你复制了错误版本的 `steamclient.so`。

### 更多信息
[SteamCMD 的 Steam Wiki 页面](https://developer.valvesoftware.com/wiki/SteamCMD#Linux)

[服务器库的 Facepunch Wiki 页面](https://wiki.facepunch.com/steamworks/Server_Library)
