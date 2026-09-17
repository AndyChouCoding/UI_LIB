# Changelog

All notable changes to the `UI_LIB` monorepo as a whole are documented here.
Package-level details live in each package's own CHANGELOG
(`packages/tokens/CHANGELOG.md`).

## [Unreleased]
### Added
- `packages/ui`（`@andychoucoding/ui`）：Company Theme（MUI）+ 9 個元件 — Button / Input / Select / Checkbox / Switch / Dialog / Table / Tabs / Tooltip
- `apps/storybook`：對應 9 個元件的 Storybook stories，含 Colors foundation story 與 Figma 連結預留欄位（`figma-links.ts`）
- Root `package.json` 接上 npm workspaces（`packages/*`、`apps/*`），monorepo 可統一安裝與建置
- `apps/storybook`：Button story 加上 startIcon / endIcon 的可選 icon 控制項（`@mui/icons-material`）
- `packages/ui` + `apps/storybook`：補齊 MUI Inputs 分類元件——Autocomplete、Fab、IconButton、Radio（+ RadioGroup）、Rating、Slider、ToggleButton（+ ToggleButtonGroup），各附 Storybook story
- `packages/ui` + `apps/storybook`：補齊 MUI Data Display 分類元件——Avatar（+ AvatarGroup）、Badge、Chip、Divider、List 系列、Typography，各附 Storybook story

### Fixed

### Changed
- `packages/ui`：primary palette `main` 改用 800 階（原本 500）
- `packages/ui`：`Button` 的 `variant` 選項 `ghost` 改名為 `text`（breaking change）

## [v1.0.0] - 2026-09-14
### Added
- 初始化 `UI_LIB` monorepo 結構（`packages/tokens`）
- 發布 `@andychoucoding/tokens@1.0.0`：Style Dictionary pipeline、Primitive/Semantic design tokens、Figma 匯入腳本

詳見 [`packages/tokens/CHANGELOG.md`](packages/tokens/CHANGELOG.md)。
