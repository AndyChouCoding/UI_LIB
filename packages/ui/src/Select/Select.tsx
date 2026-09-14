import { forwardRef } from 'react';
import MuiSelect, { type SelectProps } from '@mui/material/Select';
export { default as MenuItem } from '@mui/material/MenuItem';
export type { MenuItemProps } from '@mui/material/MenuItem';

export type { SelectProps };

/**
 * Thin wrapper over MUI's Select. Pair with MenuItem re-exported here, and
 * MUI's FormControl/InputLabel for label + helper text until Company adds
 * its own composed field API.
 */
export const Select = forwardRef<HTMLDivElement, SelectProps>(function Select(props, ref) {
  return <MuiSelect ref={ref} {...props} />;
});
