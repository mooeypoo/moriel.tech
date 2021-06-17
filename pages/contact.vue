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
      <ProgressBars ref="pbar" :data="bars" start="packaging">
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
              @click="$store.commit('setToTodayEra')"
            >
              <v-icon left>
                mdi-wifi
              </v-icon>
              MAIN CONTENT
            </v-btn>
            <v-btn
              color="error"
              @click="$refs.pbar.reset()"
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
      <v-row
        justify="center"
        align="center"
      >
        <v-col cols="12" sm="9" md="8">
          <h2 class="text-center">
            Contact me
          </h2>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        align="center"
      >
        <v-col cols="12" sm="9" md="8">
          <p>The best method to contact me is through social media, using the links on the footer.</p>
          <p>If you want to send me a longer message via email, you can use the form below.</p>
        </v-col>
      </v-row>

      <ContactForm />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    ContactForm
  },
  data: () => ({
    bars: {
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
  }
}
</script>
