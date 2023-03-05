// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    // 'tailwindcss/dist/tailwind.min.css',
    '~/assets/css/tailwind.css'
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
  },
  runtimeConfig: {
    jwtAccessKey: process.env.JWT_ACC_KEY,
    jwtRefreshKey: process.env.JWT_RE_KEY,
  }
})
