import { forwardRef } from 'react';
import MuiSwitch, { type SwitchProps } from '@mui/material/Switch';

export type { SwitchProps };

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(props, ref) {
  return <MuiSwitch ref={ref} {...props} />;
});
