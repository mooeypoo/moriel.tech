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
    nextBar: '',
    visible: [],
    bars: {}
  }),
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
    this.reset()
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
    reset () {
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

      // Make the start visible
      this.visible = [this.start]
      // Start at the beginning
      this.startBar(this.start)
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
