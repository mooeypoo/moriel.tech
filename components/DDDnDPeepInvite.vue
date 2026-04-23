<template>
  <transition name="peep-fade">
    <div
      v-if="visible"
      class="dddnd-peep"
      :class="[cornerClass, eraClass]"
      role="complementary"
      aria-live="polite"
    >
      <button
        class="dddnd-peep-close"
        aria-label="Dismiss DDDnD invite"
        @click="dismiss"
      >
        x
      </button>

      <img
        class="dddnd-peep-avatar"
        :src="avatarSrc"
        :alt="avatarAlt"
      >

      <div class="dddnd-peep-body">
        <div class="dddnd-peep-title">
          {{ title }}
        </div>
        <div class="dddnd-peep-text">
          {{ message }}
        </div>
        <a
          class="dddnd-peep-link"
          :href="dddndUrl"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="ctaLabel"
        >
          {{ ctaLabel }}
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
import { useEraStore } from '~/stores/era'

const ERA_INVITES = {
  retro: [
    {
      title: 'BBS Quest',
      message: 'MODEM READY. TYPE PLAY DDDND TO DEFEND DELIVERY.'
    },
    {
      title: 'SYSOP Notice',
      message: 'Stakeholders are restless. Enter the software dungeon.'
    }
  ],
  classicWeb: [
    {
      title: 'Under Construction',
      message: 'While the web blinks, go battle scope creep in DDDnD.'
    },
    {
      title: 'Quest Portal',
      message: 'Patch, refactor, and survive stakeholder chaos.'
    }
  ],
  modern: [
    {
      title: 'Stakeholder Ping',
      message: 'Your CTO looks concerned. Roll for domain clarity.'
    },
    {
      title: 'Quest Available',
      message: 'Delivery confidence is wobbling. A short run could help.'
    }
  ],
  future: [
    {
      title: 'Neural Alert',
      message: 'Consciousness Chip requests a tactical DDDnD simulation.'
    },
    {
      title: 'Synthetic Briefing',
      message: 'Run a decision dungeon to stabilize your delivery timeline.'
    }
  ]
}

const AVATARS = [
  { src: '/images/dddnd/wizard-neutral.png', alt: 'Wizard stakeholder avatar' },
  { src: '/images/dddnd/wizard-concerned.png', alt: 'Concerned wizard stakeholder avatar' },
  { src: '/images/dddnd/rogue-happy.png', alt: 'Happy rogue stakeholder avatar' },
  { src: '/images/dddnd/paladin-angry.png', alt: 'Angry paladin stakeholder avatar' }
]

const CORNERS = ['top-left', 'top-right', 'bottom-left', 'bottom-right']

