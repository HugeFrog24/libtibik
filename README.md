# libtibik

<p align="center">
  <img src="icon.png" alt="Tibik icon" width="128">
</p>

A quality-of-life mod for Sky: CotL on Android. It automates the repetitive parts. Candle farming, dye butterfly collection, world teleport, and adds in-game controls for position, energy, shouts, and chat encryption.

## Quick start

1. Install Canvas, the framework that loads Sky mods on Android:<br>
   https://github.com/skyprotocol/canvas-distribution/releases/latest
2. Download `libtibik.so` from the latest release:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
3. Open Canvas.
4. Add `libtibik.so` as a mod. Tap "Add mod".<br>
   _Don't open the `.so` with another app (notepad, gallery, archiver); only Canvas can load it._
5. Launch Sky from there.
6. Tibik appears in Canvas's mod palette once Sky is running.

## Languages

**We speak your language!**

<!-- coverage:start -->
| Language | Coverage | Translator |
| --- | --- | --- |
| 🇺🇸 English | 100% (1027/1027) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇧🇷 Português (Brasil) | 100% (1027/1027) | Schemen |
| 🇩🇪 Deutsch | 93% (957/1027) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇷🇺 Русский | 93% (957/1027) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇻🇳 Tieng Viet | 93% (957/1027) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇨🇳 简体中文 | 93% (959/1027) | ciyun415, zzj123 |
| 🇬🇪 ქართული | 89% (916/1027) | [HugeFrog24](https://github.com/HugeFrog24) |
<!-- coverage:end -->

**To switch languages:**<br>
Open the "About" tab → scroll to Language → Manage translation packs.

**Contributing a translation:**<br>
Grab the strings template → translate → test locally (import from device) → open a PR (pull request). Once merged, it ships to everyone via the in-game language manager.

New to pull requests? See GitHub's [guide](https://docs.github.com/en/pull-requests).

## Roadmap

| Status | Feature      | What it does                                                                                         |
| ------ | ------------ | ---------------------------------------------------------------------------------------------------- |
| ⏳     | Offline mode | Disconnects from the active instance, prevents others from joining you and makes flowers melt faster |

## Issues

Found a bug? Open an issue and provide:

- Device model
- Sky version
- Screenshots (if applicable)
- Logs (Log → Copy)
