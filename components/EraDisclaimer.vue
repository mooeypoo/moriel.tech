<template>
  <div class="eradisclaimer">
    {{ disclaimer }}
    <v-btn
      x-small
      plain
      @click="eraStore.setToTodayEra()"
    >
      Click for traditional view
    </v-btn>
  </div>
</template>

<script>
import { useEraStore } from '~/stores/era'

export default {
  name: 'EraDisclaimer',
  setup () {
    const eraStore = useEraStore()
    return { eraStore }
  },
  computed: {
    getCurrentSiteEra () {
      return this.eraStore.getCurrentSiteEra
    },
    isCurrentEra () {
      return this.eraStore.isCurrentEra
    },
    isCurrentEraLowerThan () {
      return this.eraStore.isCurrentEraLowerThan
    },
    isCurrentEraBiggerThan () {
      return this.eraStore.isCurrentEraBiggerThan
    },
    disclaimer () {
      if (this.isCurrentEra(1989)) {
        return 'You are viewing this page through the lens of a 1989 BBS server'
      } else if (this.isCurrentEraLowerThan(2021)) {
        return `You are viewing this page through the lens of ${this.getCurrentSiteEra} internet`
      } else if (this.isCurrentEra(2100)) {
        return 'You are viewing this page through the lens of The Future Internet'
      }
      return ''
    }
  }
}
</script>
