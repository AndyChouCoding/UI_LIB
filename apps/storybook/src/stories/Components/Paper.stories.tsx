import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paper, Typography } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Paper> = {
  title: 'Components/Paper',
  component: Paper,
  parameters: { design: figmaDesignParam('Paper') },
  argTypes: {
    elevation: { control: { type: 'number', min: 0, max: 24 } },
    variant: { control: 'select', options: ['elevation', 'outlined'] },
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  render: (args) => (
    <Paper {...args} sx={{ width: 240, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography>Paper surface</Typography>
    </Paper>
  ),
  args: { elevation: 2 },
};

export const Outlined: Story = { ...Default, args: { variant: 'outlined', elevation: 0 } };
