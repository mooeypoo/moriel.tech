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
  }
}

export const getters = {
  getSiteStyleFromIndex: state => (index) => {
    return state.siteStyleLabels[index] ||
      state.siteStyleLabels[state.siteStyleLabels.length - 1]
  }
}
