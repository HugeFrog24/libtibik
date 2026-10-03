# libtibik

[English](README.md) &middot; [Deutsch](README.de.md) &middot; [Bahasa Indonesia](README.id.md) &middot; [Português (Brasil)](README.pt_BR.md) &middot; [Русский](README.ru.md) &middot; **简体中文**

<p align="center">
  <img src="icon.png" alt="Tibik icon" width="128">
</p>

<p align="center">
  <img src="assets/powered-by-autism.zh-CN.svg" alt="由自闭症驱动" height="28">
</p>

Tibik（libtibik）是一款适用于 Android 版和 Windows 版《光·遇》（Sky: Children of the Light）的体验优化模组。它能自动完成重复性的操作：刷蜡烛、收集染料蝴蝶、地图传送，还提供位置、能量、呼喊和聊天加密等游戏内控制功能。

## <img src="assets/android.svg" alt="" height="18"> 快速开始 - Android

1. 安装 Canvas，这是在 Android 上加载《光·遇》模组的框架：<br>
   https://github.com/skyprotocol/canvas-distribution/releases/latest
2. 从最新版本下载 `libtibik.so`：<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
3. 打开 Canvas。
4. 将 `libtibik.so` 添加为模组。点按「Add mod」。<br>
   _请勿用其他应用（记事本、图库、压缩工具）打开该 `.so` 文件；只有 Canvas 能加载它。_
5. 从那里启动《光·遇》。
6. 《光·遇》运行后，Tibik 会出现在 Canvas 的模组面板中。

## <img src="assets/windows.svg" alt="" height="18"> 快速开始 - Windows

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

<details>
<summary><b>或者自己动手</b></summary>

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

</details>

### 想要关掉的时候

用应用装的，就打开应用点 **Remove**，剩下的它会做。

自己动手的话，先关掉《光·遇》，再只删这一个文件：

```
htmodloader\mods\tibik\tibik.dll
```

之后《光·遇》启动时就不会再加载 Tibik。

那个文件夹里的其他东西都别动。里面有你的设置、传送点、送心目标和乐谱。里面还有
`identity.json`，这是你在这台电脑上的 Tibik 登录凭据。如果你没有恢复短语，也
没有别的设备还登录着，删掉它以后账户就再也找不回来了。恢复短语要在模组里创建：
「关于」 → 「账户」 → 「恢复短语」。想从头开始的话，请用模组「关于」标签页里的
「重置设置」，不要去删文件。

也别删 `htmodloader` 文件夹。上面那个文件夹就在它里面。

`winhttp.dll` 和 `html-config.json` 是模组加载器。它只运行 Tibik，不运行别的，
所以如果你也不想要加载器了，这两个文件也可以一起删掉。

## 语言

**我们说你的语言！**

<!-- coverage:start -->
| 语言 | 完成度 | 译者 |
| --- | --- | --- |
| 🇺🇸 English | 100% (1496/1496) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇧🇷 Português (Brasil) | 100% (1496/1496) | Zixzto |
| 🇩🇪 Deutsch | 95% (1426/1496) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇷🇺 Русский | 95% (1426/1496) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇻🇳 Tieng Viet | 95% (1426/1496) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇨🇳 简体中文 | 95% (1428/1496) | ciyun415, zzj123 |
| 🇬🇪 ქართული | 93% (1385/1496) | [HugeFrog24](https://github.com/HugeFrog24) |
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
