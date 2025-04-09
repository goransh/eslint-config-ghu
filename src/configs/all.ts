import type { TSESLint } from "@typescript-eslint/utils";

import { comments } from "./comments";
import { imports } from "./imports";
import { js } from "./js";
import { prettier } from "./prettier";
import { ts } from "./ts";

export function all(): TSESLint.FlatConfig.Config[] {
  return [...js(), ...ts(), ...prettier(), ...imports(), ...comments()];
}
