import type { Meta, StoryObj } from '@storybook/react-vite';
import { DatePicker, TimePicker, DateTimePicker, LocalizationProvider, AdapterDayjs } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: { design: figmaDesignParam('DatePicker') },
  decorators: [
    (Story) => (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Story />
      </LocalizationProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = { render: () => <DatePicker label="Date" /> };
export const Time: Story = { render: () => <TimePicker label="Time" /> };
export const DateTime: Story = { render: () => <DateTimePicker label="Date & time" /> };
