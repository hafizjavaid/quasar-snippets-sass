// https://nuxt.com/docs/api/configuration/nuxt-config
import materialIcons from 'quasar/icon-set/svg-material-icons'
import materialIconsRound from 'quasar/icon-set/svg-material-icons-round'

export default defineNuxtConfig({
  // extends: '@barbapapazes/solo-sphere',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
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
    '@pinia/nuxt'
  ],
  
  css: ['/assets/main.scss'],
  
  runtimeConfig: {
    public: {
      publicStripeKey: '',
    },
    githubClientId: process.env.GITHUB_CLIENT_ID,
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
    cloudinaryApiKey: '',
    cloudinaryApiSecret: '',
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,

    stripeSecret: '',
    stripeWebhookSecret: '',
    appUrl: '',

  },
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  quasar: {

    plugins: [
      // 'AppFullscreen',
      'BottomSheet',
      'Dialog',
      'Loading',
      'LoadingBar',
      'Notify',
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
      // defaults: {
      //   QBtn: {
      //     color: 'primary',
      //   },
      //   QLinearProgress: {
      //     color: 'green',
      //     size: '15px',
      //     stripe: true,
      //   },
      //   QCircularProgress: {
      //     color: 'blue',
      //     indeterminate: true,
      //   },
      //   QSelect: {
      //     outlined: true,
      //     dense: true,
      //   },
      //   QInput: {
      //     outlined: true,
      //   },
      //   QToggle: {
      //     color: 'red',
      //   },
      // },
    },
  }
})