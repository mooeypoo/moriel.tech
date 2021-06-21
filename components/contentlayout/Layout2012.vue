<template>
  <div class="layout2012">
    <div class="bootstrap-hero">
      <h1><MainTitle /></h1>
      <p>The best web page utilizing the most modern 2012 tools.</p>
    </div>

    <v-row
      class="mt-2"
      justify="center"
      align="center"
    >
      <v-col
        class="pt-0"
        cols="12"
        sm="6"
        md="6"
        lg="6"
        xl="6"
      >
        <div class="bootstrap-modal">
          <div class="modal-header">
            Content settings
          </div>
          <div class="modal-body">
            You may personalize your experience by choosing a topic.
          </div>
          <div class="modal-footer">
            <WhatIDoPicker
              display="divs"
              buttonclasses="bootstrap-btn"
              inactiveclasses="bootstrap-btn-regular"
              activeclasses="bootstrap-btn-primary"
            />
          </div>
        </div>
      </v-col>
      <v-col
        class="pt-0"
        cols="12"
        sm="6"
        md="6"
        lg="6"
        xl="6"
      >
        <div class="mt-5 bootstrap-alert-message bootstrap-block-message">
          <MainContent />
        </div>
      </v-col>
    </v-row>

    <div class="maincontent mt-5">
      <MainContentLinks />
    </div>
  </div>
</template>

<script>
import WhatIDoPicker from '~/components/WhatIDoPicker.vue'
import MainTitle from '~/components/MainTitle.vue'
import MainContent from '~/components/MainContent.vue'
import MainContentLinks from '~/components/MainContentLinks.vue'

export default {
  name: 'Layout2012',
  components: {
    WhatIDoPicker,
    MainTitle,
    MainContent,
    MainContentLinks
  }
}
</script>
