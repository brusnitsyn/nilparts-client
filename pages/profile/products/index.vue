<script>
export default {
  layout: 'profile',
  middleware: 'auth',
  data() {
    return {
      params: {
        data: [['ID', 'Артикул', 'Наименование', '']],
        header: 'row',
        enableSearch: true,
        rowHeight: 48,
      },
    }
  },
  async fetch() {
    await this.$store.dispatch('products/fetchMyProducts')
  },
  mounted() {
    const products = this.$store.state.products.products.map(({id, article, name}) => ({id, article, name, actions: ''}))
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
        <ClientOnly>
          <VueTableDynamic :params="params">
            <template v-slot:column-3="{ props }">
              <div class="flex gap-3">
                <Button type="opposite" size="sm">
                  Редактировать
                </Button>
                <Button type="secondary" size="sm">
                  <iconify-icon icon="material-symbols:delete-outline-rounded" width="18" height="18" />
                </Button>
              </div>
            </template>
          </VueTableDynamic>
        </ClientOnly>
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
