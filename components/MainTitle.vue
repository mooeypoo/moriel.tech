<template>
  <div>
    <v-row
      v-if="isCurrent(2021)"
      justify="center"
      align="center"
    >
      <v-col cols="12" sm="9" md="8">
        <h1 class="text-center">
          Hi, I'm Moriel, {{ introSentence }}
        </h1>
      </v-col>
    </v-row>
    <div v-else-if="isCurrent(2000)">
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <hr />
      <div class="marquee">
        <h1>
          Hi, I'm Moriel, {{ introSentence }}
        </h1>
      </div>
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <hr />
    </div>
    <div v-else-if="isCurrent(1995)">
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <hr />
      <h1 class="my-2">
        Hi, I'm Moriel, {{ introSentence }}
      </h1>
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <hr class="mb-5" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainTitle',
  computed: {
    ...mapGetters([
      'getWhatIDo',
      'getCurrentSiteStyle'
    ]),
    introSentence () {
      switch (this.getWhatIDo) {
        case 'speak':
          return 'and I speak about stuff'
        case 'write':
          return 'and I write stuff'
        case 'build':
        default:
          return 'and I build stuff'
      }
    }
  },
  methods: {
    isCurrent (year) {
      return Number(this.getCurrentSiteStyle) === year
    },
    isCurrentHigherThan (year) {
      return Number(this.getCurrentSiteStyle) > year
    },
    isCurrentLowerThan (year) {
      return Number(this.getCurrentSiteStyle) < year
    }
  }
}
</script>

<style>
/* https://www.quackit.com/html/html_editors/scratchpad/?example=/css/codes/marquees/scrolling_text */
.marquee {
  height: 50px;
  overflow: hidden;
  position: relative;
}

.marquee h1 {
  font-size: 3em;
  color: limegreen;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  line-height: 50px;
  text-align: center;
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  -moz-animation: marquee 15s linear infinite;
  -webkit-animation: marquee 15s linear infinite;
  animation: marquee 15s linear infinite;
}

@-moz-keyframes marquee {
  0% {
    -moz-transform: translateX(100%);
  }
  100% { -moz-transform: translateX(-100%); }
}

@-webkit-keyframes marquee {
  0% { -webkit-transform: translateX(100%); }
  100% { -webkit-transform: translateX(-100%); }
}

@keyframes marquee {
  0% {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }

  100% {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
</style>
