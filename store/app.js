export const state = () => ({
  navbar: {
    showDrawer: false,
    showOptions: false,
  }
})

export const getters = {
  getNavbarShowDrawer(state) {
    return state.navbar.showDrawer
  },
  getNavbarShowOptions(state) {
    return state.navbar.showOptions
  }
}

export const mutations = {
  setNavbarShowDrawer(state, value) {
    state.navbar.showDrawer = value
  },
  setNavbarShowOptions(state, value) {
    state.navbar.showOptions = value
  },
}

export const actions = {
  async setNavbarShowDrawer({commit, state}, value) {
    await commit('setNavbarShowDrawer', value)
  },
  async setNavbarShowOptions({commit, state}, value) {
    await commit('setNavbarShowOptions', value)
  },
}
