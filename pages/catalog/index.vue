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
        await this.$router.push(`${this.$route.path}?page=${value}`)
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
  async fetch() {
    const page = this.$route.query.page
    await this.$store.dispatch('products/fetchProducts', { page: page }).finally(() => {
      if (process.client) window.scrollTo(0, 0)
    })
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
            :to="{ name: 'catalog-slug', params: { slug: category.slug } }"
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
