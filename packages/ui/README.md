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

- **Button** 是完整範例：`variant`（`primary` / `secondary` / `danger` / `text`）由 Company 決定要對應 MUI 的哪個 `variant` + `color` 組合（見 `src/Button/Button.tsx`），product 端不需要知道 MUI 的 contained/outlined/text 語彙。
- 其餘元件目前都是**薄封裝**（直接轉發到對應的 MUI 元件），還沒有 Company 專屬的 variant/size/state 系統——doc 裡只有 Button 給了明確規格，其他元件的 API 等實際 product 需求或設計稿出來後再擴充，避免先發明一套沒人用得到的規格。已涵蓋 MUI 六大分類的核心元件（依 `src/index.ts` 為準）：
  - **Inputs**：Button、Input、Select、Checkbox、Switch、Autocomplete、Fab、IconButton、Radio（+ RadioGroup）、Rating、Slider、ToggleButton（+ ToggleButtonGroup）
  - **Data Display**：Table、Tooltip、Avatar（+ AvatarGroup）、Badge、Chip、Divider、List 系列、Typography
  - **Feedback**：Dialog、Alert（+ AlertTitle）、CircularProgress、LinearProgress、Skeleton、Snackbar（+ SnackbarContent）
  - **Surfaces**：Accordion 系列、AppBar、Card 系列、Paper、Toolbar
  - **Navigation**：Tabs、Breadcrumbs、Drawer、Link、Menu、Pagination、Popover、Stepper 系列
  - **Layout**：Box、Container、Grid、Stack（polymorphic `component` prop 元件，直接 alias 匯出以保留 root element 泛型型別，見對應檔案的註解）
  - **MUI X（Community，MIT 免費版）**：DataGrid、DatePicker / TimePicker / DateTimePicker（+ LocalizationProvider、AdapterDayjs）——用到日期選擇器時記得在 app 根層包一次 `LocalizationProvider dateAdapter={AdapterDayjs}`

## Company Theme

`src/theme/palette.ts` 把 `@andychoucoding/tokens` 的 primitive 色階映射成 MUI 的 `palette`（預設慣例是 500 當 `main`、300 當 `light`、700 當 `dark`；primary 目前是例外，改用 800/300/900 讓 light < main < dark 深淺順序維持正確——這是暫定慣例，等 `action.*` semantic token 出現後應該取代這層映射）。`text.*` 目前直接引用 neutral primitive，因為還沒有 `text.*` semantic token。Typography / spacing / shape 維持 MUI 預設，等對應的 primitive token 出現再串。

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
