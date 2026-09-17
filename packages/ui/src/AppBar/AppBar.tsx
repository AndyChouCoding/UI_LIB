import { forwardRef } from 'react';
import MuiAppBar, { type AppBarProps } from '@mui/material/AppBar';

export type { AppBarProps };

export const AppBar = forwardRef<HTMLElement, AppBarProps>(function AppBar(props, ref) {
  return <MuiAppBar ref={ref} {...props} />;
});
