import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '@andychoucoding/ui';
import MailIcon from '@mui/icons-material/Mail';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: { design: figmaDesignParam('Badge') },
  argTypes: {
    color: { control: 'select', options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'] },
  },
  args: { badgeContent: 4, children: <MailIcon /> },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
export const Primary: Story = { args: { color: 'primary' } };
export const Dot: Story = { args: { variant: 'dot' } };
