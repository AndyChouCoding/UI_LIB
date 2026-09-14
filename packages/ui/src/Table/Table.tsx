import { forwardRef } from 'react';
import MuiTable, { type TableProps } from '@mui/material/Table';
export { default as TableHead, type TableHeadProps } from '@mui/material/TableHead';
export { default as TableBody, type TableBodyProps } from '@mui/material/TableBody';
export { default as TableRow, type TableRowProps } from '@mui/material/TableRow';
export { default as TableCell, type TableCellProps } from '@mui/material/TableCell';
export { default as TableContainer, type TableContainerProps } from '@mui/material/TableContainer';

export type { TableProps };

export const Table = forwardRef<HTMLTableElement, TableProps>(function Table(props, ref) {
  return <MuiTable ref={ref} {...props} />;
});
