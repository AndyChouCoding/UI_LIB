import { forwardRef } from 'react';
import MuiRadio, { type RadioProps } from '@mui/material/Radio';
export { default as RadioGroup, type RadioGroupProps } from '@mui/material/RadioGroup';

export type { RadioProps };

export const Radio = forwardRef<HTMLButtonElement, RadioProps>(function Radio(props, ref) {
  return <MuiRadio ref={ref} {...props} />;
});
