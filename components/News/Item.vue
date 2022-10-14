<script>
export default {
  props: {
    model: {
      type: Object,
      default: undefined,
    },
  },
}
</script>

<template>
  <div
    class="border border-gray-900/10 dark:border-gray-50/20 rounded-lg h-full overflow-clip"
  >
    <div>
      <NuxtImg
        loading="lazy"
        :src="`${$config.serverURL}/${model.image.url}`"
        alt=""
        class="w-full h-[180px] lg:w-[350px] object-cover"
      />
    </div>
    <div class="px-2 py-1 text-sm">
      <div class="flex justify-between">
        <span class="block font-medium">
          {{ model.user.name }}
        </span>
        <span class="block">
          {{ model.created_at }}
        </span>
      </div>
      <span class="block text-base font-medium py-1.5">
        {{ model.title }}
      </span>
      <span class="block font-normal line-clamp-2">
        {{ model.sub_title }}
      </span>
      <div class="py-2">
        <Button> Читать далее </Button>
      </div>
    </div>
  </div>
</template>
