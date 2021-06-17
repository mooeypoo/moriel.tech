<template>
  <div class="thanks">
    <v-row
      justify="center"
      align="center"
    >
      <v-col cols="12" sm="9" md="8">
        <h2 class="text-center">
          Thanks!
        </h2>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      align="center"
    >
      <v-col cols="12" sm="9" md="8">
        <p>Your message was sent my way, and I'll see it soon. Thank you.</p>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      align="center"
    >
      <v-col cols="12" class="text-center">
        <v-btn
          color="primary"
          @click="$router.push({ path: '/' })"
        >
          Back to main page
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Thanks'
}
</script>
