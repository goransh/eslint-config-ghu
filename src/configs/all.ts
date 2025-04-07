import { ts } from "./ts";
import { prettier } from "./prettier";
import { imports } from "./imports";
import { comments } from "./comments";
import type { TSESLint } from "@typescript-eslint/utils";
import { js } from "./js";

export function all(): TSESLint.FlatConfig.Config[] {
  return [
    ...js(),
    ...ts(),
    ...prettier(),
    ...imports(),
    ...comments(),
  ]
}
