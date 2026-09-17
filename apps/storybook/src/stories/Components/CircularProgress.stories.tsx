import type { Meta, StoryObj } from '@storybook/react-vite';
import { CircularProgress } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof CircularProgress> = {
  title: 'Components/CircularProgress',
  component: CircularProgress,
  parameters: { design: figmaDesignParam('CircularProgress') },
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'inherit'] },
  },
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Indeterminate: Story = {};
export const Determinate: Story = { args: { variant: 'determinate', value: 65 } };
