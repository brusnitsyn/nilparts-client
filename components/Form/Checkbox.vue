<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Option',
    },
    checked: {
      type: Boolean,
    },
  },
  computed: {
    model: {
      get() {
        return this.checked
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<template>
  <label class="flex w-fit items-center gap-2 cursor-pointer group">
    <input type="checkbox" class="hidden" v-model="model" />
    <span
      class="relative flex w-5 h-5 items-center justify-center rounded border transition-colors group-hover:bg-primary-500 group-hover:border-primary-500 after:absolute after:content-[''] after:w-[6px] after:h-[9px] after:border-b-2 after:border-r-2 after:rotate-[40deg] after:transition-opacity after:bg-transparent"
      :class="{
        'bg-primary-500 border-primary-500 after:opacity-100': $attrs.value,
        'bg-transparent after:opacity-0': !$attrs.value
      }"
    />
    <span class="text-sm">{{ label }}</span>
  </label>
</template>

<style scoped></style>
