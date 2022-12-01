<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'profile',
  meta() {},
  data() {
    return {
      form: {
        addressMatch: true,
        delivery_selected: 1,
        payment_selected: 1,
        comment: '',
        middle_name: '',
        address: '',
        city: '',
        postal_code: '',
        call: '',
        email: ''
      },
      deliveryOptions: [
        {id: 1, name: 'CDEK'},
        {id: 2, name: 'CDEK'},
        {id: 3, name: 'CDEK'},
        {id: 4, name: 'CDEK'},
      ],
      paymentOptions: [
        {id: 1, name: 'По счету'},
      ]
    }
  },
  computed: {
    ...mapGetters({
      products: 'products/basket/getProducts',
      basketMeta: 'products/basket/getBasketMeta',
    }),
  },
  async fetch() {
    await this.$store.dispatch('products/basket/fetchProducts')
  },
}
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="Оформление заказа" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div
          class="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row"
        >
          <Form class="flex-grow">
            <template #body>
              <FormGroup text="Адрес доставки">
                <div class="grid gap-x-4 gap-y-3 grid-cols-1 lg:grid-cols-6">
                  <FormTextInput v-model="form.name" placeholder="Имя" class="lg:col-span-3" />
                  <FormTextInput v-model="form.middle_name" placeholder="Фамилия" class="lg:col-span-3" />
                  <FormTextInput v-model="form.address" placeholder="Адрес" class="lg:col-span-6" />
                  <FormTextInput v-model="form.city" placeholder="Город" class="lg:col-span-3" />
                  <FormTextInput v-model="form.postal_code" placeholder="Индекс" class="lg:col-span-3" />
                </div>
              </FormGroup>
              <FormGroup text="Контактная информация">
                <div class="grid gap-x-4 gap-y-3 grid-cols-1 lg:grid-cols-6">
                  <FormTextInput v-model="form.call" placeholder="Телефон" class="lg:col-span-3" />
                  <FormTextInput
                    v-model="form.email"
                    placeholder="Ваш E-Mail"
                    class="lg:col-span-3"
                  />
                </div>
              </FormGroup>
              <FormGroup text="Способ доставки">
                <div
                  class="grid gap-x-4 gap-y-3 grid-cols-1 lg:grid-cols-4"
                >
                  <BasketCheckoutDeliveryOption v-for="(item, index) in deliveryOptions" v-model.number="form.delivery_selected" :value="item.id" :key="index" :item="item" />
                </div>
              </FormGroup>
              <FormGroup text="Способ оплаты">
                <div
                  class="grid gap-y-3 grid-cols-1"
                >
                  <BasketCheckoutPaymentOption v-for="(item, index) in paymentOptions" v-model.number="form.payment_selected" :value="item.id" :key="index" :item="item" />
                </div>
              </FormGroup>
              <FormGroup text="Комментарий к Вашему заказу">
                <FormTextarea v-model="form.comment" placeholder="Комментарий" />
              </FormGroup>
            </template>
          </Form>
          <div class="inline-block align-top">
            <div class="md:sticky md:top-[100px]">
              <div
                class="md:w-[300px] lg:w-[380px] flex flex-col rounded-lg border bg-white border-gray-900/10 dark:border-gray-50/20 shadow-sm p-3 w-full mb-4"
              >
                <div class="flex flex-col">
                  <div class="pt-2 pb-4">
                    <h2>Ваш заказ</h2>
                  </div>
                  <div
                    class="flex flex-col bg-gray-100 p-3 gap-y-2 rounded-lg max-h-80 overflow-y-visible overflow-x-hidden overscroll-y-auto lg:overscroll-y-contain"
                  >
                    <div
                      v-for="(item, index) in products"
                      class="flex flex-row items-start gap-x-2"
                    >
                      <div class="rounded-lg overflow-clip min-w-[80px] max-w-min min-h-[80px] max-h-min md:shrink">
                        <NuxtImg
                          width="80"
                          height="80"
                          class="min-w-[80px] max-w-min min-h-[80px] max-h-min object-cover"
                          :src="`${item.product.cover}`"
                          alt=""
                        />
                      </div>
                      <div class="flex flex-col">
                        <span class="leading-5">
                          {{ item.product.title }}
                        </span>
                        <div class="flex gap-x-1.5">
                          <span>
                            {{ item.product.price | toRuble }}
                          </span>
                          <span class="text-gray-600">
                            x {{ item.quantity }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <div class="grid grid-cols-2 gap-y-1.5 items-center">
                      <span> Стоимость товаров: </span>
                      <span class="text-end">
                        {{ basketMeta.total_price | toRuble }}
                      </span>

                      <span class="font-medium"> Итого: </span>
                      <span class="text-end font-medium">
                        {{ basketMeta.total_price | toRuble }}
                      </span>
                    </div>
<!--                    <div class="grid grid-cols-2">-->
<!--                      <span class="leading-5">-->
<!--                        Курьерская доставка (На указанный адрес доставки):-->
<!--                      </span>-->
<!--                      <span class="text-end">-->
<!--                        {{ 2000.0 | toRuble }}-->
<!--                      </span>-->
<!--                    </div>-->
                    <Button
                      :to="{ name: 'basket-checkout' }"
                      class="h-[48px] mt-2"
                    >
                      Оформить заказ
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
