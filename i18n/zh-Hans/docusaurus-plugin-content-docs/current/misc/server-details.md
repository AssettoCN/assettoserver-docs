---
title: 服务器详细信息
description: 有关服务器详细信息的重要说明
---

不要在 Content Manager 中启用"提供有关服务器的额外详情，例如额外内容链接、驾驶辅助或描述"（Provide extra details about the server, such as links to extra content, assists or description）选项。
而应在 `extra_cfg.yml` 中将 `EnableServerDetails` 设为 `true`，并在 `ServerDescription` 中填写服务器描述。

如果你已有现成的服务器配置，请确保 `server_cfg.ini` 中的服务器名称不以 `x:<随机字母>` 或 `ℹ8081` 之类的内容结尾。启用服务器详细信息后，AssettoServer 会自动为你追加这些内容。

::::note

同时启用服务器详细信息并使用 Steam Auth 或 WeatherFX 等功能，需要 Content Manager 版本不低于 v0.8.2329.38887。

::::
