<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'page',
  head() {
    return {
      title: this.product.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.desc,
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
  async fetch() {
    await this.$store.dispatch('products/fetchProduct', this.$route.params.slug)
  },
}
</script>

<template>
  <PageWrapper>
    <PageBody>
      <div class="flex flex-col lg:flex-row">
        <div class="lg:w-1/2 lg:pl-8 px-4">
          <div
            class="flex items-center justify-center bg-gray-100 rounded-lg lg:h-[632px] h-[343px]"
          >
            <NuxtImg :src="activeImage" class="max-w-[320px] max-h-[320px] lg:max-w-[440px] lg:max-h-[440px]" />
          </div>
        </div>
        <PageSection class="lg:w-1/2 mt-4 lg:mt-0">
          <h1 class="text-2xl">{{ product.name }}</h1>
          <h2>{{ product.prices[0].price | toRuble }}</h2>
          <p>{{ product.desc }}</p>
        </PageSection>
      </div>
    </PageBody>
  </PageWrapper>
</template>
