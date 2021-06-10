<template>
  <div class="maininfo">
    <MainPicture />

    <v-row
      v-if="isCurrentEra(1997)"
    >
      <v-col class="text-center">
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <img src="~/assets/images/under-construction.gif" />
      </v-col>
    </v-row>

    <v-row
      v-if="isCurrentEra(2021)"
      justify="center"
      align="center"
    >
      <v-col cols="12" sm="9" md="8" class="text-center">
        <WhatIDoPicker
          :display="pickerDisplay"
        />
      </v-col>
    </v-row>
    <WhatIDoPicker
      v-else
      class="whatidopicker mb-5"
      :display="pickerDisplay"
    />

    <MainTitle />

    <v-row
      v-if="isCurrentEra(1997)"
    >
      <v-col class="text-center my-5">
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <img src="~/assets/images/under-construction2.gif" />
      </v-col>
    </v-row>

    <MainContent />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MainPicture from '~/components/MainPicture.vue'
import WhatIDoPicker from '~/components/WhatIDoPicker.vue'
import MainTitle from '~/components/MainTitle.vue'
import MainContent from '~/components/MainContent.vue'

export default {
  components: {
    MainPicture,
    WhatIDoPicker,
    MainTitle,
    MainContent
  },
  computed: {
    ...mapGetters([
      'getCurrentSiteEra',
      'isCurrentEra'
    ]),
    pickerDisplay () {
      switch (this.getCurrentSiteEra) {
        case 1992:
          return 'plain'
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
