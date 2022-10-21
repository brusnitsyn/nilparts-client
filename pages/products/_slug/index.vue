<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import { mapGetters } from 'vuex'

export default {
  layout: 'page',
  components: {
    Swiper,
    SwiperSlide,
  },
  head() {
    return {
      title: this.product.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.short_description,
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      product: 'products/getProduct',
    }),
    activeImage() {
      return this.product.images[0].url
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        breakpoints: {
          '320': {
            spaceBetween: 8
          },
          '1024': {
            spaceBetween: 16
          }
        }
      },
    }
  },
  async fetch() {
    await this.$store.dispatch('products/fetchProduct', this.$route.params.slug)
  },
}
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        router
      </PageSection>
      <div class="flex flex-col lg:flex-row">
        <div class="lg:w-1/2 lg:pl-8 px-4">
          <div
            class="flex flex-col items-center justify-center bg-gray-100 rounded-lg lg:h-[632px] h-[343px] mb-2 lg:mb-4"
          >
            <NuxtImg
              :src="`${$config.serverURL}/${activeImage}`"
              class="rounded-lg max-w-[320px] max-h-[320px] lg:max-w-[440px] lg:max-h-[440px]"
            />
          </div>
          <div class="gap-2 lg:gap-4">
            <Swiper :options="swiperOption" class="rounded-lg">
              <slot name="slides">
                <SwiperSlide v-for="(image, index) in product.images" :key="index" class="flex justify-center items-center bg-gray-100 rounded-lg p-3 lg:p-4">
                  <NuxtImg
                    :src="`${$config.serverURL}/${image.url}`"
                    class="w-[120px] h-[96px] object-cover rounded-lg"
                  />
                </SwiperSlide>
              </slot>
            </Swiper>
          </div>
        </div>
        <PageSection class="lg:w-1/2 mt-4 lg:mt-0 flex flex-col gap-y-4">
          <div class="flex flex-col gap-y-1.5">
            <div>
              <h1 class="text-2xl leading-6">{{ product.name }}</h1>
              <span v-if="product.article" class="text-gray-400/70">Артикул: {{ product.article }}</span>
            </div>
            <div
              v-if="product.in_stock"
              class="self-start flex flex-row items-center gap-x-1 text-white bg-green-600 px-2 py-1 rounded-lg text-sm"
            >
              <iconify-icon
                icon="material-symbols:check-circle-outline-rounded"
                class="text-lg"
              />
              <span>В наличии</span>
            </div>
            <div
              v-else
              class="flex flex-row items-center gap-x-1 text-white bg-red-600 px-2 py-1 rounded-lg text-sm"
            >
              <iconify-icon
                icon="material-symbols:error-circle-rounded-outline"
                class="text-lg"
              />
              <span>Нет в наличии</span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <h2 class="text-[1.35rem] font-bold">{{ product.prices[0].price | toRuble }}</h2>
            <Button class="w-1/2 lg:w-1/3">
              Купить
            </Button>
          </div>
          <div class="flex flex-col space-y-2 lg:space-y-4">
            <span class="self-start bg-gray-100 rounded-lg px-4 py-3">
              Описание
            </span>
            <div class="bg-gray-100 rounded-lg px-4 py-3">
              <p class="whitespace-pre-line">{{ product.short_description }}</p>
            </div>
          </div>
        </PageSection>
      </div>
    </PageBody>
  </PageWrapper>
</template>
