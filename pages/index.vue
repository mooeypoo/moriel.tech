<template>
  <div class="maininfo">
    <Layout1989
      v-if="isCurrentEra(1989)"
    />
    <Layout1997
      v-if="isCurrentEra(1997)"
    />
    <Layout2000
      v-else-if="isCurrentEra(2000)"
    />
    <Layout2100
      v-else-if="isCurrentEra(2100)"
    />
    <BaseLayout
      v-else
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Layout1989 from '~/components/contentlayout/Layout1989.vue'
import Layout1997 from '~/components/contentlayout/Layout1997.vue'
import Layout2000 from '~/components/contentlayout/Layout2000.vue'
import Layout2100 from '~/components/contentlayout/Layout2100.vue'
import BaseLayout from '~/components/contentlayout/BaseLayout.vue'

export default {
  components: {
    BaseLayout,
    Layout1989,
    Layout1997,
    Layout2000,
    Layout2100
  },
  computed: {
    ...mapGetters([
      'isCurrentEra'
    ])
  }
}
</script>
