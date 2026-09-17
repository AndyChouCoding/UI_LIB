import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: { design: figmaDesignParam('Typography') },
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline'],
    },
  },
  args: { children: 'The quick brown fox jumps over the lazy dog' },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = { args: { variant: 'body1' } };

export const AllVariants: Story = {
  render: () => (
    <div>
      {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline'] as const).map(
        (variant) => (
          <Typography key={variant} variant={variant}>
            {variant} — The quick brown fox
          </Typography>
        )
      )}
    </div>
  ),
};
