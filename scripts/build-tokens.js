const fs = require('node:fs');
const path = require('node:path');
const StyleDictionary = require('style-dictionary').default;
const getConfig = require('../config.js');

const projectRoot = path.resolve(__dirname, '..');
const semanticRoot = path.join(projectRoot, 'tokens', 'semantic');

const brands = fs
  .readdirSync(semanticRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

if (brands.length === 0) {
  throw new Error(`No brands found under ${path.relative(projectRoot, semanticRoot)}`);
}

async function build() {
  for (const brand of brands) {
    const brandDir = path.join(semanticRoot, brand);
    const themes = fs
      .readdirSync(brandDir)
      .filter((file) => file.endsWith('.json'))
      .map((file) => path.basename(file, '.json'));

    for (const theme of themes) {
      console.log(`\nBuilding ${brand}/${theme}...`);
      const sd = new StyleDictionary(getConfig(brand, theme));
      await sd.buildAllPlatforms();
    }
  }
}

build().catch((error) => {
  console.error(error);
  process.exit(1);
});
