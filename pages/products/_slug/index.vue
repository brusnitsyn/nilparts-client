<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import { mapGetters } from 'vuex'
import Breadcrumb from '~/components/Page/Breadcrumb'
import { ImageMagnifier } from 'vue-image-magnifier'
import { getBreakpointValue, getCurrentBreakpoint } from '~/helpers/screen'

export default {
  layout: 'page',
  components: {
    Breadcrumb,
    Swiper,
    SwiperSlide,
    ImageMagnifier,
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
      return `${this.selectedImage}`
    },
  },
  watch: {
    previewImage(value) {
      value
        ? document.body.classList.add('overflow-hidden')
        : document.body.classList.remove('overflow-hidden')
    },
  },
  data() {
    return {
      crumb: [{ title: 'Главная', to: { name: 'index' } }],
      selectedImage: '',
      previewImage: false,
      loaded: false,
      expandText: 'Показать ещё',
      expand: false,
      stickyProductTitle: false,
      stickyProductSaleButtons: false,
      swiperOption: {
        spaceBetween: 8,
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
            direction: 'vertical',
          },
        },
      },
    }
  },
  async fetch() {
    await this.$store.dispatch('products/fetchProduct', this.$route.params.slug)
    const product = this.$store.state.products.product
    const query = this.$store.state.products.filters
    this.crumb.push({
      title: 'Каталог',
      to: { name: 'catalog', query },
    })
    this.crumb.push({
      title: product.title,
      to: { name: 'products-slug', params: { slug: product.slug } },
    })
    this.selectedImage = product.media[0]

    this.loaded = true
  },
  methods: {
    changeExpanded() {
      this.expand = !this.expand
      if (this.expand) this.expandText = 'Скрыть'
      else this.expandText = 'Показать ещё'
    },
    setActiveImage(image) {
      this.selectedImage = image
    },
    onShowPreviewImage(value) {
      this.previewImage = value
    },
    keyup(e) {
      if (e.keyCode === 27) {
        this.previewImage = false
      }
    },
    handleScroll() {
      // const currentBreak = getCurrentBreakpoint()
      const currentBreakValue = getBreakpointValue('lg')
      console.log(window.scrollY)

      if (window.innerWidth >= currentBreakValue) {
        if (window.scrollY >= 60) this.stickyProductTitle = true
        else this.stickyProductTitle = false
        if (window.scrollY >= 276) this.stickyProductSaleButtons = true
        else this.stickyProductSaleButtons = false
      } else {
        this.stickyProductTitle = false
        this.stickyProductSaleButtons = false
      }
    },
  },
  mounted() {
    if (process.client) {
      window.addEventListener('keyup', this.keyup)
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('keyup', this.keyup)
      window.removeEventListener('scroll', this.handleScroll)

      this.stickyProductTitleClass = ''
    }
  },
}
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageSection class="mb-0">
        <Skeleton :is-loaded="loaded" :w="null" skeleton-class="w-1/3">
          <Breadcrumb :crumbs="crumb" />
        </Skeleton>
      </PageSection>
      <PageSection
        class="lg:sticky lg:top-[133px] lg:-mx-4 lg:px-12"
        :class="{
          'bg-white z-20 drop-shadow-lg pt-4 md:py-4': stickyProductTitle,
          'md:py-6 pt-6': !stickyProductTitle,
        }"
      >
        <div class="flex flex-row justify-between">
          <div class="flex flex-col">
            <Skeleton
              :is-loaded="loaded"
              :w="null"
              h="24px"
              skeleton-class="w-1/4"
            >
              <h1
                class="leading-6"
                :class="{
                'text-2xl': !stickyProductTitle,
                'text-xl': stickyProductTitle,
              }"
              >
                {{ product.title }}
              </h1>
            </Skeleton>
            <Skeleton
              :is-loaded="loaded"
              :w="null"
              :m="null"
              h="18px"
              skeleton-class="w-2/4 mt-1.5"
            >
            <span v-if="product.article" class="text-gray-400/70">
              Артикул товара: {{ product.article }}
            </span>
            </Skeleton>
          </div>
          <div v-show="stickyProductSaleButtons" class="flex flex-row gap-x-4 items-center">
            <Skeleton :is-loaded="loaded" h="40px">
              <Button v-if="product.in_stock" class="w-full">
                <iconify-icon
                  icon="material-symbols:add-shopping-cart-rounded"
                  width="18"
                  height="18"
                />
                В корзину
              </Button>
              <Button
                v-else
                class="w-1/2 lg:w-1/3"
                text="Нет в наличии"
                disabled
              />
              <div v-else>
                <h2 class="text-[1.35rem] font-medium" v-if="loaded">
                  Товар недоступен
                </h2>
              </div>
            </Skeleton>

            <Button type="secondary">
              <iconify-icon
                icon="material-symbols:alternate-email-rounded"
                width="18"
                height="18"
              />
              Связаться
            </Button>
          </div>
        </div>
      </PageSection>
      <div class="flex flex-col lg:flex-row">
        <div class="lg:flex lg:w-4/6 lg:pl-8 px-4 lg:pr-0 grow">
          <Skeleton
            :is-loaded="loaded"
            :h="null"
            w="100%"
            :m="null"
            skeleton-class="lg:h-[623px] h-[343px] mb-2 lg:mb-4"
          >
            <div
              class="flex flex-col items-center justify-center bg-white rounded-lg lg:h-[623px] h-[343px] lg:ml-2 mb-2 lg:mb-0 lg:order-2 lg:grow"
            >
              <!--              <ImageMagnifier-->
              <!--                :src="`${activeImage}`"-->
              <!--                :zoom-src="activeImage"-->
              <!--                width="440"-->
              <!--                height="440"-->
              <!--                mask-height="180"-->
              <!--                mask-width="180"-->
              <!--                zoom-width="440"-->
              <!--                zoom-height="440"-->
              <!--                zoom-class="max-w-[320px] max-h-[320px] lg:max-w-[440px] lg:max-h-[440px]"-->
              <!--              />-->
              <NuxtImg
                :src="activeImage"
                loading="lazy"
                @click="onShowPreviewImage(true)"
                class="rounded-lg max-w-[320px] max-h-[320px] lg:max-w-[440px] lg:max-h-[440px]"
              />
            </div>
          </Skeleton>
          <div
            class="flex gap-2 lg:gap-4 lg:order-1 w-full lg:h-full lg:w-auto"
          >
            <div class="relative lg:w-auto w-full lg:h-full">
              <div
                v-if="product.media.length > 3"
                class="swiper-prev flex items-center justify-center absolute left-0 top-1/2 lg:top-0 lg:left-1/2 bg-white shadow rounded-full p-1.5 -translate-x-3 -translate-y-3.5 lg:-translate-x-3.5 lg:-translate-y-3.5 z-10"
                slot="button-prev"
              >
                <iconify-icon
                  class="hidden lg:block"
                  icon="material-symbols:keyboard-arrow-up-rounded"
                  width="18"
                  height="18"
                />
                <iconify-icon
                  class="lg:hidden"
                  icon="material-symbols:keyboard-arrow-up-rounded"
                  rotate="270deg"
                  width="18"
                  height="18"
                />
              </div>
              <div class="lg:h-[623px] overflow-hidden w-full">
                <Swiper :options="swiperOption" class="rounded-lg lg:h-full">
                  <SwiperSlide
                    v-for="(image, index) in product.media"
                    :key="index"
                    :class="{
                      'flex justify-center items-center bg-white rounded-lg p-3 lg:p-4':
                        loaded,
                    }"
                  >
                    <Skeleton
                      :is-loaded="loaded"
                      :h="null"
                      :w="null"
                      skeleton-class="lg:w-[96px] w-[120px] h-[96px]"
                    >
                      <NuxtImg
                        :src="`${image}`"
                        @click="setActiveImage(image)"
                        class="w-[120px] lg:w-[96px] h-[96px] object-cover rounded-lg cursor-pointer"
                      />
                    </Skeleton>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div
                v-if="product.media.length > 3"
                class="swiper-next flex items-center justify-center absolute right-0 bottom-1/2 lg:right-auto lg:bottom-0 lg:left-1/2 bg-white shadow rounded-full translate-x-3 translate-y-3.5 lg:-translate-x-3.5 p-1.5 lg:translate-y-3.5 z-10"
                slot="button-next"
              >
                <iconify-icon
                  class="hidden lg:block"
                  icon="material-symbols:keyboard-arrow-down-rounded"
                  width="18"
                  height="18"
                />
                <iconify-icon
                  class="lg:hidden"
                  icon="material-symbols:keyboard-arrow-down-rounded"
                  rotate="270deg"
                  width="18"
                  height="18"
                />
              </div>
            </div>
          </div>
        </div>
        <PageSection
          class="mt-4 lg:mt-0 flex flex-col gap-y-4 w-full lg:max-w-[440px]"
        >
          <div class="flex flex-col gap-y-1.5 bg-white rounded-lg px-5 py-5">
            <Skeleton
              :is-loaded="loaded"
              :w="null"
              skeleton-class="w-1/4"
              h="28px"
            >
              <div
                v-if="product.in_stock"
                class="wave rounded-full self-start flex flex-row items-center gap-x-1 text-white bg-green-600 px-2 pr-3 py-1 text-sm"
              >
                <iconify-icon
                  icon="material-symbols:check-circle-outline-rounded"
                  class="text-lg"
                />
                <span>В наличии</span>
              </div>
              <div
                v-else
                class="rounded-full self-start flex flex-row items-center gap-x-1 text-white bg-red-600 px-2 py-1 text-sm"
              >
                <iconify-icon
                  icon="material-symbols:error-circle-rounded-outline"
                  class="text-lg"
                />
                <span>Нет в наличии</span>
              </div>
            </Skeleton>
            <Skeleton :is-loaded="loaded" h="40px">
              <div v-if="product.price" class="flex flex-col">
                <h2 class="text-[1.35rem] font-bold" v-if="loaded">
                  {{ product.price | toRuble }}
                </h2>

                <Button v-if="product.in_stock" class="w-full mt-4">
                  <iconify-icon
                    icon="material-symbols:add-shopping-cart-rounded"
                    width="18"
                    height="18"
                  />
                  В корзину
                </Button>
                <Button
                  v-else
                  class="w-1/2 lg:w-1/3"
                  text="Нет в наличии"
                  disabled
                />
              </div>
              <div v-else>
                <h2 class="text-[1.35rem] font-medium" v-if="loaded">
                  Товар недоступен
                </h2>
              </div>
            </Skeleton>

            <Button type="secondary">
              <iconify-icon
                icon="material-symbols:alternate-email-rounded"
                width="18"
                height="18"
              />
              Связаться
            </Button>
          </div>

          <!--          <Skeleton-->
          <!--            :is-loaded="loaded"-->
          <!--            :rep="5"-->
          <!--            :m="null"-->
          <!--            skeleton-class="mb-2"-->
          <!--          >-->
          <!--            <div-->
          <!--              v-if="product.short_description"-->
          <!--              class="flex flex-col space-y-2"-->
          <!--            >-->
          <!--              <span class="self-start bg-gray-100 rounded-lg px-4 py-3">-->
          <!--                Описание-->
          <!--              </span>-->
          <!--              <div class="bg-gray-100 rounded-lg px-4 py-3">-->
          <!--                <p-->
          <!--                  class="relative overflow-hidden pointer-events-none transition-all whitespace-pre-wrap"-->
          <!--                  :class="{-->
          <!--                    'max-h-[calc(3*1em*1.5)] before:content-[\'\'] before:absolute before:bottom-0 before:w-full before:max-h-[calc(1em*3)] before:bg-gradient-to-t before:from-gray-100 before:h-full':-->
          <!--                      !this.expand,-->
          <!--                    'max-h-[\'auto\']': this.expand,-->
          <!--                  }"-->
          <!--                >-->
          <!--                  {{ product.short_description }}-->
          <!--                </p>-->
          <!--                <div class="pt-1">-->
          <!--                  <Anchor-->
          <!--                    :text="expandText"-->
          <!--                    @click="changeExpanded"-->
          <!--                    class="text-primary-500 hover:text-primary-900"-->
          <!--                  />-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </Skeleton>-->
        </PageSection>
      </div>
    </PageBody>
    <Portal to="app-after">
      <div
        v-if="previewImage"
        class="fixed inset-0 bg-dark/95 backdrop-filter backdrop-blur-md z-50 h-screen w-screen"
      >
        <div
          class="flex items-center justify-center max-w-8xl absolute top-6 bottom-6 left-6 right-6 lg:top-8 lg:bottom-10 lg:left-8 lg:right-8 px-4 my-4 w-full h-full lg:mx-auto"
        >
          <NuxtImg :src="activeImage" />
        </div>
      </div>
    </Portal>
  </PageWrapper>
</template>

<style scoped>
::v-deep(.expand-btn) {
  @apply pt-0.5 appearance-none cursor-pointer;
}

.wave {
  @apply relative overflow-hidden;
}

.wave::after {
  animation: wave 2s linear 0s infinite;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(85, 194, 126, 0.5),
    transparent
  );
  content: '';
  position: absolute;
  transform: translate3d(-100%, 0, 0);
  will-change: transform;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}

@keyframes wave {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  60% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
