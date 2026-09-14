# UI_LIB

公司專屬 Design System monorepo：集中管理 Design Tokens 與 MUI-based Company UI Component Library，供多個產品共用。

架構：

```
Figma Variables
  ↓
Design Tokens (Primitive → Semantic → Component)
  ↓
Style Dictionary
  ↓
@andychoucoding/tokens
  ↓
Company Theme (MUI)
  ↓
Company Components
  ↓
@andychoucoding/ui
  ↓
GitHub Packages → Product A / B / C
```

核心原則：

1. Figma 負責設計與 Design Variables。
2. Design Tokens 是 Design 與 Code 之間的資料交換層。
3. Style Dictionary 把 Design Tokens 轉成程式可用的格式。
4. MUI 是底層 UI implementation layer，不直接暴露給 Product。
5. Product 只依賴 `@andychoucoding/ui`，不直接 import MUI component。
6. Token 與 UI Framework 各自獨立發布 package。

## Packages

```
packages/
  tokens/    # @andychoucoding/tokens — Primitive/Semantic design tokens（Style Dictionary）
  ui/        # @andychoucoding/ui — Company Theme + Components（規劃中，尚未建立）
```

每個 package 的細節見各自的 README：

- [`packages/tokens/README.md`](packages/tokens/README.md)

## 開發

Workspace 使用 npm workspaces（單一 root lockfile，不額外引入 pnpm/Turborepo）。

```sh
npm install                              # 安裝所有 workspace 的依賴
npm run build --workspace=packages/tokens
```

## 現況（Roadmap）

對應公司 design system 架構文件的階段規劃：

- **Phase 1（完成）**：Color token PoC，驗證 Figma → Style Dictionary → CSS 可行
- **Phase 2（目前）**：`packages/tokens` Primitive/Semantic 分層，發布 `@andychoucoding/tokens@1.0.0`
- **Phase 3+（規劃中）**：`packages/ui`（Company MUI Theme + Components）、Storybook、CI 治理（lint/typecheck/test/visual regression）
