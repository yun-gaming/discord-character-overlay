# Discord Character Overlay

> A CSS Generator for displaying game character overlays in Discord StreamKit + OBS.

Discord Character Overlay は、Discord StreamKit Overlay を利用して、
OBS上にゲームキャラクターの立ち絵を表示するためのCSS生成ツールです。

CSSを直接編集することなく、
Generatorから設定するだけでオーバーレイを作成できます。

---

## Features

- 🎮 ゲームごとのキャラクター管理
- 👤 Discord UserIDによるプレイヤー管理
- 🖼 GitHub RAW画像の自動参照
- 🎨 OBS向けCSS自動生成
- ⚡ Discord StreamKit Overlay対応
- 📦 Pack方式によるゲーム追加（開発中）
- 💾 Project保存・読込（開発予定）

---

## Supported Games

| Game | Status |
|-------|--------|
| Feign | ✅ |
| Among Us | 🚧 |
| More Games | 🔜 |

---

## Screenshots

### Generator

（Version1.0 リリース時に画像追加）

### OBS Overlay

（Version1.0 リリース時に画像追加）

---

## Quick Start

### 1. Generatorを開く

GitHub Pagesへアクセスします。

（公開後URLを記載）

---

### 2. ゲームを選択

使用するゲームを選択します。

---

### 3. キャラクターを選択

ゲームごとのキャラクターを選択します。

---

### 4. Discord UserIDを入力

DiscordでコピーしたUserIDを入力します。

---

### 5. CSS生成

「Generate CSS」をクリックします。

---

### 6. OBSへ貼り付け

生成された overlay.css を
Discord StreamKit Overlay のCSS欄へ貼り付けます。

---

## Folder Structure

```text
discord-character-overlay/

├── generator/
│
├── overlay/
│
├── images/
│
├── docs/
│
├── README.md
├── LICENSE
├── CHANGELOG.md
└── .gitignore
```

---

## Development Roadmap

### Version 1

- CSS Generator
- Overlay Engine
- OBS対応

### Version 2

- UI改善
- ライブプレビュー
- テーマ追加

### Version 3

- Game Pack対応
- Pack Manager

### Version 4

- Project保存
- JSON Import / Export

### Version 5

- Package System
- Online Pack Browser

---

## Philosophy

このプロジェクトは、

**「CSSを書けない人でもゲーム立ち絵オーバーレイを作れること」**

を目標としています。

Generatorを操作するだけで、
誰でも簡単にOBS用オーバーレイを作成できることを目指しています。

---

## Development Policy

本プロジェクトでは以下の設計方針を採用しています。

- Generator と Overlay Engine の分離
- モジュール化されたCSS構成
- GitHub RAWによる画像管理
- JSONベースの設定管理
- ゲーム追加はPack方式を採用

---

## Documentation

詳細な資料は docs フォルダを参照してください。

- Installation Guide
- User Guide
- Developer Guide
- Roadmap
- FAQ

---

## License

This project is released under the MIT License.

---

## Author

Created by **YUN**

Architecture & Development Support:
OpenAI ChatGPT

---