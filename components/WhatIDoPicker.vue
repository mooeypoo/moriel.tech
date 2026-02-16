<template>
  <v-list
    v-if="display === 'list'"
    v-model:selected="whatidoSelection"
    color="pink-accent-3"
    class="whatidopicker"
    :mandatory="true"
    selectable
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
  </v-list>
  <v-btn-toggle
    v-else-if="display === 'buttons'"
    v-model="whatido"
    color="pink-accent-3"
    class="whatidopicker"
    :mandatory="true"
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
import { useEraStore } from '~/stores/era'

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
  setup () {
    const eraStore = useEraStore()
    return { eraStore }
  },
  computed: {
    whatido: {
      get () {
        return this.eraStore.whatido
      },
      set (value) {
        this.eraStore.changeWhatIDo(value)
      }
    },
    whatidoSelection: {
      get () {
        return [this.eraStore.whatido]
      },
      set (v) {
        const val = Array.isArray(v) && v.length ? v[0] : this.eraStore.whatido
        this.eraStore.changeWhatIDo(val)
      }
    }
  },
  methods: {
    setWhatIdo (what) {
      this.eraStore.changeWhatIDo(what)
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
