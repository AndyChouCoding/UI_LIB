/**
 * 依 brand + theme 產生一組 Style Dictionary 設定。
 * source 只吃 core（品牌/主題無關的原子色票）+ 指定 brand 的指定 theme（semantic 層）。
 */
module.exports = function getConfig(brand, theme) {
  const scope = `${brand}/${theme}`;

  return {
    source: ['tokens/core/**/*.json', `tokens/semantic/${brand}/${theme}.json`],
    platforms: {
      css: {
        transformGroup: 'css',
        prefix: 'token',
        buildPath: `build/css/${scope}/`,
        files: [
          {
            destination: 'variables.css',
            format: 'css/variables',
            options: {
              outputReferences: true,
              selector: `[data-brand="${brand}"][data-theme="${theme}"]`
            }
          }
        ]
      },
      scss: {
        transformGroup: 'scss',
        prefix: 'token',
        buildPath: `build/scss/${scope}/`,
        files: [
          {
            destination: '_tokens.scss',
            format: 'scss/variables',
            options: {
              outputReferences: true
            }
          }
        ]
      },
      js: {
        transformGroup: 'js',
        buildPath: `build/js/${scope}/`,
        files: [
          {
            destination: 'tokens.js',
            format: 'javascript/es6'
          },
          {
            destination: 'tokens.cjs',
            format: 'javascript/module'
          },
          {
            destination: 'tokens.d.ts',
            format: 'typescript/es6-declarations'
          }
        ]
      },
      json: {
        transformGroup: 'js',
        buildPath: `build/json/${scope}/`,
        files: [
          {
            destination: 'tokens.json',
            format: 'json/nested'
          },
          {
            destination: 'tokens.flat.json',
            format: 'json/flat'
          }
        ]
      }
      // iOS platform — 之後擴充在此加入：
      // ios: {
      //   transformGroup: 'ios-swift',
      //   buildPath: `build/ios/${scope}/`,
      //   files: [...]
      // }
    }
  };
};
