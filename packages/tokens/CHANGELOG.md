# Changelog

## [Unreleased]
### Added
### Fixed
### Changed

## [v1.0.0] - 2026-09-14
### Added
- Style Dictionary 基礎建設，輸出 CSS / SCSS / JS（ESM + CJS）/ TypeScript 型別 / JSON 五種格式
- Primitive tokens：color（primary / secondary / neutral / success / warning / error / info 九階色階）
- Semantic tokens：`background.*`，優先以 alias 指向對應 primitive（`background.secondary/tertiary/inverse`），無對應色階的維持字面值（`background.primary/overlay-light/surface/surface-raised`）
- Figma 匯入腳本（`scripts/import-figma-tokens.js`）：將 DTCG 匯出檔自動分流為 primitive 與 semantic 兩份 token 檔
- npm scripts：`build`、`watch`、`import:figma`、`prepare:package`
- 併入 `UI_LIB` monorepo（`packages/tokens`），為之後的 `packages/ui`（Company MUI Theme + Components）鋪路

### Changed
- Package 更名：`@andychoucoding/design-tokens` → `@andychoucoding/tokens`
- 建置產出目錄：`build/` → `dist/`
- 移除先前實驗性的多品牌 / light-dark 分支結構（`tokens/semantic/<brand>/<theme>.json`），改回 Primitive → Semantic 兩層，對齊公司 design system 架構文件

### Known limitations
- Semantic 層目前只有 `background.*`；`text.*` / `border.*` / `action.*` / `status.*` 尚未建立，待 Figma 端補上對應 variable 後再擴充
- Figma 匯出的 `bg.*` 是展開後的 hex 值、不是 variable alias，`import:figma` 目前無法自動偵測 alias 關係，重新匯入會覆寫掉手動補上的 reference
