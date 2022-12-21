<script>
import {mapGetters, mapState} from 'vuex'
import * as filters from "~/helpers/filters";
const qs = require('qs')

export default {
  layout: 'page',
  watch: {
    '$route.query': '$fetch',
  },
  computed: {
    ...mapGetters({
      filters: 'products/getFilters',
      // filtersLength: 'products/getFiltersLength',

      // filtersCountChanges: 'products/getFiltersCountChanges',

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
        const pageFilter = filters.makeFilter('page', value)
        await this.updateQuery(pageFilter)
      },
    },

    activeCategoryId() {
      if(this.filters.filter)
        return Number(this.filters.filter.category)
      return 0
    },

    activeCategory() {
      if(this.activeCategoryId !== 0) {
        const foundCategory = this.categories.filter((item) => item.id === this.activeCategoryId)
        return foundCategory[0].children
      }
      return undefined
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
      const filterCategory = filters.makeFilter(filter.name, filter.value, 'filter')
      await this.updateQuery(filterCategory)

      const filterPage = filters.makeFilter('page', 1)
      await this.updateQuery(filterPage)
    },
    async updateQuery(filter) {
      await this.$store.dispatch('products/addFilter', filter)

      const query = qs.stringify(this.filters, { encode: true })
      const path = `${this.$route.path}?${query}`
      await this.$router.push(path)
    }
  },
  async fetch() {
    if (process.client) window.scrollTo(0, 0)

    const filters = qs.parse(this.$route.query)

    if(Object.keys(filters).length)
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
        <CatalogTagWrapper class="mb-4">
          <CatalogTagItem
            v-for="(category, index) in categories"
            :active="activeCategoryId === category.id"
            :key="index"
            @click="applyFilter({ name: 'category', value: category.id })"
          >
            {{ category.title }}
          </CatalogTagItem>
        </CatalogTagWrapper>
        <PageTitle text="Каталог" />
      </PageHeader>
      <PageSection>
        <CatalogTagWrapper v-if="activeCategory !== undefined">
          <CatalogTagItem
            v-for="(category, index) in activeCategory"
            :active="activeCategoryId === category.id"
            :key="index"
            @click="applyFilter({ name: 'category', value: category.id })"
          >
            {{ category.title }}
          </CatalogTagItem>
        </CatalogTagWrapper>
        <CatalogWrapper class="pt-3">
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
