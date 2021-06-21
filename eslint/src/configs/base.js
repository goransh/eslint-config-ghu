module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  extends: ["eslint:recommended"],
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

    /*
     * Category: Possible Errors
     */

    // Disallow await inside of for loops
    "no-await-in-loop": "warn",
    // Disallow constant expressions in conditions, i.e. if (true)
    "no-constant-condition": "warn",
    // Disallow the use of debugger
    "no-debugger": "warn",
    // Disallow empty block statements
    "no-empty": "warn",
    "no-extra-boolean-cast": ["warn", { enforceForLogicalOperands: true }],
    // Disallow returning values from Promise executor functions
    "no-promise-executor-return": "warn",
    // Disallow template literal placeholder syntax in regular strings - bad: "${someValue}", good: `${someValue}`
    "no-template-curly-in-string": "warn",
    // Disallow loops with a body that allows only one iteration
    "no-unreachable-loop": "warn",
    // Disallow use of optional chaining in contexts where the undefined value is not allowed: (obj?.foo)() => (obj?.foo)?.()
    "no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],
    // Disallow useless backreferences in regular expressions
    "no-useless-backreference": "warn",
    // Disallow assignments that can lead to race conditions due to usage of await or yield
    "require-atomic-updates": "warn",
    "valid-typeof": ["error", { requireStringLiterals: true }],

    /*
     * Category: Best Practices
     */

    // Require return statements to either always or never specify values
    "consistent-return": "warn",
    /*
     * TODO curly rule doesn't allow ignoring unneccessary braces (https://github.com/eslint/eslint/issues/6141)
     * Can live without for now: prettier removes newline in if (condition) \n statement unless the line is too long
     * Would like to enable just the "consistent" option
     */
    /*
     * "curly": ["error", "multi", "consistent"],
     * Enforce default clauses in switch statements to be last
     */
    "default-case-last": "warn",
    eqeqeq: ["warn", "always"],
    "grouped-accessor-pairs": "warn",
    "no-alert": "warn",
    "no-caller": "error",
    "no-constructor-return": "warn",
    "no-else-return": "warn",
    "no-empty-pattern": "warn",
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
    "no-self-compare": "warn",
    "no-unmodified-loop-condition": "warn",
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

    "capitalized-comments": [
      "warn",
      "always",
      {
        ignorePattern: "language=",
      },
    ],
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
    // Use braces in arrow function body only when needed () => { return value; } => () => value
    "arrow-body-style": ["warn", "as-needed"],
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
  },
};
