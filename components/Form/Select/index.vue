<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {

    }
  },
  data() {
    return {
      selected: null,
    }
  },
}
</script>

<template>
  <div class="relative">
    <select
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="cursor-pointer appearance-none block w-full px-3 py-2 text-base font-normal bg-white bg-clip-padding bg-no-repeat border border-gray-900/10 dark:border-gray-50/20 dark:focus:border-white focus:border-gray-900 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
    >
      <option :value="null" disabled selected>
        {{ label }}
      </option>
      <slot />
    </select>
  </div>
</template>
