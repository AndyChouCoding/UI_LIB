import type { Meta, StoryObj } from '@storybook/react-vite';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@andychoucoding/ui';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: { design: figmaDesignParam('List') },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => (
    <List subheader={<ListSubheader>Inbox</ListSubheader>} sx={{ width: 280 }}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </ListItem>
    </List>
  ),
};
