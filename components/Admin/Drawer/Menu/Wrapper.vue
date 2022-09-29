<script>
import p from '@/package.json'
export default {
  computed: {
    name() {
      return p.name
    }
  }
}
</script>

<template>
  <div class="flex flex-col">
    <div class="py-3 lg:px-8 mx-4 lg:mx-0">
      <NuxtLink
        tag="a"
        class="flex-none overflow-hidden md:w-auto text-md font-bold text-gray-900 dark:text-gray-200"
        :to="{ name: 'index' }"
      >
        <span class="sr-only">home</span>
        <span class="flex items-center gap-x-2">
          <iconify-icon icon="logos:nuxt-icon" />
          {{ name }}
        </span>
      </NuxtLink>
    </div>
    <slot />
  </div>
</template>
