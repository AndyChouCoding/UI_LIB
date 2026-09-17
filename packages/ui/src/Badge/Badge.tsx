import { forwardRef } from 'react';
import MuiBadge, { type BadgeProps } from '@mui/material/Badge';

export type { BadgeProps };

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(props, ref) {
  return <MuiBadge ref={ref} {...props} />;
});
