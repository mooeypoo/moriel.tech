<template>
  <div class="contact">
    <div v-if="isCurrentEra(2100)">
      <v-row
        class="loading mb-3"
        justify="center"
        align="center"
      >
        <v-col cols="12" class="text-center">
          <v-card>
            <v-card-title class="maintitle">
              Connecting your <span class="brand">Consciousness Chip<sup>TM</sup></span> to remote target
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <ProgressBars ref="pbar" :data="timers" start="packaging">
        <v-card>
          <v-card-title class="endtitle">
            Message successfully sent.
          </v-card-title>
          <v-card-text>
            <p>Please note that message receipt does not indicate message processing. Your message may still need further processing on the target side.</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              @click="goToMainToday"
            >
              <v-icon left>
                mdi-wifi
              </v-icon>
              MAIN CONTENT
            </v-btn>
            <v-btn
              color="error"
              @click="$refs.pbar.restart()"
            >
              <v-icon left>
                mdi-restart
              </v-icon>
              Restart
            </v-btn>
          </v-card-actions>
        </v-card>
      </ProgressBars>
    </div>
    <div v-else>
      <div
        v-if="isCurrentEra(2012)"
        class="bootstrap-hero"
      >
        <h1>Contact me</h1>
        <p>
          The best method to contact me is through social media on twitter, LinkedIn or polywork.
          <!-- eslint-disable-next-line vue/html-self-closing -->
          <br />
          You can use the form below to contact me directly.
        </p>
      </div>
      <v-row
        v-else
        justify="center"
        align="center"
      >
        <v-col cols="12" sm="9" md="8">
          <h2 class="text-center">
            Contact me
          </h2>
        </v-col>
      </v-row>
      <div
        v-if="isCurrentEra(2012)"
        class="mt-5 bootstrap-alert-message bootstrap-block-message"
      >
        <p>Want to invite me to your event, or have me speak at your company? Please provide details below.</p>
        <p>Some of my usual topics include:</p>
        <ul>
          <li>Localization: supporting your user no matter where they are</li>
          <li>Technical aspect of language support and translations</li>
          <li>Open Source and developing Wikipedia in the open</li>
          <li>Supporting non-Left to Right languages when developing products</li>
        </ul>
      </div>
      <v-row
        v-else
        justify="center"
        align="center"
      >
        <v-col cols="12" sm="9" md="8">
          <p>You can use the form below to contact me directly.</p>
          <h3>Request a speaking engagement</h3>
          <p>Want to invite me to your event, or have me speak at your company? Please provide details below.</p>
          <p>Some of my usual topics include:</p>
          <ul>
            <li>Localization: supporting your user no matter where they are</li>
            <li>Technical aspect of language support and translations</li>
            <li>Open Source and developing Wikipedia in the open</li>
            <li>Supporting non-Left to Right languages when developing products</li>
          </ul>
        </v-col>
      </v-row>
      <div
        v-if="isCurrentEra(2012)"
        class="maincontent mt-5"
      >
        <ContactForm />
      </div>
      <v-row
        v-else
        justify="center"
        align="center"
      >
        <v-col cols="12" sm="9" md="8">
          <h3>Send me an email</h3>
        </v-col>
      </v-row>
      <ContactForm v-if="!isCurrentEra(2012)" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProgressBars from '~/components/ProgressBars.vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    ProgressBars,
    ContactForm
  },
  data: () => ({
    timers: {
      packaging: {
        increase: [20, 40],
        label: 'PACKAGING MESSAGE',
        next: 'connecting',
        value: 0,
        interval: null
      },
      connecting: {
        increase: [20, 25],
        label: 'ESTABLISHING CONNECTION',
        next: 'authenticating',
        value: 0,
        interval: null
      },
      authenticating: {
        increase: [15, 30],
        label: 'AUTHENTICATING',
        next: 'uploading',
        value: 0,
        interval: null
      },
      uploading: {
        increase: [25, 35],
        label: 'UPLOADING TO REMOTE',
        next: 'signing',
        value: 0,
        interval: null
      },
      signing: {
        increase: [25, 35],
        label: 'SIGNING PAYLOAD',
        next: null,
        value: 0,
        interval: null
      }
    }
  }),
  computed: {
    ...mapGetters([
      'isCurrentEra'
    ])
  },
  methods: {
    goToMainToday () {
      this.$store.commit('setToTodayEra')
      this.$router.push({ path: '/' })
    }
  }
}
</script>
