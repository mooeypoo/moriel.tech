<template>
  <div class="contentlayout-base">
    <MainPicture />

    <v-row
      v-if="isCurrentEra(2021)"
      justify="center"
      align="center"
    >
      <v-col cols="12" sm="9" md="8" class="text-center whatido-wrapper">
        <WhatIDoPicker
          :display="pickerDisplay"
        />
      </v-col>
    </v-row>
    <WhatIDoPicker
      v-else
      class="whatidopicker mb-2"
      :display="pickerDisplay"
    />

    <MainTitle />

    <MainContent class="maincontent" />

    <MainContentLinks />

    <LatestBlogPosts era="2021" />
  </div>
</template>

<script>
import MainPicture from '~/components/MainPicture.vue'
import WhatIDoPicker from '~/components/WhatIDoPicker.vue'
import MainTitle from '~/components/MainTitle.vue'
import MainContent from '~/components/MainContent.vue'
import MainContentLinks from '~/components/MainContentLinks.vue'
import LatestBlogPosts from '~/components/LatestBlogPosts.vue'
import { useEraStore } from '~/stores/era'

export default {
  name: 'BaseLayout',
  components: {
    MainPicture,
    WhatIDoPicker,
    MainTitle,
    MainContent,
    MainContentLinks,
    LatestBlogPosts
  },
  setup () {
    const eraStore = useEraStore()
    return { eraStore }
  },
  computed: {
    isCurrentEra () {
      return this.eraStore.isCurrentEra
    },
    getCurrentSiteEra () {
      return this.eraStore.getCurrentSiteEra
    },
    pickerDisplay () {
      switch (this.eraStore.getCurrentSiteEra) {
        case 1992:
        case 1997:
          return 'plain'
        case 2021:
        default:
          return 'buttons'
      }
    }
  }
}
</script>
