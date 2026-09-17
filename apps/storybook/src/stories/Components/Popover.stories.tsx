import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover, Button, Typography } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: { design: figmaDesignParam('Popover') },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    return (
      <>
        <Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open popover</Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Typography sx={{ p: 2 }}>Popover content.</Typography>
        </Popover>
      </>
    );
  },
};
