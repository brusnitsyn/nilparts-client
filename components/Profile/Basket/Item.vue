<script>
export default {
  props: {
    selected: {
      type: Array,
    },
    item: {
      type: Object,
    },
  },
  computed: {
    isSelected() {
      return this.selected.includes(this.item.id)
    },
    selectedModel: {
      get() {
        return this.selected
      },
      set(value) {
        this.$emit('selected-updated', value)
      }
    }
  }
}
</script>

<template>
  <div
    class="relative flex flex-col justify-between rounded-lg border bg-white border-gray-900/10 dark:border-gray-50/20 shadow-sm p-3 w-full"
  >
    <div class="flex mb-2">
      <label>
        <input
          type="checkbox"
          class="hidden"
          v-model="selectedModel"
          :value="item.id"
        />
        <span
          class="relative flex w-5 h-5 items-center justify-center rounded border transition-colors group-hover:bg-primary-500 group-hover:border-primary-500 after:absolute after:content-[''] after:w-[6px] after:h-[9px] after:border-b-2 after:border-r-2 after:rotate-[40deg] after:transition-opacity after:bg-transparent"
          :class="{
          'bg-primary-500 border-primary-500 after:opacity-100': isSelected,
          'bg-transparent after:opacity-0': !isSelected,
        }"
        />
      </label>
    </div>
    <div class="flex flex-row space-x-2 w-full">
      <div class="rounded-lg overflow-clip w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
        <img
          class="w-full h-full"
          src="https://via.placeholder.com/120"
          alt=""
        />
      </div>
      <div class="flex flex-col w-full flex-1">
        <div class="flex flex-row justify-between">
          <div>
            <span>{{ item.text }}</span>
          </div>
        </div>
        <div class="self-start">
          <div
            v-if="item.in_stock"
            class="flex flex-row items-center gap-x-1 text-white bg-green-600 px-2 py-1 rounded-lg text-sm"
          >
            <iconify-icon
              icon="material-symbols:check-circle-outline-rounded"
              class="text-lg"
            />
            <span>В наличии</span>
          </div>
          <div
            v-else
            class="flex flex-row items-center gap-x-1 text-white bg-red-600 px-2 py-1 rounded-lg text-sm"
          >
            <iconify-icon
              icon="material-symbols:error-circle-rounded-outline"
              class="text-lg"
            />
            <span>Нет в наличии</span>
          </div>
        </div>
        <div>
          <span class="font-semibold">{{ item.price | toRuble }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
