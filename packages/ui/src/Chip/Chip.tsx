import { forwardRef } from 'react';
import MuiChip, { type ChipProps } from '@mui/material/Chip';

export type { ChipProps };

export const Chip = forwardRef<HTMLDivElement, ChipProps>(function Chip(props, ref) {
  return <MuiChip ref={ref} {...props} />;
});
