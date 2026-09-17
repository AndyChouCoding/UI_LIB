import MuiStack, { type StackProps } from '@mui/material/Stack';

export type { StackProps };

// Polymorphic component (`component` prop) — direct alias, same reasoning
// as Autocomplete, to keep the root-element type param intact.
export const Stack = MuiStack;
