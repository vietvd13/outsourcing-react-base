import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import"; 
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", "coverage"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    plugins: {
      import: importPlugin, 
    },
    languageOptions: {
      ecmaVersion: "latest",     
      sourceType: "module",
      globals: globals.browser,  
      ecmaFeatures: { jsx: true } 
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [["@", "./src"]],
          extensions: [".js", ".jsx"],
        },
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "import/no-unresolved": "error",

      "import/order": ["warn", {
        "alphabetize": { order: "asc", caseInsensitive: true },
        "newlines-between": "always",
        "groups": [["builtin", "external"], "internal", ["parent", "sibling", "index"]],
        "pathGroups": [{ pattern: "@/**", group: "internal", position: "before" }],
        "pathGroupsExcludedImportTypes": ["builtin"]
      }]
    },
  },
]);
