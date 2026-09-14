# @andychoucoding/tokens

Design token package for the company design system, built with Style Dictionary. Tokens are layered as **Primitive → Semantic**, following the company design-system architecture (`Figma Variables → Design Tokens → Style Dictionary → @andychoucoding/tokens → Company Theme → MUI → Company Components`).

## 專案結構

```sh
tokens/
  primitive/
    color.tokens.json    # 品牌無關的原子色階：primary/secondary/neutral/success/warning/error/info
  semantic/
    color.tokens.json    # 依用途命名的語意色彩：background.*，優先 alias 指向 primitive
```

Semantic token 的原則是「不重複硬編色碼」——`background.secondary` 這類值會 alias 指向對應的 primitive（例如 `{color.neutral.100.value}`），而不是重新寫一次 hex。

**已知限制**：`background.primary` / `overlay-light` / `surface` / `surface-raised` 目前還是字面值，因為現有 primitive 色階裡沒有對應的近白色階（`neutral` 最淺只到 `#f5f6f8`）。之後 primitive 補上對應色階、或 Figma 端把這些 semantic variable 設成 alias，就能替換成 reference。

## 匯入 Figma Tokens

```sh
npm run import:figma
```

預設讀取 `/Users/fulishijin/Desktop/Colors.tokens.json`，把非 `bg` 的群組寫入 `tokens/primitive/color.tokens.json`，`bg` 群組寫入 `tokens/semantic/color.tokens.json`（並改名為 `background`）。

**注意**：Figma 目前是把 `bg.*` 匯出成完全展開的 hex 值，不是 variable alias，所以這支 script 沒辦法自動判斷哪些 semantic 值該 alias 回 primitive——重新執行 `import:figma` 會把 `tokens/semantic/color.tokens.json` 裡手動補上的 alias 覆寫成字面值，需要重新手動比對補回。真正的解法是在 Figma Variables 面板把 semantic variable 設成指向 primitive variable 的 alias，匯出時才會保留這層關係。

如果要匯入其他檔案：

```sh
node scripts/import-figma-tokens.js /path/to/Default.tokens.json
```

## 建置

```sh
npm run build
```

輸出到 `dist/`：

- `dist/css/variables.css`
- `dist/scss/_tokens.scss`
- `dist/js/tokens.js`（ESM）
- `dist/js/tokens.cjs`（CJS）
- `dist/js/tokens.d.ts`
- `dist/json/tokens.json`
- `dist/json/tokens.flat.json`

## 準備 Package

```sh
npm run prepare:package
```

先執行 `import:figma`，再執行 `build`。適合本機更新 Figma token 後使用。

如果只是驗證目前 repo 內的 token：

```sh
npm ci
npm run build
npm pack --dry-run
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

## 使用方式

安裝：

```sh
npm install @andychoucoding/tokens
```

CSS：

```css
@import "@andychoucoding/tokens/dist/css/variables.css";
```

JavaScript：

```js
import { ColorBackgroundPrimary } from '@andychoucoding/tokens';
```

## Roadmap

跟 monorepo 根目錄規劃一致，這個 package 目前對應架構文件的 **Phase 1（Color PoC）+ Phase 2（Primitive/Semantic 分層，發布 v1.0.0）**。之後會擴充：

- Typography / Spacing / Radius / Shadow 等其他 primitive 類別
- Semantic 層補齊 `text.*` / `border.*` / `action.*` / `status.*`
- Component token 層（例如 `button.primary.background`）

這些之後才會由 `packages/ui`（Company MUI Theme + Components）消費。
