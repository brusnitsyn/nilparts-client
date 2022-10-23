<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'page',
  watch: {
    '$route.query': '$fetch',
    filtersCountChanges() {
      const query = this.filters
      this.$router.push({ name: 'catalog', query })

      if (process.client) window.scrollTo(0, 0)
    },
  },
  computed: {
    ...mapGetters({
      filters: 'products/getFilters',
      filtersCountChanges: 'products/getFiltersCountChanges',

      categories: 'category/getCategories',

      products: 'products/getProducts',
      productsMeta: 'products/getMeta',
      productsLinks: 'products/getLinks',
    }),

    currentPage: {
      get() {
        return this.productsMeta.current_page
      },
      async set(value) {
        const pageFilter = { name: 'page', query: value }
        await this.$store.dispatch('products/addFilter', pageFilter)
      },
    },

    hasPaginate() {
      return this.productsMeta.last_page > 1
    },
  },
  data() {
    return {}
  },
  methods: {
    async applyFilter(filter) {
      const pageFilter = { name: 'page', query: 1 }
      await this.$store.dispatch('products/addFilter', pageFilter)
      const filterObj = { name: filter.type, query: filter.data.id }
      await this.$store.dispatch('products/addFilter', filterObj)
    },
  },
  async fetch() {
    const filters = []
    for (let [key, value] of Object.entries(this.$route.query)) {
      filters.push({ name: key, query: Number(value) })
    }

    if(filters.length)
      await this.$store.dispatch('products/addFilters', filters)
    else
      await this.$store.dispatch('products/clearFilters')

    await this.$store.dispatch('products/fetchProducts', this.$route.query)
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
          <CatalogTagItem
            v-for="(category, index) in categories"
            :key="index"
            @click="applyFilter({ type: 'category', data: category })"
          >
            {{ category.name }}
          </CatalogTagItem>
        </CatalogTagWrapper>
        <CatalogWrapper class="pt-4">
          <LazyCatalogItem
            :is-loaded="$fetchState.pending"
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
