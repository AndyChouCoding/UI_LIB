const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');
const defaultSource = '/Users/fulishijin/Desktop/Colors.tokens.json';
const sourceFile = path.resolve(process.argv[2] || defaultSource);

// 目前唯一的 brand/theme 組合，之後多品牌時改成從參數或設定檔讀取。
const BRAND = 'primary';
const THEME = 'light';

const coreOutputFile = path.join(projectRoot, 'tokens', 'core', 'color.json');
const semanticOutputFile = path.join(
  projectRoot,
  'tokens',
  'semantic',
  BRAND,
  `${THEME}.json`
);

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
const { bg, ...coreGroups } = normalizeNode(figmaTokens);

fs.mkdirSync(path.dirname(coreOutputFile), { recursive: true });
fs.writeFileSync(coreOutputFile, `${JSON.stringify({ color: coreGroups }, null, 2)}\n`);
console.log(`Imported ${sourceFile}`);
console.log(`Wrote ${path.relative(projectRoot, coreOutputFile)}`);

if (bg) {
  fs.mkdirSync(path.dirname(semanticOutputFile), { recursive: true });
  fs.writeFileSync(semanticOutputFile, `${JSON.stringify({ color: { bg } }, null, 2)}\n`);
  console.log(`Wrote ${path.relative(projectRoot, semanticOutputFile)}`);
} else {
  console.warn(`No "bg" group found in source — skipped writing semantic/${BRAND}/${THEME}.json`);
}
