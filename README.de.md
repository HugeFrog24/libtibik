# libtibik

[English](README.md) &middot; **Deutsch** &middot; [Bahasa Indonesia](README.id.md) &middot; [Português (Brasil)](README.pt_BR.md) &middot; [Русский](README.ru.md) &middot; [简体中文](README.zh_CN.md)

<p align="center">
  <img src="icon.png" alt="Tibik icon" width="128">
</p>

Tibik (libtibik) ist eine Quality-of-Life-Mod für Sky: Children of the Light (Sky: Kinder des Lichts) auf Android. Sie automatisiert die sich wiederholenden Aufgaben: Kerzen farmen, Farbschmetterlinge sammeln und zwischen Welten teleportieren. Außerdem bietet sie In-Game-Steuerungen für Position, Energie, Rufe und Chat-Verschlüsselung.

## Schnellstart

1. Installiere Canvas, das Framework, das Sky-Mods auf Android lädt:<br>
   https://github.com/skyprotocol/canvas-distribution/releases/latest
2. Lade `libtibik.so` aus dem neuesten Release herunter:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
3. Öffne Canvas.
4. Füge `libtibik.so` als Mod hinzu. Tippe auf „Mod hinzufügen".<br>
   _Öffne die `.so`-Datei nicht mit einer anderen App (Notizen, Galerie, Archivierer); nur Canvas kann sie laden._
5. Starte Sky von dort.
6. Sobald Sky läuft, erscheint Tibik in der Mod-Palette von Canvas.

## Sprachen

**Wir sprechen deine Sprache!**

<!-- coverage:start -->
| Sprache | Fortschritt | Übersetzer |
| --- | --- | --- |
| 🇺🇸 English | 100% (1164/1164) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇧🇷 Português (Brasil) | 100% (1164/1164) | Schemen |
| 🇩🇪 Deutsch | 94% (1094/1164) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇷🇺 Русский | 94% (1094/1164) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇻🇳 Tieng Viet | 94% (1094/1164) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇨🇳 简体中文 | 94% (1096/1164) | ciyun415, zzj123 |
| 🇬🇪 ქართული | 90% (1053/1164) | [HugeFrog24](https://github.com/HugeFrog24) |
<!-- coverage:end -->

**So wechselst du die Sprache:**<br>
Öffne den Tab „Über" → scrolle zu „Sprache" → „Übersetzungspakete verwalten".

**So trägst du eine Übersetzung bei:**<br>
Hol dir die String-Vorlage → übersetze → teste lokal (vom Gerät importieren) → öffne einen PR (Pull Request). Nach dem Merge wird sie über den In-Game-Sprachmanager an alle ausgeliefert.

Neu bei Pull Requests? Sieh dir GitHubs [Anleitung](https://docs.github.com/de/pull-requests) an.

## Roadmap

| Status | Funktion | Beschreibung |
| --- | --- | --- |
| ⏳ | Offline-Modus | Trennt die Verbindung zur aktiven Instanz, verhindert, dass andere dir beitreten, und lässt Blumen schneller schmelzen |

## Fehler melden

Einen Fehler gefunden? Öffne ein Issue und gib an:

- Gerätemodell
- Sky-Version
- Screenshots (falls vorhanden)
- Logs („Protokoll" → „Log kopieren")
