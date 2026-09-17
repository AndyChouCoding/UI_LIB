import { forwardRef } from 'react';
import MuiDrawer, { type DrawerProps } from '@mui/material/Drawer';

export type { DrawerProps };

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(function Drawer(props, ref) {
  return <MuiDrawer ref={ref} {...props} />;
});
