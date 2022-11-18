<script>
import { mapGetters, mapState } from 'vuex'

export default {
  layout: 'page',
  computed: {
    ...mapGetters({
      basket: 'products/basket/getBasket',
    }),
    selectAll: {
      get() {
        return this.basket.products
          ? this.selected.length === this.basket.products.length
          : false
      },
      set(value) {
        let selected = []
        let noStocks = []
        if (value) {
          this.basket.products.forEach(function (item) {
            // if (item.in_stock) selected.push(item.id)
            // else noStocks.push(item)
            selected.push(item.product.id)
          })
        }
        this.productsNoStock = noStocks
        this.selected = selected
      },
    },
  },
  data() {
    return {
      selected: [],
      productsNoStock: [],
      select: false,
    }
  },
  methods: {
    updatedSelect(value) {
      this.selected = value
    },
    async removeBasketProduct() {
      const ids = this.selected.toString()
      await this.$store.dispatch('products/basket/removeProducts', ids)
    },
  },
  async fetch() {
    await this.$store.dispatch('products/basket/fetchProducts')
    this.selectAll = true
  },
}
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="Моя корзина" />
    </PageHeader>
    <PageBody>
      <PageSection v-if="basket.products && basket.products.length">
        <div
          class="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row"
        >
          <div class="flex-grow">
            <div
              v-if="basket.products.length > 1"
              class="flex flex-row justify-between items-center rounded-lg border bg-white border-gray-900/10 dark:border-gray-50/20 shadow-sm p-3 w-full mb-4 h-[50px]"
            >
              <div>
                <FormCheckbox label="Выбрать все" v-model="selectAll" />
              </div>
              <div v-if="selected.length">
                <Anchor
                  class="text-sm"
                  @click="removeBasketProduct"
                  text="Удалить выбранные"
                />
              </div>
            </div>
            <ProfileBasketWrapper>
              <ProfileBasketItem
                v-for="(item, index) in basket.products"
                :key="item.id"
                :item="item"
                :is-loaded="$fetchState.pending"
                :selected="selected"
                @selected-updated="updatedSelect"
              />
            </ProfileBasketWrapper>
          </div>
          <div class="inline-block align-top">
            <div class="md:sticky md:top-[100px]">
              <div
                v-if="productsNoStock.length"
                class="md:w-[300px] lg:w-[380px] flex flex-col rounded-lg border border-orange-200 bg-orange-100 py-3 px-3 mb-3"
              >
                <span class="text-sm font-medium mb-2">
                  В корзине есть товары, которых нет в наличии:
                </span>
                <div
                  class="inline-flex overflow-x-scroll overscroll-contain whitespace-nowrap space-x-2"
                >
                  <span
                    v-for="(item, index) in productsNoStock"
                    :key="item.id"
                    class="px-1.5 py-1 border rounded-md bg-white text-sm"
                    >{{ item.text }}</span
                  >
                </div>
                <div>
                  <button class="text-sm text-blue-400 hover:text-blue-500">
                    Удалить из корзины
                  </button>
                </div>
              </div>
              <Skeleton
                :is-loaded="!$fetchState.pending"
                :w="null"
                :h="null"
                skeleton-class="md:w-[300px] lg:w-[380px] h-[186px]"
              >
                <div
                  class="md:w-[300px] lg:w-[380px] flex flex-col rounded-lg border bg-white border-gray-900/10 dark:border-gray-50/20 shadow-sm p-3 w-full mb-4"
                >
                  <div v-if="selected.length" class="flex flex-col">
                    <div class="pt-2 pb-4">
                      <h2>Условия заказа</h2>
                    </div>
                    <div class="bg-gray-100 py-3 px-3 -mx-3">
                      <span>Условия заказа отсутствуют</span>
                    </div>
                    <div>
                      <Button
                        :to="{ name: 'basket-checkout' }"
                        class="h-[48px] mt-3"
                      >
                        Перейти к оформлению
                      </Button>
                    </div>
                  </div>
                  <div v-else class="flex flex-col">
                    <div>
                      <h4 class="font-medium text-sm">
                        Выберите товары, чтобы перейти к оформлению
                      </h4>
                    </div>
                    <Button
                      @click="selectAll = true"
                      type="secondary"
                      class="h-[48px] mt-3"
                    >
                      Выбрать все
                    </Button>
                  </div>
                </div>
              </Skeleton>
            </div>
          </div>
        </div>
      </PageSection>
      <EmptyResult v-else text="Ваша корзина пуста" />
    </PageBody>
  </PageWrapper>
</template>
