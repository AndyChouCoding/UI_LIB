import { forwardRef } from 'react';
import MuiBreadcrumbs, { type BreadcrumbsProps } from '@mui/material/Breadcrumbs';

export type { BreadcrumbsProps };

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(function Breadcrumbs(props, ref) {
  return <MuiBreadcrumbs ref={ref} {...props} />;
});
