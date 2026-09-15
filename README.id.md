# libtibik

[English](README.md) &middot; [Deutsch](README.de.md) &middot; **Bahasa Indonesia** &middot; [Português (Brasil)](README.pt_BR.md) &middot; [Русский](README.ru.md) &middot; [简体中文](README.zh_CN.md)

<p align="center">
  <img src="icon.png" alt="Tibik icon" width="128">
</p>

Tibik (libtibik) adalah mod quality-of-life untuk Sky: Children of the Light (Sky: Anak-Anak Cahaya) di Android dan Windows. Mod ini mengotomatiskan bagian-bagian yang berulang: farming lilin, mengumpulkan kupu-kupu pewarna, dan teleport antar dunia, serta menambahkan kontrol dalam game untuk posisi, energi, teriakan, dan enkripsi obrolan.

## Mulai cepat - Android

1. Pasang Canvas, framework yang memuat mod Sky di Android:<br>
   https://github.com/skyprotocol/canvas-distribution/releases/latest
2. Unduh `libtibik.so` dari rilis terbaru:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
3. Buka Canvas.
4. Tambahkan `libtibik.so` sebagai mod. Ketuk "Tambah mod".<br>
   _Jangan buka `.so` dengan aplikasi lain (notepad, galeri, pengarsip); hanya Canvas yang bisa memuatnya._
5. Jalankan Sky dari sana.
6. Tibik muncul di palet mod Canvas begitu Sky berjalan.

## Mulai cepat - Windows

Kamu butuh Sky dari Steam. Sky di PC hanya ada untuk Windows.

Ada dua cara. Pilih yang pertama kalau kamu ragu.

### Cara mudah: biar aplikasinya yang kerja

Tibik Launcher memasang mod untuk kamu, dan bisa mencabutnya lagi nanti.

1. Buka rilis terbaru:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
2. Unduh file yang namanya diawali `Tibik-Launcher-Setup`.
3. Buka file yang baru kamu unduh.<br>
   Windows mungkin menampilkan jendela biru bertuliskan **Windows protected your
   PC**. Klik **More info**, lalu **Run anyway**. Windows bilang begitu karena
   aplikasinya masih baru. Bukan karena ada yang salah.
4. Aplikasinya memasang dirinya sendiri lalu terbuka. Windows tidak meminta izin
   apa pun.
5. Aplikasinya mencari folder Sky kamu sendiri. Kalau tidak ketemu, buka
   **Settings** dan pilih foldernya sendiri.
6. Kalau ada bar kuning bertuliskan *Sky can't use mods yet*, klik **Set up**.
   Baca yang muncul, lalu klik **Set up** sekali lagi.
7. Di kartu Tibik, klik **Install**. Baca yang muncul, lalu klik **Add**.
8. Jalankan Sky dari Steam, seperti biasa.
9. Tibik muncul begitu kamu masuk ke dalam game.

Untuk mencabutnya nanti, buka aplikasinya dan klik **Remove** di kartu Tibik.
Kamu tidak perlu panduan ini lagi.

### Apa yang berubah di komputer kamu

Ini menaruh file bernama `winhttp.dll` di sebelah game. Windows membuka file itu
saat Sky mulai. Begitulah mod bisa masuk.

Beberapa program antivirus tidak suka hal ini. Antivirus kamu mungkin menghapus
file itu, atau menampilkan peringatan. Itu antivirus sedang bekerja. Itu bukan
tanda ada yang salah. Kamu bisa membatalkan semuanya - lihat di bawah.

Ini sama saja di kedua cara. Aplikasinya cuma menyalinkan file untuk kamu.

### Atau lakukan sendiri

Pakai cara ini kalau kamu tidak mau menjalankan aplikasi lain.

1. Unduh `Tibik-Windows.zip` dari rilis terbaru:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
2. Tutup Sky kalau sedang terbuka.
3. Cari folder Sky kamu. Di Steam, klik kanan **Sky: Children of the Light**.
   Pilih **Manage**, lalu **Browse local files**. Sebuah folder terbuka.
   `Sky.exe` ada di dalamnya.
4. Buka zip yang tadi kamu unduh.
5. Salin semua isi zip ke folder itu. Biarkan folder-folder kecil di dalamnya
   apa adanya. Setelah selesai, folder Sky kamu berisi ini:

   ```
   Sky.exe
   winhttp.dll
   html-config.json
   htmodloader\mods\tibik\tibik.dll
   ```

6. Jalankan Sky dari Steam, seperti biasa.
7. Tibik muncul begitu kamu masuk ke dalam game.

### Mematikannya lagi

Kalau kamu pakai aplikasinya, buka lalu klik **Remove**. Sisanya diurus dia.

Kalau sendiri, hapus Tibik saja dengan menghapus satu folder ini:

```
htmodloader\mods\tibik
```

Jangan hapus seluruh folder `htmodloader`, kecuali kamu memang mau. Mod lain ada
di sana juga. Begitu juga pengaturan mereka yang tersimpan.

`winhttp.dll` dan `html-config.json` adalah bagian yang membuat mod bisa dimuat.
Mod kamu yang lain memakai keduanya. Menghapus dua file itu mematikan semua mod
kamu, bukan cuma yang ini. Lakukan hanya kalau kamu tidak mau mod sama sekali.

## Bahasa

**Kami berbicara bahasa Anda!**

<!-- coverage:start -->
| Bahasa | Cakupan | Penerjemah |
| --- | --- | --- |
| 🇺🇸 English | 100% (1398/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇧🇷 Português (Brasil) | 100% (1398/1398) | Zixzto |
| 🇩🇪 Deutsch | 95% (1328/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇷🇺 Русский | 95% (1328/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇻🇳 Tieng Viet | 95% (1328/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇨🇳 简体中文 | 95% (1330/1398) | ciyun415, zzj123 |
| 🇬🇪 ქართული | 92% (1287/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
<!-- coverage:end -->

**Cara mengganti bahasa:**<br>
Buka tab "About" → gulir ke "Language" → "Manage translation packs".

**Cara menyumbang terjemahan:**<br>
Ambil templat string → terjemahkan → uji secara lokal (impor dari perangkat) → buka PR (pull request). Setelah digabungkan (merge), terjemahan akan tersedia bagi semua orang lewat pengelola bahasa dalam game.

Baru pertama kali membuat pull request? Lihat [panduan](https://docs.github.com/en/pull-requests) GitHub.

## Rencana

| Status | Fitur | Fungsi |
| --- | --- | --- |
| ⏳ | Aksi pertemanan dengan orang asing | Tawarkan pelukan, tos, dan aksi pertemanan lainnya kepada pemain yang belum menjadi teman Anda. Dengan teman yang sudah ada, semua ini sudah berfungsi |

## Masalah

Menemukan bug? Buka issue dan sertakan:

- Model perangkat
- Versi Sky
- Tangkapan layar (jika ada)
- Log ("Log" → "Copy log")
