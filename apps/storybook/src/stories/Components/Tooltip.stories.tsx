import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Tooltip } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { design: figmaDesignParam('Tooltip') },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip title="Tooltip content" open>
      <Button>Hover target</Button>
    </Tooltip>
  ),
};
