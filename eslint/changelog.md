# Changelog

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
