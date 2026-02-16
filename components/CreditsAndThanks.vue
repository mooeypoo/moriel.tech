<template>
  <v-row
    v-if="isCurrentEra(2021) || isCurrentEra(2100)"
    justify="center"
    align="center"
  >
    <v-col cols="12" sm="9" md="8">
      <v-card
        class="mb-5"
      >
        <v-card-title>Technology</v-card-title>
        <v-card-text>
          <ContentRenderer
            v-if="mdcredits.tech"
            :value="mdcredits.tech"
            class="maincontent"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            href="https://www.buymeacoffee.com/mooeypoo"
            target="_blank"
          >
            <v-icon left>
              mdi-coffee
            </v-icon>
            Buy me a coffee
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card
        class="mb-5"
      >
        <v-card-title>Awesome people</v-card-title>
        <v-card-text>Some awesome people were involved in various capacities in the inspiration, brainstorming, testing and tweaking of this site. They deserve thanks.</v-card-text>
        <v-divider />
        <v-card-text>
          <v-row justify="space-around">
            <v-col
              v-for="person in getAwesomePeople"
              :key="person.name"
              align="center"
            >
              <v-card
                cols="12"
                flat
              >
                <v-card-text class="pa-0">
                  <v-avatar>
                    <!-- eslint-disable-next-line vue/html-self-closing -->
                    <img
                      :src="person.img"
                      :alt="person.name"
                    />
                  </v-avatar>
                </v-card-text>
                <v-card-title class="pt-0">
                  {{ person.name }}
                </v-card-title>
                <v-card-subtitle>
                  {{ person.forwhat }}
                </v-card-subtitle>
                <v-card-text>
                  <v-btn
                    icon
                    x-small
                    :href="`https://twitter.com/${person.twitter}`"
                  >
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    x-small
                    :href="person.url"
                  >
                    <v-icon>mdi-link</v-icon>
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider />
        <v-card-text>
          <ContentRenderer
            v-if="mdcredits.rwc"
            :value="mdcredits.rwc"
            class="maincontent"
          />
        </v-card-text>
      </v-card>

      <v-card>
        <v-card-title>Assets</v-card-title>
        <v-card-text>
          <ContentRenderer
            v-if="mdcredits.assets"
            :value="mdcredits.assets"
            class="maincontent"
          />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row
    v-else
    justify="center"
    align="center"
  >
    <v-col cols="12" sm="9" md="8">
      <h2>
        Technology
      </h2>
      <ContentRenderer
        v-if="mdcredits.tech"
        :value="mdcredits.tech"
      />
      <a
        href="https://www.buymeacoffee.com/mooeypoo"
        target="_blank"
      >
        <strong>Buy me a ☕ coffee!</strong>
      </a>
      <h2 class="mt-3">
        Awesome people
      </h2>
      <p>Some awesome people were involved in various capacities in the inspiration, brainstorming, testing and tweaking of this site. They deserve thanks.</p>

      <ul>
        <li
          v-for="person in getAwesomePeople"
          :key="person.name"
        >
          <strong>
            {{ person.name }}
          </strong>: {{ person.forwhat }}
          <ul>
            <li>
              <a
                :href="person.url"
              >
                Website
              </a>
            </li>
            <li>
              Twitter: <a
                :href="person.url"
              >
                @{{ person.twitter }}
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <h2 class="mt-3">
        Assets
      </h2>
      <ContentRenderer
        v-if="mdcredits.assets"
        :value="mdcredits.assets"
      />
    </v-col>
  </v-row>
</template>

<script>
import { useEraStore } from '~/stores/era'

export default {
  name: 'CreditsAndThanks',
  async setup () {
    const eraStore = useEraStore()
    const q = (path) => queryCollection('credits').path(path).first()
    const { data: mdcredits } = await useAsyncData('credits-content', () =>
      Promise.all([
        q('/credits/tech'),
        q('/credits/assets'),
        q('/credits/rwc')
      ]).then(([tech, assets, rwc]) => ({ tech, assets, rwc }))
    )
    return { eraStore, mdcredits }
  },
  computed: {
    isCurrentEra () {
      return this.eraStore.isCurrentEra
    },
    getAwesomePeople () {
      return this.eraStore.getAwesomePeople
    }
  }
}
</script>
