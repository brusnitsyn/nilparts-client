<script>
export default {
  layout: 'profile',
  middleware: 'auth',
  data() {
    return {
      params: {
        data: [['ID', 'Артикул', 'Наименование', 'Действия']],
        header: 'row',
        enableSearch: true
      },
    }
  },
  async fetch() {
    await this.$store.dispatch('products/fetchProducts')
  },
  mounted() {
    const products = this.$store.state.products.products.map(({id, article, name}) => ({id, article, name}))
    products.forEach(item => {
      this.params.data.push(Object.values(item))
    })
  },
}
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <PageSectionTitle text="Мои товары" :route="{name: 'Добавить товар', to: {name: 'profile-products-create'}}" />
        <div>
          <VueTableDynamic :params="params">
            <template v-slot:column-3="{ props }">
              <Button size="sm">
                Редактировать
              </Button>
            </template>
          </VueTableDynamic>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style scoped>
:deep(.v-table-dynamic) {
  @apply font-sans text-sm;
}
:deep(.is-header) {
  @apply font-bold;
}
</style>
