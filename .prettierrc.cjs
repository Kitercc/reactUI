module.exports = {
  arrowParens: "avoid",
  tabWidth: 2,
  parser: "typescript",
  printWidth: 120,
  semi: false,
  singleQuote: false,
  trailingComma: "all",
  jsxBracketSameLine: true,
  jsxSingleQuote: false,
  overrides: [
    {
      files: ["*.css", "*.less"],
      options: {
        parser: "css",
      },
    },
    {
      files: ["*.json"],
      options: {
        parser: "json",
      },
    },
  ],
}
