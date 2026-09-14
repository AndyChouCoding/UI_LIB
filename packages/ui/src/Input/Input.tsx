import { forwardRef } from 'react';
import MuiTextField, { type TextFieldProps } from '@mui/material/TextField';

export type InputProps = TextFieldProps;

/**
 * Thin wrapper over MUI's TextField. No Company-specific variant/size system
 * has been specified yet — revisit once product usage surfaces real needs.
 */
export const Input = forwardRef<HTMLDivElement, InputProps>(function Input(props, ref) {
  return <MuiTextField ref={ref} {...props} />;
});
