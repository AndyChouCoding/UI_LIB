import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToggleButton, ToggleButtonGroup } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  parameters: { design: figmaDesignParam('ToggleButton') },
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = { args: { value: 'left', children: 'Left', selected: true } };

export const Group: Story = {
  render: () => (
    <ToggleButtonGroup value="left" exclusive>
      <ToggleButton value="left">Left</ToggleButton>
      <ToggleButton value="center">Center</ToggleButton>
      <ToggleButton value="right">Right</ToggleButton>
    </ToggleButtonGroup>
  ),
};
