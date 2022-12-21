<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default: undefined,
    },
    active: {
      type: [Boolean],
      default: false,
    },
  },
  computed: {
    style() {
      const active = this.active ? 'border border-primary-500 text-primary-500' : 'border border-gray-900/10 dark:border-gray-50/20'
      return `rounded px-2 py-1 text-sm bg-white ${active}`
    },
  },
  methods: {
    click() {
      setTimeout(() => this.$emit('click'), 100)
    },
  },
}
</script>

<template>
  <button
    v-if="to"
    @click="$router.push(to)"
    :class="style"
  >
    <div class="flex items-center gap-x-1.5">
      <slot name="icon" />
      <slot />
    </div>
  </button>
  <button
    v-else
    @click="click"
    :class="style"
  >
    <div class="flex items-center gap-x-1.5">
      <slot name="icon" />
      <slot />
    </div>
  </button>
</template>
