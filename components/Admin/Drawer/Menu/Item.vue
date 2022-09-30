<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    to: {
      type: [Object, String],
      default: undefined
    }
  }
}
</script>

<template>
  <div class="flex flex-row items-center gap-x-2 py-3 px-4 lg:px-8">
    <slot name="icon" />
    <NuxtLink :to="to">
      {{ text }}
    </NuxtLink>
  </div>
</template>
