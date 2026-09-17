import { forwardRef } from 'react';
import MuiPopover, { type PopoverProps } from '@mui/material/Popover';

export type { PopoverProps };

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(function Popover(props, ref) {
  return <MuiPopover ref={ref} {...props} />;
});
