# libtibik

[English](README.md) &middot; [Deutsch](README.de.md) &middot; [Bahasa Indonesia](README.id.md) &middot; **Português (Brasil)** &middot; [Русский](README.ru.md) &middot; [简体中文](README.zh_CN.md)

<p align="center">
  <img src="icon.png" alt="Tibik icon" width="128">
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

Tem dois jeitos. Escolha o primeiro se estiver na dúvida.

### O jeito fácil: deixe o app fazer

O Tibik Launcher coloca o mod para você, e tira depois também.

1. Vá até a versão mais recente:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
2. Baixe o arquivo cujo nome começa com `Tibik-Launcher-Setup`.
3. Abra o arquivo que você acabou de baixar.<br>
   O Windows pode mostrar uma janela azul dizendo **O Windows protegeu o seu
   computador**. Clique em **Mais informações**, depois em **Executar assim
   mesmo**. O Windows diz isso porque o app é novo. Não é sinal de problema.
4. Ele se instala sozinho e abre. O Windows não pede permissão para você.
5. Ele procura a pasta do seu Sky sozinho. Se não achar, abra as
   **Configurações** e escolha a pasta você mesmo.
6. Se uma barra amarela disser *Sky can't use mods yet*, clique em **Set up**.
   Leia o que aparecer, depois clique em **Set up** de novo.
7. No cartão do Tibik, clique em **Install**. Leia o que aparecer, depois clique
   em **Add**.
8. Abra o Sky pela Steam, do jeito que você sempre faz.
9. O Tibik aparece assim que você entra no jogo.

Para tirar depois, abra o app e clique em **Remove** no cartão do Tibik. Você
não precisa destas instruções de novo.

### O que isso muda no seu computador

Isso coloca um arquivo chamado `winhttp.dll` ao lado do jogo. O Windows abre
esse arquivo quando o Sky começa. É assim que o mod entra.

Alguns antivírus não gostam disso. O seu pode apagar o arquivo, ou mostrar um
aviso. É o antivírus fazendo o trabalho dele. Não quer dizer que deu algo
errado. Você pode desfazer tudo - veja abaixo.

Isso é igual nos dois jeitos. O app só faz a cópia no seu lugar.

<details>
<summary><b>Ou fazendo na mão</b></summary>

Use este jeito se você preferir não abrir outro app.

1. Baixe o `Tibik-Windows.zip` na versão mais recente:<br>
   https://github.com/HugeFrog24/libtibik/releases/latest
2. Feche o Sky, se ele estiver aberto.
3. Ache a pasta do seu Sky. Na Steam, clique com o botão direito em
   **Sky: Children of the Light**. Escolha **Gerenciar**, depois **Procurar
   arquivos locais**. Uma pasta abre. O `Sky.exe` está dentro dela.
4. Descompacte o arquivo que você baixou.
5. Copie tudo de dentro do zip para essa pasta. Deixe as pastas menores como
   elas estão. No fim, a sua pasta do Sky vai ter isto:

   ```
   Sky.exe
   winhttp.dll
   html-config.json
   htmodloader\mods\tibik\tibik.dll
   ```

6. Abra o Sky pela Steam, do jeito que você sempre faz.
7. O Tibik aparece assim que você entra no jogo.

</details>

### Como desligar de novo

Se você usou o app, abra ele e clique em **Remove**. Ele faz o resto.

Na mão, feche o Sky e depois apague só este arquivo:

```
htmodloader\mods\tibik\tibik.dll
```

Depois disso, o Sky abre sem o Tibik.

Deixe o resto dessa pasta onde está. Nela ficam as suas configurações, os seus
pontos de destino, os seus destinatários de corações e as suas partituras. Nela
também fica o `identity.json`, que é o seu login do Tibik neste PC. Se você
apagar esse arquivo sem ter uma frase de recuperação, e sem nenhum outro
aparelho ainda conectado, a conta não tem mais volta. A frase de recuperação é
criada dentro do mod, em "Sobre" → "Conta" → "Frase de recuperação". Para
começar do zero, use "Redefinir configurações" na aba "Sobre" do mod, em vez de
apagar arquivos.

Também não apague a pasta `htmodloader`. A pasta acima fica dentro dela.

O `winhttp.dll` e o `html-config.json` são o carregador de mods (mod loader). Ele
só roda o Tibik, então você pode apagar esses dois também, se quiser tirar o
carregador.

## Idiomas

**Falamos a sua língua!**

<!-- coverage:start -->
| Idioma | Cobertura | Tradutor |
| --- | --- | --- |
| 🇺🇸 English | 100% (1398/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇧🇷 Português (Brasil) | 100% (1398/1398) | Zixzto |
| 🇩🇪 Deutsch | 95% (1328/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇷🇺 Русский | 95% (1328/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇻🇳 Tieng Viet | 95% (1328/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
| 🇨🇳 简体中文 | 95% (1330/1398) | ciyun415, zzj123 |
| 🇬🇪 ქართული | 92% (1287/1398) | [HugeFrog24](https://github.com/HugeFrog24) |
<!-- coverage:end -->

**Como trocar de idioma:**<br>
Abra a aba "Sobre" → role até "Idioma" → "Gerenciar pacotes de tradução".

**Como contribuir com uma tradução:**<br>
Baixe o modelo de strings → traduza → teste localmente (importe do dispositivo) → abra um PR (pull request). Assim que for mesclado, a tradução ficará disponível para todos através do gerenciador de idiomas no jogo.

Nunca fez um pull request? Veja o [guia](https://docs.github.com/pt/pull-requests) do GitHub.

## Planos

| Status | Recurso | O que faz |
| --- | --- | --- |
| ⏳ | Ações de amizade com desconhecidos | Ofereça abraços, toca aqui e outras ações de amizade a jogadores que ainda não são seus amigos. Com amigos existentes, elas já funcionam |

## Problemas

Encontrou um bug? Abra uma issue e informe:

- Modelo do dispositivo
- Versão do Sky
- Capturas de tela (se aplicável)
- Logs ("Log" → "Copiar log")
