import { forwardRef } from 'react';
import MuiList, { type ListProps } from '@mui/material/List';
export { default as ListItem, type ListItemProps } from '@mui/material/ListItem';
export { default as ListItemButton, type ListItemButtonProps } from '@mui/material/ListItemButton';
export { default as ListItemIcon, type ListItemIconProps } from '@mui/material/ListItemIcon';
export { default as ListItemText, type ListItemTextProps } from '@mui/material/ListItemText';
export { default as ListItemAvatar, type ListItemAvatarProps } from '@mui/material/ListItemAvatar';
export { default as ListSubheader, type ListSubheaderProps } from '@mui/material/ListSubheader';

export type { ListProps };

export const List = forwardRef<HTMLUListElement, ListProps>(function List(props, ref) {
  return <MuiList ref={ref} {...props} />;
});
