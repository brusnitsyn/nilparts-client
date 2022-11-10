<script>
export default {
  // model: {
  //   prop: 'checked',
  //   event: 'update:checked',
  // },
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Boolean],
      default: null,
    },
    modelValue: {
      type: [Array, Boolean],
      default: () => [],
    },
  },

  data() {
    return {
      defaultStyle:
        "appearance-none w-5 h-5 flex items-center justify-center rounded border transition-colors hover:border-primary-500 checked:bg-primary-500 checked:border-primary-500 after:content-[''] after:w-[5px] after:h-[9px] after:border-b-2 after:border-r-2 after:border-white after:rotate-[40deg]",
    }
  },
  methods: {
    onChange(value, checked) {
      this.$emit('input', checked)
    },
  },
}
</script>

<template>
  <label class="flex w-fit items-center gap-2 cursor-pointer group">
    <input
      type="checkbox"
      :value="value"
      :checked="value"
      @change.prevent="(evt) => onChange(evt.target.value, evt.target.checked)"
      :class="defaultStyle"
    />
    <span class="text-sm" v-if="label && label.length">{{ label }}</span>
  </label>
</template>

<style scoped></style>
