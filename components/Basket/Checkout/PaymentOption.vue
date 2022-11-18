<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    item: Object,
    modelValue: [String, Number],
    value: [String, Number],
  },
  computed: {
    isChecked() {
      return this.modelValue === this.value
    },
  },
  data() {
    return {
      defaultStyle:
        "cursor-pointer appearance-none w-5 h-5 flex items-center justify-center rounded-full border transition-colors hover:border-primary-500 checked:bg-primary-500 checked:border-primary-500 after:content-[''] after:w-4 after:h-4 after:rounded-full checked:after:border checked:after:border-2 after:border-white",
    }
  },
  methods: {
    onClick() {},
  },
}
</script>

<template>
  <label
    class="cursor-pointer border rounded-lg px-4 py-4 hover:border-primary-500 transition-colors select-none"
    :class="{ 'border-primary-500': isChecked }"
  >
    <div class="flex flex-col">
      <label class="flex w-fit items-center gap-2 cursor-pointer group">
        <input
          type="radio"
          :value="value"
          :checked="isChecked"
          @change="$emit('change', $event.target.value)"
          :class="defaultStyle"
        />
        <span class="text-sm">{{ item.name }}</span>
      </label>
    </div>
  </label>
</template>
