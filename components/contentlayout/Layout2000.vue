<template>
  <div class="layout2000">
    <div class="bannerimage">
      <WhatIDoPicker class="bannerlinks" display="links" />
    </div>

    <div class="content">
      <MainContent />
    </div>

    <MainContentLinks class="mt-5" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Layout2000',
  computed: {
    ...mapGetters([
      'isCurrentEra'
    ])
  }
}
</script>

<style lang="scss">
.layout2000 {
  .bannerimage {
    width: 100%;
    height: 100px;
    background-color: #57153d;
    background-image: url('~assets/images/moriel-150px.jpg');
    background-position: center left;
    border-radius: 50px 50px 0 0;
  }

  ul.bannerlinks {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    margin-left: 170px;
    padding-top: 30px;

    li {
      float: left;
      border: 1px solid #000;
      border-radius: 10px;
      background-color: darkred;
      margin: 0 0.5em;
      padding: 0.5em;

      .theme--light & {
        background-color: #ca2188;
      }

      &:hover {
        background-color: crimson;
      }

      a {
        display: block;
        color: white;
      }
    }
  }

  .content {
    padding: 0.5em;
    border: 1px solid #000;

    .theme--dark & {
      background-color: #333;
    }
  }
}
</style>
