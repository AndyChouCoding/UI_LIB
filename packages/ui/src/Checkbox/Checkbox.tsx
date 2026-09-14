import { forwardRef } from 'react';
import MuiCheckbox, { type CheckboxProps } from '@mui/material/Checkbox';

export type { CheckboxProps };

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(function Checkbox(props, ref) {
  return <MuiCheckbox ref={ref} {...props} />;
});
