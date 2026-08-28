---
title: 更新日志
---
## Patreon 插件

### v0.0.40

#### PatreonSocialPlugin（新增！）
该插件可以显示 Discord 或 Steam 的个人资料信息、身份组、排行榜排名等。

#### PatreonOvertakePlugin
* 修复 `TooSlowTimeoutSeconds` 参数无效的问题

#### PatreonTimingPlugin
* 为圈速记录添加 CSP 版本信息

#### PatreonRaceChallengePlugin
* 全面重构了 UI
* 现在可以观战其他玩家的比赛了

#### PatreonAnalyticsPlugin
* 添加更多指标：CPU/GPU 时间、三角形/绘制调用/灯光/额外阴影的数量

#### PatreonSafetyRatingPlugin
* 新增选项 `ShowNumericRatings`

#### PatreonSpeedtrapPlugin
* 修复较新 CSP/Pure 版本下图像过曝的问题

### v0.0.39

所有插件现在都支持 ARM64 架构。

#### ClientSecurityPlugin（新增！）
这是一个**免费插件**，它会进行一些额外的检查，让作弊或篡改游戏文件变得更难一些。

#### PatreonOvertakePlugin（新增！）
用于超车模式的插件，在不发生碰撞的情况下超越其他车辆即可获得分数。

#### PatreonRaceChallengePlugin
* Lua 服务器脚本不再内置在插件中，你可以[编辑该脚本](./plugins/PatreonRaceChallengePlugin.mdx#ui-customization)，按自己的喜好更改 UI。

### v0.0.38

针对竞速挑战插件的小型热修复，其他所有插件与 v0.0.37 完全相同。

#### PatreonRaceChallengePlugin
* 修复生命条不显示的问题
* 修复倒计时尚未结束就已开始扣分的问题

### v0.0.37

#### PatreonChatRolesPlugin（新增！）

该插件允许你更改玩家的聊天名称颜色，并为各个用户组分配图标，例如管理员、VIP 等。

感谢 **No Hesi** 委托开发此插件！

#### PatreonAnalyticsPlugin（新增！）

该插件允许你记录有关服务器和玩家的各种指标。

* 客户端指标
  * 常规信息：分辨率、MSAA、世界细节、全屏、垂直同步、VR、三屏、换挡器、FPS 上限
  * 持续上报：FPS、CPU 占用率
* 服务器指标（由 **No Hesi** 委托开发）
  * 每辆车的数据：空置/加载画面中/怠速/驾驶所花费的时间、碰撞次数

#### PatreonRaceChallengePlugin

* 新增参数 `LeaderDistanceOffsetMeters`，使领先者在后车贴近时扣分

#### PatreonReservedSlotsPlugin

* 支持多个用户组（由 **No Hesi** 委托开发）

::::caution 破坏性变更！

请查阅[文档](./plugins/PatreonReservedSlotsPlugin.mdx)。

::::

#### PatreonTimingPlugin

* 为圈速记录更多信息：输入方式、换挡器、轮胎选择、车辆校验和、分段用时、天气、赛道抓地力、赛道/环境温度、游戏内时间

### v0.0.36

#### PatreonRaceChallengePlugin

* 修复聊天命令无效的问题

#### PatreonSafetyRatingPlugin

* 修复 CSP &lt;0.1.79 时聊天名称颜色的问题

#### PatreonSpeedTrapPlugin

* 修复测速点闪光对其他玩家不显示的问题

### v0.0.35

#### PatreonSafetyRatingPlugin（新增！）

该插件根据碰撞次数和行驶里程计算安全评分（safety rating）。驾驶干净的玩家会比每个弯都撞车的人获得更高的评分。  
你还可以为每个安全评分等级设置颜色，显示在聊天和名牌中。

#### PatreonTimingPlugin

* 对标记为 `AI=fixed` 的车辆禁用计时（此前管理员驾驶这些车辆时也能在排行榜上创建成绩）

#### PatreonSpeedTrapPlugin

* 支持通过 Lua 自定义图像覆盖层
* 修复自定义测速点前向向量计算错误的问题
* 为 Discord webhook 新增变量 `Guid` 和 `Car`

### v0.0.34

#### PatreonTwitchChatPlugin（新增！）

如果你是主播并且运营着自己的服务器，这个插件可能对你有帮助。它会把 Twitch 聊天中的所有消息转发到 AC 游戏内聊天，并且（可选）反向转发。

感谢 **AEGIS | VISUALS** 委托开发此插件！

#### PatreonSpeedTrapPlugin

* 现在支持 SRP 以外的地图，可在[配置](./plugins/PatreonSpeedTrapPlugin.mdx#custom-speed-traps)中定义自定义测速点
* 覆盖层和灰度效果可以禁用
* 允许玩家禁用图片上传，对网络连接较慢的情况有所帮助

#### PatreonReservedSlotsPlugin

* 配置已更新，支持保留车辆列表（entry list）中的特定槽位
* 借助新的 AssettoServer Hub 用户组，可以在你的所有游戏服务器之间同步预留槽位

::::caution 破坏性变更！

请查阅[文档](./plugins/PatreonReservedSlotsPlugin.mdx)。

::::

## AssettoServer Hub

### v0.0.9
* 通过 Discord `/rcon` 命令支持 RCON
* 修复计时用户组并非总是正确计算的问题
* 新增计时积分用户组
* 新增已关联 Discord 账户的用户组
* 新增竞速挑战用户组
* 为计时排行榜添加轮胎筛选

### v0.0.8

* 新增 Discord 超车排行榜
* 新增单个计时路段的计时排行榜
* 所有 Discord 排行榜现在支持更多自定义选项，例如标题、条目数量和模板
* 修复打开排行榜但尚未产生任何记录时抛出异常的问题

### v0.0.7

#### 计时排行榜
* 不再要求必须存在 `Default` 排行榜，而是改用第一个排行榜
* 新增参数 `TimingLeaderboardExtraColumns`，用于控制排行榜上显示哪些列
* 使用友好的车辆/赛道名称代替文件夹名称（[更多信息](./assettoserver-hub/index.md#friendly-names)）

#### Discord
* 用户组同步应更加稳定可靠

#### 其他
* 排行榜的移动端 UI 略有改进
* 每日/每周/每月活跃/新用户的 Prometheus 指标（可通过 `/metrics` 端点获取，由 **No Hesi** 委托开发）

### v0.0.6

#### 计时排行榜
* 新增当月/按月排行榜筛选
* 新增 API
* 当某个赛道与排行榜组合下没有设置圈速时，在排行榜中隐藏该赛道
* 新增基于积分的计时排行榜

#### Discord
* 新增 Discord 机器人
* 新增将 Steam 账户关联到 Discord 账户的功能
* 新增 Discord 身份组映射
* 新增服务器状态嵌入消息
* 新增 Discord 计时排行榜
* 新增 Discord 竞速挑战排行榜

### v0.0.5

* 新增竞速挑战排行榜
* 计时排行榜改进
* 新增安全评分支持
* 更新至 .NET 7
* 修复菜单在移动端无法使用的问题

### v0.0.4

* 新增计时排行榜网页界面（[演示](https://demo.assettoserver.org/timing)）
* 引入了“用户组”这一新概念，可以配置多个白名单/黑名单，并将所有列表同步到你的游戏服务器

::::caution 破坏性变更！

将黑名单/白名单同步到游戏服务器需要新的配置，请查阅[文档](./assettoserver-hub/user-groups.md)。

::::
