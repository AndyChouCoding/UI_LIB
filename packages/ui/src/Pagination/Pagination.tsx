import { forwardRef } from 'react';
import MuiPagination, { type PaginationProps } from '@mui/material/Pagination';

export type { PaginationProps };

export const Pagination = forwardRef<HTMLUListElement, PaginationProps>(function Pagination(props, ref) {
  return <MuiPagination ref={ref} {...props} />;
});
