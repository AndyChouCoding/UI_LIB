import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: { design: figmaDesignParam('Link') },
  argTypes: {
    underline: { control: 'select', options: ['none', 'hover', 'always'] },
  },
  args: { href: '#', children: 'Link text' },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {};
export const HoverUnderline: Story = { args: { underline: 'hover' } };
export const NoUnderline: Story = { args: { underline: 'none' } };
