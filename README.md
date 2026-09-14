# Design Tokens

這是一個使用 Style Dictionary 建置的 design tokens package，目前主要處理從 Figma 匯出的 color tokens，並輸出 CSS、SCSS、JavaScript、TypeScript declaration 與 JSON 格式。支援多品牌（brand）與多主題（light/dark）架構，可依 `data-brand` / `data-theme` 屬性在執行期切換。

Package name:

```json
"@andychoucoding/design-tokens"
```

## 專案結構

Token 分成兩層：

```sh
tokens/
  core/
    color.json          # 品牌/主題無關的原子色票（primary/secondary/neutral/success/warning/error/info）
  semantic/
    primary/             # brand 名稱
      light.json          # 該 brand 在 light 主題下的語意色彩（bg.*）
      # dark.json         # 尚未提供實際色值，之後補上即可自動被建置腳本抓到
```

Style Dictionary 會依 `tokens/semantic/<brand>/` 底下實際存在的 brand 目錄與 theme 檔案，自動組合建置——新增 brand 或 theme 只要照這個資料夾規則加檔案，不用改建置腳本。

## 匯入 Figma Tokens

預設匯入來源是：

```sh
/Users/fulishijin/Desktop/Colors.tokens.json
```

執行：

```sh
npm run import:figma
```

這會把 Figma 匯出的 DTCG token 轉成 Style Dictionary 4 可使用的格式，並自動分流：

- 除了 `bg` 以外的群組（primary/secondary/neutral/success/warning/error/info）→ 覆寫 `tokens/core/color.json`
- `bg` 群組 → 覆寫 `tokens/semantic/primary/light.json`

如果要匯入其他檔案：

```sh
node scripts/import-figma-tokens.js /path/to/Default.tokens.json
```

目前 brand/theme 寫死在 `scripts/import-figma-tokens.js` 的 `BRAND`/`THEME` 常數（`primary`/`light`），之後有第二個 brand 或 dark 主題時，改成從參數讀取即可。

注意：`import:figma` 依賴本機檔案路徑，通常只在本機更新 token 時使用。CI/CD 只會使用 repo 中已提交的 token 檔案。

## 建置

```sh
npm run build
```

`scripts/build-tokens.js` 會掃描 `tokens/semantic/` 底下的每個 brand 目錄與每個 theme 檔案，各自組一份 Style Dictionary 設定（`core` + 該 brand/theme 的 `semantic`）並建置，輸出到 `build/<platform>/<brand>/<theme>/`。

目前唯一的組合是 `primary/light`，輸出檔案：

- `build/css/primary/light/variables.css`（CSS variables，scope 在 `[data-brand="primary"][data-theme="light"]`）
- `build/scss/primary/light/_tokens.scss`
- `build/js/primary/light/tokens.js`
- `build/js/primary/light/tokens.cjs`
- `build/js/primary/light/tokens.d.ts`
- `build/json/primary/light/tokens.json`
- `build/json/primary/light/tokens.flat.json`

## 準備 Package

```sh
npm run prepare:package
```

這會先執行 `import:figma`，再執行 `build`。適合本機更新 Figma token 後使用。

如果只是驗證目前 repo 內的 token：

```sh
npm ci
npm run build
npm pack --dry-run
```

## CI/CD

目前有兩個 GitHub Actions workflows：

- `CI`: push 到 `main`、`develop` 或建立 pull request 時執行。
- `Publish Package`: 建立 GitHub Release 並發布時執行。

CI 會執行：

```sh
npm ci
npm run build
npm pack --dry-run
```

Release publish 會執行：

```sh
npm ci
npm run build
npm publish
```

## 發布到 GitHub Packages

第一次手動發布前，先登入 GitHub Packages：

```sh
npm login --scope=@andychoucoding --auth-type=legacy --registry=https://npm.pkg.github.com
```

手動發布：

```sh
npm publish
```

Package 已設定：

```json
"publishConfig": {
  "registry": "https://npm.pkg.github.com"
}
```

GitHub Packages 要求 npm package 使用 scoped package name，且 scope/name 必須是小寫。

## 使用方式

安裝：

```sh
npm install @andychoucoding/design-tokens
```

CSS（預設 brand/theme：`primary`/`light`）：

```css
@import "@andychoucoding/design-tokens/build/css/primary/light/variables.css";
```

執行期切換時，在根節點加上對應屬性即可套用該 brand/theme 的變數：

```html
<html data-brand="primary" data-theme="light">
```

JavaScript：

```js
import { ColorBgPrimary } from '@andychoucoding/design-tokens';
```

## 已知限制 / 待辦

- 目前只有 `primary` 一個 brand、`light` 一個 theme 有實際色值。`dark.json` 尚未建立——待設計端提供 dark 色值後，在 `tokens/semantic/primary/dark.json` 加檔案即可被建置腳本自動抓到，不需改動 pipeline。
- 多 brand 也是同樣模式：`tokens/semantic/<新brand>/light.json`（與 `dark.json`）。
