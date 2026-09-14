# @andychoucoding/ui

Company UI component library. MUI is the implementation layer; products consume the Company Component API from this package instead of importing MUI directly.

```
Product
  ↓
@andychoucoding/ui
  ↓
MUI (pinned to 9.4.0)
```

## 元件

目前建了架構文件 Phase 4 列的 9 個元件：`Button` / `Input` / `Select` / `Checkbox` / `Switch` / `Dialog` / `Table` / `Tabs` / `Tooltip`。

- **Button** 是完整範例：`variant`（`primary` / `secondary` / `danger` / `ghost`）由 Company 決定要對應 MUI 的哪個 `variant` + `color` 組合（見 `src/Button/Button.tsx`），product 端不需要知道 MUI 的 contained/outlined/text 語彙。
- 其餘 8 個目前是**薄封裝**（直接轉發到對應的 MUI 元件），還沒有 Company 專屬的 variant/size/state 系統——doc 裡只有 Button 給了明確規格，其他元件的 API 等實際 product 需求或設計稿出來後再擴充，避免先發明一套沒人用得到的規格。

## Company Theme

`src/theme/palette.ts` 把 `@andychoucoding/tokens` 的 primitive 色階映射成 MUI 的 `palette`（500 當 `main`、300 當 `light`、700 當 `dark`，這是暫定慣例，等 `action.*` semantic token 出現後應該取代這層映射）。`text.*` 目前直接引用 neutral primitive，因為還沒有 `text.*` semantic token。Typography / spacing / shape 維持 MUI 預設，等對應的 primitive token 出現再串。

## 開發

```sh
npm run build   # tsup 打包成 ESM + CJS + .d.ts 到 dist/
```

## 使用方式

```tsx
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme, Button } from '@andychoucoding/ui';
import '@andychoucoding/tokens/dist/css/variables.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="primary">Save</Button>
    </ThemeProvider>
  );
}
```

Storybook（`apps/storybook`）有每個元件的即時範例。
