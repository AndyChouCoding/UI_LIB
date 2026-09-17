import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toolbar, Typography, Paper } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Toolbar> = {
  title: 'Components/Toolbar',
  component: Toolbar,
  parameters: { design: figmaDesignParam('Toolbar') },
};

export default meta;
type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {
  render: () => (
    <Paper sx={{ width: 320 }}>
      <Toolbar>
        <Typography variant="subtitle1">Toolbar content</Typography>
      </Toolbar>
    </Paper>
  ),
};
