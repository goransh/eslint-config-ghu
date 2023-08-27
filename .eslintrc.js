module.exports = {
  parserOptions: {
    project: true,
  },
  extends: ["./src/configs/all", "plugin:jest/recommended"],
  plugins: ["jest"],
  ignorePatterns: ["dist", "**/jest.config.ts", "**/jest-resolver.ts"],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    "@typescript-eslint/unbound-method": "off",
    "jest/unbound-method": "error",
  },
};
