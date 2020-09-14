/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import colors from "vuetify/es5/util/colors"

export default {
  env: {
    googleMapsApiToken: process.env.GOOGLE_MAPS_API_TOKEN,
    contactService: process.env.CONTACT_SERVICE,
  },
  server: {
    port: 4000,
  },
  mode: "spa",
  target: "static",
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["~/assets/styles/global.scss"],
  plugins: [],
  components: true,
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify"],
  modules: ["@nuxtjs/axios"],
  vuetify: {
    customVariables: ["~/assets/styles/variables.scss"],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
