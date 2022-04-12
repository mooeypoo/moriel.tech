<template>
  <div class="eradisclaimer">
    {{ disclaimer }}
    <v-btn
      x-small
      plain
      @click="$store.commit('setToTodayEra')"
    >
      Click for traditional view
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'EraDisclaimer',
  computed: {
    ...mapGetters([
      'getCurrentSiteEra',
      'isCurrentEra',
      'isCurrentEraLowerThan',
      'isCurrentEraBiggerThan'
    ]),
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
