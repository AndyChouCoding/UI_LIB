import { forwardRef } from 'react';
import MuiPaper, { type PaperProps } from '@mui/material/Paper';

export type { PaperProps };

export const Paper = forwardRef<HTMLDivElement, PaperProps>(function Paper(props, ref) {
  return <MuiPaper ref={ref} {...props} />;
});
