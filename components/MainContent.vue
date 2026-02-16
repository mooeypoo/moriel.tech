<template>
  <div v-if="type === 'plain'">
    <ContentRenderer
      v-if="currentPage"
      :value="currentPage"
      class="maincontent"
      />
  </div>
  <v-row
    v-else
    no-gutter
    justify="center"
    align="center"
  >
    <v-col :cols="width">
      <ContentRenderer
        v-if="currentPage"
        :value="currentPage"
        class="maincontent"
      />
    </v-col>
  </v-row>
</template>

<script>
import { unref } from 'vue'
import { useAsyncData } from 'nuxt/app'
import { useEraStore } from '~/stores/era'

export default {
  name: 'MainContent',
  props: {
    width: {
      type: Number,
      default: 12
    },
    type: {
      type: String,
      default: 'regular'
    }
  },
  async setup () {
    const eraStore = useEraStore()
    const { data: mdcontent } = await useAsyncData('whatido-pages', async () => {
      // queryCollection is auto-imported by @nuxt/content (do not import from '@nuxt/content' - Vite disallows it)
      const q = (path) => queryCollection('whatido').path(path).first() // eslint-disable-line no-undef
      const [build, write, speak] = await Promise.all([
        q('/whatido/build'),
        q('/whatido/write'),
        q('/whatido/speak')
      ])
      const byPath = { build, write, speak }
      if (Object.values(byPath).every(Boolean)) return byPath
      const items = await queryCollection('whatido').all() // eslint-disable-line no-undef
      const map = {}
      const validKeys = ['build', 'write', 'speak']
      for (const item of items) {
        const raw = String(item.stem ?? item.path ?? '')
        const segments = raw.replace(/^\/+/, '').split('/').filter(Boolean)
        const key = segments.pop()
        if (key && validKeys.includes(key)) map[key] = item
      }
      return Object.keys(map).length ? map : byPath
    })
    return { eraStore, mdcontent }
  },
  computed: {
    getWhatIDo () {
      return this.eraStore.getWhatIDo
    },
    currentPage () {
      const content = unref(this.mdcontent)
      if (!content || !this.getWhatIDo) return null
      return content[this.getWhatIDo] ?? null
    }
  }
}
</script>
