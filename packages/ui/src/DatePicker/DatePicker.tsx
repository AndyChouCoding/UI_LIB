import { DatePicker as MuiDatePicker, type DatePickerProps } from '@mui/x-date-pickers/DatePicker';
export { TimePicker, type TimePickerProps } from '@mui/x-date-pickers/TimePicker';
export { DateTimePicker, type DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
export { LocalizationProvider, type LocalizationProviderProps } from '@mui/x-date-pickers/LocalizationProvider';
export { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export type { DatePickerProps };

// Generic component (date type param) — direct alias, same reasoning as
// Autocomplete/Box. Pair with LocalizationProvider + AdapterDayjs (the
// Company-chosen date library) at the app root.
export const DatePicker = MuiDatePicker;
