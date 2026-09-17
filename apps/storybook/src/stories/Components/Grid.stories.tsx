import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid, Paper } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  parameters: { design: figmaDesignParam('Grid') },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: () => (
    <Grid container spacing={2} sx={{ width: 400 }}>
      {[1, 2, 3, 4].map((n) => (
        <Grid key={n} size={6}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>{n}</Paper>
        </Grid>
      ))}
    </Grid>
  ),
};
