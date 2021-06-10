<template>
  <v-row no-gutters>
    <v-col>
      <nuxt-content :document="mdcontent[getWhatIDo]" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainContent',
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
