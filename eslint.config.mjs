import { FlatCompat } from "@eslint/eslintrc"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.Config[]} */
const configs = [
  eslintPluginPrettierRecommended,
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"),
  {
    ignores: [
      "**/node_modules/*",
      "**/out/*",
      "**/.next/*",
      "**/coverage",
      "mijn-ui/**/*",
      "tailwind.config.ts",
      "content/common/*",
    ],
  },
  {
    rules: {
      "prettier/prettier": "warn",
      "import/no-anonymous-default-export": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
]

export default configs
