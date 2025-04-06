/**
 * Rules for the plugin: @eslint-community/eslint-plugin-eslint-comments https://eslint-community.github.io/eslint-plugin-eslint-comments/
 */
import { Config } from "typescript-eslint";
import commentsConfigs from "@eslint-community/eslint-plugin-eslint-comments/configs";
import type { TSESLint } from "@typescript-eslint/utils";

export function comments(): TSESLint.FlatConfig.Config[] {
  return [
    commentsConfigs.recommended,
    {
      rules: {
        "@eslint-community/eslint-plugin-eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],
        "@eslint-community/eslint-plugin-eslint-comments/no-duplicate-disable": "warn",
        "@eslint-community/eslint-plugin-eslint-comments/no-unused-disable": "error", // This rule can be buggy, remove if problematic
        // Require descriptions for eslint disable comments, they have to be on the same line prefixed with --
        "@eslint-community/eslint-plugin-eslint-comments/require-description": ["error", { ignore: ["eslint-enable"] }],
      }
    }

  ]
}
