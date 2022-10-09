<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Option'
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    model: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {

  }
}
</script>

<template>
  <label class="flex w-fit items-center gap-2 cursor-pointer">
    <input type="checkbox" class="hidden" v-model="model"  />
    <span
      class="relative flex w-6 h-6 items-center justify-center rounded transition-colors border hover:bg-primary-500 after:absolute after:content-[''] after:w-[8px] after:h-[10px] after:top-0 after:bottom-0 after:mt-[4px] after:my-auto after:border-b-2 after:border-r-2 after:rotate-[40deg] after:opacity-0 after:transition-opacity after:bg-transparent"
      :class="{
        'bg-primary-500 hover:bg-primary-500 after:opacity-100': value,
      }"
    />
    <span class="text-sm">{{ label }}</span>
  </label>
</template>

<style scoped>

</style>
