<template>
  <div class="layout1989" :class="$vuetify.breakpoint.xsOnly ? 'mobile' : ''">
    <pre class="bbs-title-moriel">
.___  ___.   ______   .______       __   _______  __
|   \/   |  /  __  \  |   _  \     |  | |   ____||  |
|  \  /  | |  |  |  | |  |_)  |    |  | |  |__   |  |
|  |\/|  | |  |  |  | |      /     |  | |   __|  |  |
|  |  |  | |  `--'  | |  |\  \----.|  | |  |____ |  `----.
|__|  |__|  \______/  | _| `._____||__| |_______||_______|</pre>
    <pre class="bbs-title-separator mt-2">
/^(o.o)^\ /^(o.o)^\ /^(o.o)^\ /^(o.o)^\ /^(o.o)^\ /^(o.o)^\</pre>
    <pre class="bbs-title-welcome mt-2">
       __      _____| | ___ ___  _ __ ___   ___
       \ \ /\ / / _ \ |/ __/ _ \| '_ ` _ \ / _ \
        \ V  V /  __/ | (_| (_) | | | | | |  __/
         \_/\_/ \___|_|\___\___/|_| |_| |_|\___|</pre>
    <pre class="bbs-title-separator mt-2">
/^(o.o)^\ /^(o.o)^\ /^(o.o)^\ /^(o.o)^\ /^(o.o)^\ /^(o.o)^\</pre>
    <!-- eslint-disable-next-line vue/html-self-closing -->
    <hr class="mt-2" />
    <WhatIDoPicker
      display="links"
      class="bbs-whatido my-5"
      :class="$vuetify.breakpoint.xsOnly ? 'mobile' : ''"
    />
    <div class="bbs-content mt-5">
      <MainTitle />
      <MainContent />
    </div>

    <MainContentLinks class="bbs-content-links" />
  </div>
</template>

<script>
import WhatIDoPicker from '~/components/WhatIDoPicker.vue'
import MainContentLinks from '~/components/MainContentLinks.vue'

export default {
  name: 'Layout1989',
  components: {
    WhatIDoPicker,
    MainContentLinks
  }
}
</script>

<style lang="scss">
.bbs {
  &-title {
    &-moriel {
      color: cyan;
    }

    &-separator {
      color: deeppink;
    }
  }

  &-content-links {
    li {
      margin: 1em 0;
    }
  }

  &-whatido.mobile {
    li {
      padding: 5px 0;
    }
  }
}
</style>
