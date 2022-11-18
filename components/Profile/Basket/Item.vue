<script>
export default {
  props: {
    selected: {
      type: Array,
    },
    item: {
      type: Object,
    },
    isLoaded: {
      type: Boolean,
      default: false,
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
      },
    },
    quantity: {
      get() {
        return this.item.quantity
      },
      async set(value) {
        const payload = { id: this.item.product.id, value }
        await this.$store.dispatch('products/basket/updateQuantity', payload)
      },
    },
  },
}
</script>

<template>
  <div
    class="relative flex flex-col justify-between rounded-lg border bg-white border-gray-900/10 dark:border-gray-50/20 shadow-sm p-3 w-full"
  >
    <div class="flex items-center justify-between mb-2">
      <Skeleton
        :is-loaded="!isLoaded"
        :w="null"
        :h="null"
        radius="4px"
        skeleton-class="h-5 w-5"
      >
        <label>
          <input
            type="checkbox"
            class="cursor-pointer appearance-none w-5 h-5 flex items-center justify-center rounded border transition-colors hover:border-primary-500 checked:bg-primary-500 checked:border-primary-500 after:content-[''] after:w-[5px] after:h-[9px] after:border-b-2 after:border-r-2 after:border-white after:rotate-[40deg]"
            v-model="selectedModel"
            :value="item.product.id"
          />
        </label>
      </Skeleton>
      <div class="self-end">
        <Skeleton
          :is-loaded="!isLoaded"
          :w="null"
          :h="null"
          skeleton-class="w-[106px] h-[28px]"
        >
          <div
            v-if="item.product.in_stock"
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
        </Skeleton>
      </div>
    </div>
    <div class="flex flex-row space-x-2 w-full">
      <Skeleton
        :is-loaded="!isLoaded"
        :w="null"
        :h="null"
        skeleton-class="rounded-lg w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
      >
        <div
          class="rounded-lg overflow-clip w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
        >
          <img
            class="w-full h-full"
            :src="`${$config.serverURL}/${item.product.thumb_url}`"
            alt=""
          />
        </div>
      </Skeleton>
      <div class="flex flex-col lg:flex-row w-full gap-x-4 flex-1">
        <div class="max-w-[340px] w-full">
          <div class="flex flex-col items-start">
            <Skeleton
              :is-loaded="!isLoaded"
              :w="null"
              skeleton-class="w-[240px]"
            >
              <Anchor
                class="line-clamp-2"
                :to="{
                  name: 'products-slug',
                  params: { slug: item.product.slug },
                }"
              >
                {{ item.product.name }}
              </Anchor>
            </Skeleton>
            <Skeleton
              class="hidden lg:flex lg:mt-1"
              :is-loaded="!isLoaded"
              :w="null"
              skeleton-class="w-[200px]"
            >
              <div class="gap-x-4 text-sm">
                <Anchor text="В избранное" class="hidden lg:block" />
                <Anchor text="Удалить" class="hidden lg:block" />
              </div>
            </Skeleton>
          </div>
        </div>

        <div class="lg:order-1 shrink-0 w-full lg:ml-auto max-w-[170px]">
          <div class="flex lg:justify-end">
            <Skeleton :is-loaded="!isLoaded" :w="null" skeleton-class="w-[86px]">
              <span class="font-semibold">{{
                  item.product.price | toRuble
                }}</span>
            </Skeleton>
          </div>
        </div>

        <div class="self-start">
          <Skeleton :is-loaded="!isLoaded" :w="null" :h="null" skeleton-class="w-[160px] h-[40px]">
            <FormNumericInput v-model.number="quantity" class="max-w-[160px]" />
          </Skeleton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
