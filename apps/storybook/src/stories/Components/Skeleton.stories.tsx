import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: { design: figmaDesignParam('Skeleton') },
  argTypes: {
    variant: { control: 'select', options: ['text', 'circular', 'rectangular', 'rounded'] },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = { args: { variant: 'text', width: 200 } };
export const Circular: Story = { args: { variant: 'circular', width: 40, height: 40 } };
export const Rectangular: Story = { args: { variant: 'rectangular', width: 200, height: 100 } };
