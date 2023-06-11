module.exports = {
  root: true,
  ignorePatterns: [
    'projects/**/*',
    'node_modules/*',
    'dist/*',
    'src/shared/custom-fabricjs-react-lib/*',
  ],
  env: { browser: true },
  plugins: ['@typescript-eslint'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
  },
  overrides: [
    {
      files: ['*.tsx, *.ts'],
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaVersion: 'es2020',
      },
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
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'react-hooks/exhaustive-deps': 'off',
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
