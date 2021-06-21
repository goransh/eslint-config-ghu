/**
 * Configuration for plugin:  typescript-eslint
 * https://github.com/typescript-eslint
 */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    // Use T[] and readonly T[] instead of Array<T> and ReadonlyArray<T>
    "@typescript-eslint/array-type": ["warn", { default: "array" }],
    // Disallow awaiting a value that is not a Thenable
    "@typescript-eslint/await-thenable": "warn",
    // Bans @ts-ignore and @ts-nocheck comments, only allow @ts-expect-error with description
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": true, // Use ts-expect-error instead
        "ts-nocheck": true,
        minimumDescriptionLength: 3,
      },
    ],
    // Bans specific types from being used (String => string, Function etc.)
    "@typescript-eslint/ban-types": "warn",
    // Prefer using Record<string, T> instead of defining custom types like { [key: string]: T }
    "@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],
    "@typescript-eslint/consistent-type-assertions": "off",
    // Prefer using interface over type for object definitions
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
    // Enforce default parameters to be last
    "@typescript-eslint/default-param-last": "error",
    // Enforce dot notation whenever possible ( a.b over a["b"] )
    "@typescript-eslint/dot-notation": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "warn",
      {
        accessibility: "no-public",
        overrides: {
          properties: "explicit",
        },
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "init-declarations": "off",
    "@typescript-eslint/init-declarations": ["warn", "always"],
    "@typescript-eslint/method-signature-style": ["warn"],
    "@typescript-eslint/naming-convention": [
      // TODO consider allowing PascalCase properties? useful in some cases
      "warn",
      // Use camel and pascal case by default
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: "variable",
        format: ["camelCase", "PascalCase"],
      },
      // Boolean variables are prefixed with a verb
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "should", "has", "can", "did", "will", "show", "hide"],
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      // Private members are prefixed with underscore
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      {
        selector: "enumMember",
        format: ["PascalCase"],
      },
      // Type parameters are prefixed with T: T, TResult, TError
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        prefix: ["T"],
      },
      // Interfaces are NOT prefixed with I
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
    ],

    // Confusing: a! === b => b === a!
    "@typescript-eslint/no-confusing-non-null-assertion": "warn",
    // Requires expressions of type void to appear in statement position
    "@typescript-eslint/no-confusing-void-expression": ["warn", { ignoreArrowShorthand: true }],
    // Disallow duplicate class members
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": ["error"],

    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-imports": ["warn"],
    // Consider turning this on? Can be annoying in some cases
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "warn",

    /*
     * Disallow explicit any. Autofix to unknown instead of any where possible.
     * See https://devblogs.microsoft.com/typescript/announcing-typescript-3-0-rc-2/#the-unknown-type
     */
    "@typescript-eslint/no-explicit-any": [
      "warn",
      {
        fixToUnknown: true,
        ignoreRestArgs: true,
      },
    ],
    "@typescript-eslint/no-extra-non-null-assertion": "warn",
    // Forbids the use of classes as namespaces
    "@typescript-eslint/no-extraneous-class": "warn",
    // Requires Promise-like values to be handled appropriately
    "@typescript-eslint/no-floating-promises": "warn",
    // Disallow usage of the implicit any type in catch clauses, use unknown instead
    "@typescript-eslint/no-implicit-any-catch": "warn",
    // Disallows explicit type declarations for variables initialized to a number, string, or boolean
    "@typescript-eslint/no-inferrable-types": [
      "warn",
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    // Disallow this keywords outside of classes or class-like objects
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": ["error"],
    // Disallow defining functions in loops
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": ["warn"],
    // Disallow number literals that lose precision
    "no-loss-of-precision": "warn",
    "@typescript-eslint/no-loss-of-precision": ["warn"],
    /*
     * Disallow magic numbers/constants in the code, i.e. a[300], 40 * 40
     * TODO Too difficult to make it not be annoying, there are too many edge cases we'd like to ignore
     */
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": "off",

    "@typescript-eslint/no-misused-new": "warn",
    "@typescript-eslint/no-misused-promises": "warn",
    "@typescript-eslint/no-namespace": "warn",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-parameter-properties": "off",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": ["warn"],
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "warn",
    // Restrict what can be thrown as an exception
    "no-throw-literal": "warn",
    "@typescript-eslint/no-throw-literal": ["warn"],

    "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["warn"],
    // Prevents conditionals where the type is always truthy or always falsy
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unnecessary-qualifier": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-unnecessary-type-constraint": "warn",
    "@typescript-eslint/no-unsafe-argument": "error",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    // No 1 + 1; or similar unused expressions (not assigned or returned etc.)
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": ["warn", { enforceForJSX: true }],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "warn",
    "@typescript-eslint/non-nullable-type-assertion-style": "warn",
    "@typescript-eslint/prefer-as-const": "warn",
    "@typescript-eslint/prefer-for-of": "warn",
    // Use function types instead of interfaces with call signatures
    "@typescript-eslint/prefer-function-type": "warn",
    "@typescript-eslint/prefer-literal-enum-member": ["warn"], // TODO update to latest and enable { "allowBitwiseExpressions": true }
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    /*
     * TODO this is nice, but not sure if the extra readonly syntax everywhere is worth it
     * "@typescript-eslint/prefer-readonly-parameter-types": "warn",
     * Requires that private members are marked as readonly if they're never modified outside of the constructor (
     */
    "@typescript-eslint/prefer-readonly": "warn",
    // [1, 2, 3].reduce((arr, num) => ..., [] as number[]); => [1, 2, 3].reduce<number[]>((arr, num) => ..., []);
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    "@typescript-eslint/prefer-regexp-exec": "warn",
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",
    // Requires Array#sort calls to always provide a compareFunction as it can lead to bugs [1,2,10].sort() => [1,10,2]
    "@typescript-eslint/require-array-sort-compare": ["warn", { ignoreStringArrays: true }],
    // Disallow async functions which have no await expression
    "require-await": "off",
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/strict-boolean-expressions": [
      "warn",
      {
        allowNullableObject: true,
        allowNullableBoolean: true,
        allowNullableString: true,
      },
    ],
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/unbound-method": "warn",

    // TODO remove, replaced by consistent-type-assertions
    "@typescript-eslint/no-object-literal-type-assertion": "off",
  },
};
