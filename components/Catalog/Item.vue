<script>
export default {
  props: {
    title: {
      type: String,
      default: '{{ title }}'
    },
    image: {
      type: String,
      default: 'https://via.placeholder.com/294x196'
    },
    inStock: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="flex flex-col justify-between rounded-lg border border-gray-900/10 dark:border-gray-50/20 shadow-sm p-3 w-full">
    <NuxtImg loading="lazy" :src="image" class="rounded-lg w-full h-full max-h-[196px]"/>
    <div class="flex flex-col justify-between pt-1.5">
      <span class="text-lg pb-2 leading-6 line-clamp-2">
        {{ title }}
      </span>
    </div>
    <div>
      <div class="flex justify-between items-center pb-2">
        <span class="font-medium text-xl">3200,00 Р</span>
        <div v-if="inStock" class="flex flex-row items-center gap-x-1 text-white bg-green-600 px-2 py-1 rounded-lg text-sm">
          <iconify-icon icon="material-symbols:check-circle-outline-rounded" class="text-lg" />
          <span>В наличии</span>
        </div>
        <div v-else class="flex flex-row items-center gap-x-1 text-white bg-red-600 px-2 py-1 rounded-lg text-sm">
          <iconify-icon icon="material-symbols:error-circle-rounded-outline" class="text-lg" />
          <span>Нет в наличии</span>
        </div>
      </div>
      <hr class="border-gray-900/10 dark:border-gray-50/20"/>
      <div class="pt-3 align-bottom">
        <Button text="Запросить"/>
      </div>
    </div>
  </div>
</template>
