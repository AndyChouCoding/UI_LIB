import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from '@andychoucoding/ui';
import DeleteIcon from '@mui/icons-material/Delete';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: { design: figmaDesignParam('IconButton') },
  argTypes: {
    color: { control: 'select', options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  args: { children: <DeleteIcon /> },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};
export const Primary: Story = { args: { color: 'primary' } };
export const Disabled: Story = { args: { disabled: true } };
