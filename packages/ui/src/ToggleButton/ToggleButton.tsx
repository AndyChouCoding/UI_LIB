import { forwardRef } from 'react';
import MuiToggleButton, { type ToggleButtonProps } from '@mui/material/ToggleButton';
export { default as ToggleButtonGroup, type ToggleButtonGroupProps } from '@mui/material/ToggleButtonGroup';

export type { ToggleButtonProps };

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(function ToggleButton(props, ref) {
  return <MuiToggleButton ref={ref} {...props} />;
});
