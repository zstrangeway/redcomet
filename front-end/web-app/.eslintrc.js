// eslint-disable-next-line @typescript-eslint/no-var-requires
const resolve = require("path").resolve

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["vue", "import", "@typescript-eslint"],
  // add your custom rules here
  rules: {
    semi: [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": ["error", { semi: false }],
    "import/no-unresolved": 2,
    "vue/require-valid-default-prop": "off",
    "no-undef": "off",
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            alias: {
              "~": __dirname,
              static: resolve(__dirname, "static"), // use in template with <img src="~static/nuxt.png" />
              "~static": resolve(__dirname, "static"),
              assets: resolve(__dirname, "assets"), // use in template with <img src="~static/nuxt.png" />
              "~assets": resolve(__dirname, "assets"),
              "~plugins": resolve(__dirname, "plugins"),
              "~store": resolve(__dirname, ".nuxt/store"),
              "~router": resolve(__dirname, ".nuxt/router"),
              "~pages": resolve(__dirname, "pages"),
              "~components": resolve(__dirname, "components"),
            },
          },
        },
      },
    },
  },
}
