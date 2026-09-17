import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  parameters: { design: figmaDesignParam('Box') },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: () => (
    <Box sx={{ p: 2, border: '1px dashed', borderColor: 'divider', width: 240 }}>Box content</Box>
  ),
};
