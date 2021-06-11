<template>
  <div class="maininfo">
    <Layout2000
      v-if="isCurrentEra(2000)"
    />
    <BaseLayout
      v-else
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Layout2000 from '~/components/contentlayout/Layout2000.vue'
import BaseLayout from '~/components/contentlayout/BaseLayout.vue'

export default {
  components: {
    BaseLayout,
    Layout2000
  },
  computed: {
    ...mapGetters([
      'isCurrentEra'
    ])
  }
}
</script>
