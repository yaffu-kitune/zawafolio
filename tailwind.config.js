/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  daisyui: {
    themes: ['winter', 'night']
  },
  darkMode: ['class', '[data-theme="night"]'],
  plugins: [require("daisyui")],
}

