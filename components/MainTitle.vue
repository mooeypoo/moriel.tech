<template>
  <div class="maintitle">
    <div v-if="isCurrentEraLowerThan(1993)">
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <hr />
      <h2 class="my-2">
        Hi, I'm Moriel, {{ introSentence }}
      </h2>
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <hr class="mb-5" />
    </div>
    <div v-else-if="isCurrentEra(1997)" class="marqueewrapper">
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <hr />
      <div class="marquee" :class="$vuetify.breakpoint.xsOnly ? 'mobile' : ''">
        <h2>
          Hi, I'm Moriel, {{ introSentence }} &nbsp; &nbsp; &nbsp;
        </h2>
      </div>
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <hr />
    </div>
    <div
      v-else-if="isCurrentEra(2012)"
    >
      {{ introSentenceThirdPerson }}
    </div>
    <v-row
      v-else
      justify="center"
      align="center"
    >
      <v-col cols="12">
        <h2 class="text-center">
          Hi, I'm Moriel, {{ introSentence }}
        </h2>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainTitle',
  computed: {
    ...mapGetters([
      'getWhatIDo',
      'getCurrentSiteEra',
      'isCurrentEra',
      'isCurrentEraLowerThan'
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
    },
    introSentenceThirdPerson () {
      switch (this.getWhatIDo) {
        case 'speak':
          return 'Moriel speaks about stuff'
        case 'write':
          return 'Moriel writes stuff'
        case 'build':
        default:
          return 'Moriel builds stuff'
      }
    }
  }
}
</script>

<style>
.marqueewrapper {
  width: 80%;
  margin: 0 auto;
}

/* https://www.quackit.com/html/html_editors/scratchpad/?example=/css/codes/marquees/scrolling_text */
.marquee {
  height: 50px;
  overflow: hidden;
  position: relative;
}

.marquee h2 {
  font-size: 3em;
  color: lightskyblue;
  position: absolute;
  white-space: nowrap;
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

.marquee.mobile h2 {
  font-size: 2em;
}

.theme--light .marquee h2 {
  color: #042c54;
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
