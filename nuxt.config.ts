export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
      ]
    }
  },
  devServer: {
    port: 3001,
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})

