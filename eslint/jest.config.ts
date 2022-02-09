export default {
  resolver: '<rootDir>/tests/jest-resolver.ts',
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/**/tests/**/*.spec.ts"],
  coveragePathIgnorePatterns: ["node_modules"],
};
