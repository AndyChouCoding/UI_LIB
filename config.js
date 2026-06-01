const StyleDictionary = require('style-dictionary');

module.exports = {
  source: [
    'tokens/core/**/*.json',
    'tokens/semantic/**/*.json'
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'token',
      buildPath: 'build/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        }
      ]
    },
    scss: {
      transformGroup: 'scss',
      prefix: 'token',
      buildPath: 'build/scss/',
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
      buildPath: 'build/js/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6'
        },
        {
          destination: 'tokens.d.ts',
          format: 'typescript/es6-declarations'
        }
      ]
    }
    // iOS platform — 之後擴充在此加入：
    // ios: {
    //   transformGroup: 'ios-swift',
    //   buildPath: 'build/ios/',
    //   files: [...]
    // }
  }
};
