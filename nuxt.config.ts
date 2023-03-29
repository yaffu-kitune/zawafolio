// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    ['nuxt-icon'],
    [
      "nuxt-microcms-module",
      {
        serviceDomain: "yaffu", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
        apiKey: "ZrMRlrOEiKevPM0f949LNLbCUjCOmavraDpq",
        // target: 'server',
      },
    ],
  ],
});
