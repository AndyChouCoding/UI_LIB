# Changelog

## [Unreleased]
### Added
- Company Theme：以 `@andychoucoding/tokens` 為基礎的 MUI theme（`src/theme/theme.ts`、`src/theme/palette.ts`）
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

### Known limitations
- 尚未正式發布到 GitHub Packages（`publishConfig.registry` 已設定，尚未 release）
- 尚未建立元件測試 / visual regression 驗證
