import { ESLint } from "eslint";

describe("test", () => {
  const eslint = new ESLint({
    overrideConfig: {
      parserOptions: {
        project: "./tsconfig.json",
        createDefaultProgram: true,
      },
      root: true,
    },
    overrideConfigFile: "./src/configs/all.js",
    useEslintrc: false,
  });

  test("lintFiles should work", async () => {
    const result1 = await eslint.lintFiles("src/configs/base.js");
    result1.forEach(console.log);
  });

  test("lintText should work", async () => {
    const result = await eslint.lintText(
      // language=ts
      `
      const a = 1;
      console.log(a);
    `,
      { filePath: "src/test.ts" },
    );

    result.forEach(console.log);
  });
});
