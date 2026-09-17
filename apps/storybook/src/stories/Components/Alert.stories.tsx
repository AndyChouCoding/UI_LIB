import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, AlertTitle } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: { design: figmaDesignParam('Alert') },
  argTypes: {
    severity: { control: 'select', options: ['success', 'info', 'warning', 'error'] },
    variant: { control: 'select', options: ['standard', 'filled', 'outlined'] },
  },
  args: { children: 'This is an alert message.' },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = { args: { severity: 'info' } };
export const Success: Story = { args: { severity: 'success' } };
export const Warning: Story = { args: { severity: 'warning' } };
export const Error: Story = { args: { severity: 'error' } };

export const WithTitle: Story = {
  render: () => (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      Something went wrong — check the details and try again.
    </Alert>
  ),
};
