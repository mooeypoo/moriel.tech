<template>
  <div class="maininfo">
    <MainPicture />

    <v-row
      v-if="Number(getCurrentSiteStyle) === 2000"
    >
      <v-col class="text-center">
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <img src="~/assets/images/under-construction.gif" />
      </v-col>
    </v-row>

    <v-row
      v-if="Number(getCurrentSiteStyle) === 2021"
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

    <v-row>
      <v-col class="text-center">
        <img
          v-if="Number(getCurrentSiteStyle) === 2000"
          src="~/assets/images/under-construction2.gif"
        >
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
      'getCurrentSiteStyle'
    ]),
    pickerDisplay () {
      switch (this.getCurrentSiteStyle) {
        case '1995':
          return 'plain'
        case '2000':
          return 'plain'
        case '2021':
        default:
          return 'buttons'
      }
    }
  }
}
</script>
