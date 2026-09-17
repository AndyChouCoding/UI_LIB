import { forwardRef } from 'react';
import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'color' | 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const VARIANT_MAP: Record<ButtonVariant, Pick<MuiButtonProps, 'variant' | 'color'>> = {
  primary: { variant: 'contained', color: 'primary' },
  secondary: { variant: 'outlined', color: 'primary' },
  danger: { variant: 'contained', color: 'error' },
  text: { variant: 'text', color: 'primary' },
};

/**
 * Company Button — owns the design rule (variant -> MUI variant/color/elevation)
 * so product code never has to know MUI's contained/outlined/text vocabulary.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'medium', ...props },
  ref
) {
  const { variant: muiVariant, color } = VARIANT_MAP[variant];

  return (
    <MuiButton ref={ref} variant={muiVariant} color={color} size={size} disableElevation {...props} />
  );
});
