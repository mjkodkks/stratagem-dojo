import process from 'node:process'

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      script: [
        {
          async: true,
          src: 'https://platform.twitter.com/widgets.js',
        },
      ],
    },
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  modules: [
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    // i18n support by nuxt module
    // comment if you don't want to use i18n.
    '@nuxtjs/i18n',
  ],

  colorMode: {
    classSuffix: '',
  },

  // i18n support
  // comment if you don't want to use i18n.
  i18n: {
    vueI18n: './i18n.config.ts',
  },

  imports: {
    dirs: [
      // Scan top-level store modules
      'stores',
    ],
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {
    tsConfig: {
      include: ['../types/**/*.d.ts'],
    },
    shim: false,
  },

  devtools: {
    enabled: true,
  },

  runtimeConfig: {
    public: {
      WHAT_ENV: process.env.WHAT_ENV || 'env_dev',
    },
  },
})
