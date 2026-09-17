import MuiAutocomplete, { type AutocompleteProps } from '@mui/material/Autocomplete';

export type { AutocompleteProps };

// Generic component — direct alias (not forwardRef) to keep Value/Multiple/
// DisableClearable/FreeSolo type params intact for callers.
export const Autocomplete = MuiAutocomplete;
