# libtibik

[English](README.md) &middot; [Deutsch](README.de.md) &middot; [Bahasa Indonesia](README.id.md) &middot; [Português (Brasil)](README.pt_BR.md) &middot; [Русский](README.ru.md) &middot; **简体中文**

<p align="center">
  <img src="icon.png" alt="Tibik icon" width="128">
</p>

Tibik（libtibik）是一款适用于 Android 版《光·遇》（Sky: Children of the Light）的体验优化模组。它能自动完成重复性的操作：刷蜡烛、收集染料蝴蝶、地图传送，还提供位置、能量、呼喊和聊天加密等游戏内控制功能。

## 快速开始

1. 安装 Canvas，这是在 Android 上加载《光·遇》模组的框架：<br>
   https://github.com/skyprotocol/canvas-distribution/releases/latest
2. 从最新版本下载 `libtibik.so`：<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
3. 打开 Canvas。
4. 将 `libtibik.so` 添加为模组。点按「Add mod」。<br>
   _请勿用其他应用（记事本、图库、压缩工具）打开该 `.so` 文件；只有 Canvas 能加载它。_
5. 从那里启动《光·遇》。
6. 《光·遇》运行后，Tibik 会出现在 Canvas 的模组面板中。

## 语言

**我们说你的语言！**

<!-- coverage:start -->
| 语言 | 完成度 | 译者 |
| --- | --- | --- |
| 🇺🇸 English | 100% (1159/1159) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇧🇷 Português (Brasil) | 100% (1159/1159) | Schemen |
| 🇩🇪 Deutsch | 94% (1089/1159) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇷🇺 Русский | 94% (1089/1159) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇻🇳 Tieng Viet | 94% (1089/1159) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇨🇳 简体中文 | 94% (1091/1159) | ciyun415, zzj123 |
| 🇬🇪 ქართული | 90% (1048/1159) | [HugeFrog24](https://github.com/HugeFrog24) |
<!-- coverage:end -->

**如何切换语言：**<br>
打开「关于」标签页 → 滚动到「语言」 → 「管理翻译包」。

**如何贡献翻译：**<br>
获取字符串模板 → 翻译 → 在本地测试（从设备导入） → 提交 PR（pull request）。合并后，它会通过游戏内的语言管理器发布给所有人。

第一次提交 pull request？请参阅 GitHub 的[指南](https://docs.github.com/zh/pull-requests)。

## 路线图

| 状态 | 功能 | 说明 |
| --- | --- | --- |
| ⏳ | 离线模式 | 断开与当前实例的连接，阻止其他人加入你，并让花朵更快融化 |

## 问题反馈

发现了 bug？请提交 issue 并提供：

- 设备型号
- 《光·遇》版本
- 截图（如有）
- 日志（「日志」→「复制日志」）
