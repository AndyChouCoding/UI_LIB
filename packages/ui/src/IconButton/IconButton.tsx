import { forwardRef } from 'react';
import MuiIconButton, { type IconButtonProps } from '@mui/material/IconButton';

export type { IconButtonProps };

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(props, ref) {
  return <MuiIconButton ref={ref} {...props} />;
});
