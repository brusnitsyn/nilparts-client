<script>
export default {
  props: {
    blog: {
      type: Object,
      default: {}
    },
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
  },
}
</script>

<template>
  <div class="border border-gray-900/10 dark:border-gray-50/20 rounded-lg h-full overflow-clip">
    <div>
      <!--          Image https://via.placeholder.com/350x180-->
      <NuxtImg loading="lazy" :src="`${$config.serverURL}/${blog.image.url}`" alt="" class="w-full lg:w-[350px] h-[180px]" />
    </div>
    <div class="px-2 py-1 text-sm">
      <div class="flex justify-between">
        <span class="block font-medium">
          {{ blog.user.name }}
        </span>
        <span class="block">
          {{ blog.created_at }}
        </span>
      </div>
      <span class="block text-base font-medium py-1.5">
        {{ blog.title }}
      </span>
      <span class="block font-normal line-clamp-2">
        {{ blog.sub_title }}
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
