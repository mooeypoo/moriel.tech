<template>
  <div
    v-if="relevantLinks.length"
    class="whatido-links"
  >
    <div v-if="isCurrentEra(1992)">
      <div
        v-for="section in relevantLinks"
        :key="section.title"
      >
        <h2 class="mt-5 mb-4">{{ section.title }}</h2>
        <ul>
          <li
            v-for="linkData in section.links"
            :key="linkData.title"
          >
            <a :href="linkData.url">{{ linkData.title }}</a>:
            <!-- eslint-disable-next-line vue/html-self-closing -->
            <br />
            {{ linkData.description }}
          </li>
        </ul>
      </div>
    </div>
    <div
      v-else-if="isCurrentEra(1997)"
    >
      <table>
        <tr>
          <th
            v-for="section in relevantLinks"
            :key="section.title"
          >
            {{ section.title }}
          </th>
        </tr>
        <tr>
          <td
            v-for="section in relevantLinks"
            :key="section.title"
          >
            <ul>
              <li
                v-for="linkData in section.links"
                :key="linkData.title"
              >
                <a :href="linkData.url">{{ linkData.title }}</a>:
                <!-- eslint-disable-next-line vue/html-self-closing -->
                <br />
                {{ linkData.description }}
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </div>

    <!-- Modern -->
    <v-container
      v-else-if="isCurrentEra(2021)"
      fluid
    >
      <v-tabs
        v-model="whatidotab"
        show-arrows
      >
        <v-tabs-slider color="yellow" />

        <v-tab
          v-for="section in relevantLinks"
          :key="section.title"
        >
          {{ section.title }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="whatidotab">
        <v-tab-item
          v-for="section in relevantLinks"
          :key="section.title"
        >
          <v-row class="pa-4">
            <v-col
              v-for="linkData in section.links"
              :key="linkData.title"
              cols="12"
              lg="4"
              md="4"
            >
              <v-card
                :color="$vuetify.theme.dark ? '#761d3b' : '#ffb6cf'"
              >
                <v-card-title v-text="linkData.title" />
                <!-- <v-img
                  :src="linkData.img"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title v-text="linkData.title" />
                </v-img> -->
                <v-card-text>{{ linkData.description }}</v-card-text>

                <v-card-actions>
                  <v-spacer />

                  <v-btn
                    :href="linkData.url"
                  >
                    <v-icon left>
                      mdi-heart
                    </v-icon>
                    Visit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>

      <!-- <v-container
        v-for="section in relevantLinks"
        :key="section.title"
        fluid
      >
        <h2>{{ section.title }}</h2>
        <v-row dense>
          <v-col
            v-for="linkData in section.links"
            :key="linkData.title"
            cols="6"
            lg="4"
            md="4"
          >
            <v-card>
              <v-card-title v-text="linkData.title" />
              <v-img
                :src="linkData.img"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="linkData.title" />
              </v-img>
              <v-card-text>{{ linkData.description }}</v-card-text>

              <v-card-actions>
                <v-spacer />

                <v-btn
                  :href="linkData.url"
                >
                  <v-icon left>
                    mdi-heart
                  </v-icon>
                  Visit
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container> -->
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainContentLinks',
  data: () => ({
    whatidotab: null
  }),
  computed: {
    ...mapGetters([
      'getRelevantWhatIDoLinks',
      'getWhatIDo',
      'isCurrentEra',
      'isCurrentEraLowerThan',
      'isCurrentEraBiggerThan'
    ]),
    relevantLinks () {
      return this.getRelevantWhatIDoLinks
    }
  }
}
</script>

<style>
.v-card__title {
  word-break: break-word;
}

.whatido-links table {
  margin: 0 auto;
}
</style>
