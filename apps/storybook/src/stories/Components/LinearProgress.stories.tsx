import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinearProgress } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof LinearProgress> = {
  title: 'Components/LinearProgress',
  component: LinearProgress,
  parameters: { design: figmaDesignParam('LinearProgress') },
  render: (args) => (
    <div style={{ width: 240 }}>
      <LinearProgress {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof LinearProgress>;

export const Indeterminate: Story = {};
export const Determinate: Story = { args: { variant: 'determinate', value: 65 } };
