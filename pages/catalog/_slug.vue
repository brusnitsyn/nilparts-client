<script>
import { mapGetters } from 'vuex'
import * as filters from "~/helpers/filters";

export default {
  layout: 'page',
  watch: {
    '$route.query': '$fetch',
  },
  computed: {
    ...mapGetters({
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
    return {
      activeCategory: {},
      activeChildrenCategoryId: 0
    }
  },
  async fetch() {
    const slug = this.$route.params.slug
    const page = this.$route.query.page

    await this.$axios.get(`/categories/${slug}`).then((response) => {
      this.activeCategory = response.data.data
      this.activeChildrenCategoryId = this.activeCategory.id
    }).finally(() => {
      if (process.client) window.scrollTo(0, 0)
    })
    await this.$store.dispatch('products/fetchProducts', {page: page, filter: {category: this.activeCategory.id}})
  }
}
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageHeader>
        <PageTitle :text="`Каталог – ${activeCategory.title}`" />
        <CatalogTagWrapper class="mt-2.5 mb-4">
          <CatalogTagItem
            v-for="(category, index) in activeCategory.children"
            :active="activeChildrenCategoryId === category.id"
            :key="index"
            :to="{ name: 'catalog-slug', params: { slug: category.slug } }"
          >
            {{ category.title }}
          </CatalogTagItem>
        </CatalogTagWrapper>
      </PageHeader>
      <PageSection>
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

<style scoped>

</style>
