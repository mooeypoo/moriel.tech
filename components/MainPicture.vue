<template>
  <div class="mainpicture">
    <v-row
      v-if="isCurrentEra(2021)"
      justify="center"
      align="center"
    >
      <v-col cols="12" sm="8" md="6">
        <div class="text-center mb-5">
          <v-avatar
            size="200px"
            class="mt-2"
          >
            <img
              alt="Moriel Schottlender"
              :src="`/images/${pictureOfMe}.jpg`"
            >
          </v-avatar>
        </div>
      </v-col>
    </v-row>
    <div
      v-else
      class="mb-5"
      :class="isCurrentEraBiggerThan(1992) ? 'text-center' : ''"
    >
      <div class="imageplaceholder">
        <div :class="imageClasses.join(' ')" @animationend="removeAnimation">
          <img
            class="pictureOfMe"
            :width="isCurrentEraLowerThan(2001) ? 200 : 250"
            alt="Moriel Schottlender"
            :src="`/images/${pictureOfMe}.jpg`"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useEraStore } from '~/stores/era'

export default {
  name: 'MainPicture',
  setup () {
    const eraStore = useEraStore()
    return { eraStore }
  },
  data: () => ({
    imageClasses: ['imagecontainer']
  }),
  computed: {
    getCurrentSiteEra () {
      return this.eraStore.getCurrentSiteEra
    },
    isCurrentEra () {
      return this.eraStore.isCurrentEra
    },
    isCurrentEraLowerThan () {
      return this.eraStore.isCurrentEraLowerThan
    },
    isCurrentEraBiggerThan () {
      return this.eraStore.isCurrentEraBiggerThan
    },
    pictureOfMe () {
      switch (this.eraStore.getCurrentSiteEra) {
        case 1992:
          return 'moriel-50px'
        case 1997:
          return 'moriel-150px'
        // case 2000 is handled in its own layout
        case 2021:
        default:
          return 'moriel-320px'
      }
    }
  },
  beforeMount () {
    this.addAnimation()
  },
  beforeUpdate () {
    this.addAnimation()
  },
  beforeUnmount () {
    this.removeAnimation()
  },
  methods: {
    removeAnimation () {
      this.imageClasses = [
        'imagecontainer'
      ]
    },
    addAnimation () {
      this.imageClasses = [
        'imagecontainer',
        'slowloadimage'
      ]
    }
  }
}
</script>
