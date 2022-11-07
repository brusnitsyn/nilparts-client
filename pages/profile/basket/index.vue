<script>
export default {
  layout: 'profile',
  middleware: 'auth',
  computed: {
    selectAll: {
      get() {
        return this.testItems
          ? this.selected.length === this.testItems.length
          : false
      },
      set(value) {
        let selected = []
        if (value) {
          this.testItems.forEach(function (item) {
            selected.push(item.id)
          })
        }
        this.selected = selected
      },
    },
  },
  data() {
    return {
      testItems: [
        { id: 1, text: 'Это текст для элемента', price: 2000, in_stock: true },
        { id: 2, text: 'Это текст для элемента', price: 2000, in_stock: true },
        { id: 3, text: 'Это текст для элемента', price: 2000, in_stock: true },
        { id: 4, text: 'Это текст для элемента', price: 2000, in_stock: false },
        { id: 5, text: 'Это текст для элемента', price: 2000, in_stock: true },
      ],
      selected: [],
      select: false,
    }
  },
  methods: {
    updatedSelect(value) {
      this.selected = value
    },
  },
  async fetch() {},
}
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageHeader>
        <PageTitle text="Моя корзина" />
      </PageHeader>
      <PageSection>
        <div class="flex flex-col space-y-4 lg:space-y-0 lg:space-x-4 md:flex-row">
          <div class="flex-grow">
            <div
              v-if="testItems.length > 1"
              class="flex flex-row justify-between items-center rounded-lg border bg-white border-gray-900/10 dark:border-gray-50/20 shadow-sm p-3 w-full mb-4 h-[50px]"
            >
              <div>
                <FormCheckbox label="Выбрать все" v-model="selectAll" />
              </div>
              <div v-if="selected.length">
                <button class="text-sm">Удалить выбранные</button>
              </div>
            </div>
            <ProfileBasketWrapper>
              <ProfileBasketItem
                v-for="(item, index) in testItems"
                :key="item.id"
                :item="item"
                :selected="selected"
                @selected-updated="updatedSelect"
              />
            </ProfileBasketWrapper>
          </div>
          <div class="inline-block align-top">
            <div class="md:sticky md:top-[100px]">
              <div class="md:w-[360px] flex flex-col rounded-lg border bg-white border-gray-900/10 dark:border-gray-50/20 shadow-sm p-3 w-full mb-4">
                <div class="pt-2 pb-4">
                  <h2>Условия заказа</h2>
                </div>
                <div>
                  <Button class="h-[54px]">
                    Перейти к оформлению
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
