# Changelog

All notable changes to the `UI_LIB` monorepo as a whole are documented here.
Package-level details live in each package's own CHANGELOG
(`packages/tokens/CHANGELOG.md`, `packages/ui/CHANGELOG.md`).

## [Unreleased]
### Added
### Fixed
### Changed

## [v1.1.0] - 2026-09-17
### Added
- `packages/ui`（`@andychoucoding/ui`）：Company Theme（MUI）+ 45 個元件，涵蓋 MUI Inputs / Data Display / Feedback / Surfaces / Navigation / Layout 六大分類，以及 MUI X Community（免費）的 DataGrid、DatePicker/TimePicker/DateTimePicker——完整清單見 [`packages/ui/CHANGELOG.md`](packages/ui/CHANGELOG.md)
- `apps/storybook`：對應每個元件的 Storybook stories，含 Colors foundation story 與 Figma 連結預留欄位（`figma-links.ts`）
- Root `package.json` 接上 npm workspaces（`packages/*`、`apps/*`），monorepo 可統一安裝與建置

### Fixed

### Changed
- `packages/ui`：primary palette `main` 改用 800 階（原本 500）
- `packages/ui`：`Button` 的 `variant` 選項 `ghost` 改名為 `text`（breaking change）

## [v1.0.0] - 2026-09-14
### Added
- 初始化 `UI_LIB` monorepo 結構（`packages/tokens`）
- 發布 `@andychoucoding/tokens@1.0.0`：Style Dictionary pipeline、Primitive/Semantic design tokens、Figma 匯入腳本

詳見 [`packages/tokens/CHANGELOG.md`](packages/tokens/CHANGELOG.md)。
