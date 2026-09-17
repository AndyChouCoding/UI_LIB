import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: { design: figmaDesignParam('Divider') },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = { render: () => <div style={{ width: 240 }}><Divider /></div> };
export const WithText: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <Divider>OR</Divider>
    </div>
  ),
};
