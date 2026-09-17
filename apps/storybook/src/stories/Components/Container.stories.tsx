import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container, Box } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  parameters: { design: figmaDesignParam('Container') },
  argTypes: {
    maxWidth: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', false] },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: { maxWidth: 'sm' },
  render: (args) => (
    <Container {...args}>
      <Box sx={{ border: '1px dashed', borderColor: 'divider', p: 2 }}>Container content</Box>
    </Container>
  ),
};
