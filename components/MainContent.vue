<template>
  <v-row
    no-gutters
    justify="center"
    align="center"
  >
    <v-col :cols="width">
      <nuxt-content :document="mdcontent[getWhatIDo]" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainContent',
  props: {
    width: {
      type: Number,
      default: 12
    }
  },
  data: () => ({
    mdcontent: {}
  }),
  computed: {
    ...mapGetters([
      'getWhatIDo'
    ])
  },
  async mounted () {
    this.mdcontent = {
      build: await this.$content('whatido', 'build').fetch(),
      write: await this.$content('whatido', 'write').fetch(),
      speak: await this.$content('whatido', 'speak').fetch()
    }
  }
}
</script>
