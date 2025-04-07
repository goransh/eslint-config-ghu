import { plugin, config } from "typescript-eslint";
import type { TSESLint } from "@typescript-eslint/utils";

export function ts(): TSESLint.FlatConfig.Config[] {
  return config([{
    plugins: {
      "@typescript-eslint": plugin,
    },
    rules: {
      /**
       * Typescript eslint plugin config
       * https://typescript-eslint.io/rules/
       */

      /**
       * Category: Supported Rules https://typescript-eslint.io/rules/#supported-rules
       */

      "@typescript-eslint/adjacent-overload-signatures": "warn",
      // Require consistently using either T[] or Array<T> for arrays.
      "@typescript-eslint/array-type": "off", // Consider configuring this to only allow the Array<T> syntax (opposite of prev config)
      // Disallow awaiting a value that is not a Thenable
      "@typescript-eslint/await-thenable": "warn",
      // Bans @ts-ignore and @ts-nocheck comments, only allow @ts-expect-error with description
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": "allow-with-description",
          "ts-ignore": true, // Use ts-expect-error instead
          "ts-nocheck": true,
          "minimumDescriptionLength": 3,
        },
      ],
      // Disallow // tslint:<rule-flag> comments
      "@typescript-eslint/ban-tslint-comment": "warn",
      // Bans specific types from being used (String => string, Function etc.)
      "@typescript-eslint/ban-types": "warn",
      // Enforce that literals on classes are exposed in a consistent style.
      "@typescript-eslint/class-literal-property-style": "off", // Only applies to library code
      // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
      "@typescript-eslint/consistent-generic-constructors": "off", // Leave this to the developer
      // Prefer using Record<string, T> instead of defining custom types like { [key: string]: T }
      "@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],
      // Enforce consistent usage of type assertions.
      "@typescript-eslint/consistent-type-assertions": [
        "warn",
        { assertionStyle: "as", objectLiteralTypeAssertions: "never" },
      ],
      // Prefer using interface over type for object definitions
      "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
      // Enforce consistent usage of type exports.
      "@typescript-eslint/consistent-type-exports": "off", // Will likely only add unnecessary complexity to non-library code
      // Enforce consistent usage of type imports
      "@typescript-eslint/consistent-type-imports": "off", // Consider enabling this in the future
      // Require explicit return types on functions and class methods.
      "@typescript-eslint/explicit-function-return-type": "off", // Consider turning on. Likely too many edge cases in React codebases.
      // Require explicit accessibility modifiers on class properties and methods.
      "@typescript-eslint/explicit-member-accessibility": [
        "warn",
        {
          accessibility: "no-public",
        },
      ],
      // Require explicit return and argument types on exported functions' and classes' public class methods.
      "@typescript-eslint/explicit-module-boundary-types": "off",
      // Enforce using a particular method signature syntax.
      "@typescript-eslint/method-signature-style": ["warn"],
      // Too many edge cases, ends just up being annoying
      "@typescript-eslint/naming-convention": ["off"],
      // Require .toString() to only be called on objects which provide useful information when stringified.
      "@typescript-eslint/no-base-to-string": "warn",
      // Confusing: a! === b => b === a!
      "@typescript-eslint/no-confusing-non-null-assertion": "warn",
      // Requires expressions of type void to appear in statement position
      "@typescript-eslint/no-confusing-void-expression": ["warn", { ignoreArrowShorthand: true }],
      // Disallow duplicate enum member values.
      "@typescript-eslint/no-duplicate-enum-values": "warn",
      // Disallow duplicate constituents of union or intersection types.
      "@typescript-eslint/no-duplicate-type-constituents": "warn",
      // Disallow using the delete operator on computed key expressions
      "@typescript-eslint/no-dynamic-delete": "off", // `delete` is not used frequently, and when it is used, allowing this syntax is often necessary
      // Disallow the declaration of empty interfaces.
      "@typescript-eslint/no-empty-interface": ["warn", { allowSingleExtends: true }],
      /*
       * Disallow explicit any. Autofix to unknown instead of `any` where possible.
       * See https://devblogs.microsoft.com/typescript/announcing-typescript-3-0-rc-2/#the-unknown-type
       */
      "@typescript-eslint/no-explicit-any": [
        "warn",
        {
          fixToUnknown: true,
          ignoreRestArgs: true,
        },
      ],
      // Disallow extra non-null assertions.
      "@typescript-eslint/no-extra-non-null-assertion": "warn",
      // Disallow classes used as namespaces.
      "@typescript-eslint/no-extraneous-class": "warn",
      // Require Promise-like statements to be handled appropriately.
      "@typescript-eslint/no-floating-promises": ["warn", { ignoreVoid: true }],
      // Disallow iterating over an array with a for-in loop
      "@typescript-eslint/no-for-in-array": "warn",
      // Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
      "@typescript-eslint/no-import-type-side-effects": "warn",
      // Disallows explicit type declarations for variables initialized to a number, string, or boolean
      "@typescript-eslint/no-inferrable-types": [
        "warn",
        {
          ignoreParameters: true,
          ignoreProperties: true,
        },
      ],
      // Disallow void type outside of generic or return types
      "@typescript-eslint/no-invalid-void-type": ["warn", { allowInGenericTypeArguments: true }],
      // Disallow the void operator except when used to discard a value
      "@typescript-eslint/no-meaningless-void-operator": "warn",
      // Enforce valid definition of new and constructor
      "@typescript-eslint/no-misused-new": "warn",
      // Disallow Promises in places not designed to handle them.
      "@typescript-eslint/no-misused-promises": [
        "warn",
        {
          checksVoidReturn: false,
        },
      ],
      // Disallow enums from having both number and string members
      "@typescript-eslint/no-mixed-enums": "warn",
      // Disallow TypeScript namespaces.
      "@typescript-eslint/no-namespace": "warn",
      // Disallow non-null assertions in the left operand of a nullish coalescing operator
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "warn",
      // Disallow non-null assertions after an optional chain expression.
      "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
      // Can be a useful feature to use sometimes, where it is clear from the code that the value cannot be null/undefined, but the interpreter is unable to infer this
      "@typescript-eslint/no-non-null-assertion": "off",
      /*
       * Disallow members of unions and intersections that do nothing or override type information
       * Disabled because: Type unions between literal types and the `string` type (i.e. "Success" | "Error" | string)  is useful in
       * many cases to provide type hints in the IDE for common cases. The rule has no configuration to allow this pattern.
       */
      "@typescript-eslint/no-redundant-type-constituents": "off",
      // Disallow invocation of require().
      "@typescript-eslint/no-require-imports": "error",
      // Disallow aliasing this
      "@typescript-eslint/no-this-alias": "warn",
      // Disallow unnecessary equality comparisons against boolean literals.
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
      /*
       * Prevents conditionals where the type is always truthy or always falsy
       * Disabled because: Too many cases where typing info is not good enough for this to be more useful than annoying.
       * Example: Array indexing without the TS config that makes it return undefined will trigger a warning for this, even
       * though the code is perfectly legit (values[0]?.prop)
       */
      "@typescript-eslint/no-unnecessary-condition": "off",
      // Disallow unnecessary namespace qualifiers.
      "@typescript-eslint/no-unnecessary-qualifier": "warn",
      // Disallow type arguments that are equal to the default.
      "@typescript-eslint/no-unnecessary-type-arguments": "warn",
      // Disallow type assertions that do not change the type of an expression.
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      // Disallow unnecessary constraints on generic types.
      "@typescript-eslint/no-unnecessary-type-constraint": "warn",
      // Disallow calling a function with a value with type any.
      "@typescript-eslint/no-unsafe-argument": "error",
      // Disallow calling a value with type any.
      "@typescript-eslint/no-unsafe-call": "error",
      // Disallow unsafe declaration merging
      "@typescript-eslint/no-unsafe-declaration-merging": "error",
      // Disallow comparing an enum value with a non-enum value
      "@typescript-eslint/no-unsafe-enum-comparison": "off", // There are cases where this is useful, for instance with values coming from an API. Consider turning this on.
      // Disallow member access on a value with type any.
      "@typescript-eslint/no-unsafe-member-access": "error",
      // Disallow returning a value with type any from a function.
      "@typescript-eslint/no-unsafe-return": "error",
      // Disallow empty exports that don't change anything in a module file
      "@typescript-eslint/no-useless-empty-export": "off", // Allow this for now.
      // Disallow require statements except in import statements.
      "@typescript-eslint/no-var-requires": "off", // `require` is banned.
      // Enforce non-null assertions over explicit type casts.
      "@typescript-eslint/non-nullable-type-assertion-style": "warn",
      // Require or disallow parameter properties in class constructors.
      "@typescript-eslint/no-parameter-properties": "off", // Syntax is fine with formatting and reduces boilerplate code significantly
      // Enforce the use of as const over literal type.
      "@typescript-eslint/prefer-as-const": "warn",
      // Require each enum member value to be explicitly initialized
      "@typescript-eslint/prefer-enum-initializers": "warn",
      // Enforce the use of for-of loop over the standard for loop where possible.
      "@typescript-eslint/prefer-for-of": "warn",
      // Use function types instead of interfaces with call signatures
      "@typescript-eslint/prefer-function-type": "warn",
      // Enforce includes method over indexOf method
      "@typescript-eslint/prefer-includes": "warn",
      // Require all enum members to be literal values.
      "@typescript-eslint/prefer-literal-enum-member": ["warn", { allowBitwiseExpressions: true }],
      // Require using namespace keyword over module keyword to declare custom TypeScript modules
      "@typescript-eslint/prefer-namespace-keyword": "warn",
      // Enforce using the nullish coalescing operator instead of logical assignments or chaining.
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      // Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
      "@typescript-eslint/prefer-optional-chain": "warn",
      // Require private members to be marked as readonly if they're never modified outside of the constructor.
      "@typescript-eslint/prefer-readonly": "warn",
      // Require function parameters to be typed as readonly to prevent accidental mutation of inputs
      "@typescript-eslint/prefer-readonly-parameter-types": "off", // This is nice, but not sure if the extra readonly syntax everywhere is worth it
      // [1, 2, 3].reduce((arr, num) => ..., [] as number[]); => [1, 2, 3].reduce<number[]>((arr, num) => ..., []);
      "@typescript-eslint/prefer-reduce-type-parameter": "off", // Other rules makes using reduce this way very clunky
      // Enforce RegExp#exec over String#match if no global flag is provided.
      "@typescript-eslint/prefer-regexp-exec": "warn",
      // Enforce that this is used when only this type is returned
      "@typescript-eslint/prefer-return-this-type": "warn",
      // Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings.
      "@typescript-eslint/prefer-string-starts-ends-with": "warn",
      // Enforce using @ts-expect-error over @ts-ignore
      "@typescript-eslint/prefer-ts-expect-error": "off", // Handled by @typescript-eslint/ban-ts-comment
      // Require any function or method that returns a Promise to be marked async
      "@typescript-eslint/promise-function-async": "off", // A few edge cases makes this annoying
      // Requires Array#sort calls to always provide a compareFunction as it can lead to bugs [1,2,10].sort() => [1,10,2]
      "@typescript-eslint/require-array-sort-compare": ["warn", { ignoreStringArrays: true }],
      // Require both operands of addition to be the same type and be bigint, number, or string
      "@typescript-eslint/restrict-plus-operands": "error",
      // Enforce template literal expressions to be of string type
      "@typescript-eslint/restrict-template-expressions": "warn",
      // Enforce constituents of a type union/intersection to be sorted alphabetically
      "@typescript-eslint/sort-type-constituents": "off", // Leave this to the developer
      // Disallow certain types in boolean expressions.
      "@typescript-eslint/strict-boolean-expressions": [
        "warn",
        {
          allowNullableObject: true,
          allowNullableBoolean: true,
          allowNullableString: true,
        },
      ],
      // Require switch-case statements to be exhaustive with union type.
      "@typescript-eslint/switch-exhaustiveness-check": "warn",
      // Disallow certain triple slash directives in favor of ES6-style import declarations
      "@typescript-eslint/triple-slash-reference": "warn",
      // Require type annotations in certain places
      "@typescript-eslint/typedef": "off", // Consider enabling this. Not sure if it is necessary since other rules covers many of the cases where TS cannot infer types
      // Enforce unbound methods are called with their expected scope
      "@typescript-eslint/unbound-method": "warn",
      // Disallow two overloads that could be unified into one with a union or an optional/rest parameter
      "@typescript-eslint/unified-signatures": "warn",

      /**
       * Category: Extension Rules https://typescript-eslint.io/rules/#extension-rules
       * Rules that override built-in eslint rules with TS support.
       */
      "@typescript-eslint/class-methods-use-this": [
        "warn",
        {
          enforceForClassFields: false,
          ignoreOverrideMethods: true,
          ignoreClassesThatImplementAnInterface: true,
        },
      ],
      // Enforce default parameters to be last
      "@typescript-eslint/default-param-last": "error",
      // Enforce dot notation whenever possible ( a.b over a["b"] )
      "@typescript-eslint/dot-notation": "warn",
      // Require or disallow initialization in variable declarations.
      "@typescript-eslint/init-declarations": ["warn", "always"],
      // Disallow generic Array constructors
      "@typescript-eslint/no-array-constructor": "warn",
      // Disallow duplicate class members
      "@typescript-eslint/no-dupe-class-members": ["error"],
      // Disallow empty functions.
      "@typescript-eslint/no-empty-function": [
        "warn",
        { allow: ["private-constructors", "protected-constructors", "overrideMethods"] },
      ],
      // Disallow the use of eval()-like methods
      "@typescript-eslint/no-implied-eval": "error",
      // Disallow this keywords outside of classes or class-like objects
      "@typescript-eslint/no-invalid-this": "error",
      // Disallow defining functions in loops
      "@typescript-eslint/no-loop-func": "warn",
      // Disallow number literals that lose precision
      "@typescript-eslint/no-loss-of-precision": ["warn"],
      /*
       * Disallow magic numbers/constants in the code, i.e. a[300], 40 * 40
       * Too difficult to make it not be annoying, there are too many edge cases we'd like to ignore
       */
      "@typescript-eslint/no-magic-numbers": "off",
      // Disallow variable redeclaration.
      "@typescript-eslint/no-redeclare": "warn",
      // Disallow variable declarations from shadowing variables declared in the outer scope
      "@typescript-eslint/no-shadow": "warn",
      // Restrict what can be thrown as an exception
      "@typescript-eslint/no-throw-literal": "warn",
      // No 1 + 1; or similar unused expressions (not assigned or returned etc.)
      "@typescript-eslint/no-unused-expressions": ["warn", { enforceForJSX: true }],
      // Disallow unused variables
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { vars: "all", args: "after-used", ignoreRestSiblings: true, caughtErrors: "all" },
      ],
      /*
       * Letting the developer choose declaration ordering can
       * often result in more readable code IMO as it follows a more natural reading order. Example: An interface for an
       * API response type is declared at the top of a file and one or more of its properties are of a type that are
       * defined below it.
       */
      "@typescript-eslint/no-use-before-define": "off",
      // Disallow unnecessary constructors
      "@typescript-eslint/no-useless-constructor": "warn",
      // Disallow async functions which have no await expression
      "@typescript-eslint/require-await": "warn",
      // Disallow assigning a value with type any to variables and properties.
      "@typescript-eslint/no-unsafe-assignment": "warn",
    }
  }
  ])
}

