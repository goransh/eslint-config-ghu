/**
 * Rules for the plugin: eslint-comments https://github.com/mysticatea/eslint-plugin-eslint-comments
 */
module.exports = {
  extends: ["plugin:eslint-comments/recommended"],
  rules: {
    "eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],
    "eslint-comments/no-duplicate-disable": "warn",
    "eslint-comments/no-unused-disable": "error", // This rule can be buggy, remove if problematic
    // Require descriptions for eslint disable comments, they have to be on the same line prefixed with --
    "eslint-comments/require-description": ["error", { ignore: ["eslint-enable"] }],
  },
};
