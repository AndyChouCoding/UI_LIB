import MuiBox, { type BoxProps } from '@mui/material/Box';

export type { BoxProps };

// Polymorphic component (`component` prop) — direct alias, same reasoning
// as Autocomplete, to keep the root-element type param intact.
export const Box = MuiBox;
