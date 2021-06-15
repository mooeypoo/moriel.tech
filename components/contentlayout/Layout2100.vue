<template>
  <div class="layout2100">
    <v-row
      class="loading mb-3"
      justify="center"
      align="center"
    >
      <v-col cols="12" xs="6" sm="6" class="text-center">
        <v-card>
          <v-card-title class="maintitle">
            Loading into Consciousness Chip<sup>TM</sup>...
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <div
      v-for="barName in Object.keys(bars)"
      :key="barName"
    >
      <v-row
        v-if="visible.indexOf(barName) > -1"
        class="mb-4"
        justify="center"
        align="center"
      >
        <v-col cols="12" xs="6" sm="6" class="text-center py-1">
          <v-card>
            <v-card-subtitle class="pa-1">
              {{ bars[barName].label }}
            </v-card-subtitle>
            <v-progress-linear
              v-model="bars[barName].value"
              :color="$vuetify.theme.dark ? 'pink darken-4' : 'pink lighten-2'"
              height="20"
              :buffer-value="bars[barName].value"
              stream
            >
              <strong>{{ displayValueLabel(barName) }}</strong>
            </v-progress-linear>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-row
      v-if="visible.indexOf('end') > -1"
      class="ending"
      justify="center"
      align="center"
    >
      <v-col cols="12" xs="6" sm="6" class="text-center">
        <v-card>
          <v-card-title class="endtitle">
            Upload successful.
          </v-card-title>
          <!-- <v-card-subtitle>
          </v-card-subtitle> -->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Layout2100',
  data: () => ({
    nextBar: 'uploading',
    visible: ['uploading'],
    bars: {
      uploading: {
        increase: [0, 15],
        label: 'UPLOADING INFORMATION',
        next: 'processing',
        value: 0,
        interval: null
      },
      processing: {
        increase: [10, 25],
        label: 'PROCESSING MATERIAL',
        next: 'extracting',
        value: 0,
        interval: null
      },
      extracting: {
        increase: [10, 25],
        label: 'EXTRACTING TO STORAGE',
        next: 'reasoning',
        value: 0,
        interval: null
      },
      reasoning: {
        increase: [2, 5],
        label: 'APPLYING SYNTHETIC REASONING...',
        next: 'longtermstore',
        value: 0,
        interval: null
      },
      longtermstore: {
        increase: [15, 25],
        label: 'MOVING TO LONG-TERM STORAGE',
        next: null,
        value: 0,
        interval: null
      }
    }
  }),
  computed: {
  },
  watch: {
    nextBar (val) {
      if (
        val !== null &&
        this.bars[val]
      ) {
        this.visible.push(val)
        this.startBar(val)
      } else if (val === null) {
        // End!
        this.visible.push('end')
      }
    }
  },
  mounted () {
    this.startBar('uploading')
  },
  beforeDestroy () {
    // Stop all
    Object.keys(this.bars).forEach((name) => {
      this.stopBar(name)
    })
  },
  methods: {
    getRandNum (min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    displayValueLabel (name) {
      return (this.bars[name].value < 100)
        ? `${Math.ceil(this.bars[name].value)}%`
        : 'DONE'
    },
    startBar (name) {
      if (!this.bars[name]) {
        return null
      }

      this.bars[name].interval = setInterval(() => {
        this.bars[name].value += this.getRandNum(
          this.bars[name].increase[0],
          this.bars[name].increase[1]
        )

        if (this.bars[name].value >= 100) {
          // Stop this one
          this.stopBar(name)
          // Start the next one
          this.nextBar = this.bars[name].next
        }
      }, 500)
    },
    stopBar (name) {
      if (!this.bars[name]) {
        return null
      }
      clearInterval(this.bars[name].interval)
    }
  }
}
</script>

<style lang="scss">
.layout2100 {
  .loading {
    .maintitle {
      font-variant: small-caps;
      line-height: 1;
      animation: fadeinout 3s linear 1 forwards;
      animation-iteration-count: infinite;
    }
  }

  &.mobile .loading h1 {
    font-size: 1.2em;
  }

  @keyframes fadeinout {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
  }
}
</style>
