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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import MainPicture from '~/components/MainPicture.vue'
import WhatIDoPicker from '~/components/WhatIDoPicker.vue'
import MainTitle from '~/components/MainTitle.vue'
import MainContent from '~/components/MainContent.vue'
import MainContentLinks from '~/components/MainContentLinks.vue'

export default {
  name: 'BaseLayout',
  components: {
    MainPicture,
    WhatIDoPicker,
    MainTitle,
    MainContent,
    MainContentLinks
  },
  computed: {
    ...mapGetters([
      'isCurrentEra',
      'getCurrentSiteEra'
    ]),
    pickerDisplay () {
      switch (this.getCurrentSiteEra) {
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
