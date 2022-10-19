<script>
export default {
  props: {
    value: {
      type: [Object, String, Number],
      default: undefined
    },
    title: {
      type: String,
      default: 'Option'
    },
    selected: {
      type: Boolean,
    }
  }
}
</script>

<template>
  <option :value="value" class="cursor-pointer">
    {{ title }}
  </option>
</template>
