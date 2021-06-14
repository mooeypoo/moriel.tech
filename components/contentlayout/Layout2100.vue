<template>
  <div class="layout2100">
    <v-row
      justify="center"
      align="center"
    >
      <v-col cols="12" sm="9" md="8" class="text-center">
        <WhatIDoPicker display="buttons" />
      </v-col>
    </v-row>

    <div class="mainsection grainy">
      <v-row
        class="loading mb-5 my-2"
        justify="center"
        align="center"
      >
        <v-col cols="12" sm="9" md="8" class="text-center">
          <h1>Loading into Consciousness Chip<sup>TM</sup>...</h1>
        </v-col>
      </v-row>
      <MainTitle />

      <MainContent class="maincontent" :width="$vuetify.breakpoint.xsOnly ? 12 : 6" />

      <div class="maincontentlinks slidewrapper">
        <MainContentLinks class="slide" />
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import WhatIDoPicker from '~/components/WhatIDoPicker.vue'
import MainTitle from '~/components/MainTitle.vue'
import MainContent from '~/components/MainContent.vue'
import MainContentLinks from '~/components/MainContentLinks.vue'

export default {
  name: 'Layout2100',
  components: {
    WhatIDoPicker,
    MainTitle,
    MainContent,
    MainContentLinks
  }
}
</script>

<style lang="scss">
.layout2100 {
  .loading h1 {
    font-size: 2em;
    font-variant: small-caps;
    line-height: 1;
  }

  &.mobile .loading h1 {
    font-size: 1.2em;
  }

  .mainsection {
    .maintitle {
      animation: fadeinout 5s linear 1 forwards;
      animation-iteration-count: infinite;
    }

    .maincontent {
      font-size: 0.8em;
      animation: fadeinoutdelay1 5s linear 1 forwards;
      animation-iteration-count: infinite;
    }

    .maincontentlinks {
      .content-links {
        text-align: center;

        .section-title {
          font-weight: bolder;
        }
      }

      &.slidewrapper {
        overflow: hidden;

        .slide {
          text-align: center;
          text-transform: uppercase;
          animation: 10s credits linear infinite;
        }
      }
      // .slide {
      //   overflow-y: hidden;
      //   max-height: 500px; /* approximate max height */
      //   transition-property: all;
      //   transition-duration: .5s;
      //   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      // }
    }
  }

  @keyframes fadeinout {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }

  @keyframes fadeinoutdelay1 {
    0% { opacity: 0; }
    25% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 0; }
  }

  @keyframes credits {
    0% {
      margin-top: 110%;
    }

    100% {
      margin-top: -110%;
    }
  }
}
</style>
