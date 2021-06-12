<template>
  <div class="layout2000">
    <div class="bannerimage">
      <h1>Moriel does tech</h1>
    </div>

    <div class="menu">
      <WhatIDoPicker
        display="links"
        class="bannerlinks"
        :class="$vuetify.breakpoint.xsOnly ? 'bannerlinks-mobile' : ''"
      />
    </div>

    <div class="mainwrapper">
      <div class="sidebar">
        <MainContent />
      </div>
      <div class="contentwrapper">
        <div class="content">
          <MainTitle />
        </div>
        <MainContentLinks />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WhatIDoPicker from '~/components/WhatIDoPicker.vue'
import MainTitle from '~/components/MainTitle.vue'
import MainContent from '~/components/MainContent.vue'
import MainContentLinks from '~/components/MainContentLinks.vue'

export default {
  name: 'Layout2000',
  components: {
    WhatIDoPicker,
    MainTitle,
    MainContent,
    MainContentLinks
  },
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

    h1 {
      margin-left: 170px;
      padding-top: 30px;

      .theme--light & {
        color: white;
      }
    }
  }

  .menu {
    width: 100%;
    background-color: #2b0a1e;

    ul.bannerlinks {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      margin-left: 0;

      li {
        float: left;
        margin: 0 0.5em;
        padding: 0.5em;

        a {
          display: block;
          color: white;
          text-decoration: underline;
        }

        &.active a {
          font-weight: bolder;

          &::after {
            content: '';
          }

          &::before {
            content: '';
          }
        }
      }
    }
  }

  .mainwrapper {
    display: flex;

    .sidebar {
      width: 200px;
      padding: 0.5em;
      border: 1px solid #000;

      .theme--dark & {
        background-color: #333;
      }

      .theme--light & {
        background-color: #ccc;
      }
    }

    .contentwrapper {
      flex-grow: 1;
      margin-left: 1em;

      .content {
        padding: 0.5em;

        &-links .content-links-2000-content-piece-head a {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
