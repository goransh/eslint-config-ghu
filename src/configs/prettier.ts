import type { TSESLint } from "@typescript-eslint/utils";
import prettierPlugin from "eslint-plugin-prettier";

export function prettier(): TSESLint.FlatConfig.Config[] {
  return [
    {
      name: "ghu/prettier",
      plugins: {
        prettier: prettierPlugin,
      },
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
            quoteProps: "preserve", // Handled by the "quote-props" eslint rule
          },
        ],
      },
    },
  ];
}
