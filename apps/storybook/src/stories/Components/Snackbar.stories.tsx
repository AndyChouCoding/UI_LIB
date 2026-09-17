import type { Meta, StoryObj } from '@storybook/react-vite';
import { Snackbar, Alert } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  parameters: { design: figmaDesignParam('Snackbar') },
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
  args: { open: true, message: 'This is a snackbar message', autoHideDuration: null },
  parameters: { layout: 'fullscreen' },
};

export const WithAlert: Story = {
  render: () => (
    <Snackbar open autoHideDuration={null}>
      <Alert severity="success" sx={{ width: '100%' }}>
        Saved successfully.
      </Alert>
    </Snackbar>
  ),
  parameters: { layout: 'fullscreen' },
};
