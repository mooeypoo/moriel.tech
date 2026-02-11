<template>
  <v-app :class="['layout-sticky-footer', siteEraClass]">
    <v-navigation-drawer
      v-if="display.xs"
      v-model="navdrawer"
    >
      <v-list>
        <v-list-item>
          <template #prepend>
            <v-avatar>
              <v-img
                alt="Moriel Schottlender"
                src="/gravatar.jpg"
              />
            </v-avatar>
          </template>
        </v-list-item>
        <v-list-item
          href="#"
          @click="$router.push({ path: '/', query: { era: $route.query.era } }); $event.preventDefault()"
        >
          <v-list-item-title class="text-h6">
            Moriel Schottlender
          </v-list-item-title>
          <v-list-item-subtitle>
            Multidimensional multitasker
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>

      <v-divider />

      <Menu type="list" @click="navdrawer = false" />
    </v-navigation-drawer>

    <v-app-bar>
      <v-avatar
        size="36"
        class="mr-5"
        @click="$router.push({ path: '/', query: { era: $route.query.era } })"
      >
        <img
          alt="Moriel Schottlender"
          src="/gravatar.jpg"
        >
      </v-avatar>
      <v-app-bar-title
        v-if="!display.xs"
        @click="$router.push({ path: '/', query: { era: $route.query.era } })"
      >
        {{ title }}
      </v-app-bar-title>

      <v-spacer v-if="!display.xs" />
      <Menu v-if="!display.xs" />
      <v-spacer />

      <v-switch
        v-model="isDark"
        color="blue"
        hide-details
        :true-icon="'mdi-weather-night'"
        :false-icon="'mdi-white-balance-sunny'"
      />

      <v-app-bar-nav-icon
        v-if="display.xs"
        @click.stop="navdrawer = !navdrawer"
      />

      <template #extension>
        <v-row no-gutter align="center">
          <v-col
            v-if="!display.xs"
            cols="2"
            md="1"
            lg="1"
            align="center"
          >
            <v-list-subheader class="eraslider-label">
              Choose an era:
            </v-list-subheader>
          </v-col>
          <v-col class="flex-grow-1">
            <v-slider
              v-model="siteEra"
              :ticks="sliderTicks"
              :max="siteEraLabels.length - 1"
              :step="1"
              show-ticks="always"
              tick-size="1"
              color="primary"
              class="eraslider"
              append-icon="mdi-laptop"
              prepend-icon="mdi-desktop-classic"
              @click:append="increaseEra"
              @click:prepend="decreaseEra"
            />
          </v-col>
        </v-row>
      </template>
    </v-app-bar>

    <v-main class="layout-main">
      <v-container class="container">
        <slot />
      </v-container>
    </v-main>

    <footer class="layout-footer">
      <Footer />
    </footer>
  </v-app>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Footer from '~/components/Footer.vue'
import { computed } from 'vue'
import { useEraStore } from '~/stores/era'
import { useDisplay, useTheme } from 'vuetify'

export default {
  components: {
    Menu,
    Footer
  },
  setup () {
    const eraStore = useEraStore()
    const display = useDisplay()
    const theme = useTheme()
    const isDark = computed({
      get: () => theme.global.name.value === 'dark',
      set: (v) => { theme.global.name.value = v ? 'dark' : 'light' }
    })
    return { eraStore, display, isDark }
  },
  data () {
    return {
      navdrawer: false,
      title: 'Moriel Schottlender'
    }
  },
  computed: {
    getSiteEraFromIndex () {
      return this.eraStore.getSiteEraFromIndex
    },
    getCurrentSiteEra () {
      return this.eraStore.getCurrentSiteEra
    },
    getCurrentSiteEraForPath () {
      return this.eraStore.getCurrentSiteEraForPath
    },
    siteEraClass () {
      return [
        'style-' + this.eraStore.getCurrentSiteEra,
        this.display?.xs ? 'mobile' : ''
      ].filter(Boolean).join(' ')
    },
    siteEraLabels () {
      return (this.eraStore.siteEraLabels || []).map((label) => {
        if (label === 2021) return 'Today'
        if (label > 2021) return 'Future'
        return label
      })
    },
    sliderTicks () {
      const labels = this.siteEraLabels
      return Object.fromEntries(labels.map((l, i) => [i, l]))
    },
    siteEra: {
      get () {
        return this.eraStore.siteEra
      },
      set (value) {
        this.eraStore.changeSiteStyle(value)
        this.scrollToTop()
      }
    }
  },
  watch: {
    siteEra () {
      this.setRouteForEra()
    }
  },
  mounted () {
    const era = this.$route.query.era || 'today'
    this.eraStore.changeSiteEraFromLabel(era)
    this.setRouteForEra()
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    setRouteForEra () {
      const path = this.$route.name === 'index' ? '/' : `/${this.$route.name}`
      this.$router.push({ path, query: { era: this.eraStore.getCurrentSiteEraForPath } })
    },
    decreaseEra () {
      this.eraStore.decreaseSiteEra()
    },
    increaseEra () {
      this.eraStore.increaseSiteEra()
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

.v-application .eraslider .v-messages {
  margin-top: 10px;
}

.v-application .eraslider-label {
  padding: 0;
}

/* Slider tick labels: normal size on desktop, smaller only in narrow viewport */
.v-application .eraslider .v-slider-track__tick-label {
  font-size: 1em !important;
}

@media (max-width: 959px) {
  .v-application .eraslider .v-slider-track__tick-label {
    font-size: 0.65em !important;
  }
}

.v-application.mobile .eraslider-label {
  font-size: 0.875rem;
}

.v-application .v-input__append-outer {
  margin-left: 0;
}

/* Sticky footer: app fills viewport, main scrolls, footer at bottom */
.layout-sticky-footer.v-application {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  padding-bottom: 0;
}

.layout-sticky-footer .layout-main {
  flex: 1 1 0;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.layout-sticky-footer .layout-main .container {
  flex: 1;
}

.layout-sticky-footer .layout-footer {
  flex-shrink: 0;
}
</style>
