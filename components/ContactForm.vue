<template>
  <v-form
    ref="contactForm"
    netlify
    name="contact-form"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="submit"
  >
    <!-- eslint-disable-next-line vue/html-self-closing -->
    <input type="hidden" name="form-name" value="contact-form" />

    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Your name"
      filled
      color="pink"
    />

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Your email"
      color="pink"
      filled
    />

    <v-select
      v-model="topic"
      :items="topicItems"
      :rules="[v => !!v || 'Topic is required']"
      label="Topic"
      color="pink"
      required
      filled
    />

    <v-textarea
      v-model="message"
      :rules="[v => !!v || 'Message can\'t be empty']"
      label="Message"
      color="pink"
      counter
      auto-grow
      filled
    />

    <v-row>
      <v-col justify="center" align="center">
        <v-btn
          type="submit"
          x-large
          :disabled="!valid"
          class="mt-5"
          color="pink"
        >
          <v-icon left>
            mdi-email
          </v-icon>
          Send me a message
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    valid: true,
    name: '',
    email: '',
    topic: '',
    message: '',
    nameRules: [
      v => !!v || 'Name is required'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    topicItems: [
      'General question',
      'Request a talk or presentation',
      'Feedback'
    ]
  }),
  methods: {
    encode (params) {
      return Object.keys(params)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
        .join('&')
    },
    submit () {
      if (this.$refs.contactForm.validate()) {
        this.$axios.post(
          '/',
          this.encode({
            'form-name': 'contact-form',
            name: this.name,
            topic: this.topic,
            message: this.message
          }),
          {
            header: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }
        )
      }
    }
  }
}
</script>
