# Changelog

## [Unreleased]
### Added
- Company Theme：以 `@andychoucoding/tokens` 為基礎的 MUI theme（`src/theme/theme.ts`、`src/theme/palette.ts`）
- MUI Inputs 分類薄封裝：Autocomplete、Fab、IconButton、Radio（+ RadioGroup）、Rating、Slider、ToggleButton（+ ToggleButtonGroup）
- 9 個 Company Component（MUI implementation layer，封裝後以 Company Component API 對外暴露）：
  - Button
  - Input
  - Select
  - Checkbox
  - Switch
  - Dialog
  - Table
  - Tabs
  - Tooltip
- 建置設定：`tsup` 輸出 ESM + CJS + `.d.ts`（`dist/`）

### Fixed

### Changed
- Palette：primary `main` 改用 800 階（原本 500），`light`/`dark` 同步調整為 300/900，維持 light < main < dark 的深淺順序
- **Breaking**：`Button` 的 `variant` 選項 `ghost` 改名為 `text`（對齊 MUI 底層的 `text` variant 語彙）

### Known limitations
- 尚未正式發布到 GitHub Packages（`publishConfig.registry` 已設定，尚未 release）
- 尚未建立元件測試 / visual regression 驗證
