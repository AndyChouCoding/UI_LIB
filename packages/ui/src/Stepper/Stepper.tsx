import { forwardRef } from 'react';
import MuiStepper, { type StepperProps } from '@mui/material/Stepper';
export { default as Step, type StepProps } from '@mui/material/Step';
export { default as StepLabel, type StepLabelProps } from '@mui/material/StepLabel';
export { default as StepContent, type StepContentProps } from '@mui/material/StepContent';
export { default as StepButton, type StepButtonProps } from '@mui/material/StepButton';
export { default as StepIcon, type StepIconProps } from '@mui/material/StepIcon';
export { default as StepConnector, type StepConnectorProps } from '@mui/material/StepConnector';

export type { StepperProps };

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(function Stepper(props, ref) {
  return <MuiStepper ref={ref} {...props} />;
});
