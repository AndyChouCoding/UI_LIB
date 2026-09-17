import { forwardRef } from 'react';
import MuiAccordion, { type AccordionProps } from '@mui/material/Accordion';
export { default as AccordionSummary, type AccordionSummaryProps } from '@mui/material/AccordionSummary';
export { default as AccordionDetails, type AccordionDetailsProps } from '@mui/material/AccordionDetails';
export { default as AccordionActions, type AccordionActionsProps } from '@mui/material/AccordionActions';

export type { AccordionProps };

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(function Accordion(props, ref) {
  return <MuiAccordion ref={ref} {...props} />;
});
