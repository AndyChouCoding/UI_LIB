import { forwardRef } from 'react';
import MuiToolbar, { type ToolbarProps } from '@mui/material/Toolbar';

export type { ToolbarProps };

export const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>(function Toolbar(props, ref) {
  return <MuiToolbar ref={ref} {...props} />;
});
