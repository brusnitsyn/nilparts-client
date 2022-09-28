<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: 'https://via.placeholder.com/64x64'
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-y-2 mb-2">
    <div class="flex flex-row justify-between items-center">
      <NuxtImg :src="image" class="rounded-full w-16 object-fill" />
      <Button type="opposite" text="Редактировать">
        <template #icon>
          <iconify-icon icon="material-symbols:edit-rounded" weigth="18" height="18" />
        </template>
      </Button>
    </div>
    <span class="text-lg font-medium">{{ text }}</span>
  </div>
</template>
