export const state = () => ({
  categories: []
})

export const getters = {
  getCategories(state) {
    return state.categories
  },
}

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  addCategories(state, category) {
    state.categories = [...state.categories, category]
  },
  updateCategory(state, category) {
    //
  },
  removeCategory(state, catId) {
    state.categories = state.categories.filter(category => category.id !== catId)
  }
}

export const actions = {
  async fetchCategories({commit, state}) {
    const response = await this.$axios.get('/categories')
    const result = await response.data.data
    await commit('setCategories', result)
  },
  async addCategory({commit}, category) {
    const response = await this.$axios.post('/categories', category)
    const data = await response.data.data
    await commit('addCategories', data)
  },
  async updateCategory({commit, dispatch}, category) {
    const formData = new FormData();
    if(category.name)
      formData.append('name', category.name)
    if(Object.keys(category.image).length !== 0)
      formData.append('image', category.image)
    if(category.parent_id)
      formData.append('parent_id', category.parent_id)
    formData.append('_method', 'PATCH')

    const response = await this.$axios.post(`/categories/${category.id}`, formData)
    const data = await response.data.data
    await dispatch('fetchCategories')
  },
  async removeCategory({commit}, category) {
    const response = await this.$axios.delete(`/slides/${category.id}`)
    const data = await response.data.data
    await commit('removeCategory', category.id)
  }
}
