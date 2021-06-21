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
  </div>
</template>

<script>
export default {
  name: 'Layout1997'
}
</script>
