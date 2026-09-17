import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stepper, Step, StepLabel } from '@andychoucoding/ui';
import { figmaDesignParam } from '../../figma-links';

const steps = ['Account details', 'Shipping address', 'Review order'];

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: { design: figmaDesignParam('Stepper') },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: { activeStep: 1 },
  render: (args) => (
    <Stepper {...args}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  ),
};
