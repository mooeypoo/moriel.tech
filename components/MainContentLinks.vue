<template>
  <div
    v-if="relevantLinks.length"
    class="content-links"
  >
    <!-- simple list -->
    <div v-if="isCurrentEraLowerThan(1993)">
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
    <!-- table view -->
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

    <!-- rounded section view -->
    <div v-if="isCurrentEra(2000)">
      <div
        v-for="section in relevantLinks"
        :key="section.title"
        class="mb-5"
      >
        <div class="content-links-2000-header">
          <img
            alt="Notebook clipart"
            style="vertical-align: middle;"
            width="40px"
            :src="require('~/assets/images/clipart-notebookpencil.png')"
          >
          <span>{{ section.title }}</span>
        </div>
        <div class="content-links-2000-content">
          <div
            v-for="linkData in section.links"
            :key="linkData.title"
            class="content-links-2000-content-piece"
          >
            <div class="content-links-2000-content-piece-head">
              <a :href="linkData.url">{{ linkData.title }}</a>
            </div>
            <div class="content-links-2000-content-piece-content">
              {{ linkData.description }}
            </div>
          </div>
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
                  gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.4)"
                  height="200px"
                />
                <v-card-title v-if="linkData.img" v-text="linkData.title" />
                <v-card-text>{{ linkData.description }}</v-card-text>

                <v-card-actions>
                  <v-spacer />

                  <v-btn
                    :href="linkData.url"
                  >
                    <v-icon left>
                      {{ getTodayButtonIcon }}
                    </v-icon>
                    {{ getTodayButtonText }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <!-- Futuristic, split to ranom div -->
    <div v-else-if="isCurrentEra(2100)">
      <div
        v-for="section in relevantLinks"
        :key="section.title"
      >
        <div class="section-title">
          {{ section.title }}
        </div>
        <div
          v-for="linkData in section.links"
          :key="linkData.title"
          class="section-links"
        >
          <div
            class="section-links-title"
          >
            {{ linkData.title }}
          </div>
          <div
            class="section-links-description"
          >
            {{ linkData.description }}
          </div>
        </div>
      </div>
    </div>
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
    },
    getTodayButtonText () {
      const details = this.getTodayButtonDetails()
      return details.text
    },
    getTodayButtonIcon () {
      const details = this.getTodayButtonDetails()
      return details.icon
    }
  },
  watch: {
    getWhatIDo (newValue, oldValue) {
      // What 'what I do' changes, reset the value of the tab to 0
      this.whatidotab = '0'
    }
  },
  methods: {
    getTodayButtonDetails () {
      switch (this.getWhatIDo) {
        case 'speak':
          return {
            text: 'Watch and read',
            icon: 'mdi-account-voice'
          }
        case 'write':
          return {
            text: 'Read',
            icon: 'mdi-book-open-blank-variant'
          }
        case 'build':
        default:
          return {
            text: 'Visit',
            icon: 'mdi-share-variant'
          }
      }
    }
  }
}
</script>

<style lang="scss">
.v-card__title {
  word-break: break-word !important;
}

.content-links table {
  margin: 0 auto;
}

.content-links-2000 {
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
