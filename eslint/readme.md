# Eslint Config Ghu

A very opinionated, batteries-included eslint config. Work in progress.

## Install

This will install the config and all peer dependencies
```shell
npm i -D eslint-config-ghu eslint eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-prettier prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Create a `.eslintrc` file at the project root (same level as `package.json`) with this configuration:

```json
{
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "extends": [
    "ghu"
  ]
}
```

Run eslint:

```shell
eslint src
```

Or with autofix (not recommended if you just added this to an older project);

```shell
eslint src --fix
```

# Includes plugins and configuration for

* eslint built in rules
* typescript plugin
* prettier
* and much more

Will document this better in the future.


```ts
const list: string[] = [];

const lengths = list.map(element => element.length);

const lengths = [];
for (let element of list) {
  lengths.push(element.length);
}



```
