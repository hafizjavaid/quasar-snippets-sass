// https://nuxt.com/docs/api/configuration/nuxt-config
import materialIcons from 'quasar/icon-set/svg-material-icons'
import materialIconsRound from 'quasar/icon-set/svg-material-icons-round'

export default defineNuxtConfig({
  // extends: '@barbapapazes/solo-sphere',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  experimental: {
    typedPages: true
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  modules: [
    "nuxt-quasar-ui",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/icon",
    '@nuxt/fonts',
    '@pinia/nuxt',
    'nuxt-auth-utils',
    '@nuxt/scripts',
    '@nuxthub/core'
  ],

  css: ['/assets/main.scss'],

  runtimeConfig: {
    session: {
      maxAge: 60 * 60 * 24 * 7, // Session expires after 7 days
    },
    public: {
      publicStripeKey: '',
      baseUrl: '',
    },
    expectedOrigin: process.env.BASE_URL ?? "http://localhost:3000",
    githubClientId: process.env.GITHUB_CLIENT_ID,
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
    cloudinaryApiKey: '',
    cloudinaryApiSecret: '',
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    stripeSecret: '',
    stripeWebhookSecret: '',
    appUrl: '',

    lemonSqueezyApiKey: process.env.LEMONSQUEEZY_API_KEY,
    lemonSqueezyWebhookSecret: process.env.LEMONSQUEEZY_WEBHOOK_SECRET,

  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-dark',
        dark: 'github-dark',
      },
      preload: ['markdown'],
    },
    navigation: {
      fields: ['icon'],
    },
    experimental: {
      search: {
        indexed: true,
      },
    },
  },
  quasar: {

    plugins: [
      // 'AppFullscreen',
      // 'BottomSheet',
      'Dialog',
      // 'Loading',
      // 'LoadingBar',
      // 'Notify',
      // 'Cookies'
    ],
    sassVariables: '/assets/quasar-variables.scss',
    iconSet: {
      ...materialIcons,
      colorPicker: materialIconsRound.colorPicker,
    },
    extras: {
      font: null,
      fontIcons: ['material-icons', 'mdi-v7'],
      animations: 'all',
    },
    appConfigKey: 'nuxtQuasarCustom',
    config: {
      dark: false,
      brand: {
        // primary: '#ff0000',
      },
    },
    components: {
    },
    cssAddon: true,
  },
  hub: {
    kv: true,
  },
})