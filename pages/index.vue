<script>
import { mapGetters } from 'vuex'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  layout: 'page',
  components: {
    Swiper, SwiperSlide
  },
  computed: {
    ...mapGetters({
      categories: 'category/getCategories',
      blogs: 'blog/getBlogs',
      products: 'products/getProducts'
    }),
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 8,
        breakpoints: {
          640: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1280: {
            slidesPerView: 4
          }
        },
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },
      }
    }
  },
  async fetch() {
    // await this.$store.dispatch('blog/fetchBlogs')
    await this.$store.dispatch('products/fetchProducts')
  },
}
</script>

<template>
  <div>
    <HeroSwiper />
    <PageWrapper class="mt-4">
      <PageBody>
        <PageSection v-if="categories.length">
          <PageSectionTitle text="Товары для сельскогохозяйства" />
          <ShortcutCategoryWrapper class="mt-6">
            <ShortcutCategoryItem
              v-for="(category, index) in categories.slice(0, 4)"
              :key="category.id"
              :text="category.title"
              :image="category.image"
              :to="{ name: 'catalog-slug', params: { slug: category.slug } }"
            />
            <!--https://via.placeholder.com/320x114-->
          </ShortcutCategoryWrapper>
        </PageSection>
        <PageSection v-if="products.length">
          <div class="relative w-auto h-full">
            <div
              class="swiper-prev flex items-center justify-center absolute left-0 top-1/2 bg-white shadow-lg rounded-full p-1.5 -translate-x-3 -translate-y-3.5 z-10"
              slot="button-prev"
            >
              <iconify-icon
                icon="material-symbols:keyboard-arrow-up-rounded"
                rotate="270deg"
                width="18"
                height="18"
              />
            </div>

            <Swiper :options="swiperOption">
              <SwiperSlide v-for="(product) in products" :key="product.id">
                <LazyCatalogItem :product="product" class="" />
              </SwiperSlide>
            </Swiper>

            <div
              class="swiper-next flex items-center justify-center absolute right-0 bottom-1/2 bg-white shadow-lg rounded-full p-1.5 translate-x-3 translate-y-3.5 z-10"
              slot="button-next"
            >
              <iconify-icon
                icon="material-symbols:keyboard-arrow-down-rounded"
                rotate="270deg"
                width="18"
                height="18"
              />
            </div>
          </div>
          <div class="flex w-full items-center justify-center mt-6">
            <Button type="bordered" size="rounded" class="text-dark bg-white border-gray-400">
              Перейти в каталог
            </Button>
          </div>
        </PageSection>
<!--        <PageSection v-if="blogs.length">-->
<!--          <PageSectionTitle-->
<!--            text="Новости"-->
<!--            :route="{ name: 'Все новости', to: { name: 'news' } }"-->
<!--          />-->
<!--          <ShortcutNewsWrapper>-->
<!--            <NewsItem-->
<!--              v-for="(blog, index) in blogs.slice(0, 4)"-->
<!--              :key="blog.id"-->
<!--              :model="blog"-->
<!--            />-->
<!--          </ShortcutNewsWrapper>-->
<!--        </PageSection>-->
      </PageBody>
    </PageWrapper>
  </div>
</template>

<style scoped>
::v-deep(.swiper-slide) {
  @apply h-auto;
}
</style>
