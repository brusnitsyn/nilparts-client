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
  <div class="flex flex-col rounded-lg border border-gray-900/10 dark:border-gray-50/20 shadow-sm p-3 w-full">
    <img :src="image" alt="" class="rounded-lg w-full h-full">
    <div class="flex flex-col items-start pt-1.5 pb-2">
      <span class="text-lg font-medium pb-2">
        {{ title }}
      </span>
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
    <div class="pt-3">
      <Button text="Запросить"/>
    </div>
  </div>
</template>
