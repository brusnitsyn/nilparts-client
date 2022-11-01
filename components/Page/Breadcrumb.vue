<script>
export default {
  props: {
    crumbs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    isLast(index) {
      return index === this.crumbs.length - 1;
    },
  },
}
</script>

<template>
  <nav>
    <ol class="flex flex-row items-center flex-wrap">
      <li
        v-for="(crumb, index) in crumbs"
        :key="index"
        class="inline-flex items-center"
      >
        <NuxtLink class="w-full" :class="{ 'text-primary-500 font-medium': isLast(index) }" :to="crumb.to">
          {{ crumb.title }}
        </NuxtLink>
        <span v-if="!isLast(index)" class="px-2 text-sm">
          /
        </span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>

</style>
