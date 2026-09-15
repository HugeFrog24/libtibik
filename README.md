# libtibik

**English** &middot; [Deutsch](README.de.md) &middot; [Bahasa Indonesia](README.id.md) &middot; [Português (Brasil)](README.pt_BR.md) &middot; [Русский](README.ru.md) &middot; [简体中文](README.zh_CN.md)

<p align="center">
  <img src="icon.png" alt="Tibik icon" width="128">
</p>

A quality-of-life mod for Sky: CotL on Android and Windows. It automates the repetitive parts. Candle farming, dye butterfly collection, world teleport, and adds in-game controls for position, energy, shouts, and chat encryption.

## Quick start - Android

1. Install Canvas, the framework that loads Sky mods on Android:<br>
   https://github.com/skyprotocol/canvas-distribution/releases/latest
2. Download `libtibik.so` from the latest release:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
3. Open Canvas.
4. Add `libtibik.so` as a mod. Tap "Add mod".<br>
   _Don't open the `.so` with another app (notepad, gallery, archiver); only Canvas can load it._
5. Launch Sky from there.
6. Tibik appears in Canvas's mod palette once Sky is running.

## Quick start - Windows

You need Sky from Steam. Sky on PC is Windows only.

There are two ways in. Pick the first one if you are not sure.

### The easy way: let the app do it

Tibik Launcher puts the mod in for you, and takes it out again later.

1. Go to the latest release:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
2. Download the file whose name starts with `Tibik-Launcher-Setup`.
3. Open the file you just downloaded.<br>
   Windows may show a blue window saying **Windows protected your PC**. Click
   **More info**, then **Run anyway**. Windows says that because the app is new,
   not because something is wrong.
4. It sets itself up and opens. Windows does not ask you for permission.
5. It looks for your Sky folder by itself. If it cannot find it, open
   **Settings** and choose the folder yourself.
6. If a yellow bar says *Sky can't use mods yet*, click **Set up**. Read what it
   tells you, then click **Set up** again.
7. On the Tibik card, click **Install**. Read what it tells you, then click
   **Add**.
8. Start Sky from Steam, the way you always do.
9. Tibik appears once you are in the game.

To take it out later, open the app and click **Remove** on the Tibik card. You
do not need these instructions again.

### What this changes on your computer

This puts a file called `winhttp.dll` next to the game. Windows opens that file
when Sky starts. That is how the mod gets in.

Some antivirus programs do not like this. Yours may delete the file, or show a
warning. That is the antivirus doing its job, not a sign that something went
wrong. You can undo everything - see below.

This is the same either way. The app just does the copying for you.

### Doing it by hand instead

Use this if you would rather not run another app.

1. Download `Tibik-Windows.zip` from the latest release:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
2. Close Sky if it is open.
3. Find your Sky folder. In Steam, right-click **Sky: Children of the Light**.
   Choose **Manage**, then **Browse local files**. A folder opens. `Sky.exe` is
   inside it.
4. Unzip the file you downloaded.
5. Copy everything out of the zip into that folder. Keep the smaller folders as
   they are. When you are done, your Sky folder holds these:

   ```
   Sky.exe
   winhttp.dll
   html-config.json
   htmodloader\mods\tibik\tibik.dll
   ```

6. Start Sky from Steam, the way you always do.
7. Tibik appears once you are in the game.

### Turning it off again

If you used the app, open it and click **Remove**. It does the rest.

By hand, remove Tibik and nothing else by deleting this one folder:

```
htmodloader\mods\tibik
```

Do not delete the whole `htmodloader` folder unless you mean to. Other mods live
in there too. So do their saved settings.

`winhttp.dll` and `html-config.json` are the part that lets any mod load. Your
other mods share them. Deleting those two turns off every mod you have, not just
this one. Only do that if you want no mods at all.

## Languages

**We speak your language!**

<!-- coverage:start -->
| Language | Coverage | Translator |
| --- | --- | --- |
| 🇺🇸 English | 100% (1398/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇧🇷 Português (Brasil) | 100% (1398/1398) | Zixzto |
| 🇩🇪 Deutsch | 95% (1328/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇷🇺 Русский | 95% (1328/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇻🇳 Tieng Viet | 95% (1328/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇨🇳 简体中文 | 95% (1330/1398) | ciyun415, zzj123 |
| 🇬🇪 ქართული | 92% (1287/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
<!-- coverage:end -->

**To switch languages:**<br>
Open the "About" tab → scroll to Language → Manage translation packs.

**Contributing a translation:**<br>
Grab the strings template → translate → test locally (import from device) → open a PR (pull request). Once merged, it ships to everyone via the in-game language manager.

New to pull requests? See GitHub's [guide](https://docs.github.com/en/pull-requests).

## Roadmap

| Status | Feature                       | What it does                                                                                                                       |
| ------ | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| ⏳     | Friend actions with strangers | Offer hugs, high fives and other friendship actions to players you are not friends with. These already work with existing friends |

## Issues

Found a bug? Open an issue and provide:

- Device model
- Sky version
- Screenshots (if applicable)
- Logs (Log → Copy)
