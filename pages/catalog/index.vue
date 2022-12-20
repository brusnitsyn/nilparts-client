<script>
import { mapGetters } from 'vuex'
const qs = require('qs')

export default {
  layout: 'page',
  watch: {
    '$route.query': '$fetch',
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
        const pageFilter = { page: value }
        await this.$store.dispatch('products/addFilter', pageFilter)
      },
    },

    hasPaginate() {
      return this.productsMeta.last_page > 1
    },
  },
  data() {
    return {
      placeItem: {

      }
    }
  },
  methods: {
    async applyFilter(filter) {
      const pageFilter = { page: 1 }
      await this.$store.dispatch('products/addFilter', pageFilter)
      const filterObj = { filterArray: { name: filter.type, query: filter.data } }
      await this.$store.dispatch('products/addFilter', filterObj)

      // const query = qs.stringify(this.filters)
      await this.$router.push({ name: 'catalog', query: this.filters })
    },
  },
  async fetch() {
    const filters = qs.parse(this.$route.query)

    if(filters.length)
      await this.$store.dispatch('products/addFilters', filters)
    else
      await this.$store.dispatch('products/clearFilters')

    await this.$store.dispatch('products/fetchProducts', this.$route.query)

    if (process.client) window.scrollTo(0, 0)
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
            @click="applyFilter({ type: 'category', data: category.id })"
          >
            {{ category.title }}
          </CatalogTagItem>
        </CatalogTagWrapper>
        <CatalogWrapper class="pt-4">
          <LazyCatalogItem
            v-if="!$fetchState.pending"
            v-for="(product, index) in products"
            :key="index"
            :product="product"
          />
          <LazyCatalogItem
            v-if="$fetchState.pending"
            :is-loaded="$fetchState.pending"
            v-for="item in 16"
            :key="item"
            :product="{}"
          />
        </CatalogWrapper>
        <LazyPagination
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
