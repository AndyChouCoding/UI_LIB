import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs, Link, Typography } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: { design: figmaDesignParam('Breadcrumbs') },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <Link underline="hover" color="inherit" href="#">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="#">
        Products
      </Link>
      <Typography color="text.primary">Current page</Typography>
    </Breadcrumbs>
  ),
};
