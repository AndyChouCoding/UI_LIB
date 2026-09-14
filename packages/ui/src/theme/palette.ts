import type { PaletteOptions } from '@mui/material/styles';
import {
  ColorPrimary300,
  ColorPrimary500,
  ColorPrimary700,
  ColorSecondary300,
  ColorSecondary500,
  ColorSecondary700,
  ColorSuccess300,
  ColorSuccess500,
  ColorSuccess700,
  ColorWarning300,
  ColorWarning500,
  ColorWarning700,
  ColorError300,
  ColorError500,
  ColorError700,
  ColorInfo300,
  ColorInfo500,
  ColorInfo700,
  ColorNeutral400,
  ColorNeutral600,
  ColorNeutral900,
  ColorBackgroundSurface,
  ColorBackgroundSurfaceRaised,
} from '@andychoucoding/tokens';

/**
 * Primitive -> MUI palette mapping.
 * Convention: the 500 step is `main`, 300 is `light`, 700 is `dark`.
 * This is a starting convention, not a value from Figma — revisit once
 * `action.*` semantic tokens exist and should take over this mapping.
 */
export const palette: PaletteOptions = {
  primary: { light: ColorPrimary300, main: ColorPrimary500, dark: ColorPrimary700 },
  secondary: { light: ColorSecondary300, main: ColorSecondary500, dark: ColorSecondary700 },
  success: { light: ColorSuccess300, main: ColorSuccess500, dark: ColorSuccess700 },
  warning: { light: ColorWarning300, main: ColorWarning500, dark: ColorWarning700 },
  error: { light: ColorError300, main: ColorError500, dark: ColorError700 },
  info: { light: ColorInfo300, main: ColorInfo500, dark: ColorInfo700 },
  background: {
    default: ColorBackgroundSurface,
    paper: ColorBackgroundSurfaceRaised,
  },
  // No text.* semantic tokens yet — falling back to the neutral primitive
  // scale directly. Replace with semantic text.* tokens once they exist.
  text: {
    primary: ColorNeutral900,
    secondary: ColorNeutral600,
    disabled: ColorNeutral400,
  },
};
