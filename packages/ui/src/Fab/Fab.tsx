import { forwardRef } from 'react';
import MuiFab, { type FabProps } from '@mui/material/Fab';

export type { FabProps };

export const Fab = forwardRef<HTMLButtonElement, FabProps>(function Fab(props, ref) {
  return <MuiFab ref={ref} {...props} />;
});
