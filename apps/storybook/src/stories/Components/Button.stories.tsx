import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@andychoucoding/ui';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';
import { figmaDesignParam } from '../../figma-links';

// Curated icon set for the startIcon/endIcon controls below — not the
// full @mui/icons-material catalog, just the icons Button stories use.
const ICON_OPTIONS = {
  None: undefined,
  Add: <AddIcon />,
  ArrowForward: <ArrowForwardIcon />,
  Delete: <DeleteIcon />,
  Download: <DownloadIcon />,
  Send: <SendIcon />,
};

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { design: figmaDesignParam('Button') },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'danger', 'ghost'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    startIcon: { control: 'select', options: Object.keys(ICON_OPTIONS), mapping: ICON_OPTIONS },
    endIcon: { control: 'select', options: Object.keys(ICON_OPTIONS), mapping: ICON_OPTIONS },
  },
  args: { children: 'Button' },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Danger: Story = { args: { variant: 'danger' } };
export const Ghost: Story = { args: { variant: 'ghost' } };

export const Small: Story = { args: { size: 'small' } };
export const Medium: Story = { args: { size: 'medium' } };
export const Large: Story = { args: { size: 'large' } };

export const Disabled: Story = { args: { disabled: true } };
export const Loading: Story = { args: { loading: true } };

export const WithStartIcon: Story = { args: { startIcon: ICON_OPTIONS.Add } };
export const WithEndIcon: Story = { args: { endIcon: ICON_OPTIONS.ArrowForward } };
export const WithBothIcons: Story = {
  args: { startIcon: ICON_OPTIONS.Download, endIcon: ICON_OPTIONS.Send },
};

// Hover/Focus/Active are pseudo-states, not props — no dedicated stories
// until a pseudo-state addon (e.g. storybook-addon-pseudo-states) is added.
