<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    user: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: '',
    },
    createdAt: {
      type: String,
      default: new Date().toLocaleString('ru').toString(),
    },
  }
}
</script>

<template>
  <div class="border border-gray-900/10 dark:border-gray-50/20 rounded-lg h-full overflow-clip">
    <div>
      <NuxtImg loading="lazy" :src="image" alt="" class="w-full" />
    </div>
    <div class="px-2 py-1 text-sm">
      <div class="flex justify-between">
        <span class="block font-medium">
          {{ user }}
        </span>
        <span class="block">
          {{ createdAt }}
        </span>
      </div>
      <span class="block text-base font-medium py-1.5">
        {{ title }}
      </span>
      <span class="block font-normal line-clamp-2">
        {{ content }}
      </span>
      <div class="flex justify-between py-2">
        <Button type="secondary">
          Редактировать
        </Button>
        <Button type="opposite" class="max-w-[40px]">
          <template #icon>
            <iconify-icon icon="material-symbols:delete-outline-rounded" width="20" height="20"></iconify-icon>
          </template>
        </Button>
      </div>
    </div>
  </div>
</template>
