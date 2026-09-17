import { forwardRef } from 'react';
import MuiLinearProgress, { type LinearProgressProps } from '@mui/material/LinearProgress';

export type { LinearProgressProps };

export const LinearProgress = forwardRef<HTMLSpanElement, LinearProgressProps>(function LinearProgress(
  props,
  ref
) {
  return <MuiLinearProgress ref={ref} {...props} />;
});
