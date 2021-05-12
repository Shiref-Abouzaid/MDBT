export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'tbdm-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~plugins/shared-components.js",
    "~plugins/axios.js",
    "~plugins/vue-moment.js",
    "~plugins/i18n.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    //['@nuxtjs/vuetify', { treeShake: true }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    ['bootstrap-vue/nuxt', {
      icons: false,
    }],
  ],

  router: {
    extendRoutes(routes, resolve) {
      console.log('all routes>> ', routes);
      routes.push({
        path: '/:locale/custom',
        component: resolve(__dirname, 'components/Vendor/SingleBuy.vue')
      })
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true
  }
}
