<template>
  <v-footer padless>
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
            :class="isDark ? 'bg-blue-darken-3 text-white' : 'bg-blue-lighten-2'"
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
              variant="text"
              rounded
              class="mx-2"
              size="small"
            >
              <v-icon
                color="pink"
                :start="!display.xs"
              >
                mdi-{{ link.icon }}
              </v-icon>
              <span v-if="!display.xs">{{ link.text }}</span>
            </v-btn>
          </v-card-text>
          <v-divider v-if="!display.xs" />
          <v-card-text
            v-if="!display.xs"
            class="text-white py-1"
          >
            {{ new Date().getFullYear() }} — <strong>Moriel Schottlender</strong>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { useDisplaySSRSafe } from '~/composables/useDisplaySSRSafe'
import { computed } from 'vue'
import EraDisclaimer from '~/components/EraDisclaimer.vue'
import { useEraStore } from '~/stores/era'
import { useTheme } from 'vuetify'

export default {
  name: 'Footer',
  components: {
    EraDisclaimer
  },
  setup () {
    const eraStore = useEraStore()
    const { display } = useDisplaySSRSafe()
    const theme = useTheme()
    const isDark = computed(() => theme.global.name.value === 'dark')
    return { eraStore, display, isDark }
  },
  data: () => ({
    links: [
      {
        name: 'twitter',
        text: 'Twitter',
        showText: false,
        icon: 'twitter',
        href: 'https://x.com/mooeypoo'
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
    ]
  }),
  computed: {
    isCurrentEra () {
      return this.eraStore.isCurrentEra
    }
  }
}
</script>

<style lang="scss">
.copyright-line {
  font-size: 0.8em;
}
</style>
