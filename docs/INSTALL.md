# Installation Guide

## Requirements

Discord Character Overlay を利用するには以下が必要です。

- Windows 10 / 11
- OBS Studio（最新版）
- Discord
- Google Chrome または Microsoft Edge
- インターネット接続（GitHub RAW画像を利用する場合）

---

## Download

GitHubのReleaseページから最新版をダウンロードしてください。

または

RepositoryをCloneしてください。

```bash
git clone https://github.com/yun-gaming/discord-character-overlay.git
```

---

## Folder Structure

```text
discord-character-overlay/

generator/
overlay/
images/
docs/
```

---

## Setup

### ① Generatorを開く

generator/index.html

をブラウザで開きます。

---

### ② ゲームを選択

対応ゲームを選択します。

---

### ③ プレイヤー設定

Discord UserID

キャラクター

カラー

を設定します。

---

### ④ Generate CSS

Generateボタンを押します。

---

### ⑤ OBSへ貼り付け

生成されたCSSを

Discord StreamKit Overlay

のCustom CSSへ貼り付けます。

---

## Update

GitHubから最新版へ更新してください。

imagesフォルダはそのまま利用できます。