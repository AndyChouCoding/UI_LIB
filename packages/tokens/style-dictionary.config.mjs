export default {
  source: ['tokens/primitive/**/*.tokens.json', 'tokens/semantic/**/*.tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'token',
      buildPath: 'dist/css/',
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
      buildPath: 'dist/scss/',
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
      buildPath: 'dist/js/',
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
      buildPath: 'dist/json/',
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
    //   buildPath: 'dist/ios/',
    //   files: [...]
    // }
  }
};
