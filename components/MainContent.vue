<template>
  <div v-if="type === 'plain'">
    <ContentRenderer
      v-if="mdcontent && mdcontent[getWhatIDo]"
      :value="mdcontent[getWhatIDo]"
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
        v-if="mdcontent && mdcontent[getWhatIDo]"
        :value="mdcontent[getWhatIDo]"
      />
    </v-col>
  </v-row>
</template>

<script>
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
    const { data: mdcontent } = await useAsyncData('main-whatido', async () => {
      const [build, write, speak] = await Promise.all([
        queryContent('whatido/build').findOne(),
        queryContent('whatido/write').findOne(),
        queryContent('whatido/speak').findOne()
      ])
      return { build, write, speak }
    })
    return { eraStore, mdcontent }
  },
  computed: {
    getWhatIDo () {
      return this.eraStore.getWhatIDo
    }
  }
}
</script>
