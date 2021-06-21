/**
 * Plugin: Prettier
 * Consider using https://github.com/prettier/prettier-eslint for better control?
 */
module.exports = {
  plugins: ["prettier"],
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        printWidth: 100,
        useTabs: false,
        tabWidth: 2,
        endOfLine: "lf",
        trailingComma: "all",
      },
    ],
  },
};
