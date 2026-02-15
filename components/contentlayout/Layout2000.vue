<template>
  <div class="layout2000">
    <div class="bannerimagewrapper iframelike mobilescroll">
      <div class="bannerimage">
        <h1>Moriel does tech</h1>
      </div>
      <div class="iframelike-placeholder" />
    </div>

    <div class="iframelike mobilescroll">
      <div class="menu">
        <WhatIDoPicker
          display="links"
          class="bannerlinks"
          :class="display?.xs ? 'bannerlinks-mobile' : ''"
        />
      </div>
    </div>

    <div class="mainwrapper">
      <div class="sidebarwrapper">
        <div class="sidebar">
          <MainContent type="plain" />
        </div>
      </div>
      <div class="contentwrapper mobilescroll">
        <div class="content">
          <MainTitle />
        </div>
        <MainContentLinks />
      </div>
    </div>
  </div>
</template>

<script>
import WhatIDoPicker from '~/components/WhatIDoPicker.vue'
import MainTitle from '~/components/MainTitle.vue'
import MainContent from '~/components/MainContent.vue'
import MainContentLinks from '~/components/MainContentLinks.vue'
import { useDisplaySSRSafe } from '~/composables/useDisplaySSRSafe'

export default {
  name: 'Layout2000',
  setup () {
    const { display } = useDisplaySSRSafe()
    return { display }
  },
  components: {
    WhatIDoPicker,
    MainTitle,
    MainContent,
    MainContentLinks
  }
}
</script>
