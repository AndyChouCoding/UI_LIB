import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Paper } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Stack> = {
  title: 'Components/Stack',
  component: Stack,
  parameters: { design: figmaDesignParam('Stack') },
  argTypes: {
    direction: { control: 'select', options: ['row', 'column', 'row-reverse', 'column-reverse'] },
  },
  args: { spacing: 2, direction: 'row' },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: (args) => (
    <Stack {...args}>
      <Paper sx={{ p: 2 }}>Item 1</Paper>
      <Paper sx={{ p: 2 }}>Item 2</Paper>
      <Paper sx={{ p: 2 }}>Item 3</Paper>
    </Stack>
  ),
};
