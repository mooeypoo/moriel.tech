import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    whatido: defineCollection({
      type: 'page',
      source: 'whatido/**/*.md'
    }),
    credits: defineCollection({
      type: 'page',
      source: 'credits/**/*.md'
    })

  }
})
