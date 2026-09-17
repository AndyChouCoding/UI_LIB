import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarGroup } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: { design: figmaDesignParam('Avatar') },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = { args: { children: 'AC' } };

export const Group: Story = {
  render: () => (
    <AvatarGroup max={3}>
      <Avatar>A</Avatar>
      <Avatar>B</Avatar>
      <Avatar>C</Avatar>
      <Avatar>D</Avatar>
    </AvatarGroup>
  ),
};
