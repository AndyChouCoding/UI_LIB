import { forwardRef } from 'react';
import MuiCircularProgress, { type CircularProgressProps } from '@mui/material/CircularProgress';

export type { CircularProgressProps };

export const CircularProgress = forwardRef<HTMLSpanElement, CircularProgressProps>(function CircularProgress(
  props,
  ref
) {
  return <MuiCircularProgress ref={ref} {...props} />;
});
