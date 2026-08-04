# libtibik

[English](README.md) &middot; [Deutsch](README.de.md) &middot; [Bahasa Indonesia](README.id.md) &middot; [Português (Brasil)](README.pt_BR.md) &middot; **Русский** &middot; [简体中文](README.zh_CN.md)

<p align="center">
  <img src="icon.png" alt="Tibik icon" width="128">
</p>

Тибик (libtibik, либтибик) - удобный мод для Sky: Children of the Light (Sky: Дети света) на Android. Он берёт на себя рутину: автофарм свечей, сбор бабочек-красителей и телепорт по мирам, а также добавляет внутриигровые элементы управления позицией, энергией, криками и шифрованием чата.

## Быстрый старт

1. Установите Canvas - фреймворк, который загружает моды для Sky на Android:<br>
   https://github.com/skyprotocol/canvas-distribution/releases/latest
2. Скачайте `libtibik.so` из последнего релиза:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
3. Откройте Canvas.
4. Добавьте `libtibik.so` как мод. Нажмите «Добавить мод».<br>
   _Не открывайте `.so` другими приложениями (блокнот, галерея, архиватор): загрузить его может только Canvas._
5. Запустите Sky оттуда.
6. Тибик появится в палитре модов Canvas, как только Sky запустится.

## Языки

**Мы говорим на вашем языке!**

<!-- coverage:start -->
| Язык | Покрытие | Переводчик |
| --- | --- | --- |
| 🇺🇸 English | 100% (1132/1132) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇧🇷 Português (Brasil) | 100% (1132/1132) | Schemen |
| 🇩🇪 Deutsch | 94% (1062/1132) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇷🇺 Русский | 94% (1062/1132) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇻🇳 Tieng Viet | 94% (1062/1132) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇨🇳 简体中文 | 94% (1064/1132) | ciyun415, zzj123 |
| 🇬🇪 ქართული | 90% (1021/1132) | [HugeFrog24](https://github.com/HugeFrog24) |
<!-- coverage:end -->

**Как переключить язык:**<br>
Откройте вкладку «О моде» → пролистайте до «Язык» → «Управление переводами».

**Как добавить перевод:**<br>
Возьмите шаблон строк → переведите → протестируйте локально (импорт с устройства) → откройте PR (pull request). После слияния перевод доедет до всех через внутриигровой менеджер языков.

Впервые работаете с pull request? Смотрите [руководство](https://docs.github.com/ru/pull-requests) GitHub.

## Планы

| Статус | Функция | Описание |
| --- | --- | --- |
| ⏳ | Офлайн-режим | Отключается от активного инстанса, не даёт другим присоединиться к вам и ускоряет «таяние» цветов |

## Баг-репорты

Нашли баг? Откройте issue и укажите:

- Модель устройства
- Версия Sky
- Скриншоты (если есть)
- Логи («Журнал» → «Скопировать журнал»)
