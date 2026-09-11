# Design Tokens

這是一個使用 Style Dictionary 建置的 design tokens package，目前主要處理從 Figma 匯出的 color tokens，並輸出 CSS、SCSS、JavaScript、TypeScript declaration 與 JSON 格式。

Package name:

```json
"@andychoucoding/design-tokens"
```

## 專案結構

目前 token source 只保留一份：

```sh
tokens/core/color.json
```

舊的 spacing、typography、shadow、border、semantic tokens 已移除。Style Dictionary 會讀取：

```js
tokens/**/*.json
```

## 匯入 Figma Tokens

預設匯入來源是：

```sh
/Users/fulishijin/Desktop/Colors.tokens.json
```

執行：

```sh
npm run import:figma
```

這會把 Figma 匯出的 DTCG token 轉成 Style Dictionary 4 可使用的格式，並直接覆寫：

```sh
tokens/core/color.json
```

如果要匯入其他檔案：

```sh
node scripts/import-figma-tokens.js /path/to/Default.tokens.json
```

注意：`import:figma` 依賴本機檔案路徑，通常只在本機更新 token 時使用。CI/CD 只會使用 repo 中已提交的 `tokens/core/color.json`。

## 建置

```sh
npm run build
```

輸出檔案：

- `build/css/variables.css`
- `build/scss/_tokens.scss`
- `build/js/tokens.js`
- `build/js/tokens.cjs`
- `build/js/tokens.d.ts`
- `build/json/tokens.json`
- `build/json/tokens.flat.json`

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

CSS:

```css
@import "@andychoucoding/design-tokens/build/css/variables.css";
```

JavaScript:

```js
import { ColorPrimary100 } from '@andychoucoding/design-tokens';
```
