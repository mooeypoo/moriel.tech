<template>
  <v-navigation-drawer
    v-model="drawerState"
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

    <!-- <v-list nav dense>
      <WhatIDoPicker
        display="list"
      />
    </v-list> -->
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  computed: {
    drawerState: {
      get () { return this.$store.getters.getNavigationDrawerState },
      set (v) { return this.$store.commit('toggleNavigationDrawer', v) }
    }
  }
}
</script>
