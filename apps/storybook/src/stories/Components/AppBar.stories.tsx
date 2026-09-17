import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppBar, Toolbar, Typography, IconButton } from '@andychoucoding/ui';
import MenuIcon from '@mui/icons-material/Menu';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof AppBar> = {
  title: 'Components/AppBar',
  component: AppBar,
  parameters: { design: figmaDesignParam('AppBar'), layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Default: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Product Name
        </Typography>
      </Toolbar>
    </AppBar>
  ),
};
