import { forwardRef } from 'react';
import MuiSnackbar, { type SnackbarProps } from '@mui/material/Snackbar';
export { default as SnackbarContent, type SnackbarContentProps } from '@mui/material/SnackbarContent';

export type { SnackbarProps };

export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(function Snackbar(props, ref) {
  return <MuiSnackbar ref={ref} {...props} />;
});
