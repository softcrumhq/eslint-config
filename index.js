/**
 * Configuracion de Eslint
 * Se exporta la configuracion de los estandares de desarrollo con Eslint
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },

  extends: ['airbnb', 'prettier'],

  parser: '@babel/eslint-parser',

  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2021,
    requireConfigFile: false,
    sourceType: 'module',
  },

  plugins: ['import', 'jsx-a11y', 'prettier', 'react', 'react-hooks'],

  rules: {
    // Enforce require() on the top-level module scope (global-require)
    // https://eslint.org/docs/rules/global-require
    'global-require': 0,

    // Forbid require() calls with expressions
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 0,

    // Use this rule to prevent unnecessary path segments in import and require statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': 0,

    // Enforce a convention in module import order
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': 0,

    // Enforce consistent linebreak style (linebreak-style)
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': 0,

    // Enforce a maximum line length (max-len)
    // https://eslint.org/docs/rules/max-len
    'max-len': [
      'error',
      {
        code: 2500,
        tabWidth: 2,
      },
    ],

    // Disallow return before else (no-else-return)
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': 0,

    // Disallow \8 and \9 escape sequences in string literals (no-nonoctal-decimal-escape)
    // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
    'no-nonoctal-decimal-escape': 0,

    // Disallow Reassignment of Function Parameters (no-param-reassign)
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 0,

    // Disallow Undeclared Variables (no-undef)
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 0,

    // Disallow dangling underscores in identifiers (no-underscore-dangle)
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 0,

    // Disallow use of optional chaining in contexts where the undefined value is not allowed (no-unsafe-optional-chaining)
    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': 0,

    // Disallow Early Use (no-use-before-define)
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 0,

    //
    //
    'operator-linebreak': 0,

    //
    //
    'prefer-object-spread': 0,

    //
    //
    'prettier/prettier': ['error'],

    //
    //
    'react/jsx-curly-brace-presence': 0,

    //
    //
    'react/jsx-filename-extension': 0,

    //
    //
    'react/jsx-no-constructed-context-values': 0,

    //
    //
    'react/no-unstable-nested-components': 0,
  },
};
