import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@andychoucoding/ui';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { figmaDesignParam } from '../../figma-links';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: { design: figmaDesignParam('Accordion') },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion defaultExpanded sx={{ width: 320 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Section title</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Section content goes here.</Typography>
      </AccordionDetails>
    </Accordion>
  ),
};
