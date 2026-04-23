<template>
  <v-btn-toggle
    v-if="type === 'buttons'"
    v-model="menu"
    color="pink-accent-3"
    class="whatidopicker"
    :mandatory="true"
  >
    <v-btn
      value="index"
      @click="getRouteAction('/')"
    >
      <v-icon start>
        mdi-home
      </v-icon>
      Main
    </v-btn>
    <v-btn
      value="contact"
      @click="getRouteAction('/contact')"
    >
      <v-icon start>
        mdi-card-account-mail
      </v-icon>
      Contact
    </v-btn>
    <v-btn
      value="credits"
      @click="getRouteAction('/credits')"
    >
      <v-icon start>
        mdi-heart-multiple
      </v-icon>
      Credits
    </v-btn>
    <v-btn
      value="blog"
      href="https://blog.moriel.tech"
      target="_blank"
      rel="noopener noreferrer"
    >
      <v-icon start>
        mdi-post-outline
      </v-icon>
      Blog
    </v-btn>
  </v-btn-toggle>
  <v-list
    v-else
    density="compact"
    v-model:selected="menuSelection"
    :mandatory="true"
    selectable
  >
    <v-list-item
      value="index"
      @click="getRouteAction('/')"
    >
      <template #prepend>
        <v-icon>mdi-home</v-icon>
      </template>
      <v-list-item-title>Main information</v-list-item-title>
    </v-list-item>
    <v-list-item
      value="contact"
      @click="getRouteAction('/contact')"
    >
      <template #prepend>
        <v-icon>mdi-card-account-mail</v-icon>
      </template>
      <v-list-item-title>Contact</v-list-item-title>
    </v-list-item>
    <v-list-item
      value="credits"
      @click="getRouteAction('/credits')"
    >
      <template #prepend>
        <v-icon>mdi-heart-multiple</v-icon>
      </template>
      <v-list-item-title>Credits</v-list-item-title>
    </v-list-item>
    <v-list-item
      value="blog"
      href="https://blog.moriel.tech"
      target="_blank"
      rel="noopener noreferrer"
    >
      <template #prepend>
        <v-icon>mdi-post-outline</v-icon>
      </template>
      <v-list-item-title>Blog</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
import { useEraStore } from '~/stores/era'
import { useRoute } from 'vue-router'

export default {
  name: 'Menu',
  props: {
    type: {
      type: String,
      default: 'buttons'
    }
  },
  setup () {
    const eraStore = useEraStore()
    const route = useRoute()
    return { eraStore, route }
  },
  data: () => ({
    menu: 'index'
  }),
  computed: {
    getCurrentSiteEraForPath () {
      return this.eraStore.getCurrentSiteEraForPath
    },
    currentRoute () {
      return this.route?.name || this.$route?.name
    },
    menuSelection: {
      get () {
        return [this.menu]
      },
      set (v) {
        this.menu = Array.isArray(v) && v.length ? v[0] : this.menu
      }
    }
  },
  watch: {
    currentRoute (route) {
      this.menu = route || 'index'
    }
  },
  mounted () {
    this.menu = this.currentRoute || 'index'
  },
  methods: {
    getRouteAction (target) {
      return this.$router.push({
        path: target,
        query: { era: this.eraStore.getCurrentSiteEraForPath }
      })
    }
  }
}
</script>
