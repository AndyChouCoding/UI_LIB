import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: { design: figmaDesignParam('Chip') },
  argTypes: {
    variant: { control: 'select', options: ['filled', 'outlined'] },
    color: { control: 'select', options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'] },
  },
  args: { label: 'Chip' },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {};
export const Outlined: Story = { args: { variant: 'outlined' } };
export const Deletable: Story = { args: { onDelete: () => {} } };
export const Disabled: Story = { args: { disabled: true } };
