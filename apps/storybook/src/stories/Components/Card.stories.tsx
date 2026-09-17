import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent, CardActions, Button, Typography } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { design: figmaDesignParam('Card') },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card sx={{ width: 280 }}>
      <CardContent>
        <Typography variant="h6">Card title</Typography>
        <Typography variant="body2" color="text.secondary">
          Supporting text for the card content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn more</Button>
      </CardActions>
    </Card>
  ),
};
