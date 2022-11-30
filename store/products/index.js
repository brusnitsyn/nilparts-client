import { deepClone } from '~/helpers'
// const qs = require('qs');

export const state = () => ({
  products: [],
  product: {},
  meta: {},
  links: {},
  filters: {
    page: 1,
  },
  filtersCountChange: 0,
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
  },
  getFilters(state) {
    return state.filters
  },
  getFiltersCountChanges(state) {
    return state.filtersCountChange
  },
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
  },
  setFiltersCountChanges(state) {
    state.filtersCountChange++
  },
  addFilter(state, filter) {
    if (Object.keys(state.filters).length) {
      const existFilter = Object.keys(state.filters).find(
        (key) => key === filter.name
      )
      if (typeof existFilter !== undefined)
        state.filters[filter.name] = filter.query
      else state.filters = [...state.filters, { [filter.name]: filter.query }]
    } else {
      state.filters = Object.assign(state.filters, {
        [filter.name]: filter.query,
      })
    }
  },
  clearFilters(state) {
    state.filters = {page: 1}
  }
}

export const actions = {
  async fetchProducts({ commit, state }, params) {
    // const defaultParams = {
    //   page: [
    //     {number: 1},
    //     {size: 16}
    //   ],
    //   ...p
    // }
    // const params = qs.stringify(defaultParams)
    const products = await this.$axios.get(`/products`, {
      params,
    })

    const meta = await products.data.meta
    const links = await products.data.links
    const result = await products.data.data

    await commit('setMeta', meta)
    await commit('setLinks', links)
    await commit('setProducts', result)
  },
  async fetchMyProducts({commit, state}, params) {
    const result = await this.$axios.get(`/users/${this.$auth.user.id}/products`)
    const products = result.data.data

    await commit('setProducts', products)
  },
  async fetchProduct({ commit, state }, slug) {
    const product = await this.$axios.get(`/products/${slug}?with=medias`)
    const result = await product.data.data

    await commit('setProduct', result)
  },
  async addProduct({ commit, state }, product) {
    const data = formData(product)
    const addedProduct = await this.$axios.post('/products', data)
    const result = addedProduct.data.data
    await commit('addProduct', result)
  },
  async setCurrentPage({ state, commit, dispatch }, page) {
    await dispatch('fetchProducts', page)
  },
  async addFilter({ state, commit, dispatch }, filter) {
    // if (typeof Object.keys(filter) === undefined)
    //   await dispatch('fetchProducts')
    // else {
    //   await commit('addFilter', filter)
    //   await commit('setFiltersCountChanges')
    //   await dispatch('fetchProducts', state.filters)
    // }
    if (typeof Object.keys(filter) !== undefined) {
      await commit('addFilter', filter)
      await commit('setFiltersCountChanges')
    }
  },
  async addFilters({ state, commit, dispatch }, filters) {
    for (let filter of filters) {
      await commit('addFilter', filter)
    }
  },
  async clearFilters({commit}) {
    await commit('clearFilters')
  }
}

function formData(product = {}, update = false) {
  const formData = new FormData()
  formData.append('id', product.id)
  if (product.name) formData.append('name', product.name)
  if (product.article) formData.append('article', product.article)
  if (product.manufacturer)
    formData.append('manufacturer', product.manufacturer)
  if (product.machines) formData.append('machines', product.machines)
  if (product.price) formData.append('price', product.price)
  if (product.short_description)
    formData.append('short_description', product.short_description)
  if (product.full_description)
    formData.append('full_description', product.full_description)
  if ((product.in_stock && product.in_stock === true) || false)
    formData.append('in_stock', product.in_stock)
  if (product.images.length > 0)
    product.images.forEach((image) => {
      formData.append('images[]', image.file)
    })
  if (product.category_id) formData.append('category_id', product.category_id)
  if (update) formData.append('_method', 'PATCH')

  return formData
}
