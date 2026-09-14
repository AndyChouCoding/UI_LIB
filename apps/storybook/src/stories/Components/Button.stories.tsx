import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { design: figmaDesignParam('Button') },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'danger', 'ghost'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  args: { children: 'Button' },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Danger: Story = { args: { variant: 'danger' } };
export const Ghost: Story = { args: { variant: 'ghost' } };

export const Small: Story = { args: { size: 'small' } };
export const Medium: Story = { args: { size: 'medium' } };
export const Large: Story = { args: { size: 'large' } };

export const Disabled: Story = { args: { disabled: true } };
export const Loading: Story = { args: { loading: true } };

// Hover/Focus/Active are pseudo-states, not props — no dedicated stories
// until a pseudo-state addon (e.g. storybook-addon-pseudo-states) is added.
