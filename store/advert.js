export const state = () => ({
  advert: {},
})

export const getters = {
  getAdvert(state) {
    return state.advert
  },
}

export const mutations = {
  setAdvert(state, advert) {
    state.advert = advert
  },
}

export const actions = {
  async fetchAdvert({ commit, state }) {
    const advert = await this.$axios.get('/advert')
    const result = await advert.data.data
    if (result !== undefined) await commit('setAdvert', result)
  },
  async updateAdvert({ commit, state }, advert) {
    const response = await this.$axios.post(`/advert`, advert)
    const data = await response.data.data
    await commit('setAdvert', data)
  },
  async setAdvert({ commit, state }, advert) {
    await commit('setAdvert', advert)
  },
}
