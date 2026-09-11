const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');
const defaultSource = '/Users/fulishijin/Desktop/Colors.tokens.json';
const sourceFile = path.resolve(process.argv[2] || defaultSource);
const outputFile = path.join(projectRoot, 'tokens', 'core', 'color.json');

function componentToHex(value) {
  return Math.round(value * 255)
    .toString(16)
    .padStart(2, '0')
    .toLowerCase();
}

function colorObjectToCss(value) {
  if (typeof value.hex === 'string' && (value.alpha === undefined || value.alpha === 1)) {
    return value.hex.toLowerCase();
  }

  if (Array.isArray(value.components) && value.components.length >= 3) {
    const alpha = value.alpha ?? 1;

    if (alpha === 1) {
      return `#${value.components.slice(0, 3).map(componentToHex).join('')}`;
    }

    const [r, g, b] = value.components
      .slice(0, 3)
      .map((component) => Math.round(component * 255));
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return value;
}

function normalizeNode(node) {
  if (Array.isArray(node)) {
    return node.map(normalizeNode);
  }

  if (!node || typeof node !== 'object') {
    return node;
  }

  const normalized = {};

  for (const [key, value] of Object.entries(node)) {
    if (key === '$value') {
      normalized.value =
        value && typeof value === 'object' && value.colorSpace ? colorObjectToCss(value) : value;
      continue;
    }

    if (key === '$type') {
      normalized.type = value;
      continue;
    }

    if (key === '$description') {
      normalized.comment = value;
      continue;
    }

    if (key.startsWith('$')) {
      continue;
    }

    normalized[key] = normalizeNode(value);
  }

  return normalized;
}

if (!fs.existsSync(sourceFile)) {
  throw new Error(`Token source file not found: ${sourceFile}`);
}

const figmaTokens = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));
const styleDictionaryTokens = {
  color: normalizeNode(figmaTokens),
};

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, `${JSON.stringify(styleDictionaryTokens, null, 2)}\n`);

console.log(`Imported ${sourceFile}`);
console.log(`Wrote ${path.relative(projectRoot, outputFile)}`);
