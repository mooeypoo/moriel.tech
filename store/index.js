export const state = () => ({
  siteStyle: '2021',
  whatido: 'build',
  siteStyleLabels: [
    '1995',
    '2000',
    '2021'
  ]
})

export const mutations = {
  changeSiteStyle (state, style) {
    state.siteStyle = style
  },
  changeWhatIDo (state, topic) {
    state.whatido = topic
  },
  decreaseSiteStyleEra (state) {
    const currIndex = state.siteStyle
    if (currIndex > 0) {
      state.siteStyle = currIndex - 1
    }
  },
  increaseSiteStyleEra (state) {
    const currIndex = state.siteStyle
    if (currIndex < state.siteStyleLabels.length - 1) {
      state.siteStyle = currIndex + 1
    }
  }
}

export const getters = {
  getSiteStyleFromIndex: state => (index) => {
    return state.siteStyleLabels[index] ||
      state.siteStyleLabels[state.siteStyleLabels.length - 1]
  },
  getCurrentSiteStyle: (state) => {
    return state.siteStyleLabels[state.siteStyle]
  },
  getWhatIDo: (state) => {
    return state.whatido
  }
}
