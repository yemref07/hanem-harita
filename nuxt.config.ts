// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  components: {
    dirs: [
      "~/components",
      "~/components/buttons",
      "~/components/layouts",
    ],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/i18n", '@nuxtjs/google-fonts', "@nuxt/image",'nuxt-icon'],

  i18n: {
    defaultLocale: 'tr',
    lazy: false,
    langDir: 'lang',
    locales: [
        {
            code: 'tr',
            name: 'Türkçe',
            file: 'tr-TR.json'
        },
        {
            code: 'en',
            name: 'English',
            file: 'en-EN.ts'
        },
    ],
  },

  googleFonts: {
    display: 'swap',
    families: {
      Spartan: [300,400,500,600,700,800,900],
      Poppins: {
        wght: [100,300,400,500,600],
        ital: [100]
      },
    }
  },

  image: {
    format:['webp', 'avif', 'jpeg', 'jpg', 'png']
  }
})