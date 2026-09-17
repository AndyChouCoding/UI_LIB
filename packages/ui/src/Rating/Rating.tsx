import { forwardRef } from 'react';
import MuiRating, { type RatingProps } from '@mui/material/Rating';

export type { RatingProps };

export const Rating = forwardRef<HTMLSpanElement, RatingProps>(function Rating(props, ref) {
  return <MuiRating ref={ref} {...props} />;
});
