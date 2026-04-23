<template>
  <v-btn
    class="dddnd-launch-btn"
    :class="eraClass"
    :href="dddndUrl"
    target="_blank"
    rel="noopener noreferrer"
    variant="flat"
    density="comfortable"
  >
    <img
      class="dddnd-launch-btn-logo"
      src="/images/dddnd/logo_mark.svg"
      alt="DDDnD"
    >
    <span class="dddnd-launch-btn-text">Play DDDnD</span>
  </v-btn>
</template>

<script>
import { useEraStore } from '~/stores/era'

export default {
  name: 'DDDnDLaunchButton',
  setup () {
    const eraStore = useEraStore()
    return { eraStore }
  },
  computed: {
    dddndUrl () {
      return 'https://dddnd.app?utm_source=moriel.tech&utm_medium=site&utm_campaign=era_button'
    },
    eraClass () {
      const era = this.eraStore.getCurrentSiteEra
      if (era <= 1997) return 'era-retro'
      if (era <= 2012) return 'era-mid'
      return 'era-modern'
    }
  }
}
</script>

<style scoped>
.dddnd-launch-btn {
  text-transform: none;
  font-family: 'Cinzel', Georgia, serif;
  letter-spacing: 0.04em;
  border: 1px solid rgba(180, 140, 50, 0.45);
  background: linear-gradient(140deg, #1a140b 0%, #2a1e0e 100%);
  color: #f0e8d0;
}

.dddnd-launch-btn-logo {
  width: 22px;
  height: 22px;
  margin-right: 8px;
}

.dddnd-launch-btn-text {
  font-size: 0.9rem;
}

.dddnd-launch-btn.era-retro {
  border-style: dashed;
  border-color: #0ff;
}

.dddnd-launch-btn.era-mid {
  border-color: #8a6d3b;
  background: linear-gradient(140deg, #242424 0%, #3e3e3e 100%);
}

.dddnd-launch-btn.era-modern {
  box-shadow: 0 0 0 1px rgba(169, 137, 250, 0.2), 0 8px 16px rgba(0, 0, 0, 0.25);
}

@media (max-width: 959px) {
  .dddnd-launch-btn-text {
    display: inline;
    font-size: 0.82rem;
  }

  .dddnd-launch-btn-logo {
    margin-right: 6px;
  }
}
</style>
