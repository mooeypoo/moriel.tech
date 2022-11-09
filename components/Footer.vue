<template>
  <v-footer
    app
    fixed
    padless
  >
    <v-row
      justify="center"
      align="center"
    >
      <v-col cols="12">
        <v-card
          flat
          tile
          class="white--text text-center"
        >
          <v-card-text
            v-if="!isCurrentEra(2021)"
            class="py-1 mb-0"
            :class="$vuetify.theme.dark ? 'blue darken-3 white--text' : 'blue lighten-2'"
          >
            <EraDisclaimer />
          </v-card-text>
          <v-divider />
          <v-card-text
            class="py-2 my-0"
          >
            <v-btn
              v-for="link in links"
              :key="link.name"
              :title="link.name"
              :href="link.href"
              :rel="link.rel"
              color="white"
              text
              rounded
              class="mx-2"
              small
            >
              <v-icon
                color="pink"
                :left="$vuetify.breakpoint.smAndUp"
              >
                mdi-{{ link.icon }}
              </v-icon>
              <span v-if="$vuetify.breakpoint.smAndUp">{{ link.text }}</span>
            </v-btn>
          </v-card-text>
          <v-divider v-if="$vuetify.breakpoint.smAndUp" />
          <v-card-text
            v-if="$vuetify.breakpoint.smAndUp"
            class="white--text py-1"
          >
            {{ new Date().getFullYear() }} — <strong>Moriel Schottlender</strong>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'
import EraDisclaimer from '~/components/EraDisclaimer.vue'

export default {
  name: 'Footer',
  components: {
    EraDisclaimer
  },
  data: () => ({
    links: [
      {
        name: 'twitter',
        text: 'Twitter',
        showText: false,
        icon: 'twitter',
        href: 'https://twitter.com/mooeypoo'
      },
      {
        name: 'mastodon',
        text: 'Mastodon',
        icon: 'account-circle',
        rel: 'me',
        href: 'https://notacult.social/@mooeypoo'
      },
      {
        name: 'github',
        text: 'Github',
        icon: 'github',
        href: 'https://www.github.com/mooeypoo'
      },
      {
        name: 'linkedin',
        text: 'LinkedIn',
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/moriel/'
      },
      {
        name: 'polywork',
        text: 'Polywork',
        icon: 'account-circle',
        href: 'https://www.polywork.com/mooeypoo'
      }
    ]
  }),
  computed: {
    ...mapGetters([
      'isCurrentEra'
    ])
  }
}
</script>

<style lang="scss">
.copyright-line {
  font-size: 0.8em;
}
</style>
