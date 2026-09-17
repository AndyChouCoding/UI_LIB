// Straight re-export (not a `const X = MuiX` alias) — DataGrid's internal
// component type isn't nameable from outside the package, which breaks
// tsup's .d.ts generation if re-assigned to a new const.
export { DataGrid, type DataGridProps } from '@mui/x-data-grid';
