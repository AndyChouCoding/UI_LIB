import '@andychoucoding/tokens/dist/css/variables.css'
import * as tokens from '@andychoucoding/tokens'
import './App.css'

const primitiveScales = ['primary', 'secondary', 'neutral', 'success', 'warning', 'error', 'info']
const steps = [100, 200, 300, 400, 500, 600, 700, 800, 900]

const backgroundKeys = [
  'primary',
  'secondary',
  'tertiary',
  'inverse',
  'overlay-light',
  'surface',
  'surface-raised',
]

function App() {
  return (
    <div className="playground">
      <h1>@andychoucoding/tokens playground</h1>
      <p>Verifying the workspace-linked package resolves both CSS variables and JS token exports.</p>

      <h2>Primitive — color scales</h2>
      {primitiveScales.map((scale) => (
        <div key={scale} className="scale-row">
          <span className="scale-label">{scale}</span>
          {steps.map((step) => (
            <div
              key={step}
              className="swatch"
              style={{ background: `var(--token-color-${scale}-${step})` }}
              title={`--token-color-${scale}-${step}`}
            />
          ))}
        </div>
      ))}

      <h2>Semantic — background.*</h2>
      <div className="scale-row">
        {backgroundKeys.map((key) => (
          <div
            key={key}
            className="swatch swatch-labeled"
            style={{ background: `var(--token-color-background-${key})` }}
            title={`--token-color-background-${key}`}
          >
            {key}
          </div>
        ))}
      </div>

      <h2>JS export sample</h2>
      <pre>
        {JSON.stringify(
          {
            ColorPrimary500: tokens.ColorPrimary500,
            ColorBackgroundInverse: tokens.ColorBackgroundInverse,
          },
          null,
          2
        )}
      </pre>
    </div>
  )
}

export default App
