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
  async fetchCategory({commit, state}, categoryId) {
    const response = await this.$axios.get(`/categories/${categoryId}`)
    const result = await response.data.data
    await commit('setCategory', result)
  },
  async addCategory({commit}, category) {
    const form = formData(category)

    const response = await this.$axios.post('/categories', form)
    const data = await response.data.data
    await commit('addCategories', data)
    return data
  },
  async updateCategory({commit, dispatch}, category) {
    const form = formData(category, true)

    const response = await this.$axios.post(`/categories/${category.id}`, form)
    const data = await response.data.data
    await dispatch('fetchCategories')
  },
  async removeCategory({commit}, category) {
    const response = await this.$axios.delete(`/slides/${category.id}`)
    const data = await response.data.data
    await commit('removeCategory', category.id)
  }
}

function formData(category = {}, update = false) {
  const formData = new FormData();
  formData.append('id', category.id)
  if(category.name)
    formData.append('name', category.name)
  if(Object.keys(category.image).length !== 0)
    formData.append('image', category.image.file)
  if(category.parent_id)
    formData.append('parent_id', category.parent_id)
  if(update)
    formData.append('_method', 'PATCH')

  return formData
}
