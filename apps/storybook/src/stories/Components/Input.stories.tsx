import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: { design: figmaDesignParam('Input') },
  args: { label: 'Label', placeholder: 'Placeholder' },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const HelperText: Story = { args: { helperText: 'Helper text' } };
export const ErrorState: Story = { args: { error: true, helperText: 'This field is required' } };
export const Disabled: Story = { args: { disabled: true } };
