<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default: undefined
    }
  },
  computed: {
    style() {
      return 'rounded-lg border px-2 py-1 text-sm bg-white border-gray-900/10 dark:border-gray-50/20'
    }
  },
  methods: {
    click() {
      setTimeout(() => this.$emit('click'), 100)
    }
  }
}
</script>

<template>
  <button v-if="to" @click="$router.push(to)" :class="style">
    <div class="flex items-center gap-x-1.5">
      <slot name="icon"/>
      <slot/>
    </div>
  </button>
  <button v-else @click="click" :class="style">
    <div class="flex items-center gap-x-1.5">
      <slot name="icon"/>
      <slot/>
    </div>
  </button>
</template>
