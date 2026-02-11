import vuetify from 'vite-plugin-vuetify'

const description = "Hi. I'm Moriel, and I build stuff, write stuff, and talk about stuff. Read about what I do here."
const siteTitle = 'Moriel does tech'
const siteImage = 'https://morieltech.netlify.app/moriel.jpg'

export default defineNuxtConfig({
  ssr: true,
  srcDir: '.',

  future: {
    compatibilityVersion: 4,
  },

  build: {
    transpile: ['vuetify'],
  },

  app: {
    head: {
      titleTemplate: '%s - moriel.tech',
      title: siteTitle,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: description },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: description },
        { property: 'og:image', content: siteImage },
        { property: 'og:image:alt', content: siteImage },
        { property: 'og:image:secure_url', content: siteImage },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: '@mooeypoo' },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: siteImage },
        { name: 'twitter:image:alt', content: 'https://morieltech.netlify.app/gravatar.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Arimo:wght@400;600&family=Inconsolata:wght@400;600;700&display=swap',
        },
      ],
    },
  },

  modules: [
    '@pinia/nuxt',
    '@nuxt/content',
    (_options: unknown, nuxt: { hooks: { hook: (name: string, fn: (config: { plugins?: unknown[] }) => void) => void } }) => {
      nuxt.hooks.hook('vite:extendConfig', (config: { plugins?: unknown[] }) => {
        config.plugins = config.plugins || []
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@vite-pwa/nuxt',
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls: true,
      },
    },
  },

  content: {},

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/contact': { prerender: true },
    '/credits': { prerender: true },
    '/thanks': { prerender: true },
  },

  pwa: {
    registerWebManifest: true,
    manifest: {
      lang: 'en',
      name: siteTitle,
      short_name: 'moriel.tech',
      description,
    },
  },
})
