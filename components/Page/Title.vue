<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <h1>
    {{ text }}
  </h1>
</template>
