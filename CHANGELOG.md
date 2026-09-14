# Changelog

## [Unreleased]
### Added
### Fixed
### Changed

## [v1.0.0] - 2026-09-14
### Added
- Style Dictionary 基礎建設，輸出 CSS / SCSS / JS（ESM + CJS）/ TypeScript 型別 / JSON 五種格式
- Core tokens：color（primary / secondary / neutral / success / warning / error / info 九階色階）
- Semantic tokens：`primary` 品牌、`light` 主題的 `bg.*` 語意色彩層
- 多品牌 / 多主題建置 pipeline（`scripts/build-tokens.js`）：自動掃描 `tokens/semantic/<brand>/<theme>.json`，依組合各自建置輸出到 `build/<platform>/<brand>/<theme>/`
- CSS 輸出以 `[data-brand][data-theme]` 屬性選擇器 scope，支援執行期切換品牌/主題
- Figma 匯入腳本（`scripts/import-figma-tokens.js`）：將 DTCG 匯出檔自動分流為 core（原子色票）與 semantic（`bg.*`）兩份 token 檔
- npm scripts：`build`、`watch`、`import:figma`、`prepare:package`
- GitHub Actions：CI（build 驗證）與 Publish Package（GitHub Release 觸發發布到 GitHub Packages）
- iOS platform 擴充預留位置（config.js 註解）

### Known limitations
- 僅 `primary` 品牌、`light` 主題有實際色值；`dark` 主題尚待設計端提供色值後再補上
