<script>
export default {
  props: {
    type: String,
    name: String,
    number: String,
    label: String,
    placeholder: String,
    size: {
      type: String,
      default: 'md'
    }
  },
  computed: {
    selectedBorderStyle() {
      return 'border-gray-900/10 dark:border-gray-50/20'
    },
    selectedPaddingStyle() {
      return this.paddingStyles[this.size] || this.paddingStyles.md
    },
    selectedFontSizeStyle() {
      return this.fontSizeStyles[this.size] || this.fontSizeStyles.md
    },
  },
  data() {
    return {
      paddingStyles: {
        xs: 'px-1 py-0.5',
        sm: 'px-2 py-1.5',
        md: 'px-4 py-2',
        lg: 'px-5 py-3',
      },
      fontSizeStyles: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      }
    }
  }
}
</script>

<template>
  <textarea
    :type="type"
    :name="name"
    :class="`w-full outline-none border rounded ${selectedBorderStyle} ${selectedPaddingStyle} ${selectedFontSizeStyle}`"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
  />
</template>

<style scoped></style>
