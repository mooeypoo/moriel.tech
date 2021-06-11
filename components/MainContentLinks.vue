<template>
  <div
    v-if="relevantLinks.length"
    class="whatido-links"
  >
    <!-- simple list -->
    <div v-if="isCurrentEra(1992)">
      <div
        v-for="section in relevantLinks"
        :key="section.title"
      >
        <h2 class="mt-5 mb-4">
          {{ section.title }}
        </h2>
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
    <!-- table -->
    <div v-else-if="isCurrentEra(1997)">
      <table v-if="$vuetify.breakpoint.smAndUp">
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
                <!-- eslint-disable-next-line vue/html-self-closing -->
                <br />
                <v-img
                  v-if="linkData.img"
                  :src="require(`~/assets/screenshots/${linkData.img}`)"
                  height="200px"
                  width="200px"
                />
              </li>
            </ul>
          </td>
        </tr>
      </table>

      <!-- small screens -->
      <table
        v-for="section in relevantLinks"
        v-else
        :key="section.title"
      >
        <tr>
          <th>{{ section.title }}</th>
        </tr>
        <tr>
          <td>
            <ul>
              <li
                v-for="linkData in section.links"
                :key="linkData.title"
              >
                <a :href="linkData.url">{{ linkData.title }}</a>:
                <!-- eslint-disable-next-line vue/html-self-closing -->
                <br />
                {{ linkData.description }}
                <!-- eslint-disable-next-line vue/html-self-closing -->
                <br />
                <v-img
                  v-if="linkData.img"
                  :src="require(`~/assets/screenshots/${linkData.img}`)"
                  height="200px"
                  width="200px"
                />
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </div>

    <div v-if="isCurrentEra(2000)">
      <div
        v-for="section in relevantLinks"
        :key="section.title"
        class="mb-5"
      >
        <div class="whatido-links-2000-header">
          {{ section.title }}
        </div>
        <div class="whatido-links-2000-content">
          <span
            v-for="linkData in section.links"
            :key="linkData.title"
          >
            <a :href="linkData.url">{{ linkData.title }}</a>
          </span>
        </div>
      </div>
    </div>

    <!-- Modern -->
    <v-card
      v-else-if="isCurrentEra(2021)"
      :outlined="!$vuetify.theme.dark"
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
                <v-card-title
                  v-if="!linkData.img"
                  v-text="linkData.title"
                />
                <v-img
                  v-if="linkData.img"
                  :src="require(`~/assets/screenshots/${linkData.img}`)"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.7)"
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
        </v-tab-item>
      </v-tabs-items>
    </v-card>
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
  },
  watch: {
    getWhatIDo (newValue, oldValue) {
      // What 'what I do' changes, reset the value of the tab to 0
      this.whatidotab = '0'
    }
  }
}
</script>

<style lang="scss">
.v-card__title {
  word-break: break-word;
}

.whatido-links table {
  margin: 0 auto;
}

.whatido-links-2000 {
  &-header {
    width: 100%;
    height: 50px;
    background-color: #57153d;
    border-radius: 50px 50px 0 0;
    text-align: center;
    padding-top: 5px;
    font-size: 1.5em;

    .theme--light & {
      color: white;
    }
  }

  &-content {
    span + span::before {
      content: ' ● ';
    }

    span a {
      .theme--light & {
        color: blue;
      }
    }
  }
}
</style>
