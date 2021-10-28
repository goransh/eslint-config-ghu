/**
 * Plugin: Prettier
 * Consider using https://github.com/prettier/prettier-eslint for better control?
 */
module.exports = {
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        printWidth: 100,
        useTabs: false,
        tabWidth: 2,
        endOfLine: "lf",
        trailingComma: "all",
        singleQuote: false,
      },
    ],
  },
};
