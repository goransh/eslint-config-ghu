import {config} from "typescript-eslint"
// import jestPlugin  from "eslint-plugin-jest"
import { all } from "./src";

export default config([{
  plugins: {
    // "jest": jestPlugin,
  },
    extends: [...all()],
  // ignorePatterns: ["dist", "**/jest.config.ts", "**/jest-resolver.ts"],
  // env: {
  //   browser: true,
  //   node: true,
  //   jest: true,
  // },
  rules: {
    "@typescript-eslint/unbound-method": "off",
    "jest/unbound-method": "error",
  },
}]);
