<template>
  <v-btn-toggle
    v-if="type === 'buttons'"
    v-model="menu"
    tile
    color="pink accent-3"
    class="whatidopicker"
    group
    mandatory
  >
    <v-btn
      value="index"
      @click="$router.push({ path: '/' })"
    >
      <v-icon left>
        mdi-home
      </v-icon>
      Main
    </v-btn>
    <v-btn
      value="contact"
      @click="$router.push({ path: '/contact' })"
    >
      <v-icon left>
        mdi-card-account-mail
      </v-icon>
      Contact
    </v-btn>
  </v-btn-toggle>
  <v-list
    v-else
    dense
  >
    <v-list-item-group
      v-model="menu"
      mandatory
    >
      <v-list-item
        link
        value="index"
        @click="$router.push({ path: '/' })"
      >
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Main information</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        link
        value="contact"
        @click="$router.push({ path: '/contact' })"
      >
        <v-list-item-icon>
          <v-icon>mdi-card-account-mail</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    type: {
      type: String,
      default: 'buttons'
    }
  },
  data: () => ({
    menu: 'index'
  }),
  computed: {
    currentRoute () {
      return this.$nuxt.$route.name
    }
  },
  watch: {
    currentRoute (route) {
      this.menu = route
    }
  },
  mounted () {
    this.menu = this.currentRoute
  }
}
</script>
