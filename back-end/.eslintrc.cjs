// eslint-disable-next-line @typescript-eslint/no-var-requires
const resolve = require("path").resolve

module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["import", "@typescript-eslint"],
  // add your custom rules here
  rules: {
    semi: [2, "never"],
    "no-console": "off",
    "prettier/prettier": ["error", { semi: false }],
    "import/no-unresolved": 2,
  },
}
