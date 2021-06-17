<template>
  <v-app
    :dark="$vuetify.theme.dark"
    :class="siteEraClass"
  >
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.xsOnly"
      v-model="navdrawer"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              alt="Moriel Schottlender"
              :src="require('~/assets/images/gravatar.jpg')"
            />
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item
          link
          @click="$router.push({ path: '/' })"
        >
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Moriel Schottlender
            </v-list-item-title>
            <v-list-item-subtitle>
              Multidimensional multitasker
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <Menu type="list" @click="navdrawer = false" />
    </v-navigation-drawer>

    <v-app-bar
      clipped-left
      fixed
      app
    >
      <v-avatar
        size="36px"
        class="mr-5"
        @click="$router.push({ path: '/' })"
      >
        <img
          alt="Moriel Schottlender"
          src="~/assets/images/gravatar.jpg"
        >
      </v-avatar>
      <v-toolbar-title
        v-if="$vuetify.breakpoint.smAndUp"
        @click="$router.push({ path: '/' })"
        v-text="title"
      />

      <v-spacer v-if="$vuetify.breakpoint.smAndUp" />
      <Menu v-if="$vuetify.breakpoint.smAndUp" />
      <v-spacer />

      <v-switch
        v-model="$vuetify.theme.dark"
        color="blue"
        inset
        hide-details
        :append-icon="$vuetify.theme.dark ? 'mdi-weather-night' : 'mdi-white-balance-sunny'"
      />

      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.xsOnly"
        @click.stop="navdrawer = !navdrawer"
      />

      <template #extension>
        <v-row no-gutters align="center">
          <v-col
            v-if="$vuetify.breakpoint.smAndUp"
            cols="2"
            md="1"
            lg="1"
            align="center"
          >
            <v-subheader align="center" class="eraslider-label">
              Choose an era:
            </v-subheader>
          </v-col>
          <v-col class="flex-grow-1">
            <v-slider
              v-model="siteEra"
              :tick-labels="siteEraLabels"
              :max="siteEraLabels.length - 1"
              step="1"
              ticks="always"
              tick-size="1"
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

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Menu,
    Footer
  },
  data () {
    return {
      navdrawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'Moriel Schottlender'
    }
  },
  computed: {
    siteEraClass () {
      return [
        'style-' + this.$store.getters.getCurrentSiteEra,
        this.$vuetify.breakpoint.xsOnly ? 'mobile' : ''
      ].join(' ')
    },
    siteEraLabels () {
      return this.$store.state.siteEraLabels.map((label) => {
        if (label === 2021) {
          return 'Today'
        } else if (label > 2021) {
          return 'Future'
        } else {
          return label
        }
      })
    },
    siteEra: {
      get () {
        return this.$store.state.siteEra
      },
      set (value) {
        this.$store.commit('changeSiteStyle', value)
      }
    }
  },
  methods: {
    decreaseEra () {
      this.$store.commit('decreaseSiteEra')
    },
    increaseEra () {
      this.$store.commit('increaseSiteEra')
    }
  }
}
</script>

<style>
.v-application .eraslider .v-messages {
  margin-top: 10px;
}

.v-application .eraslider-label {
  padding: 0;
}

.v-application.mobile .v-slider__tick-label {
  font-size: 0.65em;
}

.v-application .v-input__append-outer {
  margin-left: 0;
}
</style>
