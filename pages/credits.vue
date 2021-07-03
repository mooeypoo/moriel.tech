<template>
  <div class="credits">
    <v-row
      justify="center"
      align="center"
    >
      <v-col cols="12" sm="9" md="8">
        <h2 class="text-center">
          Credits and thanks
        </h2>
      </v-col>
    </v-row>
    <ProgressBars
      v-if="isCurrentEra(2100)"
      ref="pbar"
      :data="timers"
      start="interpreting"
    >
      <v-card>
        <v-card-title class="endtitle">
          Automated gratitude
        </v-card-title>
        <v-card-text>
          <p>Computers are great, but until they have the ability to holistically process ideas, they will remain unable to understand the concept of inspiration, collaboration, gratitude, and representation.</p>
          <p><strong>There's no such thing as automated gratitude or credit, and our machines will not learn what we don't teach.</strong></p>
        </v-card-text>
      </v-card>
      <v-card class="mt-2">
        <v-card-title>
          Acknowledging those who helped
        </v-card-title>
        <v-card-text>
          <p>Collaborators aren't just the ones who sat down with you to write the code. They're also the people who took time to walk you through challenges, the work others did that inspired you, the people who gave you ideas, the elements others worked on that you've used or adapted.</p>
          <p><strong>Acknowledge their impact, because your work wouldn't have been as good without them.</strong></p>
        </v-card-text>
      </v-card>
      <v-row
        justify="center"
        align="center"
      >
        <v-col cols="12" sm="9" md="8">
          <h2 class="text-center">
            Manual Acknowledgements
          </h2>
        </v-col>
      </v-row>
      <CreditsAndThanks class="mt-2" />
    </ProgressBars>

    <CreditsAndThanks v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CreditsAndThanks from '~/components/CreditsAndThanks.vue'
import ProgressBars from '~/components/ProgressBars.vue'

export default {
  components: {
    CreditsAndThanks,
    ProgressBars
  },
  data: () => ({
    timers: {
      interpreting: {
        increase: [40, 50],
        label: 'INTERPRETING MEANING OF THANKS ...',
        next: 'second'
      },
      second: {
        increase: [40, 50],
        label: 'ANALYZING SOURCES OF INSPIRATION ...',
        next: 'third'
      },
      third: {
        increase: [40, 50],
        label: '** ERROR ** ... ATTEMPTING TO RECOVER',
        next: null
      }
    }
  }),
  computed: {
    ...mapGetters([
      'isCurrentEra'
    ])
  }
}
</script>
