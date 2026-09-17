import { forwardRef } from 'react';
import MuiCard, { type CardProps } from '@mui/material/Card';
export { default as CardActionArea, type CardActionAreaProps } from '@mui/material/CardActionArea';
export { default as CardActions, type CardActionsProps } from '@mui/material/CardActions';
export { default as CardContent, type CardContentProps } from '@mui/material/CardContent';
export { default as CardHeader, type CardHeaderProps } from '@mui/material/CardHeader';
export { default as CardMedia, type CardMediaProps } from '@mui/material/CardMedia';

export type { CardProps };

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(props, ref) {
  return <MuiCard ref={ref} {...props} />;
});
