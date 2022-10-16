<script>
export default {
  props: {
    product: {
      type: Object,
      default: undefined,
    },
  },
}
</script>

<template>
  <div
    class="flex flex-col justify-between rounded-lg border border-gray-900/10 dark:border-gray-50/20 shadow-sm p-3 w-full"
  >
    <NuxtLink class="flex flex-col" :to="{ name: 'index' }">
      <NuxtImg
        loading="lazy"
        :src="`${$config.serverURL}/${product.thumb_url}`"
        class="rounded-lg h-[196px] w-full md:w-[294px] object-cover"
      />
      <div class="pt-1.5">
        <span class="text-lg pb-2 leading-6 line-clamp-2">
          {{ product.name }}
        </span>
      </div>
      <div class="items-end">
        <div class="flex justify-between items-center pb-2">
          <span v-if="product.prices.length" class="font-medium text-xl">{{
            product.prices[0].price | toRuble
          }}</span>
          <div
            v-if="false"
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
      </div>
    </NuxtLink>
    <hr class="border-gray-900/10 dark:border-gray-50/20" />
    <div class="pt-3 align-bottom">
      <Button text="Запросить" />
    </div>
  </div>
</template>
