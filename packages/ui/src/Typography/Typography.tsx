import { forwardRef } from 'react';
import MuiTypography, { type TypographyProps } from '@mui/material/Typography';

export type { TypographyProps };

export const Typography = forwardRef<HTMLElement, TypographyProps>(function Typography(props, ref) {
  return <MuiTypography ref={ref} {...props} />;
});
