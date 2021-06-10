<template>
  <v-list-item-group
    v-if="display === 'list'"
    v-model="whatido"
    color="pink accent-3"
  >
    <v-list-item value="build">
      Build
    </v-list-item>
    <v-list-item value="write">
      Write
    </v-list-item>
    <v-list-item value="speak">
      Speak
    </v-list-item>
  </v-list-item-group>
  <v-btn-toggle
    v-else-if="display === 'buttons'"
    v-model="whatido"
    tile
    color="pink accent-3"
    group
  >
    <v-btn value="build">
      Build
    </v-btn>
    <v-btn value="write">
      Write
    </v-btn>
    <v-btn value="speak">
      Speak
    </v-btn>
  </v-btn-toggle>
  <ul v-else>
    <li @click="setWhatIdo('build')">
      <a>Build</a>
    </li>
    <li @click="setWhatIdo('write')">
      <a>Write</a>
    </li>
    <li @click="setWhatIdo('speak')">
      <a>Speak</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'WhatIDoPicker',
  props: {
    display: {
      type: String,
      default: 'buttons'
    }
  },
  computed: {
    whatido: {
      get () {
        return this.$store.state.whatido
      },
      set (value) {
        this.$store.commit('changeWhatIDo', value)
      }
    }
  },
  methods: {
    setWhatIdo (what) {
      this.$store.commit('changeWhatIDo', what)
    }
  }
}
</script>
