<template>
  <div class="maininfo">
    <v-row
      v-if="$store.getters.getCurrentSiteStyle === '2021'"
      justify="center"
      align="center"
    >
      <v-col cols="12" sm="8" md="6">
        <div class="text-center mb-5">
          <v-avatar
            size="250px"
            class="mt-5"
          >
            <img
              alt="Moriel Schottlender"
              :src="pictureOfMe"
            >
          </v-avatar>
        </div>
      </v-col>
    </v-row>
    <img
      v-else
      width="250"
      alt="Moriel Schottlender"
      :src="pictureOfMe"
    >

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
          v-if="$store.getters.getCurrentSiteStyle === '1995'"
        />
        <h1>
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
export default {
  computed: {
    introSentence () {
      switch (this.$store.state.whatido) {
        case 'speak':
          return 'and I speak about stuff'
        case 'write':
          return 'and I write stuff'
        case 'build':
        default:
          return 'and I build stuff'
      }
    },
    pictureOfMe () {
      switch (this.$store.getters.getCurrentSiteStyle) {
        case '1995':
          return '/images/moriel-50px.jpg'
        case '2000':
          return '/images/moriel-150px.jpg'
        case '2021':
        default:
          return '/images/moriel-320px.jpg'
      }
    }
  }
}
</script>
