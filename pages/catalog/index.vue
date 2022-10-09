<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'page',
  computed: {
    ...mapGetters({
      products: 'products/getProducts',
      productsMeta: 'products/getMeta',
      productsLinks: 'products/getLinks',
    }),

    currentPage: {
      get() {
        return this.productsMeta.current_page
      },
      async set(value) {
        await this.$store.dispatch('products/setCurrentPage', value)
        await this.$router.replace({ name: 'catalog', query: { page: value } })
        window.scrollTo(0, 0)
      },
    },

    hasPaginate() {
      return this.productsMeta.last_page > 1
    },
  },
  methods: {},
  data() {
    return {}
  },
  async fetch({ route, store }) {
    await store.dispatch('products/fetchProducts', route.query.page)
  },
}
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageHeader>
        <PageTitle text="Каталог" />
      </PageHeader>
      <PageSection>
        <CatalogTagWrapper>
          <CatalogTagItem> Запчасти</CatalogTagItem>
          <CatalogTagItem> Спецтехника</CatalogTagItem>
          <CatalogTagItem> Масла и смазки</CatalogTagItem>
          <CatalogTagItem> Резина</CatalogTagItem>
        </CatalogTagWrapper>
        <CatalogWrapper class="pt-4">
          <CatalogItem
            v-for="(product, index) in products"
            :key="product.id"
            :product="product"
          />
        </CatalogWrapper>
        <Pagination
          v-if="hasPaginate"
          :current="currentPage"
          :total="productsMeta.total"
          :per-page="productsMeta.per_page"
          @page-changed="currentPage = $event"
          class="pt-4"
        />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style scoped></style>
