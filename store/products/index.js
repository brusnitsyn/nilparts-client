export const state = () => ({
  products: []
})

export const getters = {
  getProducts(state) {
    return state.products
  },
}

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  addProduct(state, product) {
    state.products = [...state.products, { product }]
  },
}

export const actions = {
  async fetchProducts({commit, state}) {
    const products = await this.$axios.get('/products')
    const result = await products.data.data
    await commit('setProducts', result)
  },
  async addProduct({commit, state}) {

  }
}
