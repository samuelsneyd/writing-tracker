module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
  ],
  rules: {
    // Disable prettier
    'prettier/prettier': 'off',

    // React Native
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,

    // Possible Problems
    'array-callback-return': 'error',
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-promise-executor-return': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'warn',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',

    // Suggestions
    'curly': 'error',
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'func-style': ['error', 'expression'],
    'no-confusing-arrow': 'error',
    'no-else-return': 'error',
    'no-floating-decimal': 'error',
    'no-lonely-if': 'error',
    'no-unneeded-ternary': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single'],
    'spaced-comment': 'error',

    // Layout and Formatting
    'array-bracket-newline': ['error', { multiline: true }],
    'array-bracket-spacing': 'error',
    'array-element-newline': ['error', 'consistent'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': 'error',
    'brace-style': 'error',
    'computed-property-spacing': 'error',
    'eol-last': 'error',
    'object-curly-spacing': ['error', 'always'],
    'padded-blocks': ['error', 'never'],
  },
};
