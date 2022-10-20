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
  async addProduct({commit, state}, product) {
    const data = formData(product)
    const addedProduct = await this.$axios.post('/products', data)
    const result = addedProduct.data.data

  },
  async setCurrentPage({commit, dispatch}, page) {
    await dispatch('fetchProducts', page)
  }
}

function formData(product = {}, update = false) {
  const formData = new FormData();
  formData.append('id', product.id)
  if(product.name)
    formData.append('name', product.name)
  if(product.article)
    formData.append('article', product.article)
  if(product.manufacturer)
    formData.append('manufacturer', product.manufacturer)
  if(product.machines)
    formData.append('machines', product.machines)
  if(product.price)
    formData.append('price', product.price)
  if(product.short_description)
    formData.append('short_description', product.short_description)
  if(product.full_description)
    formData.append('full_description', product.full_description)
  if(product.in_stock && product.in_stock === true || false)
    formData.append('in_stock', product.in_stock)
  if(product.images.length > 0)
    product.images.forEach(image => {
      formData.append('images[]', image.file)
    })
  if(product.category_id)
    formData.append('category_id', product.category_id)
  if(update)
    formData.append('_method', 'PATCH')

  return formData
}
