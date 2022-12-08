export const actions = {
  async nuxtServerInit({ dispatch }) {
    // await dispatch('slides/fetchHeroSlides')
    // await dispatch('advert/fetchAdvert')
    await dispatch('home/fetchData')
    await dispatch('category/fetchCategories')
  },
}
