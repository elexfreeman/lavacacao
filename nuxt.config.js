export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "lavacacao",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "manifest", href: "/site.webmanifest" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bad+Script&family=Open+Sans:ital,wght@0,300;0,400;1,300&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "./plugins/vue-awesome-swiper.js", ssr: false },
    "./plugins/product.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components",
    { path: "~/components/common", extensions: ["vue"] },
    { path: "~/components/product", extensions: ["vue"], prefix: "product" },
    { path: "~/components/sku", extensions: ["vue"], prefix: "sku" },
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources", "@nuxtjs/axios"],
  styleResources: {
    scss: ["./styles/style.scss"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    port: 3000, // default: 3000
    host: "0.0.0.0", // default: localhost,
    timing: false,
  },
};
