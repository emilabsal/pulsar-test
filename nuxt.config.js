export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "pulsar-test",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap",
      },
    ],
  },

  // Choose ssr
  ssr: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Tailwind config
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.js",
    exposeConfig: false,
    injectPosition: 0,
    viewer: false,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components",
    { path: "~/components/common", prefix: "the" },
    { path: "~/components/ui", prefix: "ui" },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/proxy",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://www.cbr-xml-daily.ru/",
    proxy: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
