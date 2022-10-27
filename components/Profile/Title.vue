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
      <div class="flex flex-col md:flex-row gap-y-2 gap-x-2">
        <Button v-if="$auth.user.role === 'admin'" type="secondary" text="Админ-панель" :to="{ name: 'admin' }">
          <template #icon>
            <iconify-icon icon="material-symbols:admin-panel-settings-rounded" weigth="18" height="18" />
          </template>
        </Button>
        <Button type="opposite" text="Редактировать">
          <template #icon>
            <iconify-icon icon="material-symbols:edit-rounded" weigth="18" height="18" />
          </template>
        </Button>
      </div>
    </div>
    <span class="text-lg font-medium">{{ text }}</span>
  </div>
</template>
