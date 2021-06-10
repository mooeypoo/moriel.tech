<template>
  <div class="mainpicture">
    <v-row
      v-if="isCurrent(2021)"
      justify="center"
      align="center"
    >
      <v-col cols="12" sm="8" md="6">
        <div class="text-center mb-5">
          <v-avatar
            size="250px"
            class="mt-5"
          >
            <img
              alt="Moriel Schottlender"
              :src="require(`~/assets/images/${pictureOfMe}.jpg`)"
            >
          </v-avatar>
        </div>
      </v-col>
    </v-row>
    <div
      v-else
      class="mb-5"
      :class="isCurrentHigherThan(1995) ? 'text-center' : ''"
    >
      <img
        class="pictureOfMe"
        width="250"
        alt="Moriel Schottlender"
        :src="require(`~/assets/images/${pictureOfMe}.jpg`)"
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainPicture',
  computed: {
    ...mapGetters([
      'getCurrentSiteStyle'
    ]),
    pictureOfMe () {
      switch (this.getCurrentSiteStyle) {
        case '1995':
          return 'moriel-50px'
        case '2000':
          return 'moriel-150px'
        case '2021':
        default:
          return 'moriel-320px'
      }
    }
  },
  methods: {
    isCurrent (year) {
      return Number(this.getCurrentSiteStyle) === year
    },
    isCurrentHigherThan (year) {
      return Number(this.getCurrentSiteStyle) > year
    },
    isCurrentLowerThan (year) {
      return Number(this.getCurrentSiteStyle) < year
    }
  }
}
</script>
