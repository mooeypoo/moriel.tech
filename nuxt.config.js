import colors from 'vuetify/es5/util/colors'

const description = 'Hi. I\'m Moriel, and I build stuff, write stuff, and talk about stuff. Read about what I do here.'
const siteTitle = 'Moriel does tech'
const siteImage = 'https://morieltech.netlify.app/moriel.jpg'
const ogTag = (name, content) => {
  return {
    hid: name,
    name,
    content
  }
}
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - moriel.tech',
    title: siteTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      // Open Graph
      ogTag('og:title', siteTitle),
      ogTag('og:description', description),
      ogTag('og:image', siteImage),
      ogTag('og:image:alt', siteImage),
      ogTag('og:image:secure_url', siteImage),
      ogTag('twitter:card', 'summary'),
      ogTag('twitter:creator', '@mooeypoo'),
      ogTag('twitter:title', siteTitle),
      ogTag('twitter:description', description),
      ogTag('twitter:image', siteImage),
      ogTag('twitter:image:alt', 'https://morieltech.netlify.app/gravatar.jpg')
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600;700&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/era1989.scss',
    '~/assets/css/era1992.scss',
    '~/assets/css/era1997.scss',
    '~/assets/css/era2021.scss',
    '~/assets/css/era2100.scss',
    '~/assets/css/general.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
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
          success: colors.green.accent3
        }
      }
    }
  },

  generate: {
    fallback: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
