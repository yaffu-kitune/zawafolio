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
    ['@nuxt/content'],
  ],
  content: {    
    // https://content.nuxtjs.org/api/configuration 
   },
});
