<template>
  <v-form
    ref="form"
    v-model="valid"
    netlify
    netlify-honeypot="bot-field"
    class="contactform"
    name="Contact"
    action="/thanks"
    method="POST"
    @submit="onSubmit"
  >
    <!-- eslint-disable-next-line vue/html-self-closing -->
    <input type="hidden" name="form-name" value="Contact" />
    <!-- eslint-disable-next-line vue/html-self-closing -->
    <input type="hidden" name="era" :value="getCurrentSiteEra" />
    <v-card
      v-if="isCurrentEra(2021)"
      class="mx-auto"
    >
      <v-card-text>
        <v-row
          no-gutters
          justify="center"
          align="center"
        >
          <v-col cols="12" sm="9" md="8">
            <v-text-field
              v-model="fullname"
              :rules="nameRules"
              label="Your name"
              name="fullname"
              required
              filled
            />
          </v-col>
        </v-row>
        <v-row
          no-gutters
          justify="center"
          align="center"
        >
          <v-col cols="12" sm="9" md="8">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Your email"
              name="email"
              required
              filled
            />
          </v-col>
        </v-row>
        <v-row
          no-gutters
          justify="center"
          align="center"
        >
          <v-col cols="12" sm="9" md="8">
            <v-textarea
              v-model="message"
              :rules="messageRules"
              label="Your message"
              name="message"
              filled
              required
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          type="submit"
        >
          Send
        </v-btn>
      </v-card-actions>
    </v-card>
    <div
      v-else-if="isCurrentEra(2000)"
    >
      <v-row
        justify="center"
        align="center"
      >
        <v-col cols="12" md="8" sm="9">
          <v-row
            justify="center"
            align="center"
          >
            <v-col cols="12" md="2" lg="2" xl="2">
              <label for="fullname">Your name</label>
            </v-col>
            <v-col cols="12" md="10" lg="10" xl="10">
              <v-text-field
                v-model="fullname"
                name="fullname"
                :rules="nameRules"
                required
                outlined
              />
            </v-col>
          </v-row>
          <v-row
            justify="center"
            align="center"
          >
            <v-col cols="12" md="2" lg="2" xl="2">
              <label for="email">Your email</label>
            </v-col>
            <v-col cols="12" md="10" lg="10" xl="10">
              <v-text-field
                v-model="email"
                name="email"
                :rules="emailRules"
                required
                outlined
              />
            </v-col>
          </v-row>
          <v-row
            justify="center"
            align="center"
          >
            <v-col cols="12" md="2" lg="2" xl="2">
              <label for="email">Your email</label>
            </v-col>
            <v-col cols="12" md="10" lg="10" xl="10">
              <v-textarea
                v-model="message"
                name="message"
                :rules="messageRules"
                required
                outlined
              />
            </v-col>
          </v-row>
          <v-row
            justify="center"
            align="center"
          >
            <v-col cols="12" class="text-center">
              <v-btn
                color="primary"
                class="mr-4"
                type="submit"
              >
                Send
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <div
      v-else-if="isCurrentEra(1989) || isCurrentEra(1992) || isCurrentEra(1997)"
    >
      <v-row
        v-if="error"
        justify="center"
        align="center"
      >
        <v-col cols="12" md="8" sm="9" class="formerror">
          There are errors in the form. Please note that all fields are mandatory.
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8" sm="9">
          <label for="fullname">Your name:</label>
          <!-- eslint-disable-next-line vue/html-self-closing -->
          <input
            v-model="fullname"
            type="text"
            name="fullname"
            required="true"
          />
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8" sm="9">
          <label for="fullname">Your email:</label>
          <!-- eslint-disable-next-line vue/html-self-closing -->
          <input
            v-model="email"
            type="text"
            name="email"
            required="true"
          />
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8" sm="9">
          <label for="fullname">Your message:</label>
          <!-- eslint-disable-next-line vue/html-self-closing -->
          <textarea
            v-model="message"
            name="message"
            required="true"
          ></textarea>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8" sm="9">
          <!-- eslint-disable-next-line vue/html-self-closing -->
          <input
            v-if="isCurrentEra(1989)"
            type="submit"
            value="[ Send ]"
            class="submitbutton"
          />
          <!-- eslint-disable-next-line vue/html-self-closing -->
          <input
            v-else
            type="submit"
            value="Send"
            class="submitbutton"
          />
        </v-col>
      </v-row>
    </div>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    error: false,
    valid: false,
    fullname: '',
    message: '',
    nameRules: [
      v => !!v || 'Name is required'
    ],
    messageRules: [
      v => !!v || 'Message is required'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  computed: {
    ...mapGetters([
      'isCurrentEra',
      'isCurrentEraLowerThan',
      'getCurrentSiteEra'
    ]),
    isValidManually () {
      return (
        !!this.fullname &&
        !!this.email &&
        /.+@.+/.test(this.email) &&
        !!this.message
      )
    }
  },
  methods: {
    onSubmit (event) {
      this.error = false
      // validate
      if (
        (
          this.isCurrentEra(2021) &&
          !this.$refs.form.validate()
        ) ||
        (
          !this.isCurrentEra(2021) &&
          !this.isValidManually
        )
      ) {
        this.error = true
        // Invalid
        event.stopPropagation()
        event.preventDefault()
      }
    }
  }
}
</script>
