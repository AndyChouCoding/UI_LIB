import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio, RadioGroup } from '@andychoucoding/ui';
// FormControlLabel isn't wrapped yet — imported directly from MUI, same as
// the FormControl/InputLabel pairing used in the Select story.
import FormControlLabel from '@mui/material/FormControlLabel';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: { design: figmaDesignParam('Radio') },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };

export const Group: Story = {
  render: () => (
    <RadioGroup defaultValue="a">
      <FormControlLabel value="a" control={<Radio />} label="Option A" />
      <FormControlLabel value="b" control={<Radio />} label="Option B" />
      <FormControlLabel value="c" control={<Radio />} label="Option C" />
    </RadioGroup>
  ),
};
