<template>
  <v-footer
    fixed
    app
    padless
  >
    <v-row
      justify="center"
      no-gutters
      class="pt-2 text-center"
    >
      <v-btn
        v-for="link in links"
        :key="link.name"
        :title="link.name"
        :href="link.href"
        color="white"
        text
        rounded
        class="mb-2 mx-2"
        small
      >
        <v-icon color="pink" :left="$vuetify.breakpoint.smAndUp">
          mdi-{{ link.icon }}
        </v-icon>
        <span v-if="$vuetify.breakpoint.smAndUp">{{ link.text }}</span>
      </v-btn>
      <v-col
        class="text-center copyright-line"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Moriel Schottlender</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    links: [
      {
        name: 'twitter',
        text: 'Twitter',
        showText: false,
        icon: 'twitter',
        href: 'https://twitter.com/mooeypoo'
      },
      {
        name: 'github',
        text: 'Github',
        icon: 'github',
        href: 'https://www.github.com/mooeypoo'
      },
      {
        name: 'linkedin',
        text: 'LinkedIn',
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/moriel/'
      },
      {
        name: 'polywork',
        text: 'Polywork',
        icon: 'account-circle',
        href: 'https://www.polywork.com/mooeypoo'
      }
    ]
  })
}
</script>

<style lang="scss">
.copyright-line {
  font-size: 0.8em;
}
</style>
