import { ESLint } from "eslint";

describe("test", () => {
  const eslint = new ESLint({
    overrideConfig: {
      parserOptions: {
        project: "./tsconfig.json",
        createDefaultProgram: true,
      },
    },
    overrideConfigFile: "./src/configs/base.js",
  });

  test("lintFiles should work", async () => {
    const result1 = await eslint.lintFiles("src/configs/base.js");
    result1.forEach(console.log);
  });

  test("lintText should work", async () => {
    // Language=ts
    const result = await eslint.lintText(
      `
      const a = 1;
      console.log(a);
    `,
      { filePath: "src/test.ts" },
    );

    result.forEach(console.log);

    expect(true).toEqual(true);
  });
});
