/* eslint-disable max-lines -- Easiest way to make the rule precedence work, may split up in the future */
/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended"], // TODO remove. Everything is configured explicitly now.
  rules: {
    /*
     * Eslint rules https://eslint.org/docs/rules
     * Notes:
     * https://eslint.org/docs/rules/no-dupe-args
     * https://eslint.org/docs/rules/no-sequences
     * import/no-nodejs-modules
     * no-internal-modules.md
     * sort-imports replace with autofixer https://github.com/eslint/eslint/issues/11542
     */

    /**
     * Category: Possible problems https://eslint.org/docs/latest/rules/#possible-problems
     */

    // Enforce return statements in callbacks of array methods
    "array-callback-return": "warn",
    // Require super() calls in constructors
    "constructor-super": "error",
    // Enforce "for" loop update clause moving the counter in the right direction
    "for-direction": "warn",
    // Enforce return statements in getters
    "getter-return": "error",
    // Disallow using an async function as a Promise executor
    "no-async-promise-executor": "warn",
    // Disallow await inside for loops
    "no-await-in-loop": "warn",
    // Disallow reassigning class members
    "no-class-assign": "error",
    // Disallow comparing against -0
    "no-compare-neg-zero": "warn",
    // Disallow reassigning const variables
    "no-const-assign": "error",
    // Disallow expressions where the operation doesn't affect the value
    "no-constant-binary-expression": "warn",
    // Disallow constant expressions in conditions, i.e. if (true)
    "no-constant-condition": "warn",
    // Disallow returning value from constructor
    "no-constructor-return": "error",
    // Disallow control characters in regular expressions
    "no-control-regex": "warn",
    // Disallow the use of debugger
    "no-debugger": "warn",
    // Disallow duplicate arguments in function definitions
    "no-dupe-args": "error",
    // Disallow duplicate conditions in if-else-if chains
    "no-dupe-else-if": "warn",
    // Disallow duplicate keys in object literals
    "no-dupe-keys": "error",
    // Disallow duplicate case labels
    "no-duplicate-case": "warn",
    // Disallow duplicate module imports
    "no-duplicate-imports": "error",
    // Disallow empty character classes in regular expressions
    "no-empty-character-class": "warn",
    // Disallow empty destructuring patterns
    "no-empty-pattern": "warn",
    // Disallow reassigning exceptions in catch clauses
    "no-ex-assign": "error",
    // Disallow fallthrough of case statements
    "no-fallthrough": "error",
    // Disallow reassigning function declarations
    "no-func-assign": "error",
    // Disallow assigning to imported bindings
    "no-import-assign": "error",
    // Disallow variable or function declarations in nested blocks
    "no-inner-declarations": "warn",
    // Disallow invalid regular expression strings in RegExp constructors
    "no-invalid-regexp": "error",
    // Disallow irregular whitespace
    "no-irregular-whitespace": "warn",
    // Disallow characters which are made with multiple code points in character class syntax
    "no-misleading-character-class": "warn",
    // Disallow new operators with global non-constructor functions
    "no-new-native-nonconstructor": "error",
    // Disallow new operators with the Symbol object
    "no-new-symbol": "error",
    // Disallow calling global object properties as functions
    "no-obj-calls": "error",
    // Disallow returning values from Promise executor functions
    "no-promise-executor-return": "warn",
    /*
     * Disallow calling some Object.prototype methods directly on objects
     * Prefer Object.hasOwn
     */
    "no-prototype-builtins": "error",
    // Disallow assignments where both sides are exactly the same
    "no-self-assign": "warn",
    // Disallow comparisons where both sides are exactly the same
    "no-self-compare": "warn",
    // Disallow returning values from setters
    "no-setter-return": "error",
    // Disallow sparse arrays: [1,,2] or [,]
    "no-sparse-arrays": "warn",
    // Disallow template literal placeholder syntax in regular strings - bad: "${someValue}", good: `${someValue}`
    "no-template-curly-in-string": "warn",
    // Disallow this/super before calling super() in constructors
    "no-this-before-super": "warn",
    // Disallow the use of undeclared variables unless mentioned in /*global ...*/ comments
    "no-undef": "error",
    // Disallow confusing multiline expressions
    "no-unexpected-multiline": "warn",
    // Disallow unmodified loop conditions
    "no-unmodified-loop-condition": "warn",
    // Disallow unreachable code after return, throw, continue, and break statements
    "no-unreachable": "warn",
    // Disallow loops with a body that allows only one iteration
    "no-unreachable-loop": "warn",
    // Disallow control flow statements in finally blocks
    "no-unsafe-finally": "warn",
    // Disallow negating the left operand of relational operators
    "no-unsafe-negation": ["warn", { enforceForOrderingRelations: true }],
    // Disallow use of optional chaining in contexts where the undefined value is not allowed: (obj?.foo)() => (obj?.foo)?.()
    "no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],
    // Disallow unused private class members
    "no-unused-private-class-members": "warn",
    // Disallow unused variables
    "no-unused-vars": [
      "warn",
      { vars: "all", args: "after-used", ignoreRestSiblings: false, caughtErrors: "all" },
    ],
    // Disallow the use of variables before they are defined
    "no-use-before-define": [
      "warn",
      {
        functions: false,
        classes: true,
        variables: true,
        allowNamedExports: false,
      },
    ],
    // Disallow useless backreferences in regular expressions
    "no-useless-backreference": "warn",
    // Disallow assignments that can lead to race conditions due to usage of await or yield
    "require-atomic-updates": "warn",
    // Require calls to isNaN() when checking for NaN
    "use-isnan": ["error", { enforceForSwitchCase: true, enforceForIndexOf: true }],
    // Enforce comparing typeof expressions against valid strings
    "valid-typeof": ["error", { requireStringLiterals: true }],

    /**
     * Category: Suggestions https://eslint.org/docs/latest/rules/#suggestions
     */

    "accessor-pairs": "warn",
    // Use braces in arrow function body only when needed () => { return value; } => () => value
    "arrow-body-style": ["warn", "as-needed"],
    // Enforce the use of variables within the scope they are defined
    "block-scoped-var": "off", // 'var' is banned
    // Enforce camelcase naming convention
    camelcase: "off", // Consider enabling this if there are not too many edge cases

    /*
     * Enforce or disallow capitalization of the first letter of a comment
     * Would like to enable this, but it is annoying when commenting out code temporarily, ends up adding a lot of
     * work to fix the comments
     */
    "capitalized-comments": "off",
    // Enforce that class methods utilize this
    "class-methods-use-this": ["warn", { enforceForClassFields: false }],
    // Enforce a maximum cyclomatic complexity allowed in a program
    complexity: "off", // Would be nice, but triggers too frequently in perfectly readable React components

    // Require return statements to either always or never specify values
    "consistent-return": "warn",
    // Enforce consistent naming when capturing the current execution context
    "consistent-this": "off", // Not relevant in most modern code
    // Enforce consistent brace style for all control statements
    curly: ["warn", "all"],
    // Require default cases in switch statements
    "default-case": "off",
    // Enforce default clauses in switch statements to be last
    "default-case-last": "warn",
    // Enforce default parameters to be last
    "default-param-last": "off", // Handled by typescript-eslint
    // Enforce dot notation whenever possible
    "dot-notation": "off", // Handled by typescript-eslint
    // Require the use of === and !==
    eqeqeq: ["warn", "always"], // Not categorized as error because it is auto-fixed
    // Require function names to match the name of the variable or property to which they are assigned
    "func-name-matching": "warn",

    // TODO continue here

    // Disallow empty block statements
    "no-empty": "warn",
    "no-extra-boolean-cast": ["warn", { enforceForLogicalOperands: true }],

    /*
     * Category: Best Practices
     */
    "grouped-accessor-pairs": "warn",
    "no-alert": "warn",
    "no-caller": "error",
    "no-else-return": "warn",
    "no-eval": "error",
    // Disallow Extending of Native Objects, i.e. Object.prototype.extra = 55;
    "no-extend-native": "error",
    // Disallow unnecessary function binding
    "no-extra-bind": "warn",
    // Disallow Unnecessary Labels
    "no-extra-label": "warn",
    // Disallow implied eval(), i.e. setTimeout("alert('Hi!');", 100);
    "no-implied-eval": "error",
    "no-new-wrappers": "warn",
    "no-nonoctal-decimal-escape": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "warn",
    "no-proto": "error",
    "no-return-assign": "warn",
    // Disallows unnecessary return await (small performance increase) - see https://jakearchibald.com/2017/await-vs-return-vs-return-await/
    "no-return-await": "warn",
    // Disallow javascript: URLs (works like eval())
    "no-script-url": "error",
    // Disallow unnecessary .call() and .apply()
    "no-useless-call": "warn",
    // Disallow unnecessary catch clauses, i.e. catch(e) { throw e; }
    "no-useless-catch": "warn",
    // Disallow unnecessary concatenation of strings, i.e. "a" + "b" => "ab"
    "no-useless-concat": "warn",
    "no-useless-return": "warn",
    // Disallow with statements ( with(something) {} ), use descructuring instead
    "no-with": "error",
    // Require using Error objects as Promise rejection reasons
    "prefer-promise-reject-errors": "warn",
    "prefer-regex-literals": "warn",
    // Disallow Yoda conditions ("red" === color => color === "red")
    yoda: ["warn", "never", { exceptRange: true }],
    // Disallow labels that are variable names
    "no-label-var": "error",
    // Disallow specific global variables
    "no-restricted-globals": ["error", "event"],
    // Consider turning this on in the future, see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    "no-shadow": "off",

    /*
     * Category: Stylistic Issues
     * Most of eslint's rules in this category are handled by prettier
     */

    // Prefer "function foo(){..." over "const foo = function{..."
    "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
    "lines-between-class-members": ["warn", "always", { exceptAfterSingleLine: true }],
    "max-depth": ["warn", 3],
    "max-lines": [
      "warn",
      {
        max: 200,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "max-params": ["warn", { max: 4 }],
    /*
     * Doesn't know how to ignore JSX. Can use override, but would like to configure util functions (that can also
     * appear in .tsx files) and components separately.
     */
    "max-lines-per-function": "off",
    "max-nested-callbacks": ["warn", { max: 4 }],
    "max-statements-per-line": [
      "warn",
      {
        max: 2,
      },
    ],

    /*
     * Disallows consecutive line comments in favor of block comments.
     * Additionally, requires block comments to have an aligned * character before each line.
     */
    "multiline-comment-style": ["warn", "starred-block"],
    "new-cap": "warn",
    "new-parens": ["warn", "always"],
    // If (a) {...} else { if (b) {...} } => if (a) {...} else if (b) {...}
    "no-lonely-if": "warn",
    // Disallows: const foo = bar = 0
    "no-multi-assign": "warn",
    // !a ? c : b => a ? b : c
    "no-negated-condition": "warn",
    // Disallow Object constructors, new Object() => {}
    "no-new-object": "warn",
    /*
     * Disallow newline of single-line statements if (a) \n statement; (if, else, while, do-while and for)
     * Before disabling this rule, read https://www.imperialviolet.org/2014/02/22/applebug.html
     */
    "nonblock-statement-body-position": "error",

    "one-var": ["warn", "never"],

    "prefer-exponentiation-operator": "warn",

    // Prefer use of an object spread over Object.assign
    "prefer-object-spread": "warn",
    "spaced-comment": ["warn", "always"],

    /*
     * Category: ECMAScript 6
     */
    "no-useless-computed-key": "warn",
    "no-useless-rename": "warn",
    "no-var": "error",
    "object-shorthand": ["warn", "always"],
    // Prefer arrow functions over function expressions in callbacks handle(function (event) { ... }) => handle((event) => {...})
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
    "prefer-numeric-literals": "warn",
    // Suggest using the rest parameters instead of arguments
    "prefer-rest-params": "warn",
    // Suggest using spread syntax instead of .apply()
    "prefer-spread": "warn",
    // Suggest using template literals instead of string concatenation
    "prefer-template": "warn",

    /**
     * Typescript eslint plugin config
     */

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
    "@typescript-eslint/ban-types": [
      "warn",
      {
        types: {
          // This was removed from the old default config
          object: {
            message: [
              "The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).",
              "Consider using `Record<string, unknown>` instead, as it allows you to more easily inspect and use the keys.",
            ].join("\n"),
          },
        },
        extendDefaults: true,
      },
    ],
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
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "init-declarations": "off",
    "@typescript-eslint/init-declarations": ["warn", "always"],
    "@typescript-eslint/method-signature-style": ["warn"],
    // Too many edge cases, ends just up being annoying
    "@typescript-eslint/naming-convention": ["off"],

    // Confusing: a! === b => b === a!
    "@typescript-eslint/no-confusing-non-null-assertion": "warn",
    // Requires expressions of type void to appear in statement position
    "@typescript-eslint/no-confusing-void-expression": ["warn", { ignoreArrowShorthand: true }],
    // Disallow duplicate class members
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": ["error"],

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
    "no-loss-of-precision": "off",
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
    // Can be a useful feature to use sometimes, where it is clear from the code that the value cannot be null/undefined, but the interpreter is unable to infer this
    "@typescript-eslint/no-non-null-assertion": "off",
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
