# Eslint Config Ghu

A very opinionated, batteries-included eslint config.

Please note: 

* This configuration is intended to be used in modern TypeScript projects with support for many of the latest ES features. If you are using this configuration in JavaScript or non-ES module projects, you may have to modify the configuration to allow syntax that would otherwise be banned. 
* Some rules that would otherwise have been enabled in JavaScript projects have been disabled because the typescript-eslint plugin overrides them. These configurations will likely not work in JavaScript projects.
* There are no framework or library specific configurations here. Will consider creating separate React and/or Angular specific configurations in the future.

## Install

This will install the config and all peer dependencies
```shell
npm i -D eslint-config-ghu eslint eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-prettier prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Create a `.eslintrc` file at the project root (same level as `package.json`) with this configuration:

```json
{
  "parserOptions": {
    "project": true
  },
  "extends": [
    "ghu"
  ]
}
```

Run eslint:

```shell
eslint src --max-warnings=0
```

Or with autofix (this will likely result in many changes if you have just added this configuration to an older project);

```shell
eslint src --max-warnings=0 --fix
```

## Includes plugins and configuration for

* eslint built in rules
* typescript plugin
* prettier
* imports
* comments


## **Important**: Warnings and errors

Many eslint other configurations will configure most rules as "errors", even if they are only stylistic or minor issues. This is, in my opinion, a bad practice and adds a lot of unnecessary noise to the developer experience. This is why the configurations in this package are mostly configured as "warn". **This does not mean they should be ignored.** The idea is that an error is something you must fix immediately whereas warnings are minor issues that are fixed automatically or must be fixed before the code is merged. 

* Errors: 
  * Code does not compile
  * Code that will always crash at runtime, such as reassigning a `const` variable
  * Uses unsafe/deprecated features
  * Code that does not make sense or is obviously incorrect such as properties defined multiple times or `return` statements in constructors. Think of it as "code that would not compile in most C-like languages".
* Warnings:
  * Stylistic errors, such as prettier. Most of these are fixed automatically (I recommend configuring your IDE to run eslint on save).
  * Minor issues that do compile, but may be considered code smells or likely unintended behavior. Examples include: `if (true)`, `debugger` statements and `await` in a `for`-loop. 

Make it a practice in your projects to never have any eslint errors or warnings. Configure your CI/CD pipeline to disallow any non-ignored eslint errors or warnings in merged code. This makes it so that every error and warning is either taken care of by the developer or explicitly ignored with a description as to why it was ignored. 

