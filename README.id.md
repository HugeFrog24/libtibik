# libtibik

[English](README.md) &middot; [Deutsch](README.de.md) &middot; **Bahasa Indonesia** &middot; [Português (Brasil)](README.pt_BR.md) &middot; [Русский](README.ru.md) &middot; [简体中文](README.zh_CN.md)

<p align="center">
  <img src="icon.png" alt="Tibik icon" width="128">
</p>

Tibik (libtibik) adalah mod quality-of-life untuk Sky: Children of the Light (Sky: Anak-Anak Cahaya) di Android. Mod ini mengotomatiskan bagian-bagian yang berulang: farming lilin, mengumpulkan kupu-kupu pewarna, dan teleport antar dunia, serta menambahkan kontrol dalam game untuk posisi, energi, teriakan, dan enkripsi obrolan.

## Mulai cepat

1. Pasang Canvas, framework yang memuat mod Sky di Android:<br>
   https://github.com/skyprotocol/canvas-distribution/releases/latest
2. Unduh `libtibik.so` dari rilis terbaru:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
3. Buka Canvas.
4. Tambahkan `libtibik.so` sebagai mod. Ketuk "Tambah mod".<br>
   _Jangan buka `.so` dengan aplikasi lain (notepad, galeri, pengarsip); hanya Canvas yang bisa memuatnya._
5. Jalankan Sky dari sana.
6. Tibik muncul di palet mod Canvas begitu Sky berjalan.

## Bahasa

**Kami berbicara bahasa Anda!**

<!-- coverage:start -->
| Bahasa | Cakupan | Penerjemah |
| --- | --- | --- |
| 🇺🇸 English | 100% (1159/1159) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇧🇷 Português (Brasil) | 100% (1159/1159) | Schemen |
| 🇩🇪 Deutsch | 94% (1089/1159) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇷🇺 Русский | 94% (1089/1159) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇻🇳 Tieng Viet | 94% (1089/1159) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇨🇳 简体中文 | 94% (1091/1159) | ciyun415, zzj123 |
| 🇬🇪 ქართული | 90% (1048/1159) | [HugeFrog24](https://github.com/HugeFrog24) |
<!-- coverage:end -->

**Cara mengganti bahasa:**<br>
Buka tab "About" → gulir ke "Language" → "Manage translation packs".

**Cara menyumbang terjemahan:**<br>
Ambil templat string → terjemahkan → uji secara lokal (impor dari perangkat) → buka PR (pull request). Setelah digabungkan (merge), terjemahan akan tersedia bagi semua orang lewat pengelola bahasa dalam game.

Baru pertama kali membuat pull request? Lihat [panduan](https://docs.github.com/en/pull-requests) GitHub.

## Rencana

| Status | Fitur | Fungsi |
| --- | --- | --- |
| ⏳ | Mode offline | Memutuskan koneksi dari instance aktif, mencegah orang lain bergabung dengan Anda, dan membuat bunga meleleh lebih cepat |

## Masalah

Menemukan bug? Buka issue dan sertakan:

- Model perangkat
- Versi Sky
- Tangkapan layar (jika ada)
- Log ("Log" → "Copy log")
