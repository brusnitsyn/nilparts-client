<script>
import { mapGetters } from 'vuex'
import * as filters from '~/helpers/filters'
import {findObjectWithValue} from "~/helpers";

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
    // parentProducts() {
    //   return this.activeCategory
    // },
    hasPaginate() {
      return this.productsMeta ? this.productsMeta.last_page > 1 : false
    },
    hasChildren() {
      return !!this.activeCategory.children
    },
  },
  data() {
    return {
      parentCategory: {},
      // parentProducts: [],
      activeCategory: {},
      productsCategoryEmpty: false,
    }
  },
  async fetch() {
    const slug = this.$route.params.slug
    const page = this.$route.query.page

    this.productsCategoryEmpty = false

    this.activeCategory = findObjectWithValue(this.categories, 'slug', slug)
    this.parentCategory = findObjectWithValue(this.categories, 'id', this.activeCategory.parent_id)

    if(this.activeCategory.parent_id === null) {
      await this.$axios.get(`/categories/${slug}?with[]=children.products`).then((response) => {
        this.$store.commit('products/setProducts', response.data.data)
        this.$store.commit('products/setMeta', [])
        this.$store.commit('products/setLinks', [])

      })
      return
    }

    await this.$store.dispatch('products/fetchProducts', {
      page: page,
      filter: { category: this.activeCategory.id },
    })

    if(!this.products.length) {
      await this.$axios.get(`/categories/${this.parentCategory.slug}?with[]=children.products`).then((response) => {
        console.log(response)
        this.$store.commit('products/setProducts', response.data.data)
        this.$store.commit('products/setMeta', [])
        this.$store.commit('products/setLinks', [])

      }).finally(() => {
        this.productsCategoryEmpty = true
        if (process.client) window.scrollTo(0, 0)
      })
    }
  },
}
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageHeader>
        <LazySkeleton
          :is-loaded="!$fetchState.pending"
          :w="null"
          h="28px"
          skeleton-class="w-1/3 md:w-1/6"
        >
          <LazyPageTitle :text="parentCategory === undefined ? `Каталог – ${activeCategory.title}` : `${parentCategory.title} – ${activeCategory.title}`" />
        </LazySkeleton>
        <LazySkeleton
          :is-loaded="!$fetchState.pending"
          :w="null"
          h="30px"
          m="10px 0px 16px 0px"
          skeleton-class="w-1/4 md:w-1/8 mt-2.5 mb-4"
        >
          <LazyCatalogTagWrapper class="mt-2.5 mb-4" v-if="hasChildren">
            <LazyCatalogTagItem
              v-for="(category, index) in activeCategory.children"
              :key="index"
              :to="{ name: 'catalog-slug', params: { slug: category.slug, parentCategory: category } }"
            >
              {{ category.title }}
            </LazyCatalogTagItem>
          </LazyCatalogTagWrapper>
        </LazySkeleton>
      </PageHeader>
      <PageSection>
        <div v-if="productsCategoryEmpty">
          <p>В категории {{ activeCategory.title }} пока нет товаров.</p>
          <PageSectionTitle class="mt-6"  :text="`Другие товары из категории ${parentCategory.title}`" />
        </div>
        <CatalogWrapper :class="{'pt-2': productsCategoryEmpty, 'pt-3': !productsCategoryEmpty}">
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
