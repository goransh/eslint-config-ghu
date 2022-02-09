import { ESLint } from "eslint";

describe("base tests", () => {
  const eslint = new ESLint({
    overrideConfig: {
      parserOptions: {
        project: "./tsconfig.json",
        createDefaultProgram: true,
      },
      root: true,
      env: {
        node: true,
      },
    },
    overrideConfigFile: "./src/configs/all.js",
    useEslintrc: false,
  });

  test("fixture should be configured so files can be lint-tested", async () => {
    const lintFilesResults = await eslint.lintFiles("src/configs/base.js");
    lintFilesResults.forEach(console.log);
  });

  test("fixture should be configured so text can be lint-tested", async () => {
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

  test("basic rules", async () => {
    const results = await eslint.lintText(
      // language=ts
      `
function fn(parameter:number){
var someVariable=1
if(someVariable==parameter)
  console.log('Hello')
else
  console.log('Goodbye')
}
fn(1);
fn(10);
`,
    );

    expect(results.length).toBe(1);

    const result = results[0];

    // Check if prettier is configured
    const prettierMessages = result.messages.filter(
      (message) => message.ruleId === "prettier/prettier",
    );
    expect(prettierMessages.length).toBeGreaterThan(0);

    const allPrettierMessagesWarn = prettierMessages.every((message) => message.severity === 1);
    expect(allPrettierMessagesWarn).toBe(true);

    const eqeqeqMessage = result.messages.find((message) => message.ruleId === "eqeqeq");
    expect(eqeqeqMessage).toBeTruthy(); // Not undefined
    expect(eqeqeqMessage!.severity).toBe(1); // Warn

    const nonblockStatementMessages = result.messages.filter(
      (message) => message.ruleId === "nonblock-statement-body-position",
    );
    expect(nonblockStatementMessages.length).toBe(2); // Both for the if and else statements

    const allNonBlockStatementMessagesError = nonblockStatementMessages.every(
      (message) => message.severity === 2,
    );
    expect(allNonBlockStatementMessagesError).toBe(true);

    const noVarMessages = result.messages.filter((message) => message.ruleId === "no-var");
    expect(noVarMessages.length).toBe(1);
    expect(noVarMessages[0].severity).toBe(2); // Error

    console.log(result);
  });
});
