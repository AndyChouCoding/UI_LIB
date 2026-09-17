import { forwardRef } from 'react';
import MuiAvatar, { type AvatarProps } from '@mui/material/Avatar';
export { default as AvatarGroup, type AvatarGroupProps } from '@mui/material/AvatarGroup';

export type { AvatarProps };

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, ref) {
  return <MuiAvatar ref={ref} {...props} />;
});
