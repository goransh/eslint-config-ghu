# Changelog

# 1.0.0-beta.0
_xx August 2023_

* Updated dependencies to the latest version. Major version bump for `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` (5 to 6).
* Removed configurations for deprecated rules.
* The `base` configuration no longer extends any other configurations such as `eslint:recommended`. Instead, every rule is explicitly configured. This makes the configuration much clearer and also ensures no rules are configured such that they do not follow this configuration's warning/error convention (see readme).
* Went through every configured rule and updated many of them. See diff for complete changelog. Some significant changes include:
  * The `curly` rule has been enabled. Curly braces are now always enforced in statements such as `if (...) { ... }`.
  * The `max-lines` rule is now more lenient, allowing up to 500 lines in a file (was 200). This is counteracted by the `max-statements` rule that is much better at catching actual large and complex functions. This rule is currently configured to allow a maximum of 16 statements in a function, but this may be changed to a stricter configuration in the future.
  * The `quote-props` rule has been enabled in favor of prettier's `quoteProps` configuration. This new configuration behaves mostly as before, but will now use consistent syntax for all properties in an object. If any properties in an object are named such that they need to be wrapped in quotes (such as `"my-property`"), then every property will have quotes. If no properties require quotes, then all no properties will have quotes.
  * The `@typescript-eslint/consistent-type-assertions` rule has been enabled. This will ban the `<Type>{...}` and `{...} as Type` cast syntax in favor of `{...} satisfies Type`. The semantics of this is different as it actually performs type checks and is much safer to use. The `as` syntax is still allowed where TypeScript cannot check the type and is also the preferred way to cast if you have to (requires disabling the rule for the statement).  

# 0.3.0
_9 February 2022_

* Removed unused peer dependency `eslint-config-prettier`
* Disabled a few rules that were more annoying than useful:
  * `capitalized-comments`: Annoying when commenting out code temporarily, ends up adding a lot of work to fix the code when it is uncommented again.
  * `@typescript-eslint/naming-convention`: There are many edge cases where this rule has to be disabled. It is also difficult to configure since it requires copying the entire rule configuration to make modifications.  
  * `@typescript-eslint/no-non-null-assertion`: Null assertions should be avoided, but they are useful sometimes when it is clear from the code that the value cannot be null/undefined, but the interpreter is unable to infer it.

# 0.2.0
_28 October 2021_

* Update `eslint` to v8
* Update `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` to v5
* Update `eslint-plugin-prettier` to v4
* Make sure prettier config doesn't use single quotes
* Loosened the rules for `@typescript-eslint/naming-convention` so that it is less annoying in edge cases.
