<template>
  <div class="progressbars">
    <div
      v-for="barName in Object.keys(bars)"
      :key="barName"
    >
      <v-row
        v-if="visible.indexOf(barName) > -1"
        class="mb-2"
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
      <v-col cols="12" xs="6" sm="6">
        <slot />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ProgressBars',
  props: {
    data: {
      type: Object,
      required: true
    },
    start: {
      type: String,
      required: true
    }
  },
  data: () => ({
    visible: [],
    bars: {}
  }),
  beforeMount () {
    this.restart()
  },
  beforeDestroy () {
    // Stop all and reset the value
    Object.keys(this.bars).forEach((name) => {
      this.stopBar(name)
      this.bars[name].value = 0
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
    restart () {
      // Reset values
      this.visible = []
      this.bars = Object.assign({}, this.data)
      this.nextBar = this.start

      Object.keys(this.bars).forEach((name) => {
        // Stop all just in case
        this.stopBar(name)

        // Reset all values
        this.bars[name].value = 0
      })

      // Start at the beginning
      this.startBar(this.start)
    },
    startBar (name) {
      if (!this.bars[name]) {
        return null
      }

      this.visible.push(name)
      this.bars[name].interval = setInterval(() => {
        if (this.bars[name].value < 100) {
          this.bars[name].value += this.getRandNum(
            this.bars[name].increase[0],
            this.bars[name].increase[1]
          )
        } else {
          // Start the next one
          const next = this.bars[name].next
          if (next && this.bars[next]) {
            this.startBar(this.bars[name].next)
          } else {
            this.visible.push('end')
          }

          // Stop this one
          this.stopBar(name)
        }
      }, 500)
    },
    stopBar (name) {
      if (!this.bars[name]) {
        return null
      }
      clearInterval(this.bars[name].interval)
      this.bars[name].interval = null
    }
  }
}
</script>
