<template>
  <v-list-item-group
    v-if="display === 'list'"
    v-model="whatido"
    color="pink accent-3"
    class="whatidopicker"
  >
    <v-list-item value="build">
      I Build
    </v-list-item>
    <v-list-item value="speak">
      I Speak
    </v-list-item>
    <v-list-item value="write">
      I Write
    </v-list-item>
  </v-list-item-group>
  <v-btn-toggle
    v-else-if="display === 'buttons'"
    v-model="whatido"
    tile
    color="pink accent-3"
    class="whatidopicker"
    group
    mandatory
  >
    <v-btn value="build">
      I Build
    </v-btn>
    <v-btn value="speak">
      I Speak
    </v-btn>
    <v-btn value="write">
      I Write
    </v-btn>
  </v-btn-toggle>
  <div v-else-if="display === 'divs'">
    <div
      class="whatidopicker"
    >
      <div
        :class="getButtonClass('build')"
        @click="setWhatIdo('build')"
      >
        I Build
      </div>
      <div
        :class="getButtonClass('speak')"
        @click="setWhatIdo('speak')"
      >
        I Speak
      </div>
      <div
        :class="getButtonClass('write')"
        @click="setWhatIdo('write')"
      >
        I Write
      </div>
    </div>
  </div>
  <ul
    v-else
    class="whatidopicker"
  >
    <li
      :class="whatido === 'build' ? 'active' : ''"
      @click="setWhatIdo('build')"
    >
      <a>I Build</a>
    </li>
    <li
      :class="whatido === 'speak' ? 'active' : ''"
      @click="setWhatIdo('speak')"
    >
      <a>I Speak</a>
    </li>
    <li
      :class="whatido === 'write' ? 'active' : ''"
      @click="setWhatIdo('write')"
    >
      <a>I Write</a>
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
    },
    buttonclasses: {
      type: String,
      default: ''
    },
    activeclasses: {
      type: String,
      default: ''
    },
    inactiveclasses: {
      type: String,
      default: ''
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
    },
    getButtonClass (name) {
      return [
        this.buttonclasses,
        this.whatido !== name ? this.inactiveclasses : '',
        this.whatido === name ? this.activeclasses : ''
      ].join(' ')
    }
  }
}
</script>

<style>
ul.whatidopicker li.active {
  font-weight: bold;
}

ul.whatidopicker li.active a::before {
  content: '>> ';
}

ul.whatidopicker li.active a::after {
  content: ' <<';
}
</style>
