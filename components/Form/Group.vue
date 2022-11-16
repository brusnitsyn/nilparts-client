<script>
export default {
  props: {
    text: String
  }
}
</script>

<template>
  <div class="flex flex-col pb-3">
    <span class="pb-2">{{ text }}</span>
    <slot />
  </div>
</template>
