<template>
  <Swiper :options="swiperOption" class="aspect-[830/390] md:aspect-auto rounded-b-lg">
    <SwiperSlide>
      <NuxtImg src="https://via.placeholder.com/1392x668" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <NuxtImg src="https://via.placeholder.com/1392x668" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <NuxtImg src="https://via.placeholder.com/1392x668" alt="" />
    </SwiperSlide>
    <div class="swiper-pagination" slot="pagination"></div>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper, SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
