<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: [Number, String],
      default: '',
    },
    modelValue: {
      type: [Number, String],
      default: '',
    },
  },
  computed: {
    isChecked() {
      return this.modelValue === this.value
    }
  },
  data() {
    return {
      defaultStyle:
        "cursor-pointer appearance-none w-5 h-5 flex items-center justify-center rounded-full border transition-colors hover:border-primary-500 checked:bg-primary-500 checked:border-primary-500 after:content-[''] after:w-4 after:h-4 after:rounded-full checked:after:border checked:after:border-2 after:border-white",
    }
  },
  methods: {
    onChange(value) {
      this.$emit('change', value)
    },
  },
}
</script>

<template>
  <label class="flex w-fit items-center gap-2 cursor-pointer group">
    <input
      type="radio"
      :value="value"
      :checked="isChecked"
      @change="(evt) => onChange(evt.target.value)"
      :class="defaultStyle"
    />
    <span class="text-sm" v-if="label && label.length">{{ label }}</span>
  </label>
</template>

<style scoped></style>
