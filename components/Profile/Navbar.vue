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
  <div
    ref="navbar"
    class="backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-900/10 dark:border-gray-50/20 bg-white/50 dark:bg-slate-900/50 sticky"
  >
    <div class="max-w-8xl w-full mx-auto">
      <div class="py-3 lg:px-8 mx-4 lg:mx-0">
        <div class="relative flex justify-between items-center">
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
          <div class="flex justify-between">
            <NuxtLink :to="{ name: 'index' }">
              В магазин
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
