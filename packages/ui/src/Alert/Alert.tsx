import { forwardRef } from 'react';
import MuiAlert, { type AlertProps } from '@mui/material/Alert';
export { default as AlertTitle } from '@mui/material/AlertTitle';

export type { AlertProps };

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert ref={ref} {...props} />;
});
