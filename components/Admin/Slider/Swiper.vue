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
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<template>
  <Swiper :options="swiperOption" class="aspect-[830/390] md:aspect-auto rounded-lg">
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
