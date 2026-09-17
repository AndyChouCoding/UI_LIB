import { forwardRef } from 'react';
import MuiLink, { type LinkProps } from '@mui/material/Link';

export type { LinkProps };

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
  return <MuiLink ref={ref} {...props} />;
});
