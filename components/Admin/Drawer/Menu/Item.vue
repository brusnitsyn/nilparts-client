<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <div class="flex flex-row items-center gap-x-2 py-3 px-4 lg:px-8">
    <slot name="icon" />
    {{ text }}
  </div>
</template>
