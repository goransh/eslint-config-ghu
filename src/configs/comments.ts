/**
 * Rules for the plugin: @eslint-community/eslint-plugin-eslint-comments https://eslint-community.github.io/eslint-plugin-eslint-comments/
 */
import commentsConfigs from "@eslint-community/eslint-plugin-eslint-comments/configs";
import type { TSESLint } from "@typescript-eslint/utils";

export function comments(): TSESLint.FlatConfig.Config[] {
  return [
    {
      plugins: commentsConfigs.recommended.plugins,
      rules: {
        // Require a eslint-enable comment for every eslint-disable comment
        "@eslint-community/eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],
        // Disallow a eslint-enable comment for multiple eslint-disable comments
        "@eslint-community/eslint-comments/no-aggregating-enable": "warn",
        // Disallow duplicate eslint-disable comments
        "@eslint-community/eslint-comments/no-duplicate-disable": "warn",
        // Disallow eslint-disable comments without rule names
        "@eslint-community/eslint-comments/no-unlimited-disable": "warn",
        // Disallow unused eslint-disable comments
        "@eslint-community/eslint-comments/no-unused-disable": "error", // This rule can be buggy, remove if problematic
        // Disallow unused eslint-enable comments
        "@eslint-community/eslint-comments/no-unused-enable": "error",
        // Disallow eslint-disable comments about specific rules
        "@eslint-community/eslint-comments/no-restricted-disable": "off",
        // Disallow ESLint directive-comments
        "@eslint-community/eslint-comments/no-use": "off",
        // Require descriptions for eslint disable comments, they have to be on the same line prefixed with --
        "@eslint-community/eslint-comments/require-description": ["error", { ignore: ["eslint-enable"] }],
      }
    }

  ]
}
