<template>
  <v-footer
    fixed
    app
    padless
  >
    <v-row
      justify="center"
      no-gutters
      class="py-2 text-center white--text"
    >
      <v-btn
        v-for="link in links"
        :key="link.name"
        :title="link.name"
        :href="link.href"
        color="white"
        text
        rounded
        class="my-2 mx-2"
      >
        <v-icon color="pink" :left="link.showText">
          mdi-{{ link.icon }}
        </v-icon>
        <span v-if="link.showText">{{ link.text }}</span>
      </v-btn>

      <v-btn
        title="Email me"
        color="white"
        text
        rounded
        class="my-2 mx-2"
        @click="$router.push({ path: '/contact' })"
      >
        <v-icon color="pink">
          mdi-email
        </v-icon>
      </v-btn>

      <v-col
        class="text-center white--text"
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
      // {
      //   name: 'email',
      //   text: 'Email',
      //   icon: 'email',
      //   href: '',
      //   onclick: "$router.push({ path: '/' })"
      // }
    ]
    // links: [
    //   'Home',
    //   'About Us',
    //   'Team',
    //   'Services',
    //   'Blog',
    //   'Contact Us'
    // ]
  })
}
</script>
