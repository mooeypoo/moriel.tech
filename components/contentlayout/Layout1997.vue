<template>
  <div class="layout1997">
    <MainPicture />
    <v-row>
      <v-col class="text-center">
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <img src="~/assets/images/under-construction.gif" />
      </v-col>
    </v-row>
    <WhatIDoPicker
      class="whatidopicker mb-5"
      display="plain"
    />

    <MainTitle />

    <v-row>
      <v-col class="text-center my-5">
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <img src="~/assets/images/under-construction2.gif" />
      </v-col>
    </v-row>

    <MainContent class="maincontent" />

    <MainContentLinks />

    <v-row class="mt-4" justify="center">
      <v-col cols="12" md="10" lg="9">
        <LatestBlogPosts era="1997" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LatestBlogPosts from '~/components/LatestBlogPosts.vue'

export default {
  name: 'Layout1997',
  components: {
    LatestBlogPosts
  }
}
</script>

<style scoped>
.layout1997 :deep(.latest-blog-posts) {
  margin-left: auto;
  margin-right: auto;
}
</style>
