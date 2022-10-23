<script>
export default {
  props: {
    product: {
      type: Object,
      default: undefined,
    },
    isLoaded: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    async goProduct() {
      // await this.$router.push()
    },
  },
}
</script>

<template>
  <div
    class="flex flex-col justify-between rounded-lg border border-gray-900/10 dark:border-gray-50/20 shadow-sm p-3 w-full"
  >
    <NuxtLink
      class="flex flex-col"
      :to="{ name: 'products-slug', params: { slug: product.slug } }"
    >
      <Skeleton
        :is-loaded="!isLoaded"
        :w="null"
        :h="null"
        skeleton-class="rounded-lg h-[196px] w-full md:w-[294px] object-cover"
      >
        <NuxtImg
          loading="lazy"
          :src="`${$config.serverURL}/${product.thumb_url}`"
          class="rounded-lg h-[196px] w-full md:w-[294px] object-cover"
        />
      </Skeleton>
      <div class="pt-1.5">
        <Skeleton :is-loaded="!isLoaded" :w="null" :m="null"  skeleton-class="text-lg mt-1 mb-2 w-1/3">
          <span class="text-lg pb-2 leading-6 line-clamp-2">
            {{ product.name }}
          </span>
        </Skeleton>
      </div>
      <div class="items-end">
        <Skeleton :is-loaded="!isLoaded" h="28px" :m="null" skeleton-class="mb-2">
          <div class="flex justify-between items-center pb-2">
          <span v-if="product.prices.length" class="font-medium text-xl">{{
              product.prices[0].price | toRuble
            }}</span>
            <div
              v-if="product.in_stock"
              class="flex flex-row items-center gap-x-1 text-white bg-green-600 px-2 py-1 rounded-lg text-sm"
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
        </Skeleton>
      </div>
    </NuxtLink>
    <hr class="border-gray-900/10 dark:border-gray-50/20" />
    <div class="pt-3 align-bottom">
      <Skeleton :is-loaded="!isLoaded" h="40px" skeleton-class="">
        <Button @click="goProduct" text="Запросить" />
      </Skeleton>
    </div>
  </div>
</template>
