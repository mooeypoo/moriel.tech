<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div class="text-center mb-5">
          <v-avatar
            size="250px"
            class="mt-5"
          >
            <img
              alt="Moriel Schottlender"
              src="/images/moriel-320px.jpg"
            >
          </v-avatar>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="9" md="8">
        <h1 class="text-center">
          Hi, I'm Moriel, {{ introSentence }}
        </h1>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  // components: {
  // }
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
    }
  }
}
</script>
