# libtibik

[English](README.md) &middot; **Deutsch** &middot; [Bahasa Indonesia](README.id.md) &middot; [Português (Brasil)](README.pt_BR.md) &middot; [Русский](README.ru.md) &middot; [简体中文](README.zh_CN.md)

<p align="center">
  <img src="icon.png" alt="Tibik icon" width="128">
</p>

Tibik (libtibik) ist eine Quality-of-Life-Mod für Sky: Children of the Light (Sky: Kinder des Lichts) auf Android und Windows. Sie automatisiert die sich wiederholenden Aufgaben: Kerzen farmen, Farbschmetterlinge sammeln und zwischen Welten teleportieren. Außerdem bietet sie In-Game-Steuerungen für Position, Energie, Rufe und Chat-Verschlüsselung.

## Schnellstart - Android

1. Installiere Canvas, das Framework, das Sky-Mods auf Android lädt:<br>
   https://github.com/skyprotocol/canvas-distribution/releases/latest
2. Lade `libtibik.so` aus dem neuesten Release herunter:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
3. Öffne Canvas.
4. Füge `libtibik.so` als Mod hinzu. Tippe auf „Mod hinzufügen".<br>
   _Öffne die `.so`-Datei nicht mit einer anderen App (Notizen, Galerie, Archivierer); nur Canvas kann sie laden._
5. Starte Sky von dort.
6. Sobald Sky läuft, erscheint Tibik in der Mod-Palette von Canvas.

## Schnellstart - Windows

Du brauchst Sky von Steam. Sky auf dem PC gibt es nur für Windows.

Es gibt zwei Wege. Nimm den ersten, wenn du unsicher bist.

### Der einfache Weg: die App macht es

Der Tibik Launcher setzt die Mod für dich ein und nimmt sie später wieder raus.

1. Geh zum neuesten Release:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
2. Lade die Datei herunter, deren Name mit `Tibik-Launcher-Setup` anfängt.
3. Öffne die Datei, die du gerade geladen hast.<br>
   Windows zeigt vielleicht ein blaues Fenster mit **Der Computer wurde durch
   Windows geschützt**. Klicke auf **Weitere Informationen**, dann auf **Trotzdem
   ausführen**. Windows sagt das, weil die App neu ist. Es ist nichts kaputt.
4. Sie richtet sich selbst ein und geht auf. Windows fragt dich nicht um
   Erlaubnis.
5. Sie sucht deinen Sky-Ordner von allein. Findet sie ihn nicht, öffne die
   **Einstellungen** und wähle den Ordner selbst.
6. Steht in einem gelben Balken *Sky can't use mods yet*, klicke auf **Set up**.
   Lies, was dort steht, und klicke dann noch einmal auf **Set up**.
7. Klicke auf der Tibik-Karte auf **Install**. Lies, was dort steht, und klicke
   dann auf **Add**.
8. Starte Sky über Steam, so wie immer.
9. Tibik erscheint, sobald du im Spiel bist.

Zum Entfernen öffnest du später die App und klickst auf der Tibik-Karte auf
**Remove**. Diese Anleitung brauchst du dafür nicht mehr.

### Was sich auf deinem Computer ändert

Das legt eine Datei namens `winhttp.dll` neben das Spiel. Windows öffnet diese
Datei, wenn Sky startet. So kommt die Mod hinein.

Manche Antivirenprogramme mögen das nicht. Deins löscht die Datei vielleicht
oder zeigt eine Warnung. Das Antivirenprogramm macht dann seine Arbeit. Es
bedeutet nicht, dass etwas schiefgelaufen ist. Du kannst alles rückgängig machen
- siehe unten.

Das ist auf beiden Wegen gleich. Die App nimmt dir nur das Kopieren ab.

### Oder von Hand

Nimm das, wenn du keine zweite App starten möchtest.

1. Lade `Tibik-Windows.zip` aus dem neuesten Release herunter:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
2. Schließe Sky, falls es offen ist.
3. Finde deinen Sky-Ordner. Klicke in Steam mit rechts auf **Sky: Children of
   the Light**. Wähle **Verwalten**, dann **Lokale Dateien durchsuchen**. Ein
   Ordner geht auf. `Sky.exe` liegt darin.
4. Entpacke die Datei, die du geladen hast.
5. Kopiere alles aus dem Zip in diesen Ordner. Lass die kleineren Ordner so, wie
   sie sind. Danach liegt in deinem Sky-Ordner das hier:

   ```
   Sky.exe
   winhttp.dll
   html-config.json
   htmodloader\mods\tibik\tibik.dll
   ```

6. Starte Sky über Steam, so wie immer.
7. Tibik erscheint, sobald du im Spiel bist.

### Wieder ausschalten

Hast du die App benutzt, öffne sie und klicke auf **Remove**. Den Rest macht sie.

Von Hand entfernst du nur Tibik, indem du genau diesen einen Ordner löschst:

```
htmodloader\mods\tibik
```

Lösche nicht den ganzen Ordner `htmodloader`, außer du willst das wirklich. Dort
liegen auch andere Mods. Und deren gespeicherte Einstellungen.

`winhttp.dll` und `html-config.json` sind der Teil, der Mods überhaupt lädt.
Deine anderen Mods teilen sich die beiden. Löschst du sie, gehen alle deine Mods
aus, nicht nur diese. Mach das nur, wenn du gar keine Mods mehr willst.

## Sprachen

**Wir sprechen deine Sprache!**

<!-- coverage:start -->
| Sprache | Fortschritt | Übersetzer |
| --- | --- | --- |
| 🇺🇸 English | 100% (1398/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇧🇷 Português (Brasil) | 100% (1398/1398) | Zixzto |
| 🇩🇪 Deutsch | 95% (1328/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇷🇺 Русский | 95% (1328/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇻🇳 Tieng Viet | 95% (1328/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇨🇳 简体中文 | 95% (1330/1398) | ciyun415, zzj123 |
| 🇬🇪 ქართული | 92% (1287/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
<!-- coverage:end -->

**So wechselst du die Sprache:**<br>
Öffne den Tab „Über" → scrolle zu „Sprache" → „Übersetzungspakete verwalten".

**So trägst du eine Übersetzung bei:**<br>
Hol dir die String-Vorlage → übersetze → teste lokal (vom Gerät importieren) → öffne einen PR (Pull Request). Nach dem Merge wird sie über den In-Game-Sprachmanager an alle ausgeliefert.

Neu bei Pull Requests? Sieh dir GitHubs [Anleitung](https://docs.github.com/de/pull-requests) an.

## Roadmap

| Status | Funktion | Beschreibung |
| --- | --- | --- |
| ⏳ | Freundschaftsaktionen mit Fremden | Biete Umarmungen, High Fives und andere Freundschaftsaktionen auch Spielern an, mit denen du nicht befreundet bist. Mit bestehenden Freunden funktionieren sie bereits |

## Fehler melden

Einen Fehler gefunden? Öffne ein Issue und gib an:

- Gerätemodell
- Sky-Version
- Screenshots (falls vorhanden)
- Logs („Protokoll" → „Log kopieren")
