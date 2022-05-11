module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'no-undef': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'object-shorthand': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/jsx-filename-extension': 'off',
    'space-before-blocks': 'off',
    'padded-blocks': 'off',
    'no-trailing-spaces': 'off',
    'keyword-spacing': 'off',
    'max-len': 'off',
    'react/jsx-indent': 'off',
    'object-curly-newline': 'off',
    'brace-style': 'off',
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
    'import/order': 'off',
    'import/no-duplicates': 'off',
    'no-unused-vars': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-indent-props': 'off',
    'object-curly-spacing': 'off',
    'jsx-quotes': 'off',
    'no-else-return': 'off',
    'dot-notation': 'off',
    'quote-props': 'off'
  },
};
