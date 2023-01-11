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
  // methods: {
  //   async goCatalogPage() {
  //     const query = qs.stringify({filter: {category: this.to.categoryId}})
  //     const path = `/${this.to.name}?${query}`
  //
  //     await this.$router.push(path)
  //   }
  // }
}
</script>

<template>
  <NuxtLink :to="to" class="bg-white relative rounded-lg overflow-hidden h-full cursor-pointer overflow-clip h-[144px]">
    <div class="absolute right-0 bottom-0">
      <NuxtImg loading="lazy" v-if="image" :src="`${image}`" alt="" class="h-full max-h-[100px]" />
    </div>
    <div class="pl-8 pt-6">
        <span class="text-xl font-medium">
          {{ text }}
        </span>
    </div>
  </NuxtLink>
</template>
