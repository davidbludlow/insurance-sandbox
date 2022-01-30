import colors from 'vuetify/es5/util/colors';

export default {
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: 'Nuxt.js starter for CSB',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Official Nuxt.js starter for CodeSandBox',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  /*
   ** Nuxt.js modules
   ** Doc: https://modules.nuxtjs.org
   */
  modules: [],

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/docs/2.x/directory-structure/plugins
   */
  plugins: [],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/workbox',
  ],
  pwa: {
    meta: {
      theme_color: 'rgb(25, 118, 210)',
    },
    manifest: {
      lang: 'en',
    },
  },
  // ssr: false,
  // workbox: {
  //   runtimeCaching: [
  //     {
  //       // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
  //       urlPattern: 'https://csb-s5jlg.netlify.app/.*',
  //       // Defaults to `NetworkFirst` if omitted
  //       handler: 'StaleWhileRevalidate',
  //       // Defaults to `GET` if omitted
  //       // method: 'GET'
  //     },
  //   ],
  // },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
};
