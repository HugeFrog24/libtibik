# libtibik

[English](README.md) &middot; [Deutsch](README.de.md) &middot; [Bahasa Indonesia](README.id.md) &middot; **Português (Brasil)** &middot; [Русский](README.ru.md) &middot; [简体中文](README.zh_CN.md)

<p align="center">
  <img src="icon.png" alt="Tibik icon" width="128">
</p>

<p align="center">
  <img src="assets/powered-by-autism.pt-BR.svg" alt="Movido a autismo" height="28">
</p>

Tibik (libtibik) é um mod de qualidade de vida para o Sky: Children of the Light (Sky: Filhos da Luz) no Android e no Windows. Ele automatiza tarefas repetitivas, como o farm de velas, a coleta de borboletas de tinta e o teleporte entre os reinos, além de adicionar controles no jogo para a posição, a energia, os gritos e a criptografia do chat.

## <img src="assets/android.svg" alt="" height="18"> Início rápido - Android

1. Instale o Canvas, o framework que carrega mods de Sky no Android:<br>
   https://github.com/skyprotocol/canvas-distribution/releases/latest
2. Baixe o `libtibik.so` na versão mais recente:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
3. Abra o Canvas.
4. Adicione o `libtibik.so` como mod. Toque em "Adicionar mod".<br>
   _Não abra o `.so` com outro aplicativo (bloco de notas, galeria, ou descompactador); apenas o Canvas consegue carregá-lo._
5. Inicie o Sky por ele.
6. O Tibik aparece na paleta de mods do Canvas assim que o Sky estiver rodando.

## <img src="assets/windows.svg" alt="" height="18"> Início rápido - Windows

Você precisa do Sky pela Steam. No PC, o Sky só existe para Windows.

Há dois jeitos de instalar. Escolha o primeiro se estiver na dúvida.

### O jeito fácil: deixe o app fazer

O Tibik Launcher instala o mod para você e também permite removê-lo depois.

1. Acesse a versão mais recente:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
2. Baixe o arquivo cujo nome começa com `Tibik-Launcher-Setup`.
3. Abra o arquivo que você acabou de baixar.<br>
   O Windows pode mostrar uma janela azul dizendo **O Windows protegeu o seu
   computador**. Clique em **Mais informações**, depois em **Executar assim
   mesmo**. O Windows diz isso porque o app é novo, não porque tem algo errado.
4. Ele se instala sozinho e abre. O Windows não vai pedir permissão a você.
5. Ele procura a pasta do Sky sozinho. Se não encontrar, abra as
   **Configurações** e escolha a pasta manualmente.
6. Se uma barra amarela disser *Sky can't use mods yet*, clique em **Set up**.
   Leia as orientações e clique em **Set up** de novo.
7. No cartão do Tibik, clique em **Install**. Leia as orientações e clique
   em **Add**.
8. Abra o Sky pela Steam, como você sempre faz.
9. O Tibik aparece assim que você entra no jogo.

Para remover depois, abra o app e clique em **Remove** no cartão do Tibik. Você
não precisará destas instruções de novo.

### O que isso muda no seu computador

Isso coloca um arquivo chamado `winhttp.dll` na pasta do jogo. O Windows abre
esse arquivo quando o Sky inicia. É assim que o mod começa a rodar.

Alguns antivírus não gostam disso. O seu pode apagar o arquivo ou mostrar um
aviso. É só o antivírus fazendo o trabalho dele, não quer dizer que deu algo
errado. Você pode desfazer tudo (veja abaixo).

Isso funciona da mesma forma nos dois métodos. O app só faz a cópia no seu lugar.

<details>
<summary><b>Ou faça manualmente</b></summary>

Use esta opção se você preferir não abrir outro aplicativo.

1. Baixe o `Tibik-Windows.zip` na versão mais recente:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
2. Feche o Sky, caso ele esteja aberto.
3. Encontre a pasta do seu Sky. Na Steam, clique com o botão direito em
   **Sky: Children of the Light**. Escolha **Gerenciar**, depois **Explorar
   arquivos locais**. Uma pasta vai se abrir. O `Sky.exe` está dentro dela.
4. Extraia o arquivo que você baixou.
5. Copie tudo o que estiver dentro do zip para essa pasta. Mantenha as subpastas
   como estão. No fim, a pasta do Sky vai ter isto:

   ```
   Sky.exe
   winhttp.dll
   html-config.json
   htmodloader\mods\tibik\tibik.dll
   ```

6. Abra o Sky pela Steam, como você sempre faz.
7. O Tibik aparece assim que você entra no jogo.

</details>

### Como desativar o mod

Se você usou o app, abra-o e clique em **Remove**. Ele faz o resto.

Manualmente, feche o Sky e depois apague apenas este arquivo:

```
htmodloader\mods\tibik\tibik.dll
```

Depois disso, o Sky abre sem o Tibik.

Deixe o resto dessa pasta onde está. Nela ficam suas configurações, pontos de
destino (*waypoints*), destinatários de corações e partituras. Nela também fica
o `identity.json`, que é o seu login do Tibik neste PC. Se você apagar esse
arquivo sem ter uma frase de recuperação e sem nenhum outro aparelho ainda
conectado, não será possível recuperar a conta. A frase de recuperação é criada
dentro do mod, em "Sobre" → "Conta" → "Frase de recuperação". Para começar do
zero, use "Redefinir configurações" na aba "Sobre" do mod, em vez de apagar
arquivos.

Também não apague a pasta `htmodloader`. A pasta acima fica dentro dela.

O `winhttp.dll` e o `html-config.json` formam o carregador de mods (*mod loader*).
Ele só roda o Tibik, então você pode apagar esses dois também se quiser remover
o carregador por completo.

## Idiomas

**Falamos a sua língua!**

<!-- coverage:start -->
| Idioma | Cobertura | Tradutor |
| --- | --- | --- |
| 🇺🇸 English | 100% (1549/1549) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇧🇷 Português (Brasil) | 100% (1549/1549) | Zixzto |
| 🇨🇳 简体中文 | 96% (1481/1549) | ciyun415, zzj123 |
| 🇩🇪 Deutsch | 95% (1479/1549) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇷🇺 Русский | 95% (1479/1549) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇻🇳 Tieng Viet | 95% (1479/1549) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇬🇪 ქართული | 93% (1438/1549) | [HugeFrog24](https://github.com/HugeFrog24) |
<!-- coverage:end -->

**Como trocar de idioma:**<br>
Abra a aba "Sobre" → role até "Idioma" → "Gerenciar pacotes de tradução".

**Como contribuir com uma tradução:**<br>
Baixe o modelo de strings → traduza → teste localmente (importe do dispositivo) → abra um PR (pull request). Assim que for mesclado, a tradução ficará disponível para todos através do gerenciador de idiomas no jogo.

Nunca fez um pull request? Veja o [guia](https://docs.github.com/pt/pull-requests) do GitHub.

## Planos

| Status | Recurso | O que faz |
| --- | --- | --- |
| ⏳ | Ações de amizade com desconhecidos | Ofereça abraços, toca aí e outras ações de amizade a jogadores que ainda não são seus amigos. Isso já funciona com quem já é seu amigo. |

## Problemas

Encontrou um bug? Abra uma issue e informe:

- Modelo do dispositivo
- Versão do Sky
- Capturas de tela (se aplicável)
- Logs ("Log" → "Copiar log")
