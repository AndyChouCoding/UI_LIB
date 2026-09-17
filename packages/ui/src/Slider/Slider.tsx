import { forwardRef } from 'react';
import MuiSlider, { type SliderProps } from '@mui/material/Slider';

export type { SliderProps };

export const Slider = forwardRef<HTMLSpanElement, SliderProps>(function Slider(props, ref) {
  return <MuiSlider ref={ref} {...props} />;
});
