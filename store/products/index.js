export const state = () => ({
  products: [],
  product: {},
  meta: {},
  links: {}
})

export const getters = {
  getProducts(state) {
    return state.products
  },
  getProduct(state) {
    return state.product
  },
  getMeta(state) {
    return state.meta
  },
  getLinks(state) {
    return state.links
  }
}

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  setProduct(state, product) {
    state.product = product
  },
  addProduct(state, product) {
    state.products = [...state.products, { product }]
  },
  setMeta(state, meta) {
    state.meta = meta
  },
  setLinks(state, links) {
    state.links = links
  },
  setCurrentPage(state, page) {
    state.meta.current_page = page
    // this.$set(state.meta, 'current_page', page)
  }
}

export const actions = {
  async fetchProducts({commit, state}, page = 1) {
    const products = await this.$axios.get(`/products?page=${page}`)
    const meta = await products.data.meta
    const links = await products.data.links
    const result = await products.data.data

    await commit('setMeta', meta)
    await commit('setLinks', links)
    await commit('setProducts', result)
  },
  async fetchProduct({commit, state}, slug) {
    const product = await this.$axios.get(`/products/${slug}?with=attachments`)
    const result = await product.data.data

    await commit('setProduct', result)
  },
  async addProduct({commit, state}) {

  },
  async setCurrentPage({commit, dispatch}, page) {
    await dispatch('fetchProducts', page)
  }
}
