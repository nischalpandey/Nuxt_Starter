
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    "@": './'
  },
  components: {
    "dirs": [
      "~/components"
    ]
  },

  css: [
    '~/assets/main.scss',
  ],

  postcss: {

    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },

  },




})
