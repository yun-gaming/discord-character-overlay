# Developer Guide

## Architecture

Discord Character Overlay は

Generator

Overlay Engine

を分離した構成になっています。

---

## Folder Structure

generator/

overlay/

images/

docs/

---

## Build Flow

games.json

↓

Generator

↓

Build Engine

↓

overlay.css

↓

OBS

---

## Coding Rules

CSS

- BEMを使用しない
- CSS Variablesを利用する

JavaScript

- ES6

- module形式

JSON

- UTF-8

- インデント4

---

## Commit Message

feat:

fix:

docs:

style:

refactor:

test:

chore: