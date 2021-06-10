<template>
  <v-app
    :dark="$vuetify.theme.dark"
    :class="siteStyleClass"
  >
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
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

        <v-divider />

        <v-list-item>
          <v-list-item-action>
            <v-switch
              v-model="$vuetify.theme.dark"
              color="blue"
              inset
              hide-details
            />
          </v-list-item-action>
          <v-list-item-content>
            Dark mode
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <WhatIDoPicker
          display="list"
        />

        <v-divider />

        <!-- <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Information
            </v-list-item-title>
            <v-list-item-subtitle>
              Pages
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
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
        @click="$router.push({ path: '/' })"
        v-text="title"
      />

      <v-spacer />

      <WhatIDoPicker
        v-if="$vuetify.breakpoint.smAndUp"
        display="buttons"
      />

      <v-spacer />

      <v-switch
        v-if="$vuetify.breakpoint.smAndUp"
        v-model="$vuetify.theme.dark"
        label="Dark mode"
        color="blue"
        inset
        hide-details
      />
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.xsOnly"
        @click.stop="drawer = !drawer"
      />

      <template #extension>
        <v-slider
          v-model="siteStyle"
          :tick-labels="siteStyleLabels"
          :max="2"
          step="1"
          ticks="always"
          tick-size="1"
        />
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
import WhatIDoPicker from '~/components/WhatIDoPicker.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer,
    WhatIDoPicker
  },
  data () {
    return {
      drawer: false,
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
    siteStyleClass () {
      return 'style-' + this.$store.getters.getCurrentSiteStyle
    },
    siteStyleLabels () {
      return this.$store.state.siteStyleLabels
    },
    siteStyle: {
      get () {
        return this.$store.state.siteStyle
      },
      set (value) {
        this.$store.commit('changeSiteStyle', value)
      }
    }
  }
}
</script>
