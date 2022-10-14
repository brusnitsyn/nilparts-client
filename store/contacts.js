export const state = () => ({
  contact: {},
})

export const getters = {
  getContact(state) {
    return state.contact
  },
}

export const mutations = {
  setContact(state, contact) {
    state.contact = contact
    state.contact.content = JSON.parse(contact.content)
  }
}

export const actions = {
  async fetchContact({commit, state}) {
    const contact = await this.$axios.get('/contacts')
    const result = await contact.data

    await commit('setContact', result)
  },
  async updateContact({commit, state}, contact) {

  },
}
