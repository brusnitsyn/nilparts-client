<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import {mapGetters, mapState} from "vuex";

export default {
  components: {
    Swiper, SwiperSlide
  },
  computed: {
    ...mapState('home', {
      slides: state => state.slides,
    })
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

<template>
  <Swiper :options="swiperOption" class="rounded-b-lg relative ">
    <SwiperSlide v-for="(slide) in slides" :key="slide.id">
      <div class="relative flex flex-col">
        <NuxtImg :src="`${slide.image}`" alt="" class="absolute object-center object-cover max-w-full w-full h-full "/>
        <div class="relative mx-16 max-w-[528px] pt-20 mb-10 text-white">
          <span class="text-3xl">{{slide.title}}</span>
          <p class="mt-6">
            {{slide.description}}
          </p>
        </div>
        <div v-if="slide.btn_text" class="mt-8 relative flex flex-col justify-end grow">
          <div class="flex items-center bg-white/[0.15] backdrop-blur-[140px] pl-16 h-[100px] ">
            <Button type="bordered" size="rounded">
              {{slide.btn_text}}
            </Button>
          </div>
        </div>
      </div>
    </SwiperSlide>
<!--    <div class="swiper-pagination" slot="pagination"></div>-->
  </Swiper>
</template>

<style scoped>

</style>
