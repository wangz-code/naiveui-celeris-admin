export default {
  endOfLine: 'auto',
  overrides: [
    {
      files: ['*.json5'],
      options: {
        quoteProps: 'preserve',
        singleQuote: false,
      },
    },
  ],
  plugins: [],
  proseWrap: 'never',
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 180,
};
