<template>
  <div>
    <v-row
      v-if="$store.getters.getCurrentSiteStyle === '2021'"
      justify="center"
      align="center"
    >
      <v-col cols="12" sm="9" md="8">
        <h1 class="text-center">
          Hi, I'm Moriel, {{ introSentence }}
        </h1>
      </v-col>
    </v-row>
    <v-row
      v-else
    >
      <v-col>
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <hr
          v-if="$store.getters.getCurrentSiteStyle !== '2021'"
        />
        <h1
          :class="$store.getters.getCurrentSiteStyle >= 2000 ? 'text-center' : ''"
        >
          Hi, I'm Moriel, {{ introSentence }}
        </h1>
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <hr
          v-if="$store.getters.getCurrentSiteStyle !== '2021'"
        />
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
      'getWhatIDo'
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
  }
}
</script>
