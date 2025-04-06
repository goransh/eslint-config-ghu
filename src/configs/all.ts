import { base } from "./base";
import { prettier } from "./prettier";
import { imports } from "./imports";
import { comments } from "./comments";
import type { TSESLint } from "@typescript-eslint/utils";

export function all(): TSESLint.FlatConfig.Config[] {
  return [
    ...base(),
    ...prettier(),
    ...imports(),
    ...comments(),
  ]
}
