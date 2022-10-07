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
  <span class="font-bold text-xl">
    {{text}}
  </span>
</template>
