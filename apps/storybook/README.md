# Storybook

Documents `@andychoucoding/ui` components and the `@andychoucoding/tokens` color foundations.

```sh
npm run storybook          # dev server, http://localhost:6006
npm run build-storybook    # static build
```

## 補 Figma 連結

每個元件的 Figma frame URL 集中在 `src/figma-links.ts`：

```ts
export const FIGMA_LINKS: Record<string, string> = {
  Button: 'https://www.figma.com/design/.../?node-id=...',
  Input: '',
  // ...
};
```

填了 URL 之後，story 的 `meta.parameters.design` 會自動帶上——這是 [`@storybook/addon-designs`](https://github.com/storybookjs/addon-designs) 讀取的慣例欄位，之後想要 Storybook 裡直接內嵌 Figma 預覽，只要：

```sh
npm install --save-dev @storybook/addon-designs
```

再把它加進 `.storybook/main.ts` 的 `addons` 陣列，不用改任何 stories 檔案。

## 結構

```
src/stories/
  Foundations/
    Colors.stories.tsx    # primitive + semantic color tokens
  Components/
    Button.stories.tsx
    Input.stories.tsx
    Select.stories.tsx
    Checkbox.stories.tsx
    Switch.stories.tsx
    Dialog.stories.tsx
    Table.stories.tsx
    Tabs.stories.tsx
    Tooltip.stories.tsx
```

`.storybook/preview.tsx` 用 Company Theme（`@andychoucoding/ui` 的 `theme`）包住每個 story，並載入 `@andychoucoding/tokens` 的 CSS variables，所以 Foundations/Colors 才能直接讀 `var(--token-color-*)`。
