import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: { design: figmaDesignParam('Pagination') },
  argTypes: {
    variant: { control: 'select', options: ['text', 'outlined'] },
    shape: { control: 'select', options: ['circular', 'rounded'] },
  },
  args: { count: 10, defaultPage: 1 },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};
export const Outlined: Story = { args: { variant: 'outlined' } };
export const Disabled: Story = { args: { disabled: true } };
