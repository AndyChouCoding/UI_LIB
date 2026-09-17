import MuiGrid, { type GridProps } from '@mui/material/Grid';

export type { GridProps };

// Polymorphic component (`component` prop) — direct alias, same reasoning
// as Autocomplete, to keep the root-element type param intact.
export const Grid = MuiGrid;
