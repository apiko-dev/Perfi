module.exports = {
  extends: 'airbnb',
  globals: {
    fetch: false,
  },
  env: {
    jest: true,
  },
  plugins: ['react', 'react-native'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.android.js', '.ios.js'],
      },
    },
  },
  rules: {
    'jsx-a11y/href-no-hash': 'off',
    'max-len': [2, 100, 2],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/prefer-default-export': 0,
    'no-console': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true,
      },
    ],
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'no-nested-ternary': 0,
    'function-paren-newline': 0,
    'global-require': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/forbid-prop-types': 0,
    'react/no-typos': 0,
    'react/require-default-props': 0,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 0,
    // @TODO resolve the way this rule works
    'arrow-parens': 0,
  },
};
