export const state = () => ({
  products: [],
  basket: {},
  basketMeta: {},
  meta: {},
  links: {},
  version: 1,
})

export const getters = {
  getProducts(state) {
    return state.products
  },
  getBasketMeta(state) {
    return state.basketMeta
  },
  getMeta(state) {
    return state.meta
  },
  getLinks(state) {
    return state.links
  },
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

  setBasket(state, basket) {
    state.basket = basket
  },

  setBasketMeta(state, basketMeta) {
    state.basketMeta = basketMeta
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
    const response = await this.$axios.get(`/basket`, {
      params,
    })

    // const meta = await products.data.meta
    // const links = await products.data.links
    const result = await response.data.data

    // await commit('setMeta', meta)
    // await commit('setLinks', links)
    await commit('setBasket', result)
    await commit('setProducts', result.products)
    await commit('setBasketMeta', result.basket)
  },
  async addProduct({ commit, state }, product) {
    if (this.$auth.loggedIn) {
      const basket = await this.$axios.post('/basket', product)

      const result = await basket.data.data
      // if()
      console.log(result)
    } else {
      commit('addProduct', product)
    }
  },
  async removeProducts({ commit, dispatch }, ids) {
    const response = await this.$axios.delete(
      `/basket`,
      {params: { ids: ids }},
    )
    if (response.status) await dispatch('fetchProducts')
  },
}
