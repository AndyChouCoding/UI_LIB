/**
 * Central place to drop each component's Figma frame URL. Empty string =
 * not linked yet. Consumed by every *.stories.tsx via `meta.parameters.design`,
 * which is the convention https://github.com/storybookjs/addon-designs reads —
 * install that addon later to get an inline Figma embed tab, no story changes
 * needed.
 */
export const FIGMA_LINKS: Record<string, string> = {
  Button: '',
  Input: '',
  Select: '',
  Checkbox: '',
  Switch: '',
  Dialog: '',
  Table: '',
  Tabs: '',
  Tooltip: '',
  Autocomplete: '',
  Fab: '',
  IconButton: '',
  Radio: '',
  Rating: '',
  Slider: '',
  ToggleButton: '',
  Avatar: '',
  Badge: '',
  Chip: '',
  Divider: '',
  List: '',
  Typography: '',
  Alert: '',
  CircularProgress: '',
  LinearProgress: '',
  Skeleton: '',
  Snackbar: '',
  Accordion: '',
  AppBar: '',
  Card: '',
  Paper: '',
  Toolbar: '',
  Breadcrumbs: '',
  Drawer: '',
  Link: '',
  Menu: '',
  Pagination: '',
  Popover: '',
  Stepper: '',
};

export function figmaDesignParam(component: keyof typeof FIGMA_LINKS) {
  const url = FIGMA_LINKS[component];
  return url ? { type: 'figma' as const, url } : undefined;
}
