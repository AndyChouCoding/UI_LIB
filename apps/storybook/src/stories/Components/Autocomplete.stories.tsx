import type { Meta, StoryObj } from '@storybook/react-vite';
import { Autocomplete, Input } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const options = ['Option A', 'Option B', 'Option C'];

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  parameters: { design: figmaDesignParam('Autocomplete') },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  render: () => (
    <Autocomplete
      options={options}
      sx={{ width: 280 }}
      renderInput={(params) => <Input {...params} label="Choose an option" />}
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Autocomplete
      options={options}
      disabled
      sx={{ width: 280 }}
      renderInput={(params) => <Input {...params} label="Choose an option" />}
    />
  ),
};
