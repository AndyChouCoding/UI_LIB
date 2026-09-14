import type { Meta, StoryObj } from '@storybook/react-vite';

const primitiveScales = ['primary', 'secondary', 'neutral', 'success', 'warning', 'error', 'info'];
const steps = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const backgroundKeys = [
  'primary',
  'secondary',
  'tertiary',
  'inverse',
  'overlay-light',
  'surface',
  'surface-raised',
];

function ColorFoundations() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <h2>Primitive — color scales</h2>
      {primitiveScales.map((scale) => (
        <div key={scale} style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 8 }}>
          <span style={{ width: 90, fontSize: 13, fontFamily: 'ui-monospace, monospace' }}>{scale}</span>
          {steps.map((step) => (
            <div
              key={step}
              title={`--token-color-${scale}-${step}`}
              style={{
                width: 48,
                height: 32,
                borderRadius: 4,
                border: '1px solid rgba(0,0,0,0.1)',
                background: `var(--token-color-${scale}-${step})`,
              }}
            />
          ))}
        </div>
      ))}

      <h2>Semantic — background.*</h2>
      <div style={{ display: 'flex', gap: 4 }}>
        {backgroundKeys.map((key) => (
          <div
            key={key}
            title={`--token-color-background-${key}`}
            style={{
              minWidth: 100,
              padding: 8,
              fontSize: 11,
              fontFamily: 'ui-monospace, monospace',
              color: '#fff',
              textShadow: '0 1px 2px rgba(0,0,0,0.6)',
              display: 'flex',
              alignItems: 'flex-end',
              background: `var(--token-color-background-${key})`,
            }}
          >
            {key}
          </div>
        ))}
      </div>
    </div>
  );
}

const meta: Meta<typeof ColorFoundations> = {
  title: 'Foundations/Colors',
  component: ColorFoundations,
};

export default meta;
type Story = StoryObj<typeof ColorFoundations>;

export const AllColors: Story = {};
