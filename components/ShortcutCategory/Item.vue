<script>
const qs = require('qs')

export default {
  props: {
    to: {
      type: [String, Object],
      default: undefined
    },
    text: {
      type: String,
      default: ''
    },
    image: {
      type: Object,
      default: {}
    }
  },
  methods: {
    async goCatalogPage() {
      const query = qs.stringify({filter: {category: this.to.categoryId}})
      const path = `/${this.to.name}?${query}`

      await this.$router.push(path)
    }
  }
}
</script>

<template>
  <div @click="goCatalogPage" class="relative rounded-lg overflow-clip h-full group cursor-pointer select-none h-[108px] lg:w-[320px]">
    <NuxtImg loading="lazy" v-if="image" :src="`${image}`" alt="" class="h-full w-full object-cover transition-transform origin-bottom-right group-hover:scale-x-110 group-hover:scale-y-110" />
    <div class="absolute inset-y-0 left-0">
        <span class="block px-2 py-1 text-sm bg-gray-300/80 dark:bg-gray-900/40 rounded-br-lg">
          {{ text }}
        </span>
    </div>
  </div>
</template>
