export const state = () => ({
  heroSlides: []
})

export const getters = {
  getHeroSlides(state) {
    return state.heroSlides
  },
}

export const mutations = {
  setHeroSlides(state, slides) {
    state.heroSlides = slides
  },
  addHeroSlide(state, slide) {
    state.heroSlides = [...state.heroSlides, slide]
  },
  updateHeroSlide(state, slide) {
    // const oldSlide = state.heroSlides.map(({id, text, image, ...slide}) => ({
    //   ...slide,
    //
    // }))
  },
  removeHeroSlide(state, slideId) {
    state.heroSlides = state.heroSlides.filter(slide => slide.id !== slideId)
  }
}

export const actions = {
  async fetchHeroSlides({commit, state}) {
    const slides = await this.$axios.get('/slides')
    const result = await slides.data.data
    await commit('setHeroSlides', result)
  },
  async addHeroSlide({commit}, slide) {
    const response = await this.$axios.post('/slides', slide)
    const data = await response.data.data
    await commit('addHeroSlide', data)
  },
  async updateHeroSlide({commit}, slide) {
    await commit('updateHeroSlide', slide)
  },
  async removeHeroSlide({commit}, slide) {
    const response = await this.$axios.delete(`/slides/${slide.id}`)
    const data = await response.data.data
    await commit('removeHeroSlide', slide.id)
  }
}
