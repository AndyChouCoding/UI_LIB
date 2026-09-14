import { forwardRef } from 'react';
import MuiTabs, { type TabsProps } from '@mui/material/Tabs';
export { default as Tab, type TabProps } from '@mui/material/Tab';

export type { TabsProps };

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(props, ref) {
  return <MuiTabs ref={ref} {...props} />;
});
