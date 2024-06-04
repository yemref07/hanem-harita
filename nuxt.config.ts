// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','/assets/scss/global.scss'],

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

  modules: [
    "@nuxtjs/i18n",
    '@nuxtjs/google-fonts',
    "@nuxt/image",
    'nuxt-icon',
    "@stefanobartoletti/nuxt-social-share",
    '@nuxt/test-utils/module'
  ],

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
    format:['webp', 'avif', 'jpeg', 'jpg', 'png'],
    provider: 'netlify',
  },


  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
})