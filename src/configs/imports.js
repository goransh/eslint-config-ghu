/**
 * Configuration for plugin: import https://github.com/benmosher/eslint-plugin-import
 */
module.exports = {
  extends: ["plugin:import/recommended", "plugin:import/typescript"],
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
};
