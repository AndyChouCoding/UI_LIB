import type { Meta, StoryObj } from '@storybook/react-vite';
import { Rating } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  parameters: { design: figmaDesignParam('Rating') },
  args: { defaultValue: 3 },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {};
export const ReadOnly: Story = { args: { readOnly: true } };
export const Disabled: Story = { args: { disabled: true } };
