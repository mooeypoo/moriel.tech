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
      :class="isCurrentEraBiggerThan(1992) ? 'text-center' : ''"
    >
      <div class="imageplaceholder">
        <div class="imagecontainer">
          <img
            class="pictureOfMe"
            :width="isCurrentEraLowerThan(2001) ? 200 : 250"
            alt="Moriel Schottlender"
            :src="require(`~/assets/images/${pictureOfMe}.jpg`)"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainPicture',
  computed: {
    ...mapGetters([
      'getCurrentSiteEra',
      'isCurrentEra',
      'isCurrentEraLowerThan',
      'isCurrentEraBiggerThan'
    ]),
    pictureOfMe () {
      switch (this.getCurrentSiteEra) {
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
  }
}
</script>
