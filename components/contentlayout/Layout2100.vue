<template>
  <div class="layout2100">
    <v-row
      class="loading mb-3"
      justify="center"
      align="center"
    >
      <v-col cols="12" class="text-center">
        <v-card>
          <v-card-title class="maintitle text-center">
            Loading into your <span class="brand">Consciousness Chip<sup>TM</sup></span>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <ProgressBars ref="pbar" :data="timers" start="uploading">
      <v-card>
        <v-card-title class="endtitle">
          Upload successful.
        </v-card-title>
        <v-card-text>
          <p>If your <span class="brand">Consciousness Chip<sup>TM</sup></span> s malfunctioning or has overloaded, please contact <strong>Bio-Synthetic Brain Operation</strong> support.</p>
          <p>You can also attempt the obsolete <strong>Analog Mode</strong> by reading the information with aid of your eyes. Your eyes must be open and directed at the screen.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            @click="$store.commit('setToTodayEra')"
          >
            <v-icon left>
              mdi-eye-outline
            </v-icon>
            ANALOG MODE
          </v-btn>
          <v-btn
            color="error"
            @click="$refs.pbar.restart()"
          >
            <v-icon left>
              mdi-restart
            </v-icon>
            Restart
          </v-btn>
        </v-card-actions>
      </v-card>
    </ProgressBars>
  </div>
</template>

<script>
import ProgressBars from '~/components/ProgressBars.vue'

export default {
  name: 'Layout2100',
  components: {
    ProgressBars
  },
  data: () => ({
    timers: {
      uploading: {
        increase: [20, 25],
        label: 'UPLOADING INFORMATION',
        next: 'extracting',
        value: 0,
        interval: null
      },
      extracting: {
        increase: [15, 30],
        label: 'EXTRACTING TO GRAY MATTER',
        next: 'reasoning',
        value: 0,
        interval: null
      },
      reasoning: {
        increase: [20, 40],
        label: 'APPLYING SYNTHETIC REASONING...',
        next: 'longtermstore',
        value: 0,
        interval: null
      },
      longtermstore: {
        increase: [25, 35],
        label: 'MOVING TO LONG-TERM STORAGE',
        next: null,
        value: 0,
        interval: null
      }
    }
  })
}
</script>