function randomItem (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomInRange (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default {
  name: 'DDDnDPeepInvite',
  setup () {
    const eraStore = useEraStore()
    return { eraStore }
  },
  data () {
    return {
      visible: false,
      title: ERA_INVITES.modern[0].title,
      message: ERA_INVITES.modern[0].message,
      avatarSrc: AVATARS[0].src,
      avatarAlt: AVATARS[0].alt,
      cornerClass: 'bottom-right',
      scheduleTimeout: null,
      hideTimeout: null,
      dismissedUntilNavigation: false
    }
  },
  computed: {
    dddndUrl () {
      return 'https://dddnd.app?utm_source=moriel.tech&utm_medium=site&utm_campaign=peep_invite'
    },
    ctaLabel () {
      const era = this.eraStore.getCurrentSiteEra
      if (era <= 1992) return 'Enter BBS Quest'
      if (era <= 2000) return 'Launch Dungeon'
      if (era >= 2100) return 'Run Simulation'
      return 'Accept Quest'
    },
    eraClass () {
      const era = this.eraStore.getCurrentSiteEra
      if (era <= 1997) return 'era-retro'
      if (era <= 2012) return 'era-mid'
      return 'era-modern'
    }
  },
  mounted () {
    this.scheduleNextPeep(9000)
  },
  beforeUnmount () {
    this.clearTimers()
  },
  watch: {
    '$route.fullPath' () {
      this.dismissedUntilNavigation = false
    }
  },
  methods: {
    clearTimers () {
      if (this.scheduleTimeout) clearTimeout(this.scheduleTimeout)
      if (this.hideTimeout) clearTimeout(this.hideTimeout)
      this.scheduleTimeout = null
      this.hideTimeout = null
    },
    scheduleNextPeep (delay) {
      this.clearTimers()
      this.scheduleTimeout = setTimeout(() => {
        if (!this.dismissedUntilNavigation) this.showPeep()
      }, delay)
    },
    showPeep () {
      const invite = randomItem(this.getEraInvitePool())
      const avatar = randomItem(AVATARS)
      this.title = invite.title
      this.message = invite.message
      this.avatarSrc = avatar.src
      this.avatarAlt = avatar.alt
      this.cornerClass = randomItem(CORNERS)
      this.visible = true

      this.hideTimeout = setTimeout(() => {
        this.visible = false
        this.scheduleNextPeep(randomInRange(20000, 35000))
      }, 7000)
    },
    dismiss () {
      this.visible = false
      this.dismissedUntilNavigation = true
      this.scheduleNextPeep(randomInRange(30000, 45000))
    },
    getEraInvitePool () {
      const era = this.eraStore.getCurrentSiteEra
      if (era <= 1992) return ERA_INVITES.retro
      if (era <= 2000) return ERA_INVITES.classicWeb
      if (era >= 2100) return ERA_INVITES.future
      return ERA_INVITES.modern
    }
  }
}
</script>

<style scoped>
.dddnd-peep {
  position: fixed;
  z-index: 30;
  width: min(320px, calc(100vw - 24px));
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 10px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(180, 140, 50, 0.45);
  background: linear-gradient(140deg, rgba(20, 16, 9, 0.96) 0%, rgba(10, 8, 5, 0.96) 100%);
  color: #f0e8d0;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
}

.dddnd-peep.top-left {
  top: 90px;
  left: 12px;
}

.dddnd-peep.top-right {
  top: 90px;
  right: 12px;
}

.dddnd-peep.bottom-left {
  bottom: 16px;
  left: 12px;
}

.dddnd-peep.bottom-right {
  bottom: 16px;
  right: 12px;
}

.dddnd-peep.era-retro {
  border-style: dashed;
  border-color: #0ff;
}

.dddnd-peep.era-mid {
  background: linear-gradient(140deg, rgba(48, 45, 40, 0.96) 0%, rgba(33, 31, 28, 0.96) 100%);
}

.dddnd-peep-avatar {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid rgba(169, 137, 250, 0.45);
}

.dddnd-peep-body {
  min-width: 0;
}

.dddnd-peep-title {
  font-family: 'Cinzel', Georgia, serif;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.03em;
}

.dddnd-peep-text {
  margin-top: 4px;
  font-size: 0.83rem;
  line-height: 1.25;
}

.dddnd-peep-link {
  display: inline-block;
  margin-top: 8px;
  color: #2dd4bf;
  text-decoration: none;
  font-weight: 700;
}

.dddnd-peep-link:hover {
  text-decoration: underline;
}

.dddnd-peep-close {
  position: absolute;
  top: 6px;
  right: 8px;
  border: 0;
  background: transparent;
  color: #f0e8d0;
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1;
}

.peep-fade-enter-active,
.peep-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.peep-fade-enter-from,
.peep-fade-leave-to {
  opacity: 0;
  transform: translateY(8px) scale(0.98);
}

@media (max-width: 959px) {
  .dddnd-peep {
    width: min(300px, calc(100vw - 16px));
    grid-template-columns: 56px 1fr;
    padding: 10px;
  }

  .dddnd-peep.top-left,
  .dddnd-peep.top-right {
    top: 74px;
  }

  .dddnd-peep-avatar {
    width: 56px;
    height: 56px;
  }
}
</style>
