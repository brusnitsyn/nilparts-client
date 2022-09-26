<script>
export default {
  props: {
    text: {
      type: String,
      default: '{{ Header }}'
    }
  },
  methods: {
    click() {
      setTimeout(() => this.$emit('clickClose'), 100)
    }
  }
}
</script>

<template>
  <div class="px-4 py-4 w-full flex flex-row justify-between items-center">
    <div>
      {{text}}
    </div>
    <button @click="click" class="flex items-center">
      <iconify-icon icon="clarity:window-close-line" class="text-xl" />
    </button>
  </div>
</template>
