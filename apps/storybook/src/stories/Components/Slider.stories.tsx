import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: { design: figmaDesignParam('Slider') },
  args: { defaultValue: 30 },
  render: (args) => (
    <div style={{ width: 240 }}>
      <Slider {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {};
export const WithMarks: Story = { args: { marks: true, step: 10 } };
export const Disabled: Story = { args: { disabled: true } };
