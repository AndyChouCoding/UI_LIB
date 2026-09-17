import { forwardRef } from 'react';
import MuiMenu, { type MenuProps } from '@mui/material/Menu';
export { default as MenuList, type MenuListProps } from '@mui/material/MenuList';
// MenuItem is already re-exported from '../Select' — not duplicated here to
// avoid a barrel export collision in src/index.ts.

export type { MenuProps };

export const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu(props, ref) {
  return <MuiMenu ref={ref} {...props} />;
});
