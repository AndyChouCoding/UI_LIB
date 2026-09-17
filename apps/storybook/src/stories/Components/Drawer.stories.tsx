import type { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: { design: figmaDesignParam('Drawer'), layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: { open: true, variant: 'persistent' },
  render: (args) => (
    <Drawer {...args}>
      <List sx={{ width: 240 }}>
        {['Inbox', 'Starred', 'Sent', 'Drafts'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  ),
};
