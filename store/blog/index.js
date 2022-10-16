export const state = () => ({
  blogs: [],
  blog: {},
  meta: {},
  links: {},
})

export const getters = {
  getBlogs(state) {
    return state.blogs
  },
  getBlog(state) {
    return state.blog
  },
  getMeta(state) {
    return state.meta
  },
  getLinks(state) {
    return state.links
  }
}

export const mutations = {
  setBlogs(state, blogs) {
    state.blogs = blogs
  },
  setBlog(state, blog) {
    state.blog = blog
    state.blog.content = JSON.parse(blog.content)
  },
  addBlog(state, blog) {
    state.blogs = [...state.blogs, { blog }]
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
  async fetchBlogs({commit, state}, page = 1) {
    const blogs = await this.$axios.get(`/blog?page=${page}`)
    const meta = await blogs.data.meta
    const links = await blogs.data.links
    const result = await blogs.data.data

    await commit('setMeta', meta)
    await commit('setLinks', links)
    await commit('setBlogs', result)
  },
  async fetchBlog({commit, state}, slug) {
    const blog = await this.$axios.get(`/blog/${slug}`)
    const result = await blog.data.data

    await commit('setBlog', result)
  },
  async addBlog({commit, state}) {

  },
  async setCurrentPage({commit, dispatch}, page) {
    await dispatch('fetchBlogs', page)
  }
}
