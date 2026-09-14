import { createTheme } from '@mui/material/styles';
import { palette } from './palette';

/**
 * Company Theme. Typography/spacing/shape stay on MUI defaults until
 * @andychoucoding/tokens ships those primitive categories — only palette is
 * token-driven today.
 */
export const theme = createTheme({ palette });
