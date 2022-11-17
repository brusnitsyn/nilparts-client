<script>
export default {
  props: {
    modelValue: Number,
    value: Number
  },
  data() {
    return {
      value: 1
    }
  },
  methods: {
    onChange(value) {
      this.$emit('input', value)
    },
  }
}
</script>

<template>
  <div>
    <input type="number"/>
  </div>
</template>
