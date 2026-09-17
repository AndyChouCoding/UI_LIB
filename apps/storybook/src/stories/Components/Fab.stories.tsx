import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fab } from '@andychoucoding/ui';
import AddIcon from '@mui/icons-material/Add';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Fab> = {
  title: 'Components/Fab',
  component: Fab,
  parameters: { design: figmaDesignParam('Fab') },
  argTypes: {
    color: { control: 'select', options: ['default', 'primary', 'secondary'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  args: { children: <AddIcon /> },
};

export default meta;
type Story = StoryObj<typeof Fab>;

export const Default: Story = {};
export const Primary: Story = { args: { color: 'primary' } };
export const Disabled: Story = { args: { disabled: true } };
