export const state = () => ({
  products: [],
  meta: {},
  links: {},
  version: 1,
})

export const getters = {
  getProducts(state) {
    return state.products
  },
  getMeta(state) {
    return state.meta
  },
  getLinks(state) {
    return state.links
  }
}

export const mutations = {
  setProducts(state, newProducts) {
    state.products = newProducts
  },
  addProduct(state, newProduct) {
    state.products.push(newProduct)
  },
  updateProduct(state, newProduct) {
    let oldProduct = state.products.find(
      (product) => product.id === newProduct.id
    )
    oldProduct = newProduct
  },
  removeProduct(state, productId) {
    state.products = state.products.filter((product) => {
      return product.id !== productId
    })
  },

  // Meta
  setMeta(state, meta) {
    state.meta = meta
  },
  setLinks(state, links) {
    state.links = links
  },
}

export const actions = {
  async fetchProducts({ commit, state }, params) {
    const products = await this.$axios.get(`/basket`, {
      params
    })

    const meta = await products.data.meta
    const links = await products.data.links
    const result = await products.data.data

    await commit('setMeta', meta)
    await commit('setLinks', links)
    await commit('setProducts', result)
  },
  async addProduct({commit, state}, product) {

  }
}
