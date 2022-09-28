<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <div class="flex flex-col rounded-lg border border-gray-900/10 dark:border-gray-50/20 shadow-sm p-3 w-full">
    <div class="flex items-center gap-x-2 pb-2 border-b border-gray-900/10 dark:border-gray-50/20">
      <slot name="icon" />
      <span class="select-none text-sm">
        {{text}}
      </span>
    </div>
    <div class="pt-2 text-sm select-none">
      <slot name="option" />
    </div>
  </div>
</template>
