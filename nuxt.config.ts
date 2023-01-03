// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 css: ['~/assets/css/style.css'],
 postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
   runtimeConfig: {
    public: {
      apiBase: process.env.BASE_API_URL
    }
  }
}) 
