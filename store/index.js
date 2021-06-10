export const state = () => ({
  siteEra: 2,
  whatido: 'build',
  siteEraLabels: [
    1992,
    1997,
    2021
  ]
})

export const mutations = {
  changeSiteStyle (state, style) {
    state.siteEra = style
  },
  changeWhatIDo (state, topic) {
    state.whatido = topic
  },
  decreaseSiteEra (state) {
    const currIndex = state.siteEra
    if (currIndex > 0) {
      state.siteEra = currIndex - 1
    }
  },
  increaseSiteEra (state) {
    const currIndex = state.siteEra
    if (currIndex < state.siteEraLabels.length - 1) {
      state.siteEra = currIndex + 1
    }
  }
}

export const getters = {
  getSiteEraFromIndex: state => (index) => {
    return state.siteEraLabels[index] ||
      state.siteEraLabels[state.siteEraLabels.length - 1]
  },
  getCurrentSiteEra: (state) => {
    return state.siteEraLabels[state.siteEra]
  },
  isCurrentEra: state => (era) => {
    return state.siteEraLabels[state.siteEra] === era
  },
  isCurrentEraLowerThan: state => (era) => {
    return state.siteEraLabels[state.siteEra] < era
  },
  isCurrentEraBiggerThan: state => (era) => {
    return state.siteEraLabels[state.siteEra] > era
  },
  getWhatIDo: (state) => {
    return state.whatido
  }
}
