module.exports = {
  root: true,
  ignorePatterns: ['projects/**/*', 'node_modules/*', 'dist/*'],
  env: { browser: true },
  overrides: [
    {
      files: ['*.tsx'],
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaVersion: es7,
      },
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
      rules: {
        quotes: [
          1,
          'single',
          {
            avoidEscape: true,
            allowTemplateLiterals: true,
          },
        ],
        curly: 1,
        indent: 'off',
        '@typescript-eslint/indent': [
          'error',
          2,
          {
            ignoredNodes: [
              'PropertyDefinition[decorators]',
              'TSUnionType',
              'ArrowFunctionExpression > BlockStatement',
              'NoSubstitutionTemplateLiteral',
              'TemplateLiteral',
              'TSTypeAliasDeclaration *',
            ],
          },
        ],
        'eol-last': ['error', 'always'],
        'max-len': ['warn', { code: 250 }],
        'no-empty': 1,
        'no-var-requires': 0,
        semi: ['error', 'always'],
        'comma-dangle': ['warn', 'always-multiline'],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'space-before-function-paren': [
          'error',
          {
            anonymous: 'never',
            asyncArrow: 'always',
            named: 'never',
          },
        ],
      },
    },
  ],
};
