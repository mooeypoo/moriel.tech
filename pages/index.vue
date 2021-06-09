<template>
  <div class="maininfo">
    <MainPicture />
    <MainTitle />
  </div>
</template>

<script>
import MainPicture from '~/components/MainPicture.vue'
import MainTitle from '~/components/MainTitle.vue'

export default {
  components: {
    MainPicture,
    MainTitle
  }
}
</script>
