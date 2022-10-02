export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('slides/fetchHeroSlides')
    await dispatch('advert/fetchAdvert')
  },
}
