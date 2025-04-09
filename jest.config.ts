import type {Config} from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/**/tests/**/*.spec.ts"],
  coveragePathIgnorePatterns: ["node_modules"],
};

export default config;
