# libtibik

[English](README.md) &middot; [Deutsch](README.de.md) &middot; [Bahasa Indonesia](README.id.md) &middot; [Português (Brasil)](README.pt_BR.md) &middot; [Русский](README.ru.md) &middot; **简体中文**

<p align="center">
  <img src="icon.png" alt="Tibik icon" width="128">
</p>

Tibik（libtibik）是一款适用于 Android 版和 Windows 版《光·遇》（Sky: Children of the Light）的体验优化模组。它能自动完成重复性的操作：刷蜡烛、收集染料蝴蝶、地图传送，还提供位置、能量、呼喊和聊天加密等游戏内控制功能。

## 快速开始 - Android

1. 安装 Canvas，这是在 Android 上加载《光·遇》模组的框架：<br>
   https://github.com/skyprotocol/canvas-distribution/releases/latest
2. 从最新版本下载 `libtibik.so`：<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
3. 打开 Canvas。
4. 将 `libtibik.so` 添加为模组。点按「Add mod」。<br>
   _请勿用其他应用（记事本、图库、压缩工具）打开该 `.so` 文件；只有 Canvas 能加载它。_
5. 从那里启动《光·遇》。
6. 《光·遇》运行后，Tibik 会出现在 Canvas 的模组面板中。

## 快速开始 - Windows

你需要 Steam 上的《光·遇》。电脑版《光·遇》只有 Windows 版。

有两种办法。拿不准就用第一种。

### 简单的办法：让应用来做

Tibik Launcher 会帮你把模组放进去，以后也能帮你取出来。

1. 打开最新版本页面：<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
2. 下载名字以 `Tibik-Launcher-Setup` 开头的那个文件。
3. 打开刚下载的文件。<br>
   Windows 可能会弹出一个蓝色窗口，写着 **Windows 已保护你的电脑**。点**详细信
   息**，再点**仍要运行**。Windows 这么说是因为这个应用是新的，不是出了问题。
4. 它会自己装好并打开。Windows 不会向你要权限。
5. 它会自己找你的《光·遇》文件夹。要是找不到，打开 **Settings** 自己选一下。
6. 如果有一条黄色的提示写着 *Sky can't use mods yet*，点 **Set up**。读一下上
   面写的内容，再点一次 **Set up**。
7. 在 Tibik 卡片上点 **Install**。读一下上面写的内容，再点 **Add**。
8. 像平常一样从 Steam 启动《光·遇》。
9. 进入游戏后，Tibik 就会出现。

以后想取消，打开这个应用，在 Tibik 卡片上点 **Remove** 就行。你不用再看这份说
明了。

### 这会改变你电脑上的什么

这会在游戏旁边放一个叫 `winhttp.dll` 的文件。《光·遇》启动时，Windows 会打开
这个文件。模组就是这样进去的。

有些杀毒软件不喜欢这样。你的杀毒软件可能会删掉这个文件，或者弹出警告。那是杀
毒软件在做它该做的事。这不代表出了问题。这一切你都可以撤销 - 见下文。

两种办法在这一点上是一样的。应用只是替你把文件复制过去。

### 或者自己动手

如果你不想再开一个应用，就用这个办法。

1. 从最新版本下载 `Tibik-Windows.zip`：<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
2. 如果《光·遇》开着，先关掉它。
3. 找到你的《光·遇》文件夹。在 Steam 里右键点击 **Sky: Children of the
   Light**。选择**管理**，再选**浏览本地文件**。会打开一个文件夹。`Sky.exe`
   就在里面。
4. 把刚下载的压缩包解压。
5. 把压缩包里的东西全部复制到那个文件夹。里面的小文件夹保持原样。做完以后，你
   的《光·遇》文件夹里会有这些：

   ```
   Sky.exe
   winhttp.dll
   html-config.json
   htmodloader\mods\tibik\tibik.dll
   ```

6. 像平常一样从 Steam 启动《光·遇》。
7. 进入游戏后，Tibik 就会出现。

### 想要关掉的时候

用应用装的，就打开应用点 **Remove**，剩下的它会做。

自己动手的话，只想删掉 Tibik，就删这一个文件夹：

```
htmodloader\mods\tibik
```

除非你真的想这么做，否则别删整个 `htmodloader` 文件夹。别的模组也在里面。它们
保存的设置也在里面。

`winhttp.dll` 和 `html-config.json` 是让模组能被加载的那部分。你的其他模组也
在用这两个文件。删掉它们，你所有的模组都会关掉，不只是这一个。只有在你完全不
想要模组时才这么做。

## 语言

**我们说你的语言！**

<!-- coverage:start -->
| 语言 | 完成度 | 译者 |
| --- | --- | --- |
| 🇺🇸 English | 100% (1398/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇧🇷 Português (Brasil) | 100% (1398/1398) | Zixzto |
| 🇩🇪 Deutsch | 95% (1328/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇷🇺 Русский | 95% (1328/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇻🇳 Tieng Viet | 95% (1328/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇨🇳 简体中文 | 95% (1330/1398) | ciyun415, zzj123 |
| 🇬🇪 ქართული | 92% (1287/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
<!-- coverage:end -->

**如何切换语言：**<br>
打开「关于」标签页 → 滚动到「语言」 → 「管理翻译包」。

**如何贡献翻译：**<br>
获取字符串模板 → 翻译 → 在本地测试（从设备导入） → 提交 PR（pull request）。合并后，它会通过游戏内的语言管理器发布给所有人。

第一次提交 pull request？请参阅 GitHub 的[指南](https://docs.github.com/zh/pull-requests)。

## 路线图

| 状态 | 功能 | 说明 |
| --- | --- | --- |
| ⏳ | 与陌生人的好友互动 | 向尚未成为好友的玩家发起拥抱、击掌等好友互动，与现有好友已经可以使用 |

## 问题反馈

发现了 bug？请提交 issue 并提供：

- 设备型号
- 《光·遇》版本
- 截图（如有）
- 日志（「日志」→「复制日志」）
