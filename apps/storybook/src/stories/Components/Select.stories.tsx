import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select, MenuItem } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: { design: figmaDesignParam('Select') },
  args: { defaultValue: 'a', displayEmpty: false },
  render: (args) => (
    <Select {...args}>
      <MenuItem value="a">Option A</MenuItem>
      <MenuItem value="b">Option B</MenuItem>
      <MenuItem value="c">Option C</MenuItem>
    </Select>
  ),
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
