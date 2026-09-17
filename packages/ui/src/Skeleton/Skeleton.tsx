import { forwardRef } from 'react';
import MuiSkeleton, { type SkeletonProps } from '@mui/material/Skeleton';

export type { SkeletonProps };

export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(function Skeleton(props, ref) {
  return <MuiSkeleton ref={ref} {...props} />;
});
