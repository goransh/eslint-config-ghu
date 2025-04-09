/**
 * Configuration for plugin: import https://github.com/benmosher/eslint-plugin-import
 */
import type { TSESLint } from "@typescript-eslint/utils";
import { ESLint } from "eslint";
import { rules } from "eslint-plugin-import";

// Consider this, but won't work well when compiled?
// import importPluginPackage from "../../node_modules/eslint-plugin-import/package.json" with { type: "json" };

const importPlugin: ESLint.Plugin = {
  meta: {
    name: "eslint-plugin-import",
    version: "2.31.0",
  },
  rules: rules as ESLint.Plugin["rules"],
};

export function imports(): TSESLint.FlatConfig.Config[] {
  return [
    {
      name: "ghu/imports",
      files: ["**/*.{js,jsx,jsm,ts,tsx,tsm}"],
      plugins: {
        import: importPlugin,
      },
      rules: {
        "import/order": [
          "warn",
          {
            "groups": ["builtin", "external", "internal", ["parent", "sibling", "index"], "object"],
            "newlines-between": "always",
            "alphabetize": {
              order: "asc",
              caseInsensitive: false,
            },
          },
        ],
        "import/exports-last": "off",
        "import/newline-after-import": ["warn", { count: 1 }],
        "import/no-absolute-path": "warn",
        "import/no-deprecated": "warn",
        "import/no-extraneous-dependencies": "error",
        "import/no-mutable-exports": "warn",
        "import/no-named-as-default-member": "warn",
        "import/no-self-import": "warn",
        "import/no-useless-path-segments": ["warn", { noUselessIndex: true }],
      },
    },
  ];
}
