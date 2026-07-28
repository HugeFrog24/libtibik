# libtibik

[English](README.md) &middot; [Deutsch](README.de.md) &middot; [Bahasa Indonesia](README.id.md) &middot; **Português (Brasil)** &middot; [Русский](README.ru.md) &middot; [简体中文](README.zh_CN.md)

<p align="center">
  <img src="icon.png" alt="Tibik icon" width="128">
</p>

Tibik (libtibik) é um mod de qualidade de vida para o Sky: Children of the Light (Sky: Filhos da Luz) no Android. Ele automatiza tarefas repetitivas, como o farm de velas, a coleta de borboletas de tinta e o teleporte entre os reinos, além de adicionar controles no jogo para a posição, a energia, os gritos e a criptografia do chat.

## Início rápido

1. Instale o Canvas, o framework que carrega mods de Sky no Android:<br>
   https://github.com/skyprotocol/canvas-distribution/releases/latest
2. Baixe o `libtibik.so` na versão mais recente:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
3. Abra o Canvas.
4. Adicione o `libtibik.so` como mod. Toque em "Adicionar mod".<br>
   _Não abra o `.so` com outro aplicativo (bloco de notas, galeria, ou descompactador); apenas o Canvas consegue carregá-lo._
5. Inicie o Sky por ele.
6. O Tibik aparece na paleta de mods do Canvas assim que o Sky estiver rodando.

## Idiomas

**Falamos a sua língua!**

<!-- coverage:start -->
| Idioma | Cobertura | Tradutor |
| --- | --- | --- |
| 🇺🇸 English | 100% (1090/1090) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇧🇷 Português (Brasil) | 100% (1090/1090) | Schemen |
| 🇩🇪 Deutsch | 94% (1020/1090) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇷🇺 Русский | 94% (1020/1090) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇻🇳 Tieng Viet | 94% (1020/1090) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇨🇳 简体中文 | 94% (1022/1090) | ciyun415, zzj123 |
| 🇬🇪 ქართული | 90% (979/1090) | [HugeFrog24](https://github.com/HugeFrog24) |
<!-- coverage:end -->

**Como trocar de idioma:**<br>
Abra a aba "Sobre" → role até "Idioma" → "Gerenciar pacotes de tradução".

**Como contribuir com uma tradução:**<br>
Baixe o modelo de strings → traduza → teste localmente (importe do dispositivo) → abra um PR (pull request). Assim que for mesclado, a tradução ficará disponível para todos através do gerenciador de idiomas no jogo.

Nunca fez um pull request? Veja o [guia](https://docs.github.com/pt/pull-requests) do GitHub.

## Planos

| Status | Recurso | O que faz |
| --- | --- | --- |
| ⏳ | Modo offline | Desconecta da instância ativa, impede que outros entrem com você e faz as flores derreterem mais rápido |

## Problemas

Encontrou um bug? Abra uma issue e informe:

- Modelo do dispositivo
- Versão do Sky
- Capturas de tela (se aplicável)
- Logs ("Log" → "Copiar log")
