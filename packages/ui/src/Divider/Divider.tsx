import { forwardRef } from 'react';
import MuiDivider, { type DividerProps } from '@mui/material/Divider';

export type { DividerProps };

export const Divider = forwardRef<HTMLHRElement, DividerProps>(function Divider(props, ref) {
  return <MuiDivider ref={ref} {...props} />;
});
