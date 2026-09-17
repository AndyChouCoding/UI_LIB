import MuiContainer, { type ContainerProps } from '@mui/material/Container';

export type { ContainerProps };

// Polymorphic component (`component` prop) — direct alias, same reasoning
// as Autocomplete, to keep the root-element type param intact.
export const Container = MuiContainer;
